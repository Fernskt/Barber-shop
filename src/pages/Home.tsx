import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { ServiceCard } from "../components/ServiceCard";
import { Crown, MapPin, Clock } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { BRANCHES } from "../utils/branches";
import { motion } from "motion/react";
import { AnimatedSection } from "../components/AnimatedSection";
import { getFeaturedServices } from "../data/services";
import { galleryPreviewImages } from "../data/gallery";

const featuredServices = getFeaturedServices();

export function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1759134198561-e2041049419c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJiZXJzaG9wJTIwaW50ZXJpb3IlMjBtb2Rlcm58ZW58MXx8fHwxNzYwNDIwNzM5fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="BarberShop"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#111111] via-[#111111] to-[#111111] from-opacity-90 via-opacity-80 to-opacity-70"></div>
        </div>

        <div className="container mx-auto px-4 z-10 relative">
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Crown className="w-16 h-16 text-[#C6A15B] mb-6" />
            </motion.div>
            <h1
              style={{
                fontFamily: "Cinzel, serif",
                fontWeight: 700,
              }}
              className="text-6xl md:text-7xl mb-6 text-white leading-tight"
            >
              Barber
              <br />
              Shop
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Reservá en segundos. Barberías premium con estilo
              clásico y moderno.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/reservas">
                <Button className="bg-[#C6A15B] text-[#111111] hover:bg-[#d4b06f] text-lg px-8 py-6 cursor-pointer">
                  Reservar Turno
                </Button>
              </Link>
              <Link to="/servicios">
                <Button
                  variant="outline"
                  className="border-[#C6A15B] text-[#C6A15B] hover:bg-[#C6A15B] hover:text-[#111111] text-lg px-8 py-6 cursor-pointer"
                >
                  Ver Servicios
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-[#111111]">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl mb-4 text-white">
              SERVICIOS DESTACADOS
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Experiencia premium con los mejores profesionales
              y productos de alta calidad.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredServices.map((service, index) => (
              <AnimatedSection
                key={service.id}
                delay={index * 0.1}
                direction="zoom"
              >
                <ServiceCard {...service} />
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection
            className="text-center mt-8"
            delay={0.3}
          >
            <Link to="/servicios">
              <Button
                variant="outline"
                className="border-[#C6A15B] text-[#C6A15B] hover:bg-[#C6A15B] hover:text-[#111111] cursor-pointer"
              >
                Ver Todos los Servicios
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl mb-4 text-white">
              GALERÍA
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Descubrí nuestros trabajos y dejate inspirar para
              tu próximo look.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryPreviewImages.map((image, index) => (
              <AnimatedSection
                key={index}
                delay={index * 0.05}
                direction="zoom"
              >
                <div className="relative aspect-square overflow-hidden rounded-lg group cursor-pointer">
                  <ImageWithFallback
                    src={image}
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-[#C6A15B]/0 group-hover:bg-[#C6A15B]/20 transition-colors duration-300"></div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection
            className="text-center mt-8"
            delay={0.3}
          >
            <Link to="/galeria">
              <Button
                variant="outline"
                className="border-[#C6A15B] text-[#C6A15B] hover:bg-[#C6A15B] hover:text-[#111111] cursor-pointer"
              >
                Ver Galería Completa
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Branches */}
      <section className="py-20 bg-[#111111]">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl mb-4 text-white">
              NUESTRAS SUCURSALES
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Tres ubicaciones estratégicas para que encuentres
              la más cercana a vos
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BRANCHES.map((branch, branchIndex) => {
              const dayNames: { [key: string]: string } = {
                monday: "Lun",
                tuesday: "Mar",
                wednesday: "Mié",
                thursday: "Jue",
                friday: "Vie",
                saturday: "Sáb",
                sunday: "Dom",
              };

              // Get unique schedule entries
              const schedules = new Map<string, string[]>();
              Object.entries(branch.schedule).forEach(
                ([day, hours]) => {
                  if (hours) {
                    const key = `${hours.open}-${hours.close}`;
                    if (!schedules.has(key)) {
                      schedules.set(key, []);
                    }
                    schedules.get(key)!.push(dayNames[day]);
                  }
                },
              );

              return (
                <AnimatedSection
                  key={branch.id}
                  delay={branchIndex * 0.1}
                  direction="up"
                >
                  <div className="bg-[#1a1a1a] border border-[#C6A15B]/20 rounded-lg overflow-hidden h-full">
                    <div className="p-6">
                      <div className="flex items-start gap-3 mb-4">
                        <MapPin className="w-6 h-6 text-[#C6A15B] flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="text-xl text-white mb-2">
                            {branch.name}
                          </h3>
                          <p className="text-gray-400 text-sm">
                            {branch.fullAddress}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 mb-4">
                        <Clock className="w-6 h-6 text-[#C6A15B] flex-shrink-0 mt-1" />
                        <div className="text-sm">
                          {Array.from(schedules.entries()).map(
                            ([hours, days]) => (
                              <div
                                key={hours}
                                className="text-gray-400 mb-1"
                              >
                                {days.join(", ")}:{" "}
                                {hours.replace("-", " - ")} hs
                              </div>
                            ),
                          )}
                        </div>
                      </div>

                      <a
                        href={branch.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block cursor-pointer"
                      >
                        <Button className="w-full bg-transparent border border-[#C6A15B] text-[#C6A15B] hover:bg-[#C6A15B] hover:text-[#111111] cursor-pointer">
                          Ver en Mapa
                        </Button>
                      </a>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>

          <AnimatedSection
            className="text-center mt-8"
            delay={0.3}
          >
            <Link to="/contacto">
              <Button className="bg-[#C6A15B] text-[#111111] hover:bg-[#d4b06f] cursor-pointer">
                Ver Más Información
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}