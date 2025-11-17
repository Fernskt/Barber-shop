import { ServiceCard } from '../components/ServiceCard';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { AnimatedSection } from '../components/AnimatedSection';
import { motion } from 'motion/react';
import { services } from '../data/services';

export function Servicios() {
  return (
    <div className="min-h-screen bg-[#111111]">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1593269211259-b2367de7dba6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJiZXJzaG9wJTIwdG9vbHMlMjBzY2lzc29yc3xlbnwxfHx8fDE3NjA0MDkzNjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Servicios King of Kings"
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
              NUESTROS SERVICIOS
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Ofrecemos servicios premium de barbería con atención personalizada y productos de primera calidad.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <AnimatedSection key={service.id} delay={index * 0.1} direction="zoom">
                <ServiceCard {...service} />
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="mt-16" delay={0.3}>
            <div className="bg-[#1a1a1a] border border-[#C6A15B]/20 rounded-lg p-8">
              <h2 className="text-3xl mb-4 text-white">Información Importante</h2>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-[#C6A15B] mt-1">•</span>
                  <span>Todos los servicios incluyen consulta personalizada sin cargo.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C6A15B] mt-1">•</span>
                  <span>Utilizamos productos profesionales de marcas premium.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C6A15B] mt-1">•</span>
                  <span>Las cancelaciones deben realizarse con 24hs de anticipación.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C6A15B] mt-1">•</span>
                  <span>Ofrecemos planes de membresía con descuentos especiales.</span>
                </li>
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
