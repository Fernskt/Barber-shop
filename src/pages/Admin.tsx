import { useState } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Calendar as CalendarIcon, Users, Scissors, Image, Settings, Plus, Pencil, Trash2 } from 'lucide-react';
import { Calendar } from '../components/ui/calendar';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../components/ui/dialog';
import { toast } from 'sonner@2.0.3';

interface Service {
  id: string;
  name: string;
  duration: number;
  price: number;
}

interface Barber {
  id: string;
  name: string;
  specialty: string;
}

const mockAppointments = [
  { id: '1', client: 'Juan Pérez', service: 'Corte + Barba', barber: 'Carlos Mendoza', date: '2025-10-15', time: '10:00' },
  { id: '2', client: 'María García', service: 'Afeitado Clásico', barber: 'Miguel Torres', date: '2025-10-15', time: '11:30' },
  { id: '3', client: 'Pedro López', service: 'Corte Clásico', barber: 'Javier Rodríguez', date: '2025-10-15', time: '14:00' },
];

export function Admin() {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [services, setServices] = useState<Service[]>([
    { id: '1', name: 'Corte Clásico', duration: 30, price: 5000 },
    { id: '2', name: 'Corte + Barba', duration: 45, price: 7500 },
  ]);
  const [barbers, setBarbers] = useState<Barber[]>([
    { id: '1', name: 'Carlos Mendoza', specialty: 'Cortes Clásicos' },
    { id: '2', name: 'Miguel Ángel Torres', specialty: 'Diseño de Barba' },
  ]);

  const [newService, setNewService] = useState({ name: '', duration: '', price: '' });
  const [newBarber, setNewBarber] = useState({ name: '', specialty: '' });

  const handleAddService = () => {
    if (!newService.name || !newService.duration || !newService.price) {
      toast.error('Por favor completá todos los campos');
      return;
    }
    setServices([...services, {
      id: Date.now().toString(),
      name: newService.name,
      duration: parseInt(newService.duration),
      price: parseInt(newService.price),
    }]);
    setNewService({ name: '', duration: '', price: '' });
    toast.success('Servicio agregado correctamente');
  };

  const handleDeleteService = (id: string) => {
    setServices(services.filter(s => s.id !== id));
    toast.success('Servicio eliminado');
  };

  const handleAddBarber = () => {
    if (!newBarber.name || !newBarber.specialty) {
      toast.error('Por favor completá todos los campos');
      return;
    }
    setBarbers([...barbers, {
      id: Date.now().toString(),
      name: newBarber.name,
      specialty: newBarber.specialty,
    }]);
    setNewBarber({ name: '', specialty: '' });
    toast.success('Barbero agregado correctamente');
  };

  const handleDeleteBarber = (id: string) => {
    setBarbers(barbers.filter(b => b.id !== id));
    toast.success('Barbero eliminado');
  };

  return (
    <div className="min-h-screen bg-[#111111] py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl mb-4 text-white">
            PANEL ADMIN
          </h1>
          <p className="text-gray-400 text-lg">
            Gestioná turnos, servicios, barberos y contenido de la barbería
          </p>
        </div>

        <Tabs defaultValue="dashboard" className="w-full">
          <TabsList className="grid w-full grid-cols-5 bg-[#1a1a1a] border border-[#C6A15B]/20 mb-8">
            <TabsTrigger value="dashboard" className="data-[state=active]:bg-[#C6A15B] data-[state=active]:text-[#111111]">
              <CalendarIcon className="w-4 h-4 mr-2" />
              Dashboard
            </TabsTrigger>
            <TabsTrigger value="services" className="data-[state=active]:bg-[#C6A15B] data-[state=active]:text-[#111111]">
              <Scissors className="w-4 h-4 mr-2" />
              Servicios
            </TabsTrigger>
            <TabsTrigger value="barbers" className="data-[state=active]:bg-[#C6A15B] data-[state=active]:text-[#111111]">
              <Users className="w-4 h-4 mr-2" />
              Barberos
            </TabsTrigger>
            <TabsTrigger value="gallery" className="data-[state=active]:bg-[#C6A15B] data-[state=active]:text-[#111111]">
              <Image className="w-4 h-4 mr-2" />
              Galería
            </TabsTrigger>
            <TabsTrigger value="settings" className="data-[state=active]:bg-[#C6A15B] data-[state=active]:text-[#111111]">
              <Settings className="w-4 h-4 mr-2" />
              Ajustes
            </TabsTrigger>
          </TabsList>

          {/* Dashboard Tab */}
          <TabsContent value="dashboard">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Calendar */}
              <div className="bg-[#1a1a1a] border border-[#C6A15B]/20 rounded-lg p-6">
                <h2 className="text-2xl mb-4 text-white">Calendario</h2>
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={(date) => date && setSelectedDate(date)}
                  className="rounded-lg border border-[#C6A15B]/20"
                />
              </div>

              {/* Today's Appointments */}
              <div className="bg-[#1a1a1a] border border-[#C6A15B]/20 rounded-lg p-6">
                <h2 className="text-2xl mb-4 text-white">Turnos de Hoy</h2>
                <div className="space-y-3">
                  {mockAppointments.map((apt) => (
                    <div key={apt.id} className="bg-[#111111] border border-[#C6A15B]/20 rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="text-white">{apt.client}</h3>
                          <p className="text-sm text-gray-400">{apt.service}</p>
                        </div>
                        <span className="text-[#C6A15B]">{apt.time}</span>
                      </div>
                      <p className="text-sm text-gray-400">Barbero: {apt.barber}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-[#1a1a1a] border border-[#C6A15B]/20 rounded-lg p-6">
                  <h3 className="text-gray-400 mb-2">Turnos Hoy</h3>
                  <p className="text-4xl text-[#C6A15B]">12</p>
                </div>
                <div className="bg-[#1a1a1a] border border-[#C6A15B]/20 rounded-lg p-6">
                  <h3 className="text-gray-400 mb-2">Ingresos Hoy</h3>
                  <p className="text-4xl text-[#C6A15B]">$85,000</p>
                </div>
                <div className="bg-[#1a1a1a] border border-[#C6A15B]/20 rounded-lg p-6">
                  <h3 className="text-gray-400 mb-2">Turnos Semana</h3>
                  <p className="text-4xl text-[#C6A15B]">67</p>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Services Tab */}
          <TabsContent value="services">
            <div className="bg-[#1a1a1a] border border-[#C6A15B]/20 rounded-lg p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl text-white">Gestión de Servicios</h2>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="bg-[#C6A15B] text-[#111111] hover:bg-[#d4b06f]">
                      <Plus className="w-4 h-4 mr-2" />
                      Nuevo Servicio
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="bg-[#1a1a1a] border-[#C6A15B]/20">
                    <DialogHeader>
                      <DialogTitle className="text-white">Agregar Nuevo Servicio</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div>
                        <Label className="text-white">Nombre del Servicio</Label>
                        <Input
                          value={newService.name}
                          onChange={(e) => setNewService({ ...newService, name: e.target.value })}
                          className="bg-[#111111] border-[#C6A15B]/20 text-white"
                        />
                      </div>
                      <div>
                        <Label className="text-white">Duración (minutos)</Label>
                        <Input
                          type="number"
                          value={newService.duration}
                          onChange={(e) => setNewService({ ...newService, duration: e.target.value })}
                          className="bg-[#111111] border-[#C6A15B]/20 text-white"
                        />
                      </div>
                      <div>
                        <Label className="text-white">Precio ($)</Label>
                        <Input
                          type="number"
                          value={newService.price}
                          onChange={(e) => setNewService({ ...newService, price: e.target.value })}
                          className="bg-[#111111] border-[#C6A15B]/20 text-white"
                        />
                      </div>
                      <Button
                        onClick={handleAddService}
                        className="w-full bg-[#C6A15B] text-[#111111] hover:bg-[#d4b06f]"
                      >
                        Agregar Servicio
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>

              <div className="space-y-3">
                {services.map((service) => (
                  <div key={service.id} className="bg-[#111111] border border-[#C6A15B]/20 rounded-lg p-4 flex justify-between items-center">
                    <div>
                      <h3 className="text-white mb-1">{service.name}</h3>
                      <p className="text-sm text-gray-400">
                        {service.duration} min • ${service.price}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="ghost" className="text-[#C6A15B] hover:bg-[#C6A15B]/10">
                        <Pencil className="w-4 h-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="text-[#C62828] hover:bg-[#C62828]/10"
                        onClick={() => handleDeleteService(service.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Barbers Tab */}
          <TabsContent value="barbers">
            <div className="bg-[#1a1a1a] border border-[#C6A15B]/20 rounded-lg p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl text-white">Gestión de Barberos</h2>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="bg-[#C6A15B] text-[#111111] hover:bg-[#d4b06f]">
                      <Plus className="w-4 h-4 mr-2" />
                      Nuevo Barbero
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="bg-[#1a1a1a] border-[#C6A15B]/20">
                    <DialogHeader>
                      <DialogTitle className="text-white">Agregar Nuevo Barbero</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div>
                        <Label className="text-white">Nombre Completo</Label>
                        <Input
                          value={newBarber.name}
                          onChange={(e) => setNewBarber({ ...newBarber, name: e.target.value })}
                          className="bg-[#111111] border-[#C6A15B]/20 text-white"
                        />
                      </div>
                      <div>
                        <Label className="text-white">Especialidad</Label>
                        <Input
                          value={newBarber.specialty}
                          onChange={(e) => setNewBarber({ ...newBarber, specialty: e.target.value })}
                          className="bg-[#111111] border-[#C6A15B]/20 text-white"
                        />
                      </div>
                      <Button
                        onClick={handleAddBarber}
                        className="w-full bg-[#C6A15B] text-[#111111] hover:bg-[#d4b06f]"
                      >
                        Agregar Barbero
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>

              <div className="space-y-3">
                {barbers.map((barber) => (
                  <div key={barber.id} className="bg-[#111111] border border-[#C6A15B]/20 rounded-lg p-4 flex justify-between items-center">
                    <div>
                      <h3 className="text-white mb-1">{barber.name}</h3>
                      <p className="text-sm text-gray-400">{barber.specialty}</p>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="ghost" className="text-[#C6A15B] hover:bg-[#C6A15B]/10">
                        <Pencil className="w-4 h-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="text-[#C62828] hover:bg-[#C62828]/10"
                        onClick={() => handleDeleteBarber(barber.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Gallery Tab */}
          <TabsContent value="gallery">
            <div className="bg-[#1a1a1a] border border-[#C6A15B]/20 rounded-lg p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl text-white">Gestión de Galería</h2>
                <Button className="bg-[#C6A15B] text-[#111111] hover:bg-[#d4b06f]">
                  <Plus className="w-4 h-4 mr-2" />
                  Subir Imagen
                </Button>
              </div>
              <p className="text-gray-400 text-center py-12">
                Aquí podrás subir y gestionar las imágenes de la galería
              </p>
            </div>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings">
            <div className="bg-[#1a1a1a] border border-[#C6A15B]/20 rounded-lg p-6">
              <h2 className="text-2xl mb-6 text-white">Configuración General</h2>
              <div className="space-y-6">
                <div>
                  <Label className="text-white">Nombre de la Barbería</Label>
                  <Input
                    defaultValue="King of Kings Barbershop"
                    className="bg-[#111111] border-[#C6A15B]/20 text-white"
                  />
                </div>
                <div>
                  <Label className="text-white">Dirección</Label>
                  <Input
                    defaultValue="Av. Santa Fe 1234, CABA"
                    className="bg-[#111111] border-[#C6A15B]/20 text-white"
                  />
                </div>
                <div>
                  <Label className="text-white">Teléfono</Label>
                  <Input
                    defaultValue="+54 11 1234-5678"
                    className="bg-[#111111] border-[#C6A15B]/20 text-white"
                  />
                </div>
                <Button className="bg-[#C6A15B] text-[#111111] hover:bg-[#d4b06f]">
                  Guardar Cambios
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
