export const PERSONAL_INFO = {
  name: 'Bhupendra Kushwah',
  title: 'Full Stack Developer',
  subtitle: 'Building Scalable Web Apps, High-Throughput APIs & Cross-Platform Mobile Solutions',
  email: 'Bhupendrakushwah977@gmail.com',
  phone: '+91 9770239467',
  rawPhone: '+919770239467',
  location: 'Gwalior, Madhya Pradesh, India',
  status: 'Open to new opportunities',
  experienceYears: '2+ Years Production Experience',
  summary:
    'Full Stack Developer with hands-on experience building scalable, high-performance applications using React.js, Node.js, and MongoDB. Proven track record of boosting system performance (up to 80% faster APIs, 60% faster load times) and enhancing user satisfaction. Skilled in modernizing legacy systems, designing secure mobile features, and deploying applications on AWS. Strong collaborator with a passion for solving real-world problems through clean, efficient code.',
  socials: {
    github: 'https://github.com/bhupendrakushwah',
    linkedin: 'https://linkedin.com/in/bhupendra-kushwah',
    email: 'mailto:Bhupendrakushwah977@gmail.com',
    phone: 'tel:+919770239467'
  }
};

export const METRIC_HIGHLIGHTS = [
  {
    value: '80%',
    label: 'Faster API Latency',
    detail: 'Achieved through database query indexing, MongoDB aggregations, and REST caching at Agami Technologies.',
    iconName: 'Zap'
  },
  {
    value: '60%',
    label: 'Site Speed Boost',
    detail: 'Engineered frontend rendering optimizations and asset pipelines to drastically lower initial page load times.',
    iconName: 'Gauge'
  },
  {
    value: '40%',
    label: 'Fewer Reported Issues',
    detail: 'Eliminated recurring critical production bugs across enterprise web applications, boosting overall reliability.',
    iconName: 'ShieldCheck'
  },
  {
    value: '40%',
    label: 'ERP System Load Reduction',
    detail: 'Refactored User Management, Student Information System (SIS), and Payroll micro-modules on SCHEZY.',
    iconName: 'Layers'
  }
];

export const CASE_STUDIES = [
  {
    id: 'schezy-erp',
    title: 'SCHEZY - School Management ERP',
    subtitle: 'Full Stack Cloud ERP & Cross-Platform Mobile Solution for Educational Institutions',
    category: 'EdTech & ERP',
    clientOrContext: 'Enterprise EdTech Production System',
    period: '2024',
    role: 'Full Stack Engineer (Front End & Back End)',
    techStack: ['React.js', 'Node.js', 'MongoDB', 'AWS S3', 'Capacitor.js', 'Bootstrap', 'REST APIs'],
    summary:
      'Engineered an all-in-one educational ERP modernizing legacy architecture into a modular React.js platform with hybrid mobile APK support, automated fee cycles, and secure AWS S3 cloud storage.',
    metrics: [
      { label: 'System Load Time', value: '-40%', description: 'Optimized core modules (SIS, Payroll, User Management)' },
      { label: 'Mobile Accessibility', value: '100%', description: 'Capacitor.js APK with real-time push alerts & file downloads' },
      { label: 'Billing Cycles', value: '4 Tiers', description: 'Monthly, quarterly, semester, and annual student fee automation' },
      { label: 'Data Security', value: 'AWS S3', description: 'Secure media storage & automated database backup pipeline' }
    ],
    challenge: {
      title: 'The Challenge: Fragile Legacy Architecture & Missing Mobile Mobility',
      description:
        'The institution previously relied on an outdated, monolithic PHP system plagued with slow response times during peak admissions and examination periods. Guardians and students lacked direct mobile access for instantaneous announcements, and administrators faced frequent payment reconciliation errors due to rigid billing cycle structures.',
      painPoints: [
        'Monolithic PHP codebase with high server overhead and slow page render times',
        'No mobile app presence or push notification mechanism for urgent school circulars',
        'Complex, error-prone manual fee accounting across irregular semester and monthly cycles',
        'Unsafe local server storage for critical transcripts, report cards, and student records',
        'System bottlenecks in student record lookups and monthly teacher payroll processing'
      ]
    },
    solution: {
      title: 'The Solution: Modern Decoupled React Architecture & Hybrid Mobile Bridge',
      description:
        'Architected a high-throughput Node.js + Express REST backend backed by MongoDB, alongside a responsive React.js SPA. Extended the application to Android/iOS with Capacitor.js for native push notifications, secure encrypted document downloads, and seamless offline-ready interactions.',
      architecturalHighlights: [
        'Migrated legacy PHP rendering directly to a modular React.js component ecosystem',
        'Engineered native mobile capabilities (real-time push notifications, background sync) via Capacitor.js',
        'Constructed a dynamic multi-cycle Accounts & Fee module supporting flexible payment schedules and instant PDF receipts',
        'Integrated AWS S3 buckets with signed URLs for confidential document uploads, automated daily database snapshot backups',
        'Refactored data pipelines for Student Information System (SIS) and Payroll, slashing response times by 40%'
      ]
    },
    keyFeatures: [
      {
        title: 'Cross-Platform Mobile APK',
        description: 'Engineered using Capacitor.js to deliver real-time push notifications for parents and students, with native file download handlers for exam sheets and homework.',
        badge: 'Mobile & Push'
      },
      {
        title: 'Multi-Cycle Fee & Accounts Engine',
        description: 'Automated billing algorithms handling monthly, quarterly, semester, and annual school fees, complete with late-fee penalty tracking and invoice generation.',
        badge: 'Finance & Payments'
      },
      {
        title: 'AWS S3 Cloud Infrastructure',
        description: 'Secure S3 bucket pipeline for student documents, photos, and report cards, coupled with automated MongoDB snapshot backups.',
        badge: 'Cloud & Security'
      },
      {
        title: 'High-Performance SIS & Payroll Modules',
        description: 'Streamlined student registration, attendance tracking, and faculty payroll calculations, reducing server load by 40%.',
        badge: 'Optimization'
      }
    ],
    impact: [
      'Successfully transitioned hundreds of active school staff and thousands of students to the modern React.js platform.',
      'Reduced average server response time by 40% across student lookup and payroll queries.',
      'Eliminated manual fee calculation discrepancies across complex payment schedules.',
      'Enhanced guardian engagement with immediate push notifications on mobile devices.'
    ],
    liveStatus: 'Active Production ERP'
  },
  {
    id: 'mloflo-crm',
    title: 'MLOFLO - Mortgage CRM & Loan Pipeline',
    subtitle: 'High-Converting Loan Origination & Multi-Stakeholder Collaboration Platform',
    category: 'FinTech & CRM',
    clientOrContext: 'FinTech & Real Estate Lending SaaS',
    period: '2024',
    role: 'Full Stack Engineer (Front End & Back End)',
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Bootstrap', 'REST APIs'],
    summary:
      'Designed and engineered role-specific workflow portals for 6 key mortgage lending personas, automating lead conversion pipelines and enabling real-time loan status tracking with secure document uploads.',
    metrics: [
      { label: 'Stakeholder Portals', value: '6 Roles', description: 'Loan Officers, Assistants, Processors, Realtors, Partners, Borrowers' },
      { label: 'Lead Progression', value: 'Automated', description: 'Rule-based triggers moving prospects from inquiry to underwrite' },
      { label: 'Document Security', value: 'Real-Time', description: 'Direct client portal upload & verified loan milestone tracking' },
      { label: 'Workflow Efficiency', value: 'Streamlined', description: 'Drastic turnaround time reduction across loan applications' }
    ],
    challenge: {
      title: 'The Challenge: Disconnected Stakeholders & Bottlenecks in Loan Underwriting',
      description:
        'Mortgage origination involves high-stakes collaboration between multiple distinct actors: loan officers, processors, real estate agents, referral partners, and the end borrowers. Prior workflows were plagued by scattered email attachments, missed status updates, delayed document reviews, and leaked leads due to manual tracking.',
      painPoints: [
        'Borrowers had no real-time transparency into their mortgage approval milestones',
        'Loan Officers and Processors spent hours manually chasing missing financial documents',
        'Lack of role-based access control (RBAC) risking sensitive financial data exposure',
        'High lead drop-off rates due to unstandardized follow-up workflows'
      ]
    },
    solution: {
      title: 'The Solution: Persona-Driven Dashboards & Automated Pipeline Engine',
      description:
        'Architected tailored dashboards with granular permission boundaries for 6 specific user roles. Implemented an automated lead capture and progression engine that moves prospects through qualification, documentation, processing, underwriting, and closing with automated alerts.',
      architecturalHighlights: [
        'Created 6 customized role-based interfaces with context-specific action centers and pipeline summaries',
        'Built secure client portal enabling borrowers to upload W-2s, bank statements, and tax returns directly with encrypted verification',
        'Designed real-time loan progress trackers providing instant milestone visibility for realtors and clients',
        'Engineered an automated lead pipeline with stage-based triggers and notification alerts'
      ]
    },
    keyFeatures: [
      {
        title: '6 Role-Specific Command Centers',
        description: 'Customized views and workflows tailored to Loan Officers, Assistants, Processors, Realtors, Partners, and Borrowers.',
        badge: 'RBAC Security'
      },
      {
        title: 'Automated Lead Management',
        description: 'Intelligent lead assignment, automated task creation, and stage-gate progression to boost conversion rates.',
        badge: 'Automation'
      },
      {
        title: 'Real-Time Borrower Portal',
        description: 'Clean, transparent client interface showing current loan progress, required disclosures, and one-click file uploads.',
        badge: 'Client UX'
      },
      {
        title: 'Operational Workflow Optimizer',
        description: 'Standardized underwriting checklists, processor task queues, and SLA alert timers.',
        badge: 'Efficiency'
      }
    ],
    impact: [
      'Streamlined communication between mortgage teams, reducing loan processing turnaround times.',
      'Significantly increased client engagement and conversion rates from lead inquiry to completed application.',
      'Eliminated lost paperwork by providing a centralized, secure repository for all mortgage documentation.',
      'Strengthened realtor partner loyalty with automated real-time status updates on client deals.'
    ],
    liveStatus: 'Active Production CRM'
  }
];

export const EXPERIENCES = [
  {
    id: 'agami-technologies',
    role: 'Software Engineer (SE)',
    company: 'Agami Technologies',
    location: 'India',
    period: 'December 2023 - Present',
    type: 'Full-time',
    summary:
      'Developing and maintaining enterprise-grade full-stack web applications and high-performance backend microservices using Node.js, Express.js, MongoDB, and React.js.',
    highlights: [
      'Developed and maintained high-performance back-end services using Node.js, Express.js, and MongoDB, ensuring scalable and maintainable codebases.',
      'Improved API performance by 80% through optimization techniques, enhancing data retrieval speed and user experience.',
      'Resolved critical bugs across web applications, reducing user-reported issues by 40% and boosting overall system reliability.',
      'Implemented performance enhancements that increased site speed by 60%, driving higher user satisfaction and engagement.'
    ],
    techStack: ['Node.js', 'Express.js', 'MongoDB', 'React.js', 'REST APIs', 'AWS S3', 'Git', 'Performance Profiling'],
    metrics: ['+80% API Speedup', '+60% Site Speed Boost', '-40% Bug Frequency']
  }
];

export const EDUCATION = [
  {
    id: 'rgpv-btech',
    degree: "Bachelor's Degree in Computer Science",
    field: 'Computer Science and Engineering',
    institution: 'RGPV University (Rajiv Gandhi Proudyogiki Vishwavidyalaya)',
    location: 'Bhopal, Madhya Pradesh, India',
    period: 'July 2020 - May 2024',
    highlights: [
      'Focused on Data Structures, Algorithms, Database Management Systems (DBMS), Operating Systems, and Software Engineering methodologies.',
      'Extensive practical project work in Web Technologies, Distributed Systems, and Modern Application Architectures.'
    ]
  }
];

export const SKILL_CATEGORIES = [
  {
    category: 'Front-End Development',
    description: 'Modern, responsive user interfaces built with performance and clean code.',
    skills: [
      { name: 'React.js', level: 'Advanced', highlight: 'Component Architecture, Hooks, State' },
      { name: 'JavaScript (ES6+)', level: 'Advanced', highlight: 'Asynchronous JS, Closures, DOM' },
      { name: 'Next.js', level: 'Proficient', highlight: 'SSR, App Router, Static Optimization' },
      { name: 'Redux / Context', level: 'Proficient', highlight: 'Global State, Action Dispatches' },
      { name: 'HTML5 & CSS3', level: 'Advanced', highlight: 'Semantic Markup, Responsive Design' },
      { name: 'Tailwind CSS', level: 'Advanced', highlight: 'Utility-first styling, Dark mode' },
      { name: 'Bootstrap', level: 'Advanced', highlight: 'Grid systems, Rapid enterprise UI' }
    ]
  },
  {
    category: 'Back-End & API Services',
    description: 'Scalable server architecture, robust endpoints, and performance tuning.',
    skills: [
      { name: 'Node.js', level: 'Advanced', highlight: 'Event Loop, Streams, Server Logic' },
      { name: 'Express.js', level: 'Advanced', highlight: 'Middleware, RESTful Routing, Auth' },
      { name: 'REST APIs', level: 'Advanced', highlight: 'Design, Documentation & Optimization' },
      { name: 'API Optimization', level: 'Advanced', highlight: '80% speedup achieved in production' }
    ]
  },
  {
    category: 'Databases & Storage',
    description: 'Data modeling, schema design, queries, and secure cloud asset storage.',
    skills: [
      { name: 'MongoDB', level: 'Advanced', highlight: 'Aggregation Pipelines, Indexing' },
      { name: 'Mongoose ODM', level: 'Advanced', highlight: 'Schema Validation, Middleware' },
      { name: 'AWS S3', level: 'Proficient', highlight: 'Bucket policies, Signed URLs, Backups' }
    ]
  },
  {
    category: 'Mobile, Cloud & Tooling',
    description: 'Cross-platform mobile compilation, cloud services, and developer workflows.',
    skills: [
      { name: 'Capacitor.js', level: 'Advanced', highlight: 'Hybrid APK, Push Notifications' },
      { name: 'AWS', level: 'Proficient', highlight: 'S3, Cloud File Handling' },
      { name: 'Git & GitHub', level: 'Advanced', highlight: 'Version Control, Branching, PRs' },
      { name: 'Postman', level: 'Advanced', highlight: 'API Testing & Documentation' }
    ]
  }
];
