import { useState } from "react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "../components/ui/dialog";
import { X } from "lucide-react";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { AnimatedSection } from "../components/AnimatedSection";
import { motion } from "motion/react";
import { galleryCategories, galleryImages } from "../data/gallery";

export function Galeria() {
  const [selectedCategory, setSelectedCategory] =
    useState("Todos");
  const [selectedImage, setSelectedImage] = useState<
    (typeof galleryImages)[0] | null
  >(null);

  const filteredImages =
    selectedCategory === "Todos"
      ? galleryImages
      : galleryImages.filter(
          (img) => img.category === selectedCategory,
        );

  return (
    <div className="min-h-screen bg-[#111111]">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1758812818698-6ecd792a87da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJiZXJzaG9wJTIwaW50ZXJpb3IlMjBjbGFzc2ljfGVufDF8fHx8MTc2MDQ5NTIwM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Galería Barbershop"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#111111] via-[#111111] to-[#111111] from-opacity-90 via-opacity-90 to-opacity-90"></div>
        </div>

        <div className="container mx-auto px-4 z-10 relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-6xl mb-4 text-white">
              GALERÍA
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Explorá nuestros trabajos y descubrí la calidad que
              nos caracteriza
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <AnimatedSection className="flex flex-wrap justify-center gap-3 mb-12">
            {galleryCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition-all cursor-pointer ${
                  selectedCategory === category
                    ? "bg-[#C6A15B] text-[#111111]"
                    : "bg-[#1a1a1a] text-gray-400 border border-[#C6A15B]/20 hover:border-[#C6A15B]"
                }`}
              >
                {category}
              </button>
            ))}
          </AnimatedSection>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {filteredImages.map((image, index) => (
              <AnimatedSection key={image.id} delay={index * 0.05} direction="zoom">
                <div
                  onClick={() => setSelectedImage(image)}
                  className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group"
                >
                  <ImageWithFallback
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-white">{image.title}</h3>
                      <p className="text-[#C6A15B] text-sm">
                        {image.category}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      <Dialog
        open={!!selectedImage}
        onOpenChange={() => setSelectedImage(null)}
      >
        <DialogContent className="max-w-4xl bg-[#111111] border-[#C6A15B]/20 p-0">
          <VisuallyHidden.Root>
            <DialogTitle>
              {selectedImage?.title || "Imagen de galería"}
            </DialogTitle>
            <DialogDescription>
              {selectedImage
                ? `${selectedImage.category} - ${selectedImage.title}`
                : "Vista ampliada de imagen"}
            </DialogDescription>
          </VisuallyHidden.Root>
          {selectedImage && (
            <div className="relative">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-[#111111]/80 rounded-full flex items-center justify-center text-white hover:bg-[#C6A15B] hover:text-[#111111] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
              <ImageWithFallback
                src={selectedImage.url}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              <div className="p-6 bg-[#1a1a1a]">
                <h3 className="text-2xl text-white mb-2">
                  {selectedImage.title}
                </h3>
                <p className="text-[#C6A15B]">
                  {selectedImage.category}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
