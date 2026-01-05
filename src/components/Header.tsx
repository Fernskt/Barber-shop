import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Crown, Menu, X } from 'lucide-react';
import { Button } from './ui/button';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Inicio', path: '/' },
    { name: 'Servicios', path: '/servicios' },
    { name: 'Barberos', path: '/barberos' },
    { name: 'Galería', path: '/galeria' },
    { name: 'Contacto', path: '/contacto' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-[#111111] border-b border-[#C6A15B]/20">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 cursor-pointer">
            <Crown className="w-8 h-8 text-[#C6A15B]" />
            <span className="text-2xl tracking-wider text-[#C6A15B]" style={{ fontFamily: 'Cinzel, serif', fontWeight: 700 }}>
              Barbershop
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`transition-colors hover:text-[#C6A15B] cursor-pointer ${
                  isActive(item.path) ? 'text-[#C6A15B]' : 'text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link to="/cuenta">
              <Button variant="ghost" className="text-white hover:text-[#C6A15B] hover:bg-transparent cursor-pointer">
                Mi Cuenta
              </Button>
            </Link>
            <Link to="/reservas">
              <Button className="bg-[#C6A15B] text-[#111111] hover:bg-[#d4b06f] cursor-pointer">
                Reservar Turno
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block py-2 transition-colors hover:text-[#C6A15B] cursor-pointer ${
                  isActive(item.path) ? 'text-[#C6A15B]' : 'text-white'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex flex-col gap-2 pt-4 border-t border-[#C6A15B]/20">
              <Link to="/cuenta" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="ghost" className="w-full text-white hover:text-[#C6A15B] hover:bg-transparent cursor-pointer">
                  Mi Cuenta
                </Button>
              </Link>
              <Link to="/reservas" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full bg-[#C6A15B] text-[#111111] hover:bg-[#d4b06f] cursor-pointer">
                  Reservar Turno
                </Button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
