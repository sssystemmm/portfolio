
export interface ImpactItem {
  id: string;
  title: string;
  subtitle: string;
  product: string;
  category: string;
  impactValue: string; // e.g., "+15%"
  impactLabel: string; // e.g., "Sustained Engagement Increase"
  impactMetric: string; // keeping for backward compatibility if needed
  description: string;
  processBrief: string;
  imageUrl: string;
  award?: string; // e.g., "Best Digital Educational Resource - GESS 2025"
  caseStudy: CaseStudy;
}

export interface Metric {
  label: string;
  value: string;
  description: string;
  featured?: boolean;
}

export interface ChallengePoint {
  title: string;
  description: string;
  iconType: 'warning' | 'info';
}

export interface ProcessStep {
  id: string;
  title: string;
  description: string;
  image?: string;
  subItems?: string[];
  quote?: {
    text: string;
    author: string;
  };
}

export interface CaseStudy {
  overview: string;
  overviewSubtext: string;
  links?: {
    label: string;
    url: string;
  }[];
  metadata: {
    role: string;
    timeline: string;
    team: string;
  };
  metrics: Metric[];
  challenge: {
    description: string;
    points: ChallengePoint[];
    image?: string;
  };
  processSteps: ProcessStep[];
  solution: {
    mainImage: string;
    featureTitle: string;
    featureDescription: string;
    featureImages: string[]; // Changed from featureImage: string
    featureList: string[];
    embedCode?: string;
    additionalSections?: {
      title: string;
      description: string;
      images: string[];
      list?: string[];
    }[];
  };
  insights?: {
    title: string;
    content: string;
  }[];
  postLaunch?: {
    title: string;
    content: string;
  };
  reflections?: {
    title: string;
    description: string;
  }[];
  nextProject: {
    title: string;
    id: string;
  };
}

export interface WorkProcess {
  title: string;
  description: string;
  icon: string;
}
