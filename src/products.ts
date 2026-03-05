type Project = {
  id: string;
  title: string;
  category: string;
  color: string;
  image: string;
  src: string;
  description: string;
  features: string[];
  technologies: string[];
  links: {
    github: string;
    demo: string;
  };
  role: string;
  timeline: string;
  platform: string;
};

export const projects: Project[] = [
  {
    id: "ecommerce-app",
    title: "FarmHub",
    category: "E-Commerce / App Design",
    color: "bg-accent-pink",
    image: "bg-[#FFD1DF]",
    src: "/images/farmhub.jpeg",
    description: "FarmHub is an e-commerce app that allows users to buy and sell farm products.",
    features: ["Buy and sell farm products", "Track orders", "Manage inventory", "Chat with sellers", "Payment processing"],
    technologies: ["React", "Node.js", "Tailwind CSS"],
    links: {
      github: "https://github.com/username/farmhub",
      demo: "https://farmhub.com",
    },
    role: "Mobile App Developer",
    timeline: "12 Weeks",
    platform: "Android",
  }
];