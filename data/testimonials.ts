type Testimonial = {
  name: string;
  role: string;
  quote: string;
  avatar: string;
  rating?: number;
};

export const testimonials: Testimonial[] = [
  {
    name: "Alex Johnson",
    role: "Founder, Startly",
    quote:
      "Working with this team was seamless. Our custom app was delivered on time and exceeded expectations.",
    avatar: "/avatar.jpg",
    rating: 5,
  },
  {
    name: "Maria Chen",
    role: "CMO, BrightEdge",
    quote:
      "Their marketing insights and development skills helped us 2x our lead conversion within a month.",
    avatar: "/avatar.jpg",
    rating: 5,
  },
  {
    name: "David Lee",
    role: "CTO, NovaTech",
    quote:
      "The automation flows and dashboard they built saved our team hours each week. Highly recommend!",
    avatar: "/avatar.jpg",
    rating: 5,
  },
  {
    name: "Sophie Kim",
    role: "Marketing Lead, Growthly",
    quote:
      "Incredible service and attention to detail. Our project results exceeded expectations.",
    avatar: "/avatar.jpg",
    rating: 5,
  },
  {
    name: "James Alvarez",
    role: "CEO, Syncware",
    quote:
      "They helped us scale our web presence quickly and with style. Would work with them again in a heartbeat.",
    avatar: "/avatar.jpg",
    rating: 5,
  },
];
