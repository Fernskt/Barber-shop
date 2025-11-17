import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Servicios } from './pages/Servicios';
import { Barberos } from './pages/Barberos';
import { Reservas } from './pages/Reservas';
import { Galeria } from './pages/Galeria';
import { Contacto } from './pages/Contacto';
import { Cuenta } from './pages/Cuenta';
import { Admin } from './pages/Admin';
import { Toaster } from './components/ui/sonner';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#111111] flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/barberos" element={<Barberos />} />
            <Route path="/reservas" element={<Reservas />} />
            <Route path="/galeria" element={<Galeria />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/cuenta" element={<Cuenta />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </main>
        <Footer />
        <Toaster position="top-right" theme="dark" />
      </div>
    </Router>
  );
}
