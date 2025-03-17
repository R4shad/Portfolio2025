import {
  ApiCertification,
  ApiProjects,
  ApiRecord,
  ApiSkills,
  ApiWorkExperience,
} from './types.d'

export const records: ApiRecord = {
  endpoint: 'Records',
  description: 'Universitary resume',
  getDescription: 'Obtain universitary studies',
  url: 'http://amirbarra.info/api/studies',
  status: 200,
  data: {
    degree: 'Systems Engineering',
    university: 'Universidad Mayor de San Simón',
    thumbnail:
      'https://www.umss.edu.bo/wp-content/uploads/2019/04/marca-vertical-01.png',
    years: '2018 - 2024',
    achievements: 'Among the top students in the Systems Engineering program',
    gradeAverage: '77.76 / 100',
    titleMethod:
      'Graduated with honors through a final degree project, earning a perfect score of 100/100.',
  },
}

export const certifications: ApiCertification = {
  endpoint: 'Certifications',
  description: 'Professional Certifications',
  getDescription: 'Obtain a list of certifications',
  url: 'http://amirbarra.info/api/certifications',
  status: 200,
  data: [
    {
      category: 'Networking',
      items: [
        {
          name: 'CCNAv7: Introduction to Networks',
          institution: 'Cisco Networking Academy',
          location: 'Cochabamba',
          date: '20-01-2022',
        },
        {
          name: 'CCNAv7: Switching, Routing and Wireless Essentials',
          institution: 'Cisco Networking Academy',
          location: 'Cochabamba',
          date: '14-07-2022',
        },
        {
          name: 'ROUTING INFORMATION IN NETWORKS',
          institution: 'Umss-Fcyt',
          location: 'Cochabamba',
          date: '07-06-2022',
        },
      ],
    },
    {
      category: 'Cybersecurity',
      items: [
        {
          name: 'Expert in Kali Linux',
          institution: 'Tecbrin Capacitaciones',
          location: 'Santa Cruz',
          date: '14-03-2022',
        },
        {
          name: '3rd International Congress on Information Security',
          institution:
            'Centro de Gestión de Incidentes Informáticos de la AGETIC',
          location: 'La Paz',
          date: '31-12-2021',
        },
        {
          name: 'International Course on Mobile Device Forensics and Analysis',
          institution: 'Programa para la excelencia académica',
          location: 'Cochabamba',
          date: '26-03-2022',
        },
      ],
    },
    {
      category: 'Programming & IT',
      items: [
        {
          name: 'Fullstack for Beginners, basics of algorithms and programming in Java.',
          institution: 'Umss-Fcyt',
          location: 'Cochabamba',
          date: '28-06-2021',
        },
        {
          name: 'PYTHON',
          institution: 'Digital Harbor',
          location: 'Cochabamba',
          date: '22-02-2020',
        },
        {
          name: 'International Course in “Hardware” Repair, Assembly, and Maintenance of Computers',
          institution: 'Umss, Ecuabol-Technologies',
          location: 'Cochabamba',
          date: '15-02-2019',
        },
      ],
    },
    {
      category: 'Sports & Martial Arts',
      items: [
        {
          name: 'Black belt in Taekwondo (WTF), 2nd Dan',
          institution: 'KUKKIWON’s 2nd Dan Taekwondo Promotion Test',
          location: 'Cochabamba',
          date: '14-09-2022',
        },
        {
          name: 'National Taekwondo Referee Certification',
          institution: 'World Taekwondo Bolivia',
          location: 'Santa Cruz',
          date: '12-02-2024',
        },
      ],
    },
  ],
}

export const workExperience: ApiWorkExperience = {
  endpoint: 'WorkExperience',
  description: 'Professional experience and internships',
  getDescription:
    'Obtain details about work experience, internships, and freelance projects',
  url: 'http://amirbarra.info/api/work-experience',
  status: 200,
  data: [
    {
      position: 'Teaching Assistant',
      company: 'Universidad Mayor de San Simón',
      location: 'Cochabamba',
      period: '2023 - 2024',
      responsibilities: [
        'Assisted the professor in preparing and delivering course materials for the course "Programming Elements and Data Structures".',
        'Taught classes and helped students understand complex programming concepts and data structures.',
        'Provided support during lab sessions, troubleshooting issues and guiding students through practical exercises.',
        'Ensured proper operation of equipment during lab sessions and assisted students with computer-related issues.',
      ],
    },
    {
      position: 'Intern',
      company: 'Truextend',
      location: 'Cochabamba',
      period: '2023',
      responsibilities: [
        'Contributed to software development projects, including coding, testing, debugging, and design.',
        'Participated in Scrum development meetings, managing tasks and contributing to decision-making processes.',
        'Assisted in IT tasks such as installing programs, updating software, and performing hardware changes on computers.',
        'Learned and applied security standards within a software development company.',
      ],
    },
    {
      position: 'Freelance Web Developer',
      company: 'Asociación Municipal de Taekwondo Quillacollo',
      location: 'Quillacollo',
      period: '2024 - Present',
      responsibilities: [
        'Developing a website for the Asociación Municipal de Taekwondo Quillacollo.',
        'Designing and implementing an intuitive user interface to enhance usability.',
        'Integrating necessary features for managing events, schedules, and memberships.',
        'Ensuring responsiveness and performance optimization for various devices.',
      ],
    },
  ],
}

export const skills: ApiSkills = {
  endpoint: 'Skills',
  description: 'Technical and professional skills categorized by domain',
  getDescription:
    'Retrieve a categorized list of technical, programming, and IT-related skills with proficiency levels',
  url: 'http://amirbarra.info/api/skills',
  status: 200,
  data: [
    {
      category: 'Programming Languages',
      items: [
        { name: 'Java', level: 'Advanced' },
        { name: 'Python', level: 'Basic' },
        { name: 'Solidity', level: 'Basic' },
      ],
    },
    {
      category: 'Frontend Development',
      items: [
        { name: 'HTML', level: 'Advanced' },
        { name: 'CSS', level: 'Advanced' },
        { name: 'JavaScript', level: 'Intermediate' },
        { name: 'TypeScript', level: 'Intermediate' },
        { name: 'React', level: 'Intermediate' },
        { name: 'Angular', level: 'Intermediate' },
      ],
    },
    {
      category: 'Backend Development',
      items: [
        { name: 'Express', level: 'Intermediate' },
        { name: 'Sequelize', level: 'Intermediate' },
      ],
    },
    {
      category: 'Databases',
      items: [
        { name: 'MySQL', level: 'Intermediate' },
        { name: 'SQL Server', level: 'Intermediate' },
        { name: 'PostgreSQL', level: 'Intermediate' },
      ],
    },
    {
      category: 'System Administration & Security',
      items: [
        { name: 'Windows User and Group Management', level: 'Basic' },
        { name: 'Linux System Administration', level: 'Intermediate' },
        { name: 'Network Security', level: 'Basic' },
        { name: 'Security Standards', level: 'Basic' },
        { name: 'Network Administration', level: 'Basic' },
      ],
    },
    {
      category: 'Scripting & Command Line',
      items: [
        { name: 'PowerShell', level: 'Basic' },
        { name: 'Windows CMD', level: 'Intermediate' },
        { name: 'Linux shell', level: 'Intermediate' },
      ],
    },
  ],
}

export const projects: ApiProjects = {
  endpoint: 'Projects',
  description: 'A collection of software development projects',
  getDescription:
    'Retrieve details about various projects, including technologies used and links to repositories',
  url: 'http://amirbarra.info/api/projects',
  status: 200,
  data: [
    {
      category: 'Web Development',
      projects: [
        {
          name: 'Aplicación web para administrar campeonatos de taekwondo',
          description: 'Proyecto de grado de la universidad',
          technologies: [
            'Sofea',
            'ApiRest',
            'Angular',
            'Bootstrap',
            'Sequelize',
            'Express',
            'MySQL',
            'TypeScript',
          ],
          repository: 'https://github.com/amirbarra/taekwondo-admin',
          demo: 'https://amirbarra.info/taekwondo-admin',
        },
      ],
    },
  ],
}
