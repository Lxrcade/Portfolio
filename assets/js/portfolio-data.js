/**
 * Central Portfolio Data Configuration
 */
const PORTFOLIO_DATA = {
  profile: {
    role: "Full-Stack Web & IoT Developer",
    tagline: "Building modern, high-performance web applications with Vue 3, Supabase, Vercel, and embedded systems.",
    about: "I build modern, responsive web applications that combine functionality, usability, and thoughtful design. Experienced in modern Vue 3 ecosystems, serverless architecture, Supabase backends, and IoT hardware integration.",
    availability: "Available for freelance projects, full-time roles, and technical collaborations"
  },
  skills: [
    {
      category: "Front-end",
      items: ["VUE 3", "VITE", "PINIA", "VUE ROUTER", "PWA"],
      description: "Building responsive, modern, offline-ready single page applications."
    },
    {
      category: "Back-end & Serverless",
      items: ["SUPABASE", "NODE.JS", "DENO", "PHP / LARAVEL"],
      description: "Secure, scalable backend logic, authentication, and edge compute functions."
    },
    {
      category: "Databases & APIs",
      items: ["POSTGRESQL", "REST APIs", "REALTIME", "STORAGE"],
      description: "Relational data modeling, realtime websockets, and scalable storage."
    },
    {
      category: "UI/UX & Design",
      items: ["GOOGLE MATERIAL 3", "TAILWIND CSS", "FIGMA"],
      description: "Design system tokens, modern utility-first CSS, and cohesive design."
    },
    {
      category: "DevOps & Hardware",
      items: ["VERCEL", "SUPABASE CLOUD", "ESP32 / ARDUINO", "GIT"],
      description: "Edge deployments, continuous delivery, and embedded microcontroller hardware."
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = PORTFOLIO_DATA;
}
