// Central site configuration: brand, navigation, social.

export const site = {
  name: "NETICS Robotics",
  parent: "NETICS AI",
  tagline: "The Future of Robotics Begins Here.",
  domain: "neticsrobotics.com",
  description:
    "Africa's largest robotics company. We manufacture, supply and deploy the world's most advanced AI-powered robots for homes, businesses, industries, governments and the future of humanity.",
  email: "hello@neticsrobotics.com",
  location: "Designed in Africa. Built for the world.",
};

export type NavChild = { label: string; href: string; desc?: string };
export type NavItem = { label: string; href: string; children?: NavChild[] };

export const nav: NavItem[] = [
  {
    label: "Shop",
    href: "/robots",
    children: [
      { label: "All Robots", href: "/robots", desc: "Browse the full store" },
      { label: "Humanoid", href: "/robots?category=Humanoid", desc: "General-purpose humanoids" },
      { label: "Service", href: "/robots?category=Service", desc: "Reception & concierge" },
      { label: "Industrial", href: "/robots?category=Industrial", desc: "Arms & manipulators" },
      { label: "Security", href: "/robots?category=Security", desc: "Patrol & detection" },
      { label: "Drones", href: "/robots?category=Aerial", desc: "Survey & overwatch" },
      { label: "Home & Companion", href: "/robots?category=Home", desc: "For everyday life" },
      { label: "Education", href: "/robots?category=Education", desc: "Learn & build" },
    ],
  },
  { label: "Humanoid", href: "/humanoid" },
  { label: "Business", href: "/industries" },
  { label: "Support", href: "/support" },
  { label: "About", href: "/about" },
];

export const footerCols: { title: string; links: NavChild[] }[] = [
  {
    title: "Shop",
    links: [
      { label: "All Robots", href: "/robots" },
      { label: "Humanoid", href: "/robots?category=Humanoid" },
      { label: "Industrial", href: "/robots?category=Industrial" },
      { label: "Drones", href: "/robots?category=Aerial" },
      { label: "Home & Companion", href: "/robots?category=Home" },
    ],
  },
  {
    title: "Business",
    links: [
      { label: "Industries", href: "/industries" },
      { label: "Enterprise", href: "/enterprise" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Become a Distributor", href: "/distributors" },
      { label: "Build Your Robot", href: "/build" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Center", href: "/support" },
      { label: "Contact Us", href: "/contact" },
      { label: "Track Order", href: "/support" },
      { label: "Warranty", href: "/support" },
      { label: "Financing", href: "/support" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Investors", href: "/investors" },
      { label: "Blog", href: "/blog" },
    ],
  },
];

export const socials = [
  { label: "X", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "YouTube", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "GitHub", href: "#" },
];

export const stats = [
  { value: "12K+", label: "Robots Deployed" },
  { value: "48", label: "Countries" },
  { value: "190M+", label: "Tasks Completed" },
  { value: "99.2%", label: "Fleet Uptime" },
];
