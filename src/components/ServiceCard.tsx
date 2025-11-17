import { Clock, DollarSign } from 'lucide-react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  id: string;
  name: string;
  description: string;
  duration: number;
  price: number;
  icon?: React.ReactNode;
}

export function ServiceCard({ id, name, description, duration, price, icon }: ServiceCardProps) {
  return (
    <div className="bg-[#1a1a1a] border border-[#C6A15B]/20 rounded-lg p-6 hover:border-[#C6A15B] transition-all duration-300 group">
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 bg-[#C6A15B]/10 rounded-lg flex items-center justify-center text-[#C6A15B] group-hover:bg-[#C6A15B]/20 transition-colors">
          {icon}
        </div>
      </div>
      
      <h3 className="text-xl mb-2 text-white">{name}</h3>
      <p className="text-gray-400 text-sm mb-4">{description}</p>
      
      <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
        <div className="flex items-center gap-1">
          <Clock className="w-4 h-4 text-[#C6A15B]" />
          <span>{duration} min</span>
        </div>
        <div className="flex items-center gap-1">
          <DollarSign className="w-4 h-4 text-[#C6A15B]" />
          <span>${price}</span>
        </div>
      </div>
      
      <Link to={`/reservas?servicio=${id}`}>
        <Button className="w-full bg-[#C6A15B] text-[#111111] hover:bg-[#d4b06f]">
          Reservar
        </Button>
      </Link>
    </div>
  );
}
