import { useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Calendar } from '../components/ui/calendar';
import { TimeSlotGrid } from '../components/TimeSlotGrid';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Check, MapPin } from 'lucide-react';
import { toast } from 'sonner@2.0.3';
import { BRANCHES, getBranchById, isBranchOpenOnDay } from '../utils/branches';
import { services } from '../data/services';
import { barbers } from '../data/barbers';

export function Reservas() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  
  const [selectedBranch, setSelectedBranch] = useState('');
  const [selectedService, setSelectedService] = useState(searchParams.get('servicio') || '');
  const [selectedBarber, setSelectedBarber] = useState(searchParams.get('barbero') || '');
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState('');
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientPhone, setClientPhone] = useState('');

  const handleNextStep = () => {
    if (step === 1 && (!selectedBranch || !selectedService || !selectedBarber)) {
      toast.error('Por favor seleccioná una sucursal, servicio y barbero');
      return;
    }
    if (step === 2 && (!selectedDate || !selectedTime)) {
      toast.error('Por favor seleccioná una fecha y hora');
      return;
    }
    if (step === 3 && (!clientName || !clientEmail || !clientPhone)) {
      toast.error('Por favor completá todos los campos');
      return;
    }
    
    if (step === 3) {
      handleConfirmBooking();
    } else {
      setStep(step + 1);
    }
  };

  const handleConfirmBooking = () => {
    const service = services.find(s => s.id === selectedService);
    const barber = barbers.find(b => b.id === selectedBarber);
    
    toast.success(
      `¡Listo ${clientName.split(' ')[0]}! Te esperamos el ${selectedDate?.toLocaleDateString('es-AR')} a las ${selectedTime}.`
    );
    
    setTimeout(() => {
      navigate('/cuenta');
    }, 2000);
  };

  const service = services.find(s => s.id === selectedService);
  const barber = barbers.find(b => b.id === selectedBarber);
  const branch = getBranchById(selectedBranch);

  return (
    <div className="min-h-screen bg-[#111111] py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl mb-4 text-white">
            RESERVAR TURNO
          </h1>
          <p className="text-gray-400 text-lg">
            Completá los siguientes pasos para confirmar tu reserva
          </p>
        </div>

        {/* Progress Steps */}
        <div className="flex items-center justify-center mb-12">
          <div className="flex items-center gap-4">
            <div className={`flex items-center gap-2 ${step >= 1 ? 'text-[#C6A15B]' : 'text-gray-600'}`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${
                step >= 1 ? 'border-[#C6A15B] bg-[#C6A15B]' : 'border-gray-600'
              }`}>
                {step > 1 ? <Check className="w-5 h-5 text-[#111111]" /> : '1'}
              </div>
              <span className="hidden sm:inline">Servicio</span>
            </div>
            <div className={`w-12 h-0.5 ${step >= 2 ? 'bg-[#C6A15B]' : 'bg-gray-600'}`}></div>
            <div className={`flex items-center gap-2 ${step >= 2 ? 'text-[#C6A15B]' : 'text-gray-600'}`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${
                step >= 2 ? 'border-[#C6A15B] bg-[#C6A15B]' : 'border-gray-600'
              }`}>
                {step > 2 ? <Check className="w-5 h-5 text-[#111111]" /> : '2'}
              </div>
              <span className="hidden sm:inline">Fecha</span>
            </div>
            <div className={`w-12 h-0.5 ${step >= 3 ? 'bg-[#C6A15B]' : 'bg-gray-600'}`}></div>
            <div className={`flex items-center gap-2 ${step >= 3 ? 'text-[#C6A15B]' : 'text-gray-600'}`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${
                step >= 3 ? 'border-[#C6A15B]' : 'border-gray-600'
              }`}>
                3
              </div>
              <span className="hidden sm:inline">Confirmar</span>
            </div>
          </div>
        </div>

        {/* Step Content */}
        <div className="bg-[#1a1a1a] border border-[#C6A15B]/20 rounded-lg p-8">
          {/* Step 1: Branch, Service & Barber Selection */}
          {step === 1 && (
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl mb-4 text-white">Seleccioná una sucursal</h2>
                <div className="grid grid-cols-1 gap-4">
                  {BRANCHES.map((b) => (
                    <button
                      key={b.id}
                      onClick={() => setSelectedBranch(b.id)}
                      className={`p-4 rounded-lg border-2 text-left transition-all ${
                        selectedBranch === b.id
                          ? 'border-[#C6A15B] bg-[#C6A15B]/10'
                          : 'border-[#C6A15B]/20 hover:border-[#C6A15B]/50'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-[#C6A15B] mt-1" />
                        <div className="flex-1">
                          <div className="text-white mb-1">{b.name}</div>
                          <div className="text-sm text-gray-400">{b.fullAddress}</div>
                        </div>
                        {selectedBranch === b.id && (
                          <Check className="w-5 h-5 text-[#C6A15B]" />
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl mb-4 text-white">Seleccioná un servicio</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {services.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => setSelectedService(s.id)}
                      className={`p-4 rounded-lg border-2 text-left transition-all cursor-pointer ${
                        selectedService === s.id
                          ? 'border-[#C6A15B] bg-[#C6A15B]/10'
                          : 'border-[#C6A15B]/20 hover:border-[#C6A15B]/50'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 text-[#C6A15B] mt-1">{s.icon}</div>
                        <div className="flex-1">
                          <div className="text-white mb-1">{s.name}</div>
                          <div className="text-sm text-gray-400">
                            {s.duration} min • ${s.price}
                          </div>
                        </div>
                        {selectedService === s.id && (
                          <Check className="w-5 h-5 text-[#C6A15B]" />
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl mb-4 text-white">Seleccioná un barbero</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {barbers.map((b) => (
                    <button
                      key={b.id}
                      onClick={() => setSelectedBarber(b.id)}
                      className={`p-4 rounded-lg border-2 text-left transition-all cursor-pointer ${
                        selectedBarber === b.id
                          ? 'border-[#C6A15B] bg-[#C6A15B]/10'
                          : 'border-[#C6A15B]/20 hover:border-[#C6A15B]/50'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-white">{b.name}</span>
                        {selectedBarber === b.id && (
                          <Check className="w-5 h-5 text-[#C6A15B]" />
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Date & Time Selection */}
          {step === 2 && branch && (
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl mb-4 text-white">Seleccioná una fecha</h2>
                <p className="text-sm text-gray-400 mb-4">
                  Sucursal: {branch.name}
                </p>
                <div className="flex justify-center">
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    disabled={(date) => {
                      // Disable past dates
                      if (date < new Date()) return true;
                      // Disable dates when branch is closed
                      return !isBranchOpenOnDay(branch, date);
                    }}
                    className="rounded-lg border border-[#C6A15B]/20"
                  />
                </div>
              </div>

              {selectedDate && (
                <TimeSlotGrid
                  date={selectedDate}
                  branch={branch}
                  onSelectTime={setSelectedTime}
                  selectedTime={selectedTime}
                />
              )}
            </div>
          )}

          {/* Step 3: Client Information */}
          {step === 3 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl mb-4 text-white">Confirmá tus datos</h2>
                
                {/* Summary */}
                <div className="bg-[#111111] border border-[#C6A15B]/20 rounded-lg p-4 mb-6">
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Sucursal:</span>
                      <span className="text-white">{branch?.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Servicio:</span>
                      <span className="text-white">{service?.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Barbero:</span>
                      <span className="text-white">{barber?.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Fecha:</span>
                      <span className="text-white">{selectedDate?.toLocaleDateString('es-AR')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Hora:</span>
                      <span className="text-white">{selectedTime}</span>
                    </div>
                    <div className="flex justify-between pt-2 border-t border-[#C6A15B]/20">
                      <span className="text-[#C6A15B]">Total:</span>
                      <span className="text-[#C6A15B]">${service?.price}</span>
                    </div>
                  </div>
                </div>

                {/* Form */}
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name" className="text-white">Nombre completo</Label>
                    <Input
                      id="name"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      placeholder="Juan Pérez"
                      className="bg-[#111111] border-[#C6A15B]/20 text-white"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-white">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={clientEmail}
                      onChange={(e) => setClientEmail(e.target.value)}
                      placeholder="juan@ejemplo.com"
                      className="bg-[#111111] border-[#C6A15B]/20 text-white"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-white">Teléfono</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={clientPhone}
                      onChange={(e) => setClientPhone(e.target.value)}
                      placeholder="+54 11 1234-5678"
                      className="bg-[#111111] border-[#C6A15B]/20 text-white"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex gap-4 mt-8">
            {step > 1 && (
              <Button
                onClick={() => setStep(step - 1)}
                variant="outline"
                className="flex-1 border-[#C6A15B]/20 text-white hover:border-[#C6A15B]"
              >
                Atrás
              </Button>
            )}
            <Button
              onClick={handleNextStep}
              className="flex-1 bg-[#C6A15B] text-[#111111] hover:bg-[#d4b06f] cursor-pointer"
            >
              {step === 3 ? 'Confirmar Reserva' : 'Continuar'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
