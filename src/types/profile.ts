export type SocialLink = {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "email" | "leetcode" | "hackerrank" | "medium" | "stackoverflow" | "kaggle";
};

export type NavItem = {
  label: string;
  href: string;
};

export type SkillCategory = {
  title: string;
  skills: string[];
};

export type ExperienceRole = {
  id: string;
  role: string;
  company: string;
  location: string;
  employmentType?: string;
  startDate: string;
  endDate: string;
  summary: string;
  highlights: string[];
  achievements?: string[];
  technologies: string[];
};

export type ProjectDetail = {
  overview: string;
  problem: string;
  architecture: string[];
  dataFlow: string[];
  implementation: string[];
  challenges: string[];
  solutions: string[];
  outcome: string;
};

export type Project = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  problemSolved: string;
  features: string[];
  technologies: string[];
  githubUrl?: string;
  liveDemoUrl?: string;
  paperUrl?: string;
  imageUrl?: string;
  featured?: boolean;
  period?: string;
  details: ProjectDetail;
};

export type Publication = {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  publishedOn: string;
  volume?: string;
  issue?: string;
  pages?: string;
  paperId?: string;
  doi?: string;
  abstract: string;
  keywords?: string[];
  url: string;
  pdfUrl?: string;
  imageUrl?: string;
};

export type Certification = {
  id: string;
  name: string;
  issuer: string;
  issueDate: string;
  credentialId?: string;
  skills: string[];
  certificateUrl?: string;
  verifyUrl?: string;
  imageUrl?: string;
};

export type Education = {
  id: string;
  degree: string;
  institution: string;
  location: string;
  startYear: string;
  endYear: string;
  details?: string[];
  skills?: string[];
};

export type Achievement = {
  id: string;
  title: string;
  description: string;
};

export type QuickInfo = {
  name: string;
  role: string;
  location: string;
  email: string;
  phone: string;
};

export type ProfileData = {
  name: string;
  shortName: string;
  brand: string;
  role: string;
  location: string;
  email: string;
  phone: string;
  websiteUrl: string;
  resumePath: string;
  photoUrl?: string;
  valueProposition: string;
  about: string[];
  socials: SocialLink[];
  navigation: NavItem[];
  quickInfo: QuickInfo;
  skills: SkillCategory[];
  experience: ExperienceRole[];
  projects: Project[];
  publications: Publication[];
  certifications: Certification[];
  education: Education[];
  achievements: Achievement[];
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
};
