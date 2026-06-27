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
    label: "Robots",
    href: "/robots",
    children: [
      { label: "All Robots", href: "/robots", desc: "Browse the full lineup" },
      { label: "Humanoid", href: "/humanoid", desc: "NETICS humanoid platform" },
      { label: "Marketplace", href: "/marketplace", desc: "Shop like an Apple Store" },
      { label: "Build Your Robot", href: "/build", desc: "Configure & get a quote" },
    ],
  },
  {
    label: "Solutions",
    href: "/industries",
    children: [
      { label: "Industries", href: "/industries", desc: "22 sectors we serve" },
      { label: "Enterprise", href: "/enterprise", desc: "Gov, military, large orgs" },
      { label: "Case Studies", href: "/case-studies", desc: "Real deployments & ROI" },
      { label: "Live Dashboard", href: "/dashboard", desc: "Fleet intelligence" },
    ],
  },
  {
    label: "Platform",
    href: "/software",
    children: [
      { label: "NETICS OS", href: "/software", desc: "Robotics operating system" },
      { label: "Ecosystem", href: "/ecosystem", desc: "AI · Cloud · Vision · Voice" },
      { label: "Research & Dev", href: "/research", desc: "Inside the labs" },
      { label: "The Future", href: "/future", desc: "Roadmap to 2055" },
    ],
  },
  {
    label: "Company",
    href: "/about",
    children: [
      { label: "Distributors", href: "/distributors", desc: "Become a partner" },
      { label: "Investors", href: "/investors", desc: "Growth & vision" },
      { label: "Careers", href: "/careers", desc: "Build the future" },
      { label: "Support", href: "/support", desc: "Docs, training, help" },
      { label: "Blog", href: "/blog", desc: "AI & robotics insights" },
      { label: "Contact", href: "/contact", desc: "Talk to us" },
    ],
  },
];

export const footerCols: { title: string; links: NavChild[] }[] = [
  {
    title: "Robots",
    links: [
      { label: "All Robots", href: "/robots" },
      { label: "Humanoid", href: "/humanoid" },
      { label: "Marketplace", href: "/marketplace" },
      { label: "Build Your Robot", href: "/build" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Industries", href: "/industries" },
      { label: "Enterprise", href: "/enterprise" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Live Dashboard", href: "/dashboard" },
    ],
  },
  {
    title: "Platform",
    links: [
      { label: "NETICS OS", href: "/software" },
      { label: "Ecosystem", href: "/ecosystem" },
      { label: "Research & Dev", href: "/research" },
      { label: "The Future", href: "/future" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Distributors", href: "/distributors" },
      { label: "Investors", href: "/investors" },
      { label: "Careers", href: "/careers" },
      { label: "Support", href: "/support" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
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
