// Domain data: robot categories, robot catalog, industries, ecosystem, timeline.

export type Category = {
  slug: string;
  title: string;
  blurb: string;
  items: string[];
};

export const categories: Category[] = [
  {
    slug: "service",
    title: "Service Robots",
    blurb: "Reception, concierge, delivery, cleaning and security for public spaces.",
    items: ["Hotels", "Hospitals", "Airports", "Restaurants", "Malls", "Banks", "Reception", "Concierge", "Delivery", "Cleaning", "Security"],
  },
  {
    slug: "retail",
    title: "Retail Robots",
    blurb: "Cashier, inventory, shelf-scanning and shopping assistants for stores.",
    items: ["Cashier", "Inventory", "Shelf scanning", "Customer assist", "Price checking", "Self checkout", "Store analytics"],
  },
  {
    slug: "restaurant",
    title: "Restaurant Robots",
    blurb: "Food delivery, kitchen automation, barista and dish-collection robots.",
    items: ["Food delivery", "Kitchen automation", "Cooking", "Drinks", "Coffee", "Table assist", "Dish collection"],
  },
  {
    slug: "healthcare",
    title: "Healthcare Robots",
    blurb: "Patient monitoring, medication logistics, surgery assist and elderly care.",
    items: ["Patient monitoring", "Medication delivery", "Surgery assist", "Hospital logistics", "Telemedicine", "Elderly care", "Rehabilitation", "Emergency response"],
  },
  {
    slug: "hotel",
    title: "Hotel Robots",
    blurb: "Room delivery, reception, luggage handling and smart concierge.",
    items: ["Room delivery", "Reception", "Cleaning", "Luggage", "Guest assistant", "Smart concierge", "Security"],
  },
  {
    slug: "education",
    title: "Education Robots",
    blurb: "Teaching assistants, coding companions and AI laboratory robots.",
    items: ["Learning", "Teaching assistants", "Coding", "Research", "AI labs", "Campus"],
  },
  {
    slug: "home",
    title: "Home Robots",
    blurb: "Cleaning, cooking, companion, security and garden robots for the home.",
    items: ["Smart assistants", "Cleaning", "Cooking", "Companion", "Security", "Gardening", "Pet care", "Laundry"],
  },
  {
    slug: "industrial",
    title: "Industrial Robots",
    blurb: "Assembly, packaging, sorting, inspection and warehouse automation.",
    items: ["Assembly", "Packaging", "Sorting", "Material handling", "Inspection", "Quality control", "Warehouse", "Palletizing", "Logistics"],
  },
  {
    slug: "construction",
    title: "Construction Robots",
    blurb: "Bricklaying, painting, surveying, inspection and heavy lifting.",
    items: ["Bricklaying", "Painting", "Road construction", "Surveying", "Inspection", "Mining", "Heavy lifting"],
  },
  {
    slug: "agriculture",
    title: "Agriculture Robots",
    blurb: "Harvesting, planting, weeding, spraying and farm monitoring.",
    items: ["Harvesting", "Planting", "Weeding", "Spraying", "Livestock", "Drone integration", "Farm monitoring"],
  },
  {
    slug: "manufacturing",
    title: "Manufacturing Robots",
    blurb: "CNC automation, welding, assembly, machine tending and inspection.",
    items: ["CNC automation", "Welding", "Assembly", "Inspection", "Packaging", "Machine tending"],
  },
  {
    slug: "warehouse",
    title: "Warehouse Robots",
    blurb: "Picking, sorting, inventory, transport, loading and unloading.",
    items: ["Picking", "Sorting", "Inventory", "Transport", "Loading", "Unloading", "Automation"],
  },
  {
    slug: "security",
    title: "Security Robots",
    blurb: "Patrol, guard, border surveillance, monitoring and threat detection.",
    items: ["Patrol", "Guard", "Border surveillance", "Monitoring", "Threat detection"],
  },
  {
    slug: "defence",
    title: "Military & Defence",
    blurb: "Reconnaissance, bomb disposal, drone systems and battlefield AI.",
    items: ["Ground combat", "Reconnaissance", "Bomb disposal", "Drone systems", "Autonomous vehicles", "Surveillance", "Rescue", "Defense AI"],
  },
  {
    slug: "marine",
    title: "Marine Robotics",
    blurb: "Underwater inspection, research, ports and shipping automation.",
    items: ["Underwater", "Inspection", "Research", "Ports", "Shipping"],
  },
  {
    slug: "space",
    title: "Space Robotics",
    blurb: "Satellite servicing, exploration, maintenance and research.",
    items: ["Satellite robots", "Exploration", "Maintenance", "Research"],
  },
  {
    slug: "entertainment",
    title: "Entertainment Robots",
    blurb: "Theme parks, museums, events and interactive experiences.",
    items: ["Theme parks", "Museums", "Events", "Shows", "Interactive"],
  },
  {
    slug: "smart-city",
    title: "Smart City Robotics",
    blurb: "Traffic, cleaning, infrastructure inspection and public safety.",
    items: ["Traffic management", "Cleaning", "Inspection", "Delivery", "Public safety", "Maintenance"],
  },
];

export type Robot = {
  slug: string;
  name: string;
  series: string;
  tagline: string;
  category: string;
  priceFrom: number;
  status: "Available" | "Pre-order" | "Coming Soon";
  accent: string; // hex
  specs: { label: string; value: string }[];
  features: string[];
};

export const robots: Robot[] = [
  {
    slug: "atlas-one",
    name: "NETICS Atlas One",
    series: "Humanoid",
    tagline: "A general-purpose humanoid that walks, talks, sees and learns.",
    category: "Humanoid",
    priceFrom: 89000,
    status: "Pre-order",
    accent: "#19e3ff",
    specs: [
      { label: "Height", value: "1.72 m" },
      { label: "Payload", value: "25 kg" },
      { label: "Runtime", value: "8 hrs" },
      { label: "Degrees of Freedom", value: "42" },
      { label: "Vision", value: "360° depth + RGB" },
      { label: "Compute", value: "NETICS Brain X2" },
    ],
    features: ["Bipedal walking", "Emotion AI", "Multilingual voice", "Object manipulation", "Cloud sync memory", "Facial recognition"],
  },
  {
    slug: "sentinel-s4",
    name: "NETICS Sentinel S4",
    series: "Security",
    tagline: "Autonomous patrol & threat detection for any perimeter.",
    category: "Security",
    priceFrom: 42000,
    status: "Available",
    accent: "#2f6bff",
    specs: [
      { label: "Speed", value: "12 km/h" },
      { label: "Runtime", value: "16 hrs" },
      { label: "Range", value: "200 m thermal" },
      { label: "Sensors", value: "LiDAR + Thermal + RGB" },
      { label: "IP Rating", value: "IP67" },
      { label: "Comms", value: "5G / Mesh" },
    ],
    features: ["24/7 patrol", "Thermal detection", "License plate AI", "Two-way audio", "Auto-charging", "Incident streaming"],
  },
  {
    slug: "porter-p2",
    name: "NETICS Porter P2",
    series: "Service",
    tagline: "Delivery & concierge robot for hotels, hospitals and offices.",
    category: "Service",
    priceFrom: 18500,
    status: "Available",
    accent: "#7c5cff",
    specs: [
      { label: "Payload", value: "40 kg" },
      { label: "Runtime", value: "12 hrs" },
      { label: "Speed", value: "5 km/h" },
      { label: "Navigation", value: "Autonomous SLAM" },
      { label: "Capacity", value: "3 compartments" },
      { label: "Display", value: '15" touch' },
    ],
    features: ["Elevator integration", "Voice concierge", "Contactless delivery", "Fleet routing", "Multilingual UI", "Auto-dock charging"],
  },
  {
    slug: "forge-f9",
    name: "NETICS Forge F9",
    series: "Industrial",
    tagline: "6-axis industrial arm for welding, assembly and machine tending.",
    category: "Industrial",
    priceFrom: 31000,
    status: "Available",
    accent: "#19e3ff",
    specs: [
      { label: "Reach", value: "1.8 m" },
      { label: "Payload", value: "60 kg" },
      { label: "Repeatability", value: "±0.02 mm" },
      { label: "Axes", value: "6" },
      { label: "Cycle", value: "0.4 s" },
      { label: "Safety", value: "Collaborative" },
    ],
    features: ["Vision-guided picking", "Force feedback", "Digital twin", "Predictive maintenance", "Tool changer", "Offline programming"],
  },
  {
    slug: "harvest-h3",
    name: "NETICS Harvest H3",
    series: "Agriculture",
    tagline: "Autonomous field robot for harvesting, spraying and monitoring.",
    category: "Agriculture",
    priceFrom: 27500,
    status: "Pre-order",
    accent: "#2f6bff",
    specs: [
      { label: "Coverage", value: "40 ha/day" },
      { label: "Runtime", value: "10 hrs solar+" },
      { label: "Drive", value: "4WD electric" },
      { label: "Vision", value: "Crop-health AI" },
      { label: "Precision", value: "RTK GPS ±2 cm" },
      { label: "Modules", value: "Swappable tools" },
    ],
    features: ["Selective harvesting", "Targeted spraying", "Weed detection", "Yield mapping", "Drone link", "All-weather"],
  },
  {
    slug: "companion-c1",
    name: "NETICS Companion C1",
    series: "Home",
    tagline: "A friendly home assistant that helps, learns and protects.",
    category: "Home",
    priceFrom: 4900,
    status: "Coming Soon",
    accent: "#7c5cff",
    specs: [
      { label: "Height", value: "0.9 m" },
      { label: "Runtime", value: "10 hrs" },
      { label: "Voice", value: "Natural multilingual" },
      { label: "Vision", value: "Face + gesture" },
      { label: "Connectivity", value: "Wi-Fi 6E / Matter" },
      { label: "Privacy", value: "On-device AI" },
    ],
    features: ["Home control", "Companion AI", "Security patrol", "Reminders & care", "Video calls", "Child & pet aware"],
  },
];

export const industries = [
  "Healthcare", "Hospitality", "Education", "Manufacturing", "Government",
  "Construction", "Oil & Gas", "Retail", "Restaurants", "Smart Cities",
  "Mining", "Energy", "Transportation", "Logistics", "Warehousing",
  "Military", "Defense", "Agriculture", "Telecom", "Finance",
  "Homes", "Entertainment",
];

export const whyNetics = [
  { title: "Largest robotics ecosystem in Africa", desc: "An end-to-end network of factories, distributors and support centers." },
  { title: "AI-powered robots", desc: "Every machine runs NETICS Brain — vision, voice and predictive intelligence." },
  { title: "Custom manufacturing", desc: "Configure and build robots tailored to your industry and brand." },
  { title: "Worldwide delivery", desc: "Global logistics with local servicing in 48 countries." },
  { title: "Cloud robotics", desc: "Fleet management, OTA updates and digital twins from NETICS Cloud." },
  { title: "Robotics Operating System", desc: "NETICS OS unifies hardware, software and automation on one platform." },
  { title: "Enterprise deployment", desc: "From a single unit to thousands — deployed, integrated and supported." },
  { title: "24/7 support & training", desc: "Maintenance, training and remote support that never sleeps." },
];

export const ecosystem = [
  { name: "NETICS AI", desc: "The intelligence core powering every product." },
  { name: "NETICS Robotics", desc: "Hardware: humanoid, industrial and service robots." },
  { name: "NETICS Cloud", desc: "Fleet, telemetry and OTA at planetary scale." },
  { name: "NETICS Vision", desc: "Real-time perception, detection and recognition." },
  { name: "NETICS Voice", desc: "Multilingual natural conversation engine." },
  { name: "NETICS Brain", desc: "On-robot reasoning, planning and learning compute." },
  { name: "NETICS Assistant", desc: "Human-facing assistant across every surface." },
  { name: "NETICS OS", desc: "The robotics operating system tying it all together." },
  { name: "NETICS Business AI", desc: "Automation and insight for enterprises." },
  { name: "NETICS Automation", desc: "Workflow orchestration across fleets." },
  { name: "NETICS API", desc: "Programmable access to the whole stack." },
  { name: "NETICS Developer Platform", desc: "Build, simulate and ship robot apps." },
  { name: "NETICS Marketplace", desc: "Robots, apps, skills and accessories." },
  { name: "NETICS Humanoid", desc: "The flagship general-purpose humanoid program." },
  { name: "NETICS Smart Home", desc: "Connected robotics for living spaces." },
  { name: "NETICS Smart Factory", desc: "Lights-out manufacturing intelligence." },
  { name: "NETICS Smart City", desc: "Robotics infrastructure for nations." },
];

export const timeline = [
  { year: "2026", title: "Launch NETICS Robotics", desc: "Africa's robotics manufacturer & marketplace goes live." },
  { year: "2027", title: "AI Marketplace", desc: "Open platform for robots, skills and accessories." },
  { year: "2028", title: "Humanoid Assistant", desc: "General-purpose humanoid ships to enterprise." },
  { year: "2029", title: "Smart Factory", desc: "Fully autonomous lights-out production lines." },
  { year: "2030", title: "Autonomous Logistics", desc: "End-to-end robotic supply chains." },
  { year: "2032", title: "Robot Hospitals", desc: "Robotics-assisted care at national scale." },
  { year: "2035", title: "Robot Cities", desc: "Smart-city robotics infrastructure deployed." },
  { year: "2040", title: "AI Infrastructure", desc: "Continental robotics + AI backbone." },
  { year: "2045", title: "Consumer Humanoids", desc: "Affordable humanoids in everyday homes." },
  { year: "2050", title: "Global Robotics Network", desc: "Interconnected autonomous machine networks." },
  { year: "2055", title: "Civilization Infrastructure", desc: "AI & robotics as the substrate of society." },
];

export const dashboardMetrics = [
  { label: "Robots Online", value: 11842, suffix: "", trend: "+182 today" },
  { label: "Countries Deployed", value: 48, suffix: "", trend: "+2 this quarter" },
  { label: "Tasks Completed", value: 190, suffix: "M", trend: "+4.1M / week" },
  { label: "Fleet Uptime", value: 99.2, suffix: "%", trend: "30-day avg" },
];

export const blogPosts = [
  { slug: "humanoid-2028", title: "Why 2028 is the year of the humanoid", tag: "Future", read: "6 min", excerpt: "General-purpose robots are crossing the cost and capability threshold. Here's the data." },
  { slug: "vision-ai-edge", title: "Running Vision AI on the edge, at scale", tag: "Research", read: "9 min", excerpt: "How NETICS Vision keeps perception under 20ms on-robot." },
  { slug: "robots-africa", title: "Building the world's robots from Africa", tag: "Company", read: "5 min", excerpt: "Talent, manufacturing and ambition — the case for African robotics." },
  { slug: "fleet-ota", title: "Shipping OTA updates to 12,000 robots", tag: "Automation", read: "7 min", excerpt: "The architecture behind safe, staged fleet updates with NETICS Cloud." },
  { slug: "swarm-logistics", title: "Swarm intelligence for warehouse logistics", tag: "Robotics", read: "8 min", excerpt: "Hundreds of robots, one coordinated brain. Inside our swarm planner." },
  { slug: "roi-automation", title: "The real ROI of factory automation", tag: "Industry", read: "6 min", excerpt: "A practical model for payback periods on industrial robotics." },
];
