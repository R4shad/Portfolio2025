export interface ApiRecord {
  endpoint: string
  description: string
  getDescription: string
  url: string
  status: number
  data: Record
}
interface Record {
  degree: string
  university: string
  thumbnail: string
  years: string
  achievements: string
  gradeAverage: string
  titleMethod: string
}
interface CertificationItem {
  name: string
  institution: string
  location: string
  date: string
}

interface CertificationCategory {
  category: string
  items: CertificationItem[]
}

export interface ApiCertification {
  endpoint: string
  description: string
  getDescription: string
  url: string
  status: number
  data: CertificationCategory[]
}
export interface ApiWorkExperience {
  endpoint: string
  description: string
  getDescription: string
  url: string
  status: number
  data: {
    position: string
    company: string
    location: string
    period: string
    summary: string
    responsibilities: string[]
  }[]
}
export interface Skill {
  name: string
  level: 'Basic' | 'Intermediate' | 'Advanced'
}

export interface SkillCategory {
  category: string
  items: Skill[]
}

export interface ApiSkills {
  endpoint: string
  description: string
  getDescription: string
  url: string
  status: number
  data: SkillCategory[]
}
export interface ApiProjects {
  endpoint: string
  description: string
  getDescription: string
  url: string
  status: number
  data: ProjectCategory[]
}

export interface ProjectCategory {
  category: string
  projects: Project[]
}

export interface Project {
  name: string
  description: string
  technologies: string[]
  repository: string
  demo: string
}
export interface ContactFormData {
  email: string
  subject: string
  message: string
}

export interface ContactResponse {
  status: number
  data: ContactFormData
}
