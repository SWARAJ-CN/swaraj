import {
  Github,
  Gitlab,
  Instagram,
  Linkedin,
} from "lucide-react";

export const navigation = [
  ["Home", "home"],
  ["Internships", "internships"],
  ["Education", "education"],
  ["Certs", "certifications"],
  ["Skills", "skills"],
  ["Projects", "projects"],
  ["Contact", "contact"],
];

export const internships = [
  {
    role: "MERN DEVELOPER",
    organization: "Luminar Technolab",
    description: "6 months offline internship in Kochi. Mastered full-stack application architecture and real-time data handling.",
  },
  {
    role: "SECURITY ANALYST",
    organization: "Offenso Hackers Academy",
    description: "Intensive training in Ethical Hacking, Network Exploitation, and Advanced Reconnaissance.",
  },
  {
    role: "AI / ML",
    organization: "Livewire Kanhangad",
    description: "3 months training on Python-based Machine Learning models and Sentiment Analysis.",
  },
];

export const education = [
  {
    level: "GRADUATION",
    years: "2023 - 2026",
    degree: "Bachelor of Computer Applications",
    institution: "Kannur University",
    subjects: ["C", "C ++", "Java", "Python", "HTML/CSS", "Networking", "DBMS", "Algorithms", "Software Engineering"],
  },
  {
    level: "HIGHER SECONDARY",
    years: "2021 - 2023",
    degree: "Commerce & Computer Application",
    institution: "GHSS Balanthode",
    subjects: ["C++", "MySQL", "HTML/CSS/JS", "Network basics", "Hardwares", "Business", "Accountancy", "Economics"],
  },
];

export const certifications = [
  { icon: "fa-hat-cowboy", title: "Ethical Hacking Essentials", issuer: "Offenco Hackers Academy · 2023", href: "/asset/HACK.jpeg" },
  { icon: "fa-laptop-code", title: "MERN Full Stack Development", issuer: "Luminar Technolab · 2026", href: "/asset/Lum.jpeg" },
  { icon: "fa-brain", title: "MACHINE LEARNING", issuer: "Livewire Kanhangad · 2024", href: "/asset/ML.jpeg" },
];

export const skillGroups = [
  {
    title: "main skills",
    icon: "fa-code",
    skills: [
      ["fa-html5", "HTML"], ["fa-css3-alt", "CSS"], ["fa-js", "JavaScript"],
      ["fa-react", "React JS"], ["fa-node", "Node JS"], ["fa-react", "Next JS"],
      ["fa-wind", "Tailwind"], ["fa-database", "MongoDB"], ["fa-layer-group", "ODM"],
    ],
  },
  {
    title: "programming & tech",
    icon: "fa-terminal",
    skills: [
      ["fa-code", "C++"], ["fa-code", "Perl"], ["fa-gem", "Ruby"], ["fa-python", "Python"],
      ["fa-terminal", "Bash"], ["fa-database", "MySQL"], ["fa-database", "MariaDB"],
      ["fa-window-maximize", "CustomTkinter"], ["fa-microchip", "Arduino"],
    ],
  },
  {
    title: "tools & platform",
    icon: "fa-tools",
    skills: [
      ["fa-envelope", "Nodemailer"], ["fa-credit-card", "Payment gateway"], ["fa-cloud", "Vercel"],
      ["fa-cloud", "Render"], ["fa-globe", "Netlify"], ["fa-server", "Hostinger"],
      ["fa-google", "Google Indexing"], ["fa-git-alt", "Git"], ["fa-gitlab", "GitLab"],
      ["fa-hard-drive", "Linux hw maint"], ["fa-cloud", "Mongodb atlas"],
    ],
  },
  {
    title: "additional",
    icon: "fa-paint-brush",
    skills: [
      ["fa-windows", "Win/Linux dev"], ["fa-image", "Photoshop"], ["fa-table", "Excel"],
      ["fa-file-word", "Word"], ["fa-paint-brush", "Krita"], ["gimp", "GIMP"],
      ["fa-fly", "CorelDRAW"], ["fa-paint-roller", "CSS drawing"], ["fa-buromobelexperte", "Libreoffice"],
    ],
  },
];

export const projects = [
  {
    title: "Johns Rider CMS",
    description: "Driving school management with license expiry alerts, Nodemailer, admin dashboard.",
    features: [["fa-js", "Next.js"], ["fa-react", "MERN"], ["fa-envelope-open", "Nodemailer"], ["fa-user-tie", "admin panel"]],
    href: "https://johnsrider.com/",
  },
  {
    title: " Matrimony",
    description: "Community matrimony · secure login , Admin Verification .",
    features: [["fa-js", "Next.js"], ["fa-key", "Clerk API"], ["fa-user-tie", "Admin Panel"], ["fa-key", "Inngest"]],
    href: "https://mavila-matrimony.vercel.app/",
  },
  {
    title: "Social + E-commerce",
    description: "Hybrid platform with Ruby-script admin tools, session control, security first.",
    features: [["fa-react", "React"], ["fa-gem", "Ruby"], ["fa-ban", "Auto-ban"], ["fa-key", "Clerk"], ["fa-hamsa", "NSFW"], ["fa-fingerprint", "2FA Auth"]],
    href: "https://social-media-beta-sage.vercel.app/",
  },
];

export const hobbies = [
  ["fa-steam", "Gaming"], ["fa-palette", "Drawing"], ["fa-raspberry-pi", "Electronics projects"],
  ["fa-lightbulb", "Sound system building"], ["fa-motorcycle", "Solo Travelling"],
  ["fa-image", "Editing Photos"], ["fa-film", "Editing Videos"], ["fa-camera", "Shutterbug"],
  ["fa-mug-hot", "Foodie"], ["fa-compass", "Digital Explorer"],
];

export const socialLinks = [
  { label: "GitHub", href: "https://github.com/SWARAJ-CN", Icon: Github },
  { label: "GitLab", href: "https://gitlab.com/swarajcn774", Icon: Gitlab },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/swaraj-cn-8668112b1", Icon: Linkedin },
  { label: "Instagram", href: "https://www.instagram.com/s.waraj_/", Icon: Instagram },
];
