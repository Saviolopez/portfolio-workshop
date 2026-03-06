// data.ts — Portfolio data for Joshua S

export const personalInfo = {
  name: "Joshua S",
  title: "Data Analytics & Visualisation",
  tagline: "Turning raw data into stories that matter.",
  bio: "BCA Data Science student at SRM Institute of Science and Technology, passionate about transforming complex datasets into meaningful visual narratives. I blend analytical rigor with creative design to help organizations make smarter, data-driven decisions.",
  email: "joshenjoshua3@gmail.com",
  phone: "+91 9003016295",
  linkedin: "https://in.linkedin.com/in/joshua-s",
  github: "https://github.com/joshua-s", // update as needed
  location: "Chennai, Tamil Nadu, India",
  available: true,
};

export const skills = [
  {
    category: "Analytics & Data",
    items: [
      { name: "Data Analytics", level: 85 },
      { name: "Data Visualisation", level: 80 },
      { name: "Business Analytics", level: 75 },
    ],
  },
  {
    category: "Programming",
    items: [
      { name: "Python", level: 78 },
    ],
  },
  {
    category: "Soft Skills",
    items: [
      { name: "Leadership", level: 85 },
      { name: "Problem Solving", level: 90 },
      { name: "Content Creation", level: 80 },
    ],
  },
];

export const experience = [
  {
    id: 1,
    role: "Data Analytics & Visualisation",
    company: "Independent / Freelance",
    duration: "Present",
    description:
      "Helped a fast-growing company build its brand and attract new customers through creative visual design powered by data analytics.",
    tags: ["Data Analytics", "Visualisation", "Brand Strategy"],
  },
  {
    id: 2,
    role: "Data Analysis Content Creator",
    company: "SRM University",
    duration: "Present",
    description:
      "Plan and execute engaging events that bring the student community together. Creating educational content in Business Analytics for peers and faculty.",
    tags: ["Content Creation", "Business Analytics", "Event Planning"],
  },
];

export const education = [
  {
    id: 1,
    degree: "Bachelor of Computer Applications",
    specialisation: "Specialisation in Data Science (BCA DS)",
    institution: "SRM Institute of Science and Technology",
    duration: "Current",
    grade: null,
  },
];

export const projects = [
  {
    id: 1,
    title: "Brand Analytics Dashboard",
    description:
      "Built an interactive data visualisation dashboard to help a fast-growing startup track brand metrics, customer acquisition trends, and visual performance KPIs.",
    tags: ["Python", "Data Visualisation", "Dashboard"],
    link: "#",
    image: null,
    featured: true,
  },
  {
    id: 2,
    title: "Business Analytics Content Series",
    description:
      "Designed and published a content series on Business Analytics for SRM University students, covering real-world datasets, storytelling with data, and Python basics.",
    tags: ["Business Analytics", "Content Creation", "Python"],
    link: "#",
    image: null,
    featured: true,
  },
  {
    id: 3,
    title: "Student Event Analytics",
    description:
      "Analysed student engagement data from university events to provide actionable insights on event planning, timing, and audience targeting.",
    tags: ["Data Analytics", "Event Management", "Python"],
    link: "#",
    image: null,
    featured: false,
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks = [
  {
    platform: "LinkedIn",
    href: "https://in.linkedin.com/in/joshua-s",
    icon: "linkedin",
  },
  {
    platform: "GitHub",
    href: "https://github.com/joshua-s",
    icon: "github",
  },
  {
    platform: "Email",
    href: "mailto:joshenjoshua3@gmail.com",
    icon: "mail",
  },
];
