import { Scissors, Sparkles, Paintbrush, Droplet, Crown, Zap } from 'lucide-react';

export interface Service {
  id: string;
  name: string;
  description: string;
  duration: number;
  price: number;
  icon: JSX.Element;
  featured: boolean;
}

export const services: Service[] = [
  {
    id: '1',
    name: 'Corte Clásico',
    description: 'Estilo tradicional con técnicas modernas y atención al detalle. Incluye lavado y secado.',
    duration: 30,
    price: 9000,
    icon: <Scissors className="w-6 h-6" />,
    featured: true,
  },
  {
    id: '2',
    name: 'Corte + Barba',
    description: 'Servicio completo para un look impecable. Corte de cabello y arreglo de barba profesional.',
    duration: 45,
    price: 10000,
    icon: <Sparkles className="w-6 h-6" />,
    featured: true,
  },
  {
    id: '3',
    name: 'Afeitado Clásico',
    description: 'Experiencia premium con toalla caliente, productos de alta gama y masaje facial.',
    duration: 30,
    price: 5000,
    icon: <Paintbrush className="w-6 h-6" />,
    featured: true,
  },
  {
    id: '4',
    name: 'Perfilado de Barba',
    description: 'Diseño y perfilado de barba con navaja. Incluye hidratación con aceites premium.',
    duration: 20,
    price: 3500,
    icon: <Droplet className="w-6 h-6" />,
    featured: false,
  },
  {
    id: '5',
    name: 'Servicio Premium',
    description: 'La experiencia completa: corte, barba, afeitado y tratamiento capilar. Bebida incluida.',
    duration: 75,
    price: 12000,
    icon: <Crown className="w-6 h-6" />,
    featured: false,
  },
  {
    id: '6',
    name: 'Tintura de Barba/Cabello',
    description: 'Coloración profesional con productos de alta calidad.',
    duration: 60,
    price: 8000,
    icon: <Zap className="w-6 h-6" />,
    featured: false,
  },
];

// Función helper para obtener solo los servicios destacados
export const getFeaturedServices = () => services.filter(service => service.featured);
