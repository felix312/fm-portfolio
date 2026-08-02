export const profile = {
  name: "Felix Mwenda",
  first: "FELIX",
  last: "MWENDA",
  role: "Cybersecurity Engineer & Cloud IT Professional",
  secondDiscipline: "Second discipline: Videography & Content Editing",
  lede:
    "I secure infrastructure — networks, endpoints, and enterprise systems — through penetration testing, vulnerability assessment, and incident response. I bring the same eye for detail to the camera and edit bay, producing video content that has driven millions of views for institutional brands.",
  phone: "+254 716 477749",
  phoneHref: "tel:+254716477749",
  email: "felixmwenda102@gmail.com",
  emailHref: "mailto:felixmwenda102@gmail.com",
  location: "Nairobi, Kenya",
  github: "github.com/felix312",
  githubHref: "https://github.com/felix312",
};

export type Tag = { label: string; tone: "default" | "red" | "blue" };

export type Stat = { num: string; label: string };

export type CaseStudy = {
  title: string;
  org: string;
  period: string;
  description: string;
  stats?: Stat[];
  tags: Tag[];
};

export const securityCases: CaseStudy[] = [
  {
    title: "Security Consultant — ERP Systems",
    org: "Lumena Tech Co.",
    period: "2025 — 2026",
    description:
      "Advised on the security architecture of an enterprise ERP deployment — reviewing infrastructure design and access-control models for vulnerabilities, and delivering director-level hardening recommendations ahead of go-live.",
    tags: [
      { label: "ERP Security", tone: "red" },
      { label: "Architecture Review", tone: "red" },
      { label: "Technical Documentation", tone: "red" },
    ],
  },
  {
    title: "Assistant ICT Manager",
    org: "NIBS Technical College — Main Campus, Nairobi",
    period: "2024 — 2026",
    description:
      "Led multi-campus systems integration and implemented endpoint security frameworks across the institution — running vulnerability assessments, coordinating incident response, and automating security monitoring through scripting.",
    stats: [
      { num: "Multi-Campus", label: "systems integration & access control" },
      { num: "Full Lifecycle", label: "secure deployments & governance compliance" },
      { num: "Automated", label: "security monitoring & alerting" },
    ],
    tags: [
      { label: "Endpoint Protection", tone: "blue" },
      { label: "Incident Response", tone: "blue" },
      { label: "Infrastructure Management", tone: "blue" },
    ],
  },
  {
    title: "Cybersecurity Analyst",
    org: "Drew Web Company",
    period: "2023 — 2024",
    description:
      "Performed penetration testing and vulnerability assessments across client systems and web applications, developed security policy, and ran audits to reduce attack surface across environments.",
    tags: [
      { label: "Penetration Testing", tone: "blue" },
      { label: "Security Audits", tone: "blue" },
      { label: "Policy & Compliance", tone: "blue" },
    ],
  },
];

export type ReelCase = {
  title: string;
  org: string;
  description: string;
  stats?: Stat[];
  tags: Tag[];
};

export const reelCases: ReelCase[] = [
  {
    title: "Real Estate Video Production",
    org: "DB Studio Production — Kilimani, Nairobi",
    description:
      "Shot and edited property and promotional video content for a Kilimani-based real estate company, turning listings and developments into engaging visual stories built for social and web audiences.",
    tags: [
      { label: "Videography", tone: "red" },
      { label: "Adobe Premiere Pro", tone: "red" },
      { label: "Property Marketing", tone: "red" },
    ],
  },
  {
    title: "Video Content & Editing Lead",
    org: "NIBS Technical College",
    description:
      "Filmed and edited campus storytelling content end-to-end — shot selection, pacing, colour, and sound — building a consistent posting cadence that turned raw footage into one of the most-watched technical-college accounts in its category.",
    stats: [
      { num: "1,000 → 10.2K", label: "followers under my editing & production tenure" },
      { num: "263K+", label: "total likes on edited content" },
      { num: "473K", label: "views, single top-performing edit" },
    ],
    tags: [
      { label: "Video Editing", tone: "red" },
      { label: "Adobe Premiere Pro", tone: "red" },
      { label: "Visual Storytelling", tone: "red" },
    ],
  },
  {
    title: "Video Content & Editing Lead",
    org: "Lizzie Wanyoike Preparatory School",
    description:
      "Produced and edited everyday school-life video content that made the account a recognisable name among Nairobi's prep schools, with a consistent visual identity across every edit.",
    stats: [
      { num: "600 → 12K", label: "followers under my editing & production tenure" },
      { num: "281K+", label: "total likes on edited content" },
      { num: "918K", label: "views, single top-performing edit" },
    ],
    tags: [
      { label: "Video Editing", tone: "red" },
      { label: "Visual Storytelling", tone: "red" },
      { label: "Brand Consistency", tone: "red" },
    ],
  },
];

export const seoCards = [
  {
    org: "NIBS TECHNICAL COLLEGE",
    title: "Institutional Website Optimisation",
    description:
      "Managed and optimised the official college website — performance, security posture, and user engagement — alongside core ICT and content duties.",
  },
  {
    org: "DATA-DRIVEN STRATEGY",
    title: "Analytics-Led SEO & Social",
    description:
      "Used analytics to guide content and SEO decisions across channels, complementing the technical and video production work above.",
  },
];

export const skillCols = [
  {
    heading: "Security",
    items: [
      "Penetration Testing",
      "Vulnerability Assessment",
      "Incident Response",
      "Endpoint Protection",
    ],
  },
  {
    heading: "Networking & Systems",
    items: [
      "Network Security",
      "LAN/WAN, CCNA Concepts",
      "Firewall Configuration",
      "Infrastructure Management",
    ],
  },
  {
    heading: "Development",
    items: ["JavaScript / React", "Web App Security", "Git", "Security Automation Scripting"],
  },
  {
    heading: "Videography & Editing",
    items: [
      "Adobe Premiere Pro",
      "Video Production",
      "Visual Storytelling",
      "Content Strategy / SEO",
    ],
  },
];

export const education = [
  {
    name: "Diploma in Cyber Security & Ethical Hacking — CEH, CCNA",
    school: "Institute of Software Technologies",
    year: "2023 — 2024",
  },
  {
    name: "Diploma in Information Communication Technology",
    school: "East Africa Institute of Certified Studies",
    year: "2021 — 2023",
  },
  {
    name: "Certificate in Web Development & Design",
    school: "Nanyuki Institute of Communication Technology",
    year: "2019 — 2020",
  },
];

export const navLinks = [
  { label: "Security", href: "#security" },
  { label: "Video", href: "#video" },
  { label: "SEO", href: "#seo" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
