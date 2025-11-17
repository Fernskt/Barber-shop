import { useState, useEffect } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Calendar, Clock, User, LogOut, CalendarX } from 'lucide-react';
import { EmptyState } from '../components/EmptyState';
import { Link } from 'react-router-dom';
import { supabase } from '../utils/supabase/client';
import { toast } from 'sonner@2.0.3';

interface Appointment {
  id: string;
  service: string;
  barber: string;
  date: string;
  time: string;
  status: 'confirmed' | 'cancelled';
}

export function Cuenta() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);

  // Mock appointments for demo
  const [appointments] = useState<Appointment[]>([
    {
      id: '1',
      service: 'Corte + Barba',
      barber: 'Carlos Mendoza',
      date: '2025-10-20',
      time: '15:00',
      status: 'confirmed',
    },
    {
      id: '2',
      service: 'Afeitado Clásico',
      barber: 'Miguel Ángel Torres',
      date: '2025-11-05',
      time: '11:30',
      status: 'confirmed',
    },
  ]);

  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      setUser(session?.user || null);
    } catch (error) {
      console.error('Error checking user:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) throw error;
      setUser(data.user);
      toast.success('¡Bienvenido de nuevo!');
    } catch (error: any) {
      toast.error(error.message || 'Error al iniciar sesión');
    }
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://${import.meta.env.VITE_SUPABASE_PROJECT_ID}.supabase.co/functions/v1/make-server-5ba18305/signup`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
          },
          body: JSON.stringify({ email, password, name }),
        }
      );
      
      if (!response.ok) throw new Error('Error al crear cuenta');
      
      toast.success('¡Cuenta creada! Ahora podés iniciar sesión.');
      setIsSignUp(false);
    } catch (error: any) {
      toast.error(error.message || 'Error al crear cuenta');
    }
  };

  const handleSignOut = async () => {
    try {
      await supabase.auth.signOut();
      setUser(null);
      toast.success('Sesión cerrada');
    } catch (error: any) {
      toast.error('Error al cerrar sesión');
    }
  };

  const handleCancelAppointment = (appointmentId: string) => {
    toast.success('Turno cancelado correctamente');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#111111] flex items-center justify-center">
        <div className="text-[#C6A15B]">Cargando...</div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-[#111111] py-20">
        <div className="container mx-auto px-4 max-w-md">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl mb-4 text-white">
              MI CUENTA
            </h1>
            <p className="text-gray-400">
              {isSignUp ? 'Creá tu cuenta para reservar turnos' : 'Iniciá sesión para ver tus turnos'}
            </p>
          </div>

          <div className="bg-[#1a1a1a] border border-[#C6A15B]/20 rounded-lg p-8">
            <form onSubmit={isSignUp ? handleSignUp : handleSignIn} className="space-y-6">
              {isSignUp && (
                <div>
                  <Label htmlFor="name" className="text-white">Nombre completo</Label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Juan Pérez"
                    className="bg-[#111111] border-[#C6A15B]/20 text-white"
                    required
                  />
                </div>
              )}

              <div>
                <Label htmlFor="email" className="text-white">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="juan@ejemplo.com"
                  className="bg-[#111111] border-[#C6A15B]/20 text-white"
                  required
                />
              </div>

              <div>
                <Label htmlFor="password" className="text-white">Contraseña</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="bg-[#111111] border-[#C6A15B]/20 text-white"
                  required
                />
              </div>

              <Button type="submit" className="w-full bg-[#C6A15B] text-[#111111] hover:bg-[#d4b06f]">
                {isSignUp ? 'Crear Cuenta' : 'Iniciar Sesión'}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <button
                onClick={() => setIsSignUp(!isSignUp)}
                className="text-gray-400 hover:text-[#C6A15B] transition-colors"
              >
                {isSignUp ? '¿Ya tenés cuenta? Iniciá sesión' : '¿No tenés cuenta? Registrate'}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#111111] py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h1 className="text-5xl md:text-6xl mb-2 text-white">
              MI CUENTA
            </h1>
            <p className="text-gray-400">
              Bienvenido, {user.email}
            </p>
          </div>
          <Button
            onClick={handleSignOut}
            variant="outline"
            className="border-[#C6A15B]/20 text-white hover:border-[#C6A15B] hover:text-[#C6A15B]"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Cerrar Sesión
          </Button>
        </div>

        <Tabs defaultValue="appointments" className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-[#1a1a1a] border border-[#C6A15B]/20">
            <TabsTrigger value="appointments" className="data-[state=active]:bg-[#C6A15B] data-[state=active]:text-[#111111]">
              Mis Turnos
            </TabsTrigger>
            <TabsTrigger value="profile" className="data-[state=active]:bg-[#C6A15B] data-[state=active]:text-[#111111]">
              Perfil
            </TabsTrigger>
          </TabsList>

          <TabsContent value="appointments" className="mt-6">
            {appointments.length > 0 ? (
              <div className="space-y-4">
                {appointments.map((appointment) => (
                  <div
                    key={appointment.id}
                    className="bg-[#1a1a1a] border border-[#C6A15B]/20 rounded-lg p-6"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-xl text-white mb-3">{appointment.service}</h3>
                        <div className="space-y-2 text-sm text-gray-400">
                          <div className="flex items-center gap-2">
                            <User className="w-4 h-4 text-[#C6A15B]" />
                            <span>{appointment.barber}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-[#C6A15B]" />
                            <span>{new Date(appointment.date).toLocaleDateString('es-AR', {
                              weekday: 'long',
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-[#C6A15B]" />
                            <span>{appointment.time} hs</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <span className={`px-3 py-1 rounded-full text-xs ${
                          appointment.status === 'confirmed'
                            ? 'bg-green-500/20 text-green-400'
                            : 'bg-red-500/20 text-red-400'
                        }`}>
                          {appointment.status === 'confirmed' ? 'Confirmado' : 'Cancelado'}
                        </span>
                        {appointment.status === 'confirmed' && (
                          <Button
                            onClick={() => handleCancelAppointment(appointment.id)}
                            variant="outline"
                            size="sm"
                            className="border-[#C62828] text-[#C62828] hover:bg-[#C62828] hover:text-white"
                          >
                            <CalendarX className="w-4 h-4 mr-1" />
                            Cancelar
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <EmptyState
                icon={Calendar}
                title="No tenés turnos agendados"
                description="Reservá tu próximo turno para ver tus citas aquí"
                action={
                  <Link to="/reservas">
                    <Button className="bg-[#C6A15B] text-[#111111] hover:bg-[#d4b06f]">
                      Reservar Turno
                    </Button>
                  </Link>
                }
              />
            )}
          </TabsContent>

          <TabsContent value="profile" className="mt-6">
            <div className="bg-[#1a1a1a] border border-[#C6A15B]/20 rounded-lg p-6">
              <h2 className="text-2xl mb-6 text-white">Información Personal</h2>
              <div className="space-y-4">
                <div>
                  <Label className="text-white">Email</Label>
                  <Input
                    value={user.email}
                    disabled
                    className="bg-[#111111] border-[#C6A15B]/20 text-gray-400"
                  />
                </div>
                <div>
                  <Label className="text-white">Miembro desde</Label>
                  <Input
                    value={new Date(user.created_at).toLocaleDateString('es-AR')}
                    disabled
                    className="bg-[#111111] border-[#C6A15B]/20 text-gray-400"
                  />
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
