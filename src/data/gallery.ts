export interface GalleryImage {
  id: number;
  url: string;
  category: string;
  title: string;
}

export const galleryCategories = [
  "Todos",
  "Cortes",
  "Barbas",
  "Afeitados",
  "Antes/Después",
];

export const galleryImages: GalleryImage[] = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1687422808328-11cf750a5051?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJiZXIlMjBjdXR0aW5nJTIwaGFpcnxlbnwxfHx8fDE3NjAzNzU2Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Cortes",
    title: "Corte Clásico",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1604355240616-5e907f42b431?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBoYWlyY3V0JTIwc3R5bGV8ZW58MXx8fHwxNzYwNDE0MzM1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Cortes",
    title: "Estilo Moderno",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1599447068894-089fabc9876c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFyZCUyMGdyb29taW5nfGVufDF8fHx8MTc2MDQ0MzQ2MHww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Barbas",
    title: "Diseño de Barba",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1593269211259-b2367de7dba6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJiZXJzaG9wJTIwdG9vbHMlMjBzY2lzc29yc3xlbnwxfHx8fDE3NjA0MDkzNjB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Afeitados",
    title: "Herramientas Premium",
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1759134198561-e2041049419c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJiZXJzaG9wJTIwaW50ZXJpb3IlMjBtb2Rlcm58ZW58MXx8fHwxNzYwNDIwNzM5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Cortes",
    title: "Nuestro Local",
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1747832512459-5566e6d0ee5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBiYXJiZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjA0NTg0MTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Barbas",
    title: "Profesional en Acción",
  },
  {
    id: 7,
    url: "https://images.unsplash.com/photo-1687422808328-11cf750a5051?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJiZXIlMjBjdXR0aW5nJTIwaGFpcnxlbnwxfHx8fDE3NjAzNzU2Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Antes/Después",
    title: "Transformación",
  },
  {
    id: 8,
    url: "https://images.unsplash.com/photo-1604355240616-5e907f42b431?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBoYWlyY3V0JTIwc3R5bGV8ZW58MXx8fHwxNzYwNDE0MzM1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Cortes",
    title: "Fade Perfecto",
  },
];

// URLs de imágenes para preview en Home
export const galleryPreviewImages = [
  "https://images.unsplash.com/photo-1687422808328-11cf750a5051?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJiZXIlMjBjdXR0aW5nJTIwaGFpcnxlbnwxfHx8fDE3NjAzNzU2Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1604355240616-5e907f42b431?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBoYWlyY3V0JTIwc3R5bGV8ZW58MXx8fHwxNzYwNDE0MzM1fDA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1599447068894-089fabc9876c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFyZCUyMGdyb29taW5nfGVufDF8fHx8MTc2MDQ0MzQ2MHww&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1593269211259-b2367de7dba6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJiZXJzaG9wJTIwdG9vbHMlMjBzY2lzc29yc3xlbnwxfHx8fDE3NjA0MDkzNjB8MA&ixlib=rb-4.1.0&q=80&w=1080",
];
