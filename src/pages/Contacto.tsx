import { useState } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, MessageCircle } from 'lucide-react';
import { toast } from 'sonner';
import { BRANCHES, BUSINESS_INFO } from '../utils/branches';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { AnimatedSection } from '../components/AnimatedSection';
import { motion } from 'motion/react';

export function Contacto() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      toast.error('Por favor completá todos los campos');
      return;
    }
    toast.success('¡Mensaje enviado! Te responderemos pronto.');
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="min-h-screen bg-[#111111]">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1747830280502-f33d7305a714?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFyZCUyMGdyb29taW5nJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2MDQ5NTIwM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Contacto King of Kings"
            className="w-full h-full object-cover"
          />
<div className="absolute inset-0 bg-gradient-to-b from-[#111111] via-[#111111] to-[#111111] from-opacity-90 via-opacity-90 to-opacity-90"></div>        </div>

        <div className="container mx-auto px-4 z-10 relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-6xl mb-4 text-white">
              CONTACTO
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Estamos para ayudarte. Contactanos por cualquier consulta o para agendar tu turno.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            {/* Contact Information */}
            <AnimatedSection className="space-y-8">
              <div className="bg-[#1a1a1a] border border-[#C6A15B]/20 rounded-lg p-6">
                <h2 className="text-2xl mb-6 text-white">Información de Contacto</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#C6A15B]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-[#C6A15B]" />
                    </div>
                    <div>
                      <h3 className="text-white mb-1">Teléfono</h3>
                      <a href={`tel:${BUSINESS_INFO.phoneLink}`} className="text-gray-400 hover:text-[#C6A15B] transition-colors cursor-pointer">
                        {BUSINESS_INFO.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#C6A15B]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-[#C6A15B]" />
                    </div>
                    <div>
                      <h3 className="text-white mb-1">Email</h3>
                      <a href={`mailto:${BUSINESS_INFO.email}`} className="text-gray-400 hover:text-[#C6A15B] transition-colors cursor-pointer">
                        {BUSINESS_INFO.email}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-[#C6A15B]/20">
                  <h3 className="text-white mb-4">Seguinos en Redes</h3>
                  <div className="flex gap-4">
                    <a
                      href={BUSINESS_INFO.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-[#C6A15B]/10 rounded-lg flex items-center justify-center text-[#C6A15B] hover:bg-[#C6A15B] hover:text-[#111111] transition-colors cursor-pointer"
                      title={BUSINESS_INFO.instagram}
                    >
                      <Instagram className="w-6 h-6" />
                    </a>
                    <a
                      href={BUSINESS_INFO.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-[#C6A15B]/10 rounded-lg flex items-center justify-center text-[#C6A15B] hover:bg-[#C6A15B] hover:text-[#111111] transition-colors cursor-pointer"
                    >
                      <Facebook className="w-6 h-6" />
                    </a>
                    <a
                      href={BUSINESS_INFO.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-[#C6A15B]/10 rounded-lg flex items-center justify-center text-[#C6A15B] hover:bg-[#C6A15B] hover:text-[#111111] transition-colors cursor-pointer"
                      title="WhatsApp"
                    >
                      <MessageCircle className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Contact Form */}
            <AnimatedSection delay={0.2}>
              <div className="bg-[#1a1a1a] border border-[#C6A15B]/20 rounded-lg p-6">
                <h2 className="text-2xl mb-6 text-white">Envianos un Mensaje</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-white">Nombre completo</Label>
                    <Input
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Juan Pérez"
                      className="bg-[#111111] border-[#C6A15B]/20 text-white"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-white">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="juan@ejemplo.com"
                      className="bg-[#111111] border-[#C6A15B]/20 text-white"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-white">Mensaje</Label>
                    <Textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Escribí tu consulta aquí..."
                      rows={6}
                      className="bg-[#111111] border-[#C6A15B]/20 text-white"
                    />
                  </div>

                  <Button type="submit" className="w-full bg-[#C6A15B] text-[#111111] hover:bg-[#d4b06f] cursor-pointer">
                    Enviar Mensaje
                  </Button>
                </form>
              </div>
            </AnimatedSection>
          </div>

          {/* Branches with Maps */}
          <AnimatedSection delay={0.4}>
            <div className="bg-[#1a1a1a] border border-[#C6A15B]/20 rounded-lg overflow-hidden">
              <Tabs defaultValue={BRANCHES[0].id} className="w-full">
                <TabsList className="grid w-full grid-cols-3 bg-[#111111] border-b border-[#C6A15B]/20">
                  {BRANCHES.map((branch) => (
                    <TabsTrigger
                      key={branch.id}
                      value={branch.id}
                      className="data-[state=active]:bg-[#C6A15B] data-[state=active]:text-[#111111] cursor-pointer"
                    >
                      {branch.name.split(' - ')[0]}
                    </TabsTrigger>
                  ))}
                </TabsList>

                {BRANCHES.map((branch) => {
                  const dayNames: {[key: string]: string} = {
                    monday: 'Lunes',
                    tuesday: 'Martes',
                    wednesday: 'Miércoles',
                    thursday: 'Jueves',
                    friday: 'Viernes',
                    saturday: 'Sábado',
                    sunday: 'Domingo'
                  };

                  return (
                    <TabsContent key={branch.id} value={branch.id} className="p-6">
                      <div className="mb-4">
                        <div className="flex items-start gap-3 mb-4">
                          <MapPin className="w-5 h-5 text-[#C6A15B] flex-shrink-0 mt-1" />
                          <div>
                            <h3 className="text-xl text-white mb-1">{branch.name}</h3>
                            <p className="text-gray-400">{branch.fullAddress}</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <Clock className="w-5 h-5 text-[#C6A15B] flex-shrink-0 mt-1" />
                          <div className="space-y-1">
                            {Object.entries(branch.schedule).map(([day, hours]) => (
                              <div key={day} className="text-sm text-gray-400">
                                <span className="inline-block w-24">{dayNames[day]}:</span>
                                {hours ? (
                                  <span className="text-white">{hours.open} - {hours.close} hs</span>
                                ) : (
                                  <span className="text-gray-600">Cerrado</span>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="h-96 rounded-lg overflow-hidden">
                        <iframe
                          src={branch.mapEmbed}
                          width="100%"
                          height="100%"
                          style={{ border: 0 }}
                          allowFullScreen
                          loading="lazy"
                        ></iframe>
                      </div>

                      <div className="mt-4">
                        <a
                          href={branch.mapUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block cursor-pointer"
                        >
                          <Button className="w-full bg-[#C6A15B] text-[#111111] hover:bg-[#d4b06f] cursor-pointer">
                            Abrir en Google Maps
                          </Button>
                        </a>
                      </div>
                    </TabsContent>
                  );
                })}
              </Tabs>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
