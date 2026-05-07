const portfolioData = [
  {
    category: "Enterprise & Production Systems",
    projects: [
      {
        title: "Enterprise Warehouse Management Ecosystem",
        description:
          "Production-grade Warehouse Management System (WMS) supporting Indonesia and China operations with 400K+ daily transaction records and 12+ interconnected microservices.",
        tech: [
          "Java Spring Boot",
          "Microservices",
          "SAP",
          "ERP",
          "LES",
          "XXL-JOBS",
          "Docker",
          "Jenkins",
          "ELK",
          "Grafana",
        ],
        highlights: [
          "400K+ daily transaction processing",
          "Distributed scheduler architecture",
          "CI/CD pipeline automation",
          "Centralized logging & monitoring",
          "International engineering collaboration",
          "High availability production system",
        ],
        status: "Enterprise Production System",
        confidential: true,
        icon: "enterprise",
        links: {
          live: null,
          github: null,
        },
      },

      {
        title: "Web Pass-logistic.com",
        description:
          "Company profile and logistics platform with route-based courier pricing system and SEO-optimized frontend architecture.",
        tech: ["Lumen", "MySQL", "Next.js", "React.js"],
        highlights: [
          "SEO optimization",
          "Dynamic pricing system",
          "Production deployment",
        ],
        status: "Production",
        icon: "folder",
        links: {
          live: "http://pass-logistic.com/",
          github: null,
        },
      },

      {
        title: "Monitoring Server API Service",
        description:
          "Infrastructure monitoring API service with real-time uptime checks and automated alert notifications via Telegram, LINE, and Email integrations.",
        tech: ["Golang", "Gorm", "PostgreSQL"],
        highlights: [
          "Real-time monitoring",
          "Alert automation",
          "Infrastructure observability",
        ],
        status: "Production",
        icon: "github",
        links: {
          github: "https://github.com/dzoxploit/monitorsuptime",
          live: null,
        },
      },
    ],
  },

  {
    category: "Backend Engineering",
    projects: [
      {
        title: "API MoneyQU Laravel",
        description:
          "RESTful backend API service powering MoneyQU financial management mobile application with authentication, transaction management, and cloud storage integration.",
        tech: ["Laravel", "MySQL", "AWS S3"],
        highlights: [
          "REST API architecture",
          "Cloud storage integration",
          "Authentication system",
        ],
        status: "Personal Product",
        icon: "github",
        links: {
          live: null,
          github: "https://github.com/dzoxploit/api-moneyqu-laravel",
        },
      },

      {
        title: "API Golang Starter",
        description:
          "Scalable Golang REST API starter template implementing JWT authentication, middleware architecture, and modular service structure using Gin framework.",
        tech: ["Golang", "MySQL", "Gin"],
        highlights: [
          "JWT authentication",
          "Middleware architecture",
          "Scalable backend structure",
        ],
        status: "Open Source",
        icon: "github",
        links: {
          github: "https://github.com/dzoxploit/apigolang",
        },
      },

      {
        title: "MERN Stack Mail Boilerplate",
        description:
          "Simple MERN stack boilerplate for email-style applications with modular backend and frontend architecture.",
        tech: ["React.js", "MongoDB", "Express.js", "Node.js"],
        highlights: [
          "MERN architecture",
          "Authentication flow",
          "Reusable starter template",
        ],
        status: "Open Source",
        icon: "github",
        links: {
          github: "https://github.com/dzoxploit/mail-app-coding-test",
          live: null,
        },
      },

      {
        title: "Simple Ecommerce Platform",
        description:
          "Fullstack ecommerce application featuring Redis caching, authentication, and scalable backend architecture.",
        tech: ["Laravel", "MySQL", "Redis", "React.js", "Inertia.js"],
        highlights: [
          "Redis caching",
          "Authentication system",
          "Modern SPA architecture",
        ],
        status: "Technical Assessment",
        icon: "github",
        links: {
          github: "https://github.com/dzoxploit/simple-eccommerce",
        },
      },

      {
        title: "Lapangan Booking System",
        description:
          "Booking management backend system with scalable API architecture and optimized database access using Prisma ORM.",
        tech: ["Node.js", "MySQL", "Redis", "Prisma ORM"],
        highlights: [
          "Booking workflow",
          "Database optimization",
          "REST API backend",
        ],
        status: "Technical Assessment",
        icon: "github",
        links: {
          github: "https://github.com/dzoxploit/cms_booking_lapangan_backend",
        },
      },
    ],
  },

  {
    category: "Mobile Applications",
    projects: [
      {
        title: "MoneyQU Mobile App",
        description:
          "Teen-focused financial management mobile application with expense tracking and PPOB integration roadmap.",
        tech: ["Flutter", "Dart", "BLoC"],
        highlights: [
          "Cross-platform mobile app",
          "State management with BLoC",
          "Financial tracking features",
        ],
        status: "Ongoing Development",
        icon: "github",
        links: {
          github: "https://github.com/dzoxploit/moneyqu_flutter",
        },
      },
    ],
  },

  {
    category: "Research & Experimental Projects",
    projects: [
      {
        title: "AI Fundamental Project",
        description:
          "Collection of machine learning and artificial intelligence experiments using Python and Jupyter Notebook environment.",
        tech: ["Python", "Numpy", "Matplotlib", "Cupy"],
        highlights: [
          "Machine learning experiments",
          "Data visualization",
          "AI research playground",
        ],
        status: "Research",
        icon: "github",
        links: {
          github: "https://github.com/dzoxploit/AI-fundamental",
        },
      },

      {
        title: "Rusteez",
        description:
          "Learning repository for Rust programming language featuring small practical examples and systems programming exercises.",
        tech: ["Rust", "Cargo"],
        highlights: [
          "Systems programming",
          "Rust experimentation",
          "CLI projects",
        ],
        status: "Learning Repository",
        icon: "github",
        links: {
          github: "https://github.com/dzoxploit/rusteez",
        },
      },

      {
        title: "Gamespace Didin",
        description:
          "Collection of browser-based mini games built using JavaScript and Canvas API for frontend experimentation.",
        tech: ["JavaScript", "Canvas API"],
        highlights: [
          "Canvas rendering",
          "Browser game logic",
          "Frontend experimentation",
        ],
        status: "Experimental",
        icon: "external",
        links: {
          live: "https://gamespace-didin.netlify.app/",
        },
      },

      {
        title: "Sepertibiasa Blog",
        description:
          "Personal self-improvement blog platform built with modern frontend architecture and SEO-friendly rendering.",
        tech: ["Lumen", "MySQL", "Next.js", "React.js"],
        highlights: [
          "SEO-friendly rendering",
          "Modern blog architecture",
          "Personal writing platform",
        ],
        status: "Personal Project",
        icon: "folder",
        links: {
          live: "https://sepertibiasa-web.vercel.app/",
          github: null,
        },
      },
    ],
  },
];

export default portfolioData;
