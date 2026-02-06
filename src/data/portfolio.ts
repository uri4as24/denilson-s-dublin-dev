export const personalInfo = {
  name: "Denilson Lopez",
  title: "Web Developer | Frontend + WordPress + IT Support",
  location: "Dublin, Ireland",
  email: "urias4141@gmail.com",
  phone: "+353 85 283 4330",
  linkedin: "https://www.linkedin.com/in/denilson-l/",
  github: "https://github.com/uri4as24",
  summary: "Web Developer with 2+ years of experience in CMS/WordPress, IT support, and frontend development. Currently pursuing a BSc (Hons) in Computing & IT at CCT College Dublin, with a strong foundation in software engineering, networking, and user-focused web experiences.",
  badges: ["Dublin", "WordPress", "Frontend", "IT Support", "SEO"],
};

export const aboutBullets = [
  {
    title: "WordPress & WooCommerce",
    description: "Building and maintaining high-performance e-commerce and business websites",
  },
  {
    title: "Frontend Development",
    description: "Creating responsive interfaces with HTML, CSS, JavaScript, and React",
  },
  {
    title: "SEO & Performance",
    description: "Optimizing websites for search engines and lightning-fast load times",
  },
  {
    title: "IT Support & Networking",
    description: "Managing networks, servers, and providing technical support",
  },
];

export const skills = {
  web: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "UX/UI"],
  cms: ["WordPress", "WooCommerce", "Divi"],
  dev: ["Git", "GitHub", "APIs", "Agile/SCRUM", "React"],
  it: ["Network Management", "Windows Server", "Debian", "Cloud Basics"],
  databases: ["MySQL", "SQL Server"],
  tools: ["Command Line", "VS Code", "Figma"],
};

export const projects = [
  {
    id: "topstyle",
    name: "Topstyle.ie",
    description: "Complete WooCommerce redesign with SEO optimization and performance improvements for a leading salon equipment supplier.",
    tech: ["WordPress", "WooCommerce", "SEO", "PHP"],
    link: "https://topstyle.ie",
    category: ["WordPress", "SEO"],
    featured: true,
  },
  {
    id: "topstylesalon",
    name: "topstylesalon.ie",
    description: "Full website build and ongoing maintenance for salon services platform.",
    tech: ["WordPress", "CSS", "SEO"],
    link: "https://topstylesalon.ie",
    category: ["WordPress"],
    featured: true,
  },
  {
    id: "itzig",
    name: "itzigproperty.com",
    description: "Property management website with modern design and easy content management.",
    tech: ["WordPress", "HTML5", "CSS", "JavaScript"],
    link: "https://itzigproperty.com",
    category: ["WordPress", "Frontend"],
    featured: true,
  },
  {
    id: "guestgrove",
    name: "guestgrove.com",
    description: "Hospitality website build with booking integrations and responsive design.",
    tech: ["WordPress", "CSS", "JavaScript"],
    link: "https://guestgrove.com",
    category: ["WordPress", "Frontend"],
    featured: true,
  },
  {
    id: "irishbeauty",
    name: "irishbeautysalons.com",
    description: "Directory website for Irish beauty salons with search and listing features.",
    tech: ["WordPress", "PHP", "SEO"],
    link: "https://irishbeautysalons.com",
    category: ["WordPress", "SEO"],
    featured: true,
  },
  {
    id: "medicamentos",
    name: "medicamentos.gob.sv",
    description: "Government pharmaceutical platform contribution with collaborative development.",
    tech: ["WordPress", "PHP", "SCRUM"],
    link: "https://medicamentos.gob.sv",
    category: ["WordPress", "IT"],
    featured: false,
  },
  {
    id: "santatecla",
    name: "santatecla.gob.sv",
    description: "Municipal government website development and technical support.",
    tech: ["WordPress", "Divi", "PHP", "jQuery"],
    link: "https://santatecla.gob.sv",
    category: ["WordPress", "IT"],
    featured: false,
  },
];

export const experience = [
  {
    id: "topstyle-role",
    title: "Web Developer",
    company: "Top Style Salon Equipment Limited",
    location: "Dublin, Ireland",
    period: "Feb 2024 – Present",
    description: [
      "Redesigned official website to enhance UX and visual appeal, resulting in improved user engagement",
      "Implemented comprehensive SEO improvements to increase organic visibility and search rankings",
      "Managed WordPress/WooCommerce maintenance, ensuring 99%+ uptime and optimal performance",
      "Leverages AI tools to accelerate development, streamline UI generation, and optimize debugging workflows",
      "Executed Google Ads and Google Merchant campaigns to drive conversions and sales",
      "Provided technical support and training to team members",
    ],
    tech: ["WordPress", "WooCommerce", "HTML5", "CSS", "PHP", "SEO", "Google Ads", "AI Tools"],
  },
  {
    id: "itzig-role",
    title: "Web Developer Jr.",
    company: "Itzig S.a.r.l",
    location: "Remote",
    period: "Jun 2022 – Feb 2024",
    description: [
      "Built and redesigned multiple websites using CMS platforms, HTML5, CSS, and JavaScript",
      "Conducted performance testing and implemented speed optimizations",
      "Applied AI-assisted tools for UX/UI decisions, code refactoring, and performance improvements",
      "Led user-centric improvements based on feedback and analytics",
      "Managed IT support and network infrastructure for remote operations",
      "Coordinated and led a distributed IT team across multiple time zones",
    ],
    tech: ["WordPress", "HTML5", "CSS", "JavaScript", "IT Support", "Networking", "AI Tools"],
    projects: ["itzigproperty.com", "guestgrove.com", "irishbeautysalons.com"],
  },
  {
    id: "government-role",
    title: "Web Developer Jr. & IT Support",
    company: "Government Municipality",
    location: "El Salvador",
    period: "Feb 2022 – Jun 2022",
    description: [
      "Developed and maintained WordPress sites using Divi, HTML/CSS, jQuery, and PHP",
      "Provided IT support including customer service, networking, and server management",
      "Implemented API integrations and performed system diagnostics",
      "Used AI tools to improve productivity and reduce development time on routine tasks",
    ],
    tech: ["WordPress", "Divi", "HTML", "CSS", "jQuery", "PHP", "APIs"],
    projects: ["santatecla.gob.sv"],
  },
  {
    id: "dnm-role",
    title: "Web Developer",
    company: "DNM El Salvador",
    location: "El Salvador",
    period: "Apr 2021 – May 2022",
    description: [
      "Created user stories and wireframes for new system development",
      "Collaborated on official website maintenance and updates using SCRUM methodology",
      "Gathered requirements across departments to define platform structure",
      "Leveraged AI-assisted tools for content creation and workflow optimization",
    ],
    tech: ["WordPress", "SCRUM", "Agile", "Requirements Gathering"],
    projects: ["medicamentos.gob.sv"],
  },
];

export const education = [
  {
    degree: "BSc (Hons) in Computing & IT",
    institution: "CCT College Dublin",
    period: "Currently Enrolled",
    current: true,
  },
  {
    degree: "Computer Systems Engineering Technician",
    institution: "ITCA Fepade",
    period: "2019 – 2021",
    current: false,
  },
];

export const certifications = [
  {
    name: "CCNA Routing and Switching: Introduction to Networks",
    issuer: "Cisco Networking Academy",
    period: "Feb 2021 – Jun 2021",
  },
  {
    name: "IT Essentials",
    issuer: "Cisco Networking Academy",
    period: "Feb 2021 – Jun 2021",
  },
  {
    name: "Introduction to Machine Learning",
    issuer: "Online Course",
    period: "Nov 2019 – Jan 2020",
  },
];
