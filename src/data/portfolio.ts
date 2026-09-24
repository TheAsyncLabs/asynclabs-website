export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: string;
  description: string;
  features: string[];
  techStack: string[];
  isPrivate: boolean;
  status: "Live" | "Private" | "In Development";
  metrics?: string[];
}

export const getProjectById = (projects: Project[], id: string): Project | undefined =>
  projects.find((project) => project.id === id);
