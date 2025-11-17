import { BarberCard } from '../components/BarberCard';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { AnimatedSection } from '../components/AnimatedSection';
import { motion } from 'motion/react';
import { barbers } from '../data/barbers';

export function Barberos() {
  return (
    <div className="min-h-screen bg-[#111111]">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1687422808328-11cf750a5051?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJiZXIlMjBjdXR0aW5nJTIwaGFpcnxlbnwxfHx8fDE3NjA0OTUyMDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Barberos King of Kings"
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
              NUESTROS BARBEROS
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Conocé a nuestro equipo de profesionales altamente capacitados, cada uno con su estilo y especialidad única.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Barbers Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {barbers.map((barber, index) => (
              <AnimatedSection key={barber.id} delay={index * 0.1} direction="up">
                <BarberCard {...barber} />
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.3}>
            <div className="bg-[#1a1a1a] border border-[#C6A15B]/20 rounded-lg p-8">
              <h2 className="text-3xl mb-6 text-white text-center">¿Por qué elegirnos?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <AnimatedSection delay={0.4} direction="up">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-[#C6A15B]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl text-[#C6A15B]">15+</span>
                    </div>
                    <h3 className="text-xl mb-2 text-white">Años de Experiencia</h3>
                    <p className="text-gray-400">Nuestro equipo cuenta con más de 15 años de experiencia combinada.</p>
                  </div>
                </AnimatedSection>
                <AnimatedSection delay={0.5} direction="up">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-[#C6A15B]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl text-[#C6A15B]">100%</span>
                    </div>
                    <h3 className="text-xl mb-2 text-white">Satisfacción Garantizada</h3>
                    <p className="text-gray-400">Nos comprometemos a superar tus expectativas en cada visita.</p>
                  </div>
                </AnimatedSection>
                <AnimatedSection delay={0.6} direction="up">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-[#C6A15B]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl text-[#C6A15B]">★★★★★</span>
                    </div>
                    <h3 className="text-xl mb-2 text-white">Excelencia en Servicio</h3>
                    <p className="text-gray-400">Calificación 5 estrellas en todas las plataformas.</p>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
