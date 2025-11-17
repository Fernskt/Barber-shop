export interface Barber {
  id: string;
  name: string;
  specialty: string;
  bio: string;
  image: string;
  rating: number;
}

export const barbers: Barber[] = [
  {
    id: '1',
    name: 'Carlos Mendoza',
    specialty: 'Especialista en Cortes Clásicos',
    bio: 'Con más de 15 años de experiencia, Carlos es maestro en el arte del corte tradicional. Su atención al detalle y técnica impecable lo convierten en uno de los barberos más solicitados.',
    image: 'https://images.unsplash.com/photo-1747832512459-5566e6d0ee5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBiYXJiZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjA0NTg0MTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 5,
  },
  {
    id: '2',
    name: 'Miguel Ángel Torres',
    specialty: 'Experto en Diseño de Barba',
    bio: 'Miguel es reconocido por su habilidad en el diseño y perfilado de barba. Utiliza técnicas modernas combinadas con el arte tradicional del afeitado con navaja.',
    image: 'https://images.unsplash.com/photo-1687422808328-11cf750a5051?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJiZXIlMjBjdXR0aW5nJTIwaGFpcnxlbnwxfHx8fDE3NjAzNzU2Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 5,
  },
  {
    id: '3',
    name: 'Javier Rodríguez',
    specialty: 'Cortes Modernos y Tendencias',
    bio: 'Apasionado por las últimas tendencias, Javier combina estilos contemporáneos con técnicas clásicas. Su creatividad y visión lo hacen ideal para looks innovadores.',
    image: 'https://images.unsplash.com/photo-1604355240616-5e907f42b431?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBoYWlyY3V0JTIwc3R5bGV8ZW58MXx8fHwxNzYwNDE0MzM1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 5,
  },
  {
    id: '4',
    name: 'Roberto Sánchez',
    specialty: 'Afeitado Tradicional',
    bio: 'Roberto es un maestro del afeitado clásico. Con más de 20 años de experiencia, ofrece la experiencia más relajante y profesional de afeitado con toalla caliente.',
    image: 'https://images.unsplash.com/photo-1599447068894-089fabc9876c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFyZCUyMGdyb29taW5nfGVufDF8fHx8MTc2MDQ0MzQ2MHww&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 5,
  },
];
