import { Crown, Instagram, Facebook, Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BUSINESS_INFO, BRANCHES } from '../utils/branches';

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-[#C6A15B]/20 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Crown className="w-8 h-8 text-[#C6A15B]" />
              <span className="text-xl tracking-wider text-[#C6A15B]" style={{ fontFamily: 'Cinzel, serif', fontWeight: 700 }}>
                KING OF KINGS
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              Tu corte, a tu hora. Barbería premium con estilo clásico y moderno.
            </p>
          </div>

          {/* Sucursales */}
          <div>
            <h3 className="text-lg mb-4 text-[#C6A15B]">Sucursales</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              {BRANCHES.map((branch) => (
                <li key={branch.id}>
                  <strong className="text-white">{branch.name}</strong>
                  <br />
                  {branch.address}
                </li>
              ))}
            </ul>
          </div>

          {/* Enlaces */}
          <div>
            <h3 className="text-lg mb-4 text-[#C6A15B]">Enlaces</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/servicios" className="text-gray-400 hover:text-[#C6A15B] transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link to="/barberos" className="text-gray-400 hover:text-[#C6A15B] transition-colors">
                  Nuestros Barberos
                </Link>
              </li>
              <li>
                <Link to="/galeria" className="text-gray-400 hover:text-[#C6A15B] transition-colors">
                  Galería
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-gray-400 hover:text-[#C6A15B] transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-lg mb-4 text-[#C6A15B]">Contacto</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C6A15B]" />
                <a href={`tel:${BUSINESS_INFO.phoneLink}`} className="hover:text-[#C6A15B] transition-colors">
                  {BUSINESS_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#C6A15B]" />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-[#C6A15B] transition-colors">
                  {BUSINESS_INFO.email}
                </a>
              </li>
            </ul>
            <div className="flex gap-4 mt-4">
              <a
                href={BUSINESS_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#C6A15B] transition-colors"
                title={BUSINESS_INFO.instagram}
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={BUSINESS_INFO.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#C6A15B] transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={BUSINESS_INFO.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#C6A15B] transition-colors"
                title="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#C6A15B]/20 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} {BUSINESS_INFO.fullName}. Todos los derechos reservados.</p>
          <Link to="/admin" className="text-gray-600 hover:text-gray-500 transition-colors text-xs mt-2 inline-block">
            Admin
          </Link>
        </div>
      </div>
    </footer>
  );
}
