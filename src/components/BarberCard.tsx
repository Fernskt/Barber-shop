import { Star } from 'lucide-react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface BarberCardProps {
  id: string;
  name: string;
  specialty: string;
  bio: string;
  image: string;
  rating?: number;
}

export function BarberCard({ id, name, specialty, bio, image, rating = 5 }: BarberCardProps) {
  return (
    <div className="bg-[#1a1a1a] border border-[#C6A15B]/20 rounded-lg overflow-hidden hover:border-[#C6A15B] transition-all duration-300 group">
      <div className="relative h-64 overflow-hidden">
        <ImageWithFallback
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent opacity-60"></div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl mb-1 text-white">{name}</h3>
        <p className="text-[#C6A15B] text-sm mb-3">{specialty}</p>
        
        <div className="flex gap-1 mb-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < rating ? 'text-[#C6A15B] fill-[#C6A15B]' : 'text-gray-600'
              }`}
            />
          ))}
        </div>
        
        <p className="text-gray-400 text-sm mb-4 line-clamp-3">{bio}</p>
        
        <Link to={`/reservas?barbero=${id}`}>
          <Button className="w-full bg-transparent border border-[#C6A15B] text-[#C6A15B] hover:bg-[#C6A15B] hover:text-[#111111]">
            Reservar con {name.split(' ')[0]}
          </Button>
        </Link>
      </div>
    </div>
  );
}
