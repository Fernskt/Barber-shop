# BarberShop - Plataforma de Reservas Online

## 🎯 Descripción

Plataforma web completa para la barbería "BarberShop" con sistema de reservas online, gestión de servicios, barberos y galería. Diseñada con estética premium que combina lo clásico y lo moderno.

## 🎨 Características de Diseño

### Paleta de Colores
- **Negro principal**: `#111111`
- **Dorado (Gold)**: `#C6A15B`
- **Rojo (Accent)**: `#C62828`
- **Blanco**: `#FFFFFF`

### Tipografías
- **Títulos**: Bebas Neue (tracking amplio, mayúsculas)
- **Cuerpo**: Inter (clean, moderna, legible)

### Iconografía
- Corona, tijeras, navaja, brocha usando Lucide React icons

## 📱 Estructura de Páginas

### Páginas Públicas
1. **Home** (`/`)
   - Hero con frase "Tu corte, a tu hora"
   - Servicios destacados
   - Galería preview
   - Ubicación y horarios

2. **Servicios** (`/servicios`)
   - Lista completa de servicios con cards
   - Nombre, duración, precio y botón reservar

3. **Barberos** (`/barberos`)
   - Cards con foto, especialidad y bio
   - Calificación con estrellas
   - Botón "Reservar con [nombre]"

4. **Galería** (`/galeria`)
   - Grilla responsive de fotos
   - Filtros por categoría
   - Modal para vista ampliada

5. **Contacto** (`/contacto`)
   - Información de contacto
   - Formulario de consulta
   - Mapa integrado
   - Enlaces a redes sociales

### Páginas de Usuario
6. **Reservas** (`/reservas`)
   - Flujo de 3 pasos:
     1. Selección de servicio y barbero
     2. Selección de fecha y hora
     3. Datos del cliente y confirmación

7. **Mi Cuenta** (`/cuenta`)
   - Login/Registro con Supabase Auth
   - Lista de turnos reservados
   - Cancelar o reprogramar turnos
   - Información de perfil

### Panel Administrativo
8. **Admin** (`/admin`)
   - Dashboard con turnos del día
   - Calendario semanal
   - CRUD de servicios
   - CRUD de barberos
   - Gestión de galería
   - Configuración general

## ⚙️ Tecnologías

- **Frontend**: React 18 + TypeScript
- **Routing**: React Router DOM
- **Estilos**: Tailwind CSS 4.0
- **Componentes UI**: Shadcn/ui
- **Iconos**: Lucide React
- **Backend**: Supabase (Auth + Database)
- **Calendario**: React Day Picker
- **Notificaciones**: Sonner

## 🚀 Configuración

### Variables de Entorno

Crea un archivo `.env` en la raíz del proyecto:

```env
VITE_SUPABASE_PROJECT_ID=tu_project_id
VITE_SUPABASE_ANON_KEY=tu_anon_key
VITE_APP_TIMEZONE=America/Argentina/Buenos_Aires
```

### Instalación

```bash
# Instalar dependencias
npm install

# Iniciar en desarrollo
npm run dev

# Build para producción
npm run build
```

## 🗄️ Base de Datos (Supabase)

### Tablas Sugeridas

1. **profiles**
   - id (uuid, foreign key a auth.users)
   - name (text)
   - phone (text)
   - created_at (timestamp)

2. **barbers**
   - id (uuid, primary key)
   - name (text)
   - specialty (text)
   - bio (text)
   - image_url (text)
   - rating (numeric)
   - active (boolean)

3. **services**
   - id (uuid, primary key)
   - name (text)
   - description (text)
   - duration (integer) - en minutos
   - price (numeric)
   - active (boolean)

4. **appointments**
   - id (uuid, primary key)
   - user_id (uuid, foreign key a profiles)
   - barber_id (uuid, foreign key a barbers)
   - service_id (uuid, foreign key a services)
   - date (date)
   - time (time)
   - status (text) - 'confirmed', 'cancelled', 'completed'
   - client_name (text)
   - client_email (text)
   - client_phone (text)
   - created_at (timestamp)

5. **availability**
   - id (uuid, primary key)
   - barber_id (uuid, foreign key a barbers)
   - day_of_week (integer) - 0-6
   - start_time (time)
   - end_time (time)
   - is_available (boolean)

6. **gallery**
   - id (uuid, primary key)
   - title (text)
   - category (text)
   - image_url (text)
   - order (integer)
   - created_at (timestamp)

7. **settings**
   - id (uuid, primary key)
   - key (text, unique)
   - value (jsonb)

### Row Level Security (RLS)

Importante habilitar RLS en Supabase para proteger los datos:

```sql
-- Ejemplo para appointments
ALTER TABLE appointments ENABLE ROW LEVEL SECURITY;

-- Los usuarios solo pueden ver sus propios turnos
CREATE POLICY "Users can view own appointments" 
  ON appointments FOR SELECT 
  USING (auth.uid() = user_id);

-- Los usuarios solo pueden crear sus propios turnos
CREATE POLICY "Users can create own appointments" 
  ON appointments FOR INSERT 
  WITH CHECK (auth.uid() = user_id);
```

## 🔐 Autenticación

La aplicación usa Supabase Auth con:
- Email/Password signup y login
- Sesiones persistentes
- Protección de rutas

### Flujo de Auth

1. El usuario se registra en `/cuenta` (llama al endpoint `/signup` del servidor)
2. El servidor crea el usuario con `supabase.auth.admin.createUser()`
3. El email se confirma automáticamente (sin servidor de email)
4. El usuario inicia sesión con `supabase.auth.signInWithPassword()`
5. Las rutas protegidas verifican el token de acceso

## 📝 Flujo de Reserva

1. **Cliente selecciona** servicio y barbero
2. **Sistema muestra** fechas y horarios disponibles
3. **Cliente completa** datos personales
4. **Sistema confirma** reserva y envía notificación
5. **Cliente recibe** confirmación con detalles

## 🎨 Componentes Principales

### Header
- Logo "Barbershop"
- Navegación responsive
- Botones CTA (Mi Cuenta, Reservar)

### Footer
- Información de contacto
- Horarios
- Enlaces a páginas
- Redes sociales

### ServiceCard
- Icono del servicio
- Nombre y descripción
- Duración y precio
- Botón reservar

### BarberCard
- Foto del barbero
- Nombre y especialidad
- Rating con estrellas
- Bio breve
- Botón reservar

### TimeSlotGrid
- Grilla de horarios disponibles
- Indicador de disponibilidad
- Selección visual

### EmptyState
- Para estados vacíos
- Con icono, título y descripción
- CTA opcional

## 🌐 Navegación

### Menú Principal
- Inicio
- Servicios
- Barberos
- Galería
- Contacto
- Reservar (CTA)
- Mi Cuenta

### Footer Links
- Políticas de privacidad
- Términos y condiciones
- Preguntas frecuentes

## 💡 Mejoras Futuras

1. **Notificaciones**
   - Email de confirmación
   - WhatsApp reminders
   - SMS 24hs antes

2. **Pagos Online**
   - Integración con MercadoPago
   - Pagos con tarjeta
   - Seña online

3. **Sistema de Puntos**
   - Programa de fidelización
   - Descuentos por frecuencia
   - Referidos

4. **Reviews**
   - Sistema de calificaciones
   - Comentarios de clientes
   - Fotos de resultados

5. **Analytics**
   - Dashboard de métricas
   - Reportes de ingresos
   - Horarios más solicitados

## 🛡️ Seguridad

⚠️ **IMPORTANTE**: Esta aplicación es un prototipo y no está diseñada para manejar información personal identificable (PII) en producción. Para uso real, implementá:

- Cifrado de datos sensibles
- Compliance con GDPR/CCPA
- Auditoría de seguridad
- Backup automático
- Monitoreo de logs

## 📞 Soporte

Para consultas o problemas:
- Email: info@kingofkings.com
- WhatsApp: +54 11 1234-5678

## 📄 Licencia

Todos los derechos reservados © 2025 BarberShop

---

**Desarrollado con ❤️ usando React + Vite + Tailwind + Supabase**
