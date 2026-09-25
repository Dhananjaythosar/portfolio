import type { ProfileData } from "@/types/profile";

export const profileData: ProfileData = {
  name: "Dhananjay Thosar",
  shortName: "Dhananjay",
  brand: "DT",
  role: "Associate Data Engineer",
  location: "Hyderabad, Telangana, India",
  email: "thosardhananjay25@gmail.com",
  phone: "+91 8390833406",
  websiteUrl: "https://portfolio-nine-taupe-rdx74t6kko.vercel.app",
  resumePath: "/resume/dhananjay-thosar-resume.pdf",
  photoUrl: "/images/dhananjay-thosar.png",
  valueProposition:
    "I design and productionize reliable data pipelines, transform complex datasets at scale, and build cloud data platforms that turn raw information into trusted, analytics-ready insights.",
  about: [
    "I'm an Associate Data Engineer at Berkadia India with 3+ years of experience designing, building, and supporting cloud-based data pipelines and platforms on AWS.",
    "Before specializing in data engineering, I worked as a full-stack developer — owning frontend interfaces, backend application logic, and database design/management end to end. That foundation still shapes how I think about data contracts, APIs, and reliable systems.",
    "I enjoy solving problems around ETL/ELT reliability, incremental processing, dimensional modelling, data quality, and operational automation — especially when heterogeneous source systems need to become clean, trusted datasets for reporting and analytics.",
    "Day to day I work with Python, PySpark, SQL, and AWS services to deliver curated enterprise domains, embed governance into production workloads, and partner with business and technology stakeholders on scalable data solutions.",
  ],
  socials: [
    {
      label: "GitHub",
      href: "https://github.com/Dhananjaythosar",
      icon: "github",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/dhananjay-thosar-38b5641b9",
      icon: "linkedin",
    },
    {
      label: "LeetCode",
      href: "https://leetcode.com/u/DJ_Dhananjay/",
      icon: "leetcode",
    },
    {
      label: "Email",
      href: "mailto:thosardhananjay25@gmail.com",
      icon: "email",
    },
  ],
  navigation: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Publications", href: "#publications" },
    { label: "Certifications", href: "#certifications" },
    { label: "Resume", href: "#resume" },
    { label: "Contact", href: "#contact" },
  ],
  quickInfo: {
    name: "Dhananjay Thosar",
    role: "Associate Data Engineer",
    location: "Hyderabad, Telangana, India",
    email: "thosardhananjay25@gmail.com",
    phone: "+91 8390833406",
  },
  skills: [
    {
      title: "Programming",
      skills: ["Python", "SQL", "PySpark", "Pandas"],
    },
    {
      title: "Data Engineering",
      skills: [
        "ETL / ELT",
        "Data Pipelines",
        "CDC",
        "Batch Processing",
        "Metadata-driven Ingestion",
        "Data Reconciliation",
        "Data Integration",
      ],
    },
    {
      title: "Warehousing & Modelling",
      skills: [
        "Amazon Redshift",
        "Dimensional Modelling",
        "Star Schema",
        "Snowflake Schema",
        "SCD Type 1 & 2",
        "AWS Glue Data Catalog",
        "Apache Parquet",
      ],
    },
    {
      title: "AWS",
      skills: [
        "S3",
        "Glue",
        "Lambda",
        "EMR",
        "Athena",
        "Step Functions",
        "Redshift",
        "CodePipeline",
        "CloudWatch",
        "IAM",
        "SNS",
        "EventBridge",
      ],
    },
    {
      title: "Analytics & BI",
      skills: ["Amazon Athena", "Power BI"],
    },
    {
      title: "Full Stack Foundations",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Node.js",
        "PHP",
        "MySQL",
      ],
    },
    {
      title: "Orchestration & DevOps",
      skills: ["AWS Step Functions", "Git", "GitHub", "CI/CD", "Agile"],
    },
    {
      title: "Generative AI",
      skills: [
        "LLM",
        "RAG",
        "Prompt Engineering",
        "FAISS",
        "LangChain",
        "Embeddings / Vector Stores",
      ],
    },
  ],
  experience: [
    {
      id: "berkadia-ade",
      role: "Associate Data Engineer",
      company: "Berkadia India Pvt. Ltd.",
      location: "Hyderabad, India",
      startDate: "Jul 2023",
      endDate: "Present",
      summary:
        "Building and supporting production AWS data pipelines and curated analytics datasets for the Platinum Enterprise Data Platform, with a focus on reliability, incremental processing, and operational automation.",
      highlights: [
        "Built and productionized PySpark and Spark SQL pipelines on AWS EMR, delivering curated Property, Account, Contact, Loan, and Sales domains from 14+ upstream source systems into Amazon S3 and Amazon Redshift.",
        "Designed a layered ETL/ELT architecture on Amazon S3, standardizing heterogeneous raw feeds into validated, de-duplicated curated datasets aligned with enterprise data standards.",
        "Implemented incremental processing using Apache Parquet, AWS Glue jobs, and MERGE-based upserts, replacing full-refresh loads and improving pipeline reliability and runtime efficiency.",
        "Built an event-driven, metadata-driven ingestion framework using AWS Lambda and AWS Step Functions (validation, threshold checks, retries, SNS alerting) so new sources onboard via configuration rather than custom code.",
        "Modelled analytics datasets using dimensional modelling (star schema, SCD Type 2) and published curated tables through AWS Glue Data Catalog, Amazon Athena, and Amazon Redshift for Power BI dashboards and business reporting.",
        "Tuned PySpark workloads on AWS EMR (partitioning, broadcast joins, file sizing) and embedded automated data quality checks, improving job performance and lowering compute cost.",
        "Migrated 20+ legacy SQL stored procedures into modular PySpark applications on AWS EMR as part of an MDM modernization programme.",
        "Re-engineered transformation, matching, and aggregation logic to process 500+ GB of data daily through distributed PySpark processing, replacing sequential row-based SQL execution.",
        "Reduced end-to-end processing time by roughly 3 hours by redesigning workloads for parallel execution and optimizing joins and aggregations, guided by Spark UI benchmarking.",
        "Built a reusable Python/PySpark/SQL data reconciliation framework validating schema, datatype, and record-level parity between legacy and modernized platforms through legacy decommissioning.",
        "Replaced a manual AWS EMR ad-hoc workflow (~1 hour overhead per run) with an automated AWS Step Functions framework and Lambda-based execution interface, cutting provisioning-to-termination time to a few minutes.",
      ],
      achievements: [
        "Recognised with a Berkadia Leaf Award for the MDM modernization and legacy decommissioning programme.",
        "Recognised with a Berkadia HiFi Award for the EMR Cluster Optimization & Ad-hoc Job Automation Framework.",
      ],
      technologies: [
        "PySpark",
        "AWS EMR",
        "Amazon S3",
        "AWS Glue",
        "Amazon Redshift",
        "Amazon Athena",
        "AWS Lambda",
        "AWS Step Functions",
        "Python",
        "SQL",
        "Apache Parquet",
        "SNS",
      ],
    },
    {
      id: "pict-intern",
      role: "Software Developer Intern — Full Stack Development",
      company: "Technical Support and Software Committee, PICT",
      location: "Pune, India",
      startDate: "Nov 2021",
      endDate: "May 2022",
      summary:
        "Owned end-to-end full-stack development for a hostel management system — frontend flows, backend logic, and MySQL database design across student records, room allocation, and fee processing.",
      highlights: [
        "Designed and developed the database layer (PHP, MySQL) for student records, warden data, room allocation, and fee processing across the full data lifecycle.",
        "Engineered a region-based room allocation module with structured queries across student and room-availability tables.",
        "Implemented secure OTP-based verification and automated fee receipt generation with transactional database updates.",
        "Designed relational schemas with foreign key constraints and cascading deletes to preserve referential integrity across interconnected modules.",
      ],
      technologies: ["PHP", "MySQL", "SQL"],
    },
    {
      id: "etg-intern",
      role: "AI / ML Intern",
      company: "Elite Techno Groups",
      location: "Remote",
      startDate: "Aug 2021",
      endDate: "Sep 2021",
      summary:
        "Built Python-based machine learning solutions spanning preprocessing, feature engineering, model training, and evaluation.",
      highlights: [
        "Developed Python ML workflows covering data preprocessing, feature engineering, model training, and evaluation.",
      ],
      technologies: ["Python", "Machine Learning"],
    },
  ],
  projects: [
    {
      id: "schemamind",
      name: "SchemaMind",
      tagline: "RAG Copilot for Data Docs",
      description:
        "A retrieval-augmented generation assistant that answers natural-language questions over pipeline documentation, data dictionaries, and table schemas — grounded in retrieved context instead of inventing columns.",
      problemSolved:
        "Data engineers and analysts often need fast, trustworthy answers about schemas and pipeline docs without manually scanning dictionaries or risking hallucinated column names from a standalone LLM.",
      features: [
        "Document chunking and embedding generation",
        "Semantic search over a FAISS vector store",
        "Prompt templates that ground LLM responses in retrieved context",
        "Local FastAPI chat UI and CLI",
        "Ollama-first local workflow with optional OpenAI provider",
      ],
      technologies: [
        "Python",
        "LangChain",
        "LLM",
        "FAISS",
        "FastAPI",
        "Ollama",
        "RAG",
      ],
      githubUrl: "https://github.com/Dhananjaythosar/schemamind",
      imageUrl: "/projects/schemamind-cover.png",
      featured: true,
      period: "Jul 2026 — Aug 2026",
      details: {
        overview:
          "SchemaMind is a local RAG copilot for data documentation. It indexes pipeline docs, data dictionaries, and table schemas so natural-language questions return answers grounded in retrieved evidence.",
        problem:
          "Standalone LLMs can invent schema details. Teams need a way to ask questions about real documentation and get responses tied to retrieved chunks.",
        architecture: [
          "Document ingestion and chunking pipeline",
          "Embedding generation with a configurable provider (Ollama / OpenAI)",
          "FAISS vector store for semantic retrieval",
          "Prompt templates that inject retrieved context into the LLM",
          "FastAPI chat UI plus a CLI ask interface",
        ],
        dataFlow: [
          "Source docs → chunking → embeddings → FAISS index",
          "User question → retrieval → context-grounded prompt → LLM response",
        ],
        implementation: [
          "Built retrieval-augmented generation over pipeline documentation and schemas.",
          "Implemented index build scripts and a FastAPI/CLI experience for local use.",
          "Configured prompt templates to reduce hallucinated schema details.",
        ],
        challenges: [
          "Keeping answers faithful to source documentation",
          "Balancing retrieval quality with local LLM latency",
        ],
        solutions: [
          "Ground responses in FAISS-retrieved chunks via prompt templates",
          "Support local Ollama models with an optional OpenAI path",
        ],
        outcome:
          "Delivered a working local RAG assistant and CLI for schema-aware Q&A over data documentation.",
      },
    },
    {
      id: "diagramdecoder",
      name: "DiagramDecoder",
      tagline: "Lucid architecture diagram summarizer",
      description:
        "Parses Lucidchart shapes, edges, and swim lanes into structured text, then summarizes architecture diagrams and plain-text documents for onboarding and stakeholder communication.",
      problemSolved:
        "Architecture diagrams are hard to narrate quickly for onboarding and reviews. Teams need concise summaries of Lucid exports and related runbooks without manually rewriting every flow.",
      features: [
        "Lucid JSON export parsing (shapes, edges, swim lanes)",
        "Markdown / plain-text document summarization",
        "Multiple summary styles (data-flow narrative, bullet points)",
        "FastAPI UI and CLI",
        "Local Ollama defaults with optional OpenAI",
      ],
      technologies: ["Python", "LLM", "FastAPI", "Ollama", "Lucid JSON"],
      githubUrl: "https://github.com/Dhananjaythosar/DiagramDecoder",
      imageUrl: "/projects/diagramdecoder.png",
      featured: true,
      details: {
        overview:
          "DiagramDecoder turns Lucidchart exports and text documents into stakeholder-ready summaries of architecture and data flows.",
        problem:
          "Onboarding and reviews slow down when diagrams must be manually translated into narrative explanations.",
        architecture: [
          "Lucid JSON / markdown / text input adapters",
          "LLM summarization layer with selectable styles",
          "FastAPI UI and CLI entry points",
        ],
        dataFlow: [
          "Lucid JSON or document upload → parse / normalize → LLM summary → UI or CLI output",
        ],
        implementation: [
          "Built parsers for Lucid shapes, connections, and swim lanes.",
          "Added summary styles for data-flow narrative and bullet-point outputs.",
          "Exposed both a FastAPI UI and CLI for local use.",
        ],
        challenges: [
          "Preserving meaningful structure from diagram JSON",
          "Producing summaries useful to both engineers and stakeholders",
        ],
        solutions: [
          "Normalize shapes and edges before summarization",
          "Offer multiple summary styles for different audiences",
        ],
        outcome:
          "Shipped a practical local tool for turning architecture diagrams and runbooks into readable summaries.",
      },
    },
    {
      id: "vidbrief",
      name: "VidBrief",
      tagline: "YouTube caption summarizer",
      description:
        "Summarizes YouTube videos from captions with multiple summary styles and map-reduce processing so long transcripts stay within context limits.",
      problemSolved:
        "Long videos are slow to review. Engineers need concise summaries from available captions without overflowing the LLM context window.",
      features: [
        "YouTube caption ingestion",
        "Multiple summary styles",
        "Map-reduce summarization for long transcripts",
        "FastAPI UI and CLI",
        "Local Ollama defaults with optional OpenAI",
      ],
      technologies: ["Python", "LLM", "FastAPI", "Ollama", "Map-Reduce"],
      githubUrl: "https://github.com/Dhananjaythosar/VidBrief",
      imageUrl: "/projects/vidbrief.png",
      featured: true,
      details: {
        overview:
          "VidBrief turns YouTube captions into structured summaries, using map-reduce when transcripts are too long for a single context window.",
        problem:
          "Manual video review is time-consuming, and long transcripts exceed typical LLM context limits.",
        architecture: [
          "Caption fetch layer",
          "Chunked map-reduce summarization path",
          "FastAPI UI and CLI interfaces",
        ],
        dataFlow: [
          "YouTube URL → captions → chunked summarization → final styled summary",
        ],
        implementation: [
          "Implemented caption-based summarization with selectable styles.",
          "Added map-reduce handling for long transcripts.",
          "Delivered FastAPI and CLI entry points for local use.",
        ],
        challenges: [
          "Handling long transcripts without context overflow",
          "Dependence on available video captions",
        ],
        solutions: [
          "Map-reduce summarization for oversized transcripts",
          "Clear prerequisite that videos must include captions",
        ],
        outcome:
          "Delivered a local caption-to-summary tool for faster technical video review.",
      },
    },
    {
      id: "bloodbank",
      name: "Blood Bank",
      tagline: "Donor search and blood donation platform",
      description:
        "A full-stack blood bank web application for donor registration, blood donation workflows, and searching available donors — built with PHP, MySQL, JavaScript, and CSS.",
      problemSolved:
        "Blood donation coordination needs a practical system to register donors, capture donation details, and help users find matching donors quickly.",
      features: [
        "Donor registration and sign-in flows",
        "Blood donation submission and listing",
        "Donor search experience",
        "User and donation management modules",
      ],
      technologies: ["PHP", "MySQL", "JavaScript", "CSS", "HTML"],
      githubUrl: "https://github.com/Dhananjaythosar/bloodbank.github.io",
      imageUrl: "/projects/bloodbank.png",
      featured: false,
      details: {
        overview:
          "Blood Bank is an earlier full-stack project focused on donor and donation workflows with a PHP/MySQL backend and a browser-based frontend.",
        problem:
          "Manual coordination of blood donors and donation records is slow and error-prone without a centralized application.",
        architecture: [
          "PHP application pages for donor, donation, and search flows",
          "MySQL-backed persistence for users and donation records",
          "Frontend UI with JavaScript and CSS",
        ],
        dataFlow: [
          "User/donor input → PHP handlers → MySQL storage → search and listing views",
        ],
        implementation: [
          "Built donor, donation, search, and authentication-related pages.",
          "Structured the app around PHP modules with supporting CSS/JS assets.",
        ],
        challenges: [
          "Keeping donor and donation records consistent across flows",
          "Providing usable search over donor data",
        ],
        solutions: [
          "Centralized MySQL storage for donor and donation entities",
          "Dedicated search and listing pages for discovery",
        ],
        outcome:
          "Delivered a working full-stack blood bank application covering registration, donation, and donor search.",
      },
    },
    {
      id: "hostel-automation",
      name: "Hostel Automation",
      tagline: "Hostel management system",
      description:
        "A full-stack hostel automation system covering student records, room workflows, authentication, and operational pages — aligned with database-driven hostel management needs.",
      problemSolved:
        "Hostel operations need structured handling of students, rooms, and related records instead of fragmented manual processes.",
      features: [
        "Registration and login flows",
        "Room-related operational pages",
        "Dashboard and contact modules",
        "Database-backed application structure",
      ],
      technologies: ["PHP", "MySQL", "CSS", "JavaScript", "HTML"],
      githubUrl: "https://github.com/Dhananjaythosar/HostelAutomationProject",
      imageUrl: "/projects/hostel-automation.png",
      featured: false,
      details: {
        overview:
          "Hostel Automation is a PHP/MySQL full-stack project for hostel-related workflows, including authentication and room operations.",
        problem:
          "Hostel administration requires reliable record keeping for students, rooms, and day-to-day operational actions.",
        architecture: [
          "PHP pages for login, registration, rooms, and dashboard flows",
          "MySQL database layer for persistent records",
          "Frontend assets for the operational UI",
        ],
        dataFlow: [
          "User actions → PHP controllers/pages → MySQL database → updated hostel views",
        ],
        implementation: [
          "Implemented authentication, room, dashboard, and supporting operational pages.",
          "Organized the project around a PHP backend with a Database folder and UI assets.",
        ],
        challenges: [
          "Managing interconnected hostel records across modules",
          "Supporting practical day-to-day hostel workflows in one app",
        ],
        solutions: [
          "Relational MySQL-backed structure for hostel data",
          "Dedicated pages for core hostel operations",
        ],
        outcome:
          "Shipped a full-stack hostel management application with authentication and room/admin workflows.",
      },
    },
    {
      id: "smart-restaurant",
      name: "Smart Restaurant",
      tagline: "Online table and party booking",
      description:
        "An online restaurant experience where users can book tables for breakfast, lunch, or dinner, and also make party bookings.",
      problemSolved:
        "Traditional restaurant seating and party reservations are harder to coordinate without a simple digital booking experience.",
      features: [
        "Table booking for breakfast, lunch, and dinner",
        "Party booking support",
        "Browser-based restaurant booking UI",
      ],
      technologies: ["HTML", "CSS", "JavaScript"],
      githubUrl: "https://github.com/Dhananjaythosar/Smart-Restaurant",
      imageUrl: "/projects/smart-restaurant.png",
      featured: false,
      details: {
        overview:
          "Smart Restaurant is a frontend-focused booking project that digitizes table and party reservation flows for a restaurant experience.",
        problem:
          "Customers and restaurants need a clearer way to request meal-time table bookings and party reservations online.",
        architecture: [
          "Static/web frontend for restaurant booking interactions",
          "Client-side pages for reservation flows",
        ],
        dataFlow: [
          "User booking selections → frontend booking UI → reservation request presentation",
        ],
        implementation: [
          "Built a restaurant booking interface for meal-time and party reservations.",
          "Organized the project around HTML/CSS/JavaScript frontend assets.",
        ],
        challenges: [
          "Presenting booking options clearly for different dining occasions",
          "Keeping the reservation UX simple for end users",
        ],
        solutions: [
          "Dedicated booking flows for regular meals and parties",
          "Straightforward frontend UI for reservation actions",
        ],
        outcome:
          "Delivered a Smart Restaurant booking project for online table and party reservations.",
      },
    },
  ],
  publications: [
    {
      id: "ijcrt-air-pollution-2023",
      title:
        "Detection and Predicting Air Pollution Level in a Specific City Using Machine Learning Models",
      authors: [
        "Pratik Dighole",
        "Aryan Agarwal",
        "Abhishek Sabnis",
        "Dhananjay Thosar",
        "Madhuri Mane",
      ],
      venue: "International Journal of Creative Research Thoughts (IJCRT)",
      publishedOn: "March 2023",
      volume: "11",
      issue: "3",
      pages: "g158–g167",
      paperId: "IJCRT2303717",
      abstract:
        "In the context of smart cities, dealing with air pollution is a significant environmental challenge. Real-time monitoring of pollution data enables local authorities to analyze the current situation of the city and make decisions accordingly. This work compares machine learning regression techniques for air quality prediction and combines stronger-performing algorithms — including Random Forest, Support Vector Machine, Linear Regression, and Decision Tree — to predict pollution levels efficiently.",
      keywords: [
        "Air quality prediction",
        "Machine learning",
        "Regression techniques",
        "Random Forest",
        "SVM",
      ],
      url: "https://ijcrt.org/viewfulltext.php?&p_id=IJCRT2303717",
      pdfUrl: "https://ijcrt.org/viewpaperforall.php?paper=IJCRT2303717",
      imageUrl: "/projects/air-quality-ml.png",
    },
  ],
  certifications: [
    {
      id: "aws-dea",
      name: "AWS Certified Data Engineer — Associate",
      issuer: "Amazon Web Services",
      issueDate: "Sep 2025",
      credentialId: "7ea4a998-0c85-43b5-846a-827ac539eb21",
      skills: ["AWS", "Data Engineering", "ETL", "Data Pipelines"],
      certificateUrl:
        "https://www.credly.com/badges/7ea4a998-0c85-43b5-846a-827ac539eb21",
      verifyUrl:
        "https://www.credly.com/badges/7ea4a998-0c85-43b5-846a-827ac539eb21",
      imageUrl: "/certificates/covers/aws-dea.png",
    },
    {
      id: "databricks-spark",
      name: "Databricks Certified Associate Developer for Apache Spark 3.0",
      issuer: "Databricks",
      issueDate: "Oct 2024",
      credentialId: "014ac140-7c51-4afb-9dab-00161d156c0c",
      skills: ["Apache Spark", "PySpark", "Databricks", "DataFrames"],
      certificateUrl:
        "https://credentials.databricks.com/014ac140-7c51-4afb-9dab-00161d156c0c",
      verifyUrl:
        "https://credentials.databricks.com/014ac140-7c51-4afb-9dab-00161d156c0c",
      imageUrl: "/certificates/covers/databricks-spark.png",
    },
    {
      id: "aws-ccp",
      name: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      issueDate: "Aug 2024",
      credentialId: "fc2cc8bb-a8c7-434e-9353-ced5a0f989d4",
      skills: ["AWS", "Cloud Fundamentals"],
      certificateUrl:
        "https://www.credly.com/badges/fc2cc8bb-a8c7-434e-9353-ced5a0f989d4",
      verifyUrl:
        "https://www.credly.com/badges/fc2cc8bb-a8c7-434e-9353-ced5a0f989d4",
      imageUrl: "/certificates/covers/aws-ccp.png",
    },
    {
      id: "databricks-fundamentals",
      name: "Academy Accreditation — Databricks Fundamentals",
      issuer: "Databricks",
      issueDate: "Oct 2024",
      credentialId: "ff5a4801-baa6-407f-8fac-d7cb508630f0",
      skills: ["Databricks", "Data Intelligence Platform", "Lakehouse"],
      certificateUrl:
        "https://credentials.databricks.com/ff5a4801-baa6-407f-8fac-d7cb508630f0",
      verifyUrl:
        "https://credentials.databricks.com/ff5a4801-baa6-407f-8fac-d7cb508630f0",
      imageUrl: "/certificates/covers/databricks-fundamentals.png",
    },
    {
      id: "hackerrank-python",
      name: "Python",
      issuer: "HackerRank",
      issueDate: "Oct 2021",
      credentialId: "8df7047ec059",
      skills: ["Python"],
      certificateUrl: "https://www.hackerrank.com/certificates/8df7047ec059",
      verifyUrl: "https://www.hackerrank.com/certificates/8df7047ec059",
      imageUrl: "/certificates/covers/hackerrank-python.png",
    },
    {
      id: "udemy-python-az",
      name: "The Python Programming A-Z Definitive Diploma",
      issuer: "Udemy",
      issueDate: "Oct 2021",
      credentialId: "UC-c8938450-fb97-43f6-9b65-f51fa0d4949e",
      skills: ["Python"],
      certificateUrl: "/certificates/udemy-python-az.pdf",
      verifyUrl:
        "https://udemy-certificate.s3.amazonaws.com/pdf/UC-c8938450-fb97-43f6-9b65-f51fa0d4949e.pdf",
      imageUrl: "/certificates/covers/udemy-python-az.png",
    },
  ],
  education: [
    {
      id: "pict-be",
      degree: "Bachelor of Engineering, Computer Engineering",
      institution: "Pune Institute of Computer Technology (PICT)",
      location: "Pune, India",
      startYear: "2019",
      endYear: "2023",
      details: [
        "CGPA: 9.2 / 10",
        "Activities: National Service Scheme (NSS) and Computer Society of India (CSI)",
      ],
      skills: [
        "Python",
        "MySQL",
        "Web Development",
        "AI / ML",
        "Data Structures",
        "Java",
        "C++",
      ],
    },
    {
      id: "hsc",
      degree: "H.S.C, Science",
      institution:
        "Shri Shivaji Vidyamandir And Kanishtha Mahavidyalaya Aundh",
      location: "Aundh, India",
      startYear: "2018",
      endYear: "2019",
      details: [
        "Grade: 77.23%",
        "Activities: Bifocal - Computer Science",
      ],
      skills: ["Visual Basic", "C++"],
    },
    {
      id: "ssc",
      degree: "S.S.C",
      institution:
        "Shri Shivaji Vidyamandir And Kanishtha Mahavidyalaya Aundh",
      location: "Aundh, India",
      startYear: "2016",
      endYear: "2017",
      details: [
        "Grade: 92.80%",
        "Activities: RSP Leader, NMMS Scholarship",
      ],
      skills: ["Visual Basic", "C++"],
    },
  ],
  achievements: [
    {
      id: "ijcrt-publication",
      title: "Published Research Paper — IJCRT (March 2023)",
      description:
        "Co-authored “Detection and Predicting Air Pollution Level in a Specific City Using Machine Learning Models,” published in International Journal of Creative Research Thoughts, Volume 11, Issue 3 (Paper ID: IJCRT2303717).",
    },
    {
      id: "hifi",
      title: "Berkadia HiFi Award — 3 Times",
      description:
        "Recognised three times for delivery excellence and impactful data engineering initiatives, including the EMR Cluster Optimization & Ad-hoc Job Automation Framework.",
    },
    {
      id: "leaf",
      title: "Berkadia Leaf Award",
      description:
        "Recognised for the MDM modernization and legacy decommissioning programme.",
    },
  ],
  seo: {
    title: "Dhananjay Thosar | Data Engineer Portfolio",
    description:
      "Portfolio of Dhananjay Thosar, an Associate Data Engineer specializing in data engineering, data pipelines, SQL, Python, cloud technologies, analytics, and scalable data solutions.",
    keywords: [
      "Dhananjay Thosar",
      "Data Engineer",
      "Associate Data Engineer",
      "AWS",
      "PySpark",
      "ETL",
      "ELT",
      "SQL",
      "Python",
      "Hyderabad",
    ],
  },
};
