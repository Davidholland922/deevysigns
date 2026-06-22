import {
  Car,
  Store,
  PanelsTopLeft,
  Building2,
  Flag,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const CONTACT = {
  phone: "086 860 0265",
  phoneHref: "tel:+353868600265",
  whatsapp: "086 860 0265",
  whatsappHref:
    "https://wa.me/353868600265?text=Hi%20Deevy%20Signs%2C%20I%27d%20like%20to%20get%20a%20quote.",
  email: "dvsigns1@gmail.com",
  emailHref: "mailto:dvsigns1@gmail.com",
  location: "Portlaoise, Co. Laois, Ireland",
  hours: "Mon–Sat · 8am – 6pm",
};

export const SOCIAL = {
  facebook: "https://www.facebook.com/p/Brendan-Deevy-Signs-100063773251375/",
};

export type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  index: string;
};

export const SERVICES: Service[] = [
  {
    index: "01",
    icon: Car,
    title: "Vehicle Graphics",
    description:
      "Full van wraps, fleet liveries and vehicle branding that turns every journey into a moving billboard.",
    features: ["Full & partial wraps", "Fleet liveries", "Cut vinyl graphics"],
  },
  {
    index: "02",
    icon: Store,
    title: "Shop Front Signage",
    description:
      "Illuminated fascias, 3D built-up letters and shopfronts engineered to own the streetscape.",
    features: ["Built-up letters", "Illuminated fascias", "Projecting signs"],
  },
  {
    index: "03",
    icon: PanelsTopLeft,
    title: "Window Graphics",
    description:
      "Frosted manifestation, contra-vision and full-colour window displays that pull people in.",
    features: ["Frosted vinyl", "Contra-vision", "Full-colour prints"],
  },
  {
    index: "04",
    icon: Building2,
    title: "Commercial Signage",
    description:
      "Large-format wayfinding, totems and industrial signage for sites, estates and developments.",
    features: ["Wayfinding & totems", "Site & safety signs", "Large format"],
  },
  {
    index: "05",
    icon: Flag,
    title: "Banners & Displays",
    description:
      "Roller banners, event displays and exhibition stands that command attention at scale.",
    features: ["Exhibition stands", "Roller banners", "Event displays"],
  },
  {
    index: "06",
    icon: Sparkles,
    title: "Branding & Rebranding",
    description:
      "Logo systems, brand identity and the full rollout — designed, manufactured and installed.",
    features: ["Identity design", "Brand rollout", "Design consultancy"],
  },
];

export type Project = {
  id: string;
  title: string;
  client: string;
  industry: string;
  category: string;
  year: string;
  scope: string[];
  summary: string;
  image: string;
  gallery: string[];
  size: "tall" | "wide" | "regular";
};

export const PROJECTS: Project[] = [
  {
    id: "dpd-fleet",
    title: "DPD Courier Fleet",
    client: "DPD",
    industry: "Logistics & Delivery",
    category: "Fleet Livery",
    year: "2024",
    size: "tall",
    summary:
      "A crisp, fleet-wide livery rolled out across DPD's delivery vans — bold brand panels, precision-cut graphics and a finish that stays sharp on the road.",
    scope: ["Fleet wrap", "Cut vinyl graphics", "Brand panels"],
    image: "/wraps/wrap-1.jpg",
    gallery: ["/wraps/wrap-1.jpg", "/wraps/wrap-4.jpg", "/wraps/wrap-3.jpg"],
  },
  {
    id: "tadhg-ogs",
    title: "Tadhg Óg's",
    client: "Tadhg Óg's",
    industry: "Hospitality",
    category: "Shop Front Signage",
    year: "2024",
    size: "wide",
    summary:
      "A full shopfront for the oldest pub in Portlaoise — hand-finished fascias, traditional signwriting and window graphics that honour the heritage while standing out on the street.",
    scope: ["Shopfront fascia", "Signwriting", "Window graphics"],
    image: "/signs/sign-2.jpg",
    gallery: ["/signs/sign-2.jpg"],
  },
  {
    id: "sdes-electrical",
    title: "SDES Electrical",
    client: "Shane Doncher Electrical Services",
    industry: "Electrical & Trades",
    category: "Vehicle Graphics",
    year: "2024",
    size: "regular",
    summary:
      "A bold full-colour wrap for a busy Laois electrical contractor — strong logo presence, clear services and contact details that work hard at every job.",
    scope: ["Full wrap", "Logo design", "Contact graphics"],
    image: "/wraps/wrap-8.jpg",
    gallery: ["/wraps/wrap-8.jpg"],
  },
  {
    id: "fort-financial",
    title: "Fort Financial",
    client: "Fort Financial",
    industry: "Financial Services",
    category: "Shop Front Signage",
    year: "2024",
    size: "regular",
    summary:
      "Premium built-up lettering and a manifestation window set for a Main Street financial practice — refined, professional and built to last.",
    scope: ["Built-up letters", "Fascia sign", "Window graphics"],
    image: "/signs/sign-1.jpg",
    gallery: ["/signs/sign-1.jpg", "/signs/sign-3.jpg"],
  },
  {
    id: "jw-roofing",
    title: "JW Roofing Fleet",
    client: "JW Roofing",
    industry: "Construction & Roofing",
    category: "Fleet Livery",
    year: "2024",
    size: "tall",
    summary:
      "Matching graphics across a growing roofing fleet — one consistent, professional look that builds recognition and trust on every site in Laois.",
    scope: ["Fleet graphics", "Cut vinyl", "Consistent branding"],
    image: "/wraps/wrap-2.jpg",
    gallery: ["/wraps/wrap-2.jpg", "/wraps/wrap-5.jpg"],
  },
  {
    id: "plan-b",
    title: "Plan B Design",
    client: "Plan B",
    industry: "Interiors & Renovation",
    category: "Vehicle Graphics",
    year: "2024",
    size: "wide",
    summary:
      "A clean, contemporary wrap for a bathroom and interiors specialist — strong typography and a modern grey palette that mirrors the brand's design-led ethos.",
    scope: ["Full wrap", "Typography layout", "Social graphics"],
    image: "/wraps/wrap-13.jpg",
    gallery: ["/wraps/wrap-13.jpg"],
  },
  {
    id: "laois-heating",
    title: "Laois Heating & Plumbing",
    client: "Laois Heating & Plumbing",
    industry: "Heating & Plumbing",
    category: "Fleet Livery",
    year: "2023",
    size: "regular",
    summary:
      "A three-van fleet given one unmistakable identity — bright, legible graphics that turn every call-out into a moving advertisement across the county.",
    scope: ["Fleet livery", "Logo graphics", "Service panels"],
    image: "/wraps/wrap-9.jpg",
    gallery: ["/wraps/wrap-9.jpg"],
  },
  {
    id: "speedflex-blade",
    title: "SpeedFlex Blade",
    client: "SpeedFlex Blade",
    industry: "Fitness & Events",
    category: "Displays",
    year: "2024",
    size: "regular",
    summary:
      "A fully branded demonstration trailer that doubles as a roadshow stand — eye-catching graphics that bring the product to customers wherever it parks.",
    scope: ["Display trailer", "Large format", "Event branding"],
    image: "/wraps/wrap-11.jpg",
    gallery: ["/wraps/wrap-11.jpg"],
  },
];

export const STATS = [
  { value: 20, suffix: "+", label: "Years Experience" },
  { value: 1000, suffix: "+", label: "Projects Completed" },
  { value: 32, suffix: "", label: "Counties Served" },
  { value: 100, suffix: "%", label: "In-House Production" },
];

export const PROCESS = [
  {
    index: "01",
    title: "Discovery",
    description:
      "We get under the skin of your brand, your goals and your space — measuring up and mapping the opportunity.",
  },
  {
    index: "02",
    title: "Design",
    description:
      "Our studio crafts concepts and photorealistic visuals so you see exactly how it lands before we build.",
  },
  {
    index: "03",
    title: "Production",
    description:
      "Everything is manufactured in-house with premium materials, precision print and rigorous QC.",
  },
  {
    index: "04",
    title: "Installation",
    description:
      "Our fitters install safely and cleanly, on site nationwide, with minimal disruption to your day.",
  },
  {
    index: "05",
    title: "Results",
    description:
      "You get signage that works — turning heads, driving footfall and making your brand impossible to ignore.",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "Brendan and the team rebranded our entire fleet and the difference is night and day. We get comments on the vans every single week.",
    name: "Aoife Brennan",
    role: "Operations Director",
    company: "Midland Logistics",
  },
  {
    quote:
      "From concept to install the process was flawless. The new shopfront completely transformed how people see our business.",
    name: "David Quinn",
    role: "Owner",
    company: "Quinn & Co.",
  },
  {
    quote:
      "Genuinely the best signage company we've worked with in Ireland. Premium quality, on time, and brilliant to deal with.",
    name: "Niamh Kelly",
    role: "Marketing Manager",
    company: "Semora Tech",
  },
  {
    quote:
      "They treated our brand like their own. The attention to detail on the finish was something else entirely.",
    name: "Cormac Walsh",
    role: "Founder",
    company: "Saoirse Kitchen",
  },
];

export const PROJECT_TYPES = [
  "Vehicle Graphics",
  "Shop Front Signage",
  "Window Graphics",
  "Commercial Signage",
  "Banners & Displays",
  "Branding & Rebranding",
  "Not sure yet",
];

export const MARQUEE_WORDS = [
  "Vehicle Wraps",
  "Shop Fronts",
  "Illuminated Signs",
  "Fleet Branding",
  "Window Graphics",
  "Large Format",
  "Exhibition Stands",
  "Brand Identity",
];

/** Towns & counties served — used for local SEO copy and schema. */
export const SERVICE_AREAS = [
  "Portlaoise",
  "Mountmellick",
  "Portarlington",
  "Abbeyleix",
  "Mountrath",
  "Tullamore",
  "Carlow",
  "Kilkenny",
  "Athlone",
  "Naas",
  "Kildare",
  "Laois & the Midlands",
];

/** Frequently asked questions — drives content depth and FAQ rich results. */
export const FAQS = [
  {
    q: "What areas do you cover?",
    a: "We're based in Portlaoise, Co. Laois and work right across Laois and the Midlands — including Mountmellick, Portarlington, Tullamore, Carlow, Kilkenny, Athlone, Naas and Kildare — as well as nationwide installations anywhere in Ireland.",
  },
  {
    q: "How much does a van wrap or vehicle graphics cost?",
    a: "It depends on the vehicle size and whether you want a full wrap, partial wrap or cut-vinyl graphics. Most commercial vehicles fall within a clear, fixed price band — send us your vehicle details for a no-obligation quote, usually back within one working day.",
  },
  {
    q: "Do you design the artwork as well as make and fit the signs?",
    a: "Yes. We're a full-service studio — we design, manufacture and install everything in-house. That means one team owns the whole job, from the first concept and photorealistic visuals through to a clean, professional fit.",
  },
  {
    q: "What types of signage do you make?",
    a: "Vehicle graphics and van wraps, illuminated and built-up shop front signage, window graphics and manifestation, commercial and wayfinding signage, banners, exhibition displays, plus full branding and rebranding rollouts.",
  },
  {
    q: "How long does a typical signage or wrap project take?",
    a: "Most vehicle wraps are turned around in a few days once artwork is approved, and shop fronts typically within one to two weeks depending on materials and lead times. We'll confirm an exact timeline with your quote.",
  },
  {
    q: "Can you rebrand an existing fleet or shopfront?",
    a: "Absolutely. We remove old graphics, prep the surface and apply your new identity — keeping the look consistent across every vehicle and location so your brand stays sharp.",
  },
];
