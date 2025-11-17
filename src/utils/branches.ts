export interface Branch {
  id: string;
  name: string;
  address: string;
  city: string;
  fullAddress: string;
  schedule: {
    [key: string]: { open: string; close: string } | null;
  };
  mapUrl: string;
  mapEmbed: string;
}

export const BRANCHES: Branch[] = [
  {
    id: "temperley-tarija",
    name: "Tarija",
    address: "Tarija 2080",
    city: "Temperley, Buenos Aires",
    fullAddress: "Tarija 2080, Temperley – Buenos Aires",
    schedule: {
      monday: null,
      tuesday: { open: "10:30", close: "20:00" },
      wednesday: { open: "10:30", close: "20:00" },
      thursday: { open: "10:30", close: "20:00" },
      friday: { open: "10:30", close: "20:00" },
      saturday: { open: "10:30", close: "20:00" },
      sunday: null,
    },
    mapUrl:
      "https://maps.google.com/?q=Tarija+2080+Temperley+Buenos+Aires",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3279.123!2d-58.395!3d-34.778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDQ2JzQwLjgiUyA1OMKwMjMnNDIuMCJX!5e0!3m2!1sen!2sar!4v1234567890",
  },
  {
    id: "jose-marmol",
    name: "Amenedo",
    address: "Amenedo 4371",
    city: "San José, Buenos Aires",
    fullAddress: "Amenedo 4371, San José – Buenos Aires",
    schedule: {
      monday: null,
      tuesday: { open: "10:30", close: "20:00" },
      wednesday: { open: "10:30", close: "20:00" },
      thursday: { open: "10:30", close: "20:00" },
      friday: { open: "10:30", close: "20:00" },
      saturday: { open: "10:30", close: "20:00" },
      sunday: null,
    },
    mapUrl:
      "https://maps.google.com/?q=Amenedo+4371+Jose+Marmol+Buenos+Aires",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3279.456!2d-58.367!3d-34.792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDQ3JzMxLjIiUyA1OMKwMjInMDEuMiJX!5e0!3m2!1sen!2sar!4v1234567891",
  },
  {
    id: "temperley-evita",
    name: "Pasco",
    address: "Av. Eva Perón 818",
    city: "Temperley, Buenos Aires",
    fullAddress:
      "Avenida Eva Perón 818, Temperley – Buenos Aires",
    schedule: {
      monday: { open: "10:00", close: "20:00" },
      tuesday: { open: "10:00", close: "20:00" },
      wednesday: { open: "10:00", close: "20:00" },
      thursday: { open: "10:00", close: "20:00" },
      friday: { open: "10:00", close: "20:00" },
      saturday: { open: "10:00", close: "20:00" },
      sunday: null,
    },
    mapUrl:
      "https://maps.google.com/?q=Av+Eva+Peron+818+Temperley+Buenos+Aires",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3279.234!2d-58.402!3d-34.779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDQ2JzQ0LjQiUyA1OMKwMjQnMDcuMiJX!5e0!3m2!1sen!2sar!4v1234567892",
  },
];

export const BUSINESS_INFO = {
  name: "King of Kings",
  fullName: "King of Kings Barbershop",
  phone: "11 2282-9647",
  phoneLink: "+541122829647",
  email: "alejomassi69@gmail.com",
  instagram: "@King.offkings_",
  instagramUrl: "https://instagram.com/King.offkings_",
  facebook: "https://facebook.com",
  whatsapp: "https://wa.me/541122829647",
};

export function getBranchById(
  branchId: string,
): Branch | undefined {
  return BRANCHES.find((b) => b.id === branchId);
}

export function getDayName(date: Date): string {
  const days = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];
  return days[date.getDay()];
}

export function isBranchOpenOnDay(
  branch: Branch,
  date: Date,
): boolean {
  const dayName = getDayName(date);
  return branch.schedule[dayName] !== null;
}

export function getBranchHours(
  branch: Branch,
  date: Date,
): { open: string; close: string } | null {
  const dayName = getDayName(date);
  return branch.schedule[dayName];
}

export function isTimeInRange(
  time: string,
  openTime: string,
  closeTime: string,
): boolean {
  const [hours, minutes] = time.split(":").map(Number);
  const [openHours, openMinutes] = openTime
    .split(":")
    .map(Number);
  const [closeHours, closeMinutes] = closeTime
    .split(":")
    .map(Number);

  const timeMinutes = hours * 60 + minutes;
  const openMinutes_total = openHours * 60 + openMinutes;
  const closeMinutes_total = closeHours * 60 + closeMinutes;

  return (
    timeMinutes >= openMinutes_total &&
    timeMinutes < closeMinutes_total
  );
}