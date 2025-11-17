import { useMemo } from 'react';
import { Button } from './ui/button';
import { Branch, getBranchHours, isTimeInRange } from '../utils/branches';

interface TimeSlot {
  time: string;
  available: boolean;
  inRange: boolean;
}

interface TimeSlotGridProps {
  date: Date;
  branch: Branch;
  onSelectTime: (time: string) => void;
  selectedTime?: string;
}

export function TimeSlotGrid({ date, branch, onSelectTime, selectedTime }: TimeSlotGridProps) {
  const timeSlots = useMemo(() => {
    const slots: TimeSlot[] = [];
    const branchHours = getBranchHours(branch, date);
    
    if (!branchHours) {
      return slots; // Branch is closed on this day
    }

    // Parse branch hours
    const [openHour] = branchHours.open.split(':').map(Number);
    const [closeHour] = branchHours.close.split(':').map(Number);

    // Generate slots from 9:00 to 21:00, every 30 minutes
    for (let hour = 9; hour < 21; hour++) {
      for (let minute of [0, 30]) {
        const time = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
        const inRange = isTimeInRange(time, branchHours.open, branchHours.close);
        // Simulate some slots being unavailable (but respect branch hours)
        const available = inRange && Math.random() > 0.3;
        slots.push({ time, available, inRange });
      }
    }
    return slots;
  }, [date, branch]);

  const branchHours = getBranchHours(branch, date);

  if (!branchHours) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-400">Esta sucursal está cerrada este día.</p>
      </div>
    );
  }

  return (
    <div>
      <h3 className="mb-2 text-white">Horarios disponibles</h3>
      <p className="text-sm text-gray-400 mb-4">
        Sucursal abierta de {branchHours.open} a {branchHours.close} hs
      </p>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
        {timeSlots.map((slot) => (
          <Button
            key={slot.time}
            onClick={() => slot.available && slot.inRange && onSelectTime(slot.time)}
            disabled={!slot.available || !slot.inRange}
            variant={selectedTime === slot.time ? 'default' : 'outline'}
            className={`
              ${selectedTime === slot.time 
                ? 'bg-[#C6A15B] text-[#111111] border-[#C6A15B]' 
                : 'bg-transparent border-[#C6A15B]/20 text-white hover:border-[#C6A15B] hover:text-[#C6A15B]'
              }
              ${(!slot.available || !slot.inRange) && 'opacity-30 cursor-not-allowed border-gray-600 text-gray-600'}
            `}
          >
            {slot.time}
          </Button>
        ))}
      </div>
    </div>
  );
}
