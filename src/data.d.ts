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
          name: 'Routing Information in Networks',
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
      summary:
        'As a Teaching Assistant at My University in Data Structures, I had the opportunity to teach and guide large groups of students, helping them grasp complex concepts and improve their problem-solving skills. This role strengthened my public speaking, leadership, and mentoring abilities.',
      responsibilities: [
        'Collaborated with the professor to develop and deliver engaging course materials for "Programming Elements and Data Structures".',
        'Led lectures and discussions, simplifying complex programming concepts to enhance student comprehension.',
        'Provided one-on-one mentorship and guidance, fostering a supportive learning environment for students.',
        'Assisted in lab sessions, troubleshooting technical issues and ensuring the proper functioning of equipment.',
        'Offered hands-on IT support, resolving software and hardware issues to maintain smooth lab operations.',
      ],
    },
    {
      position: 'Intern',
      company: 'Truextend',
      location: 'Cochabamba',
      period: '2023',
      summary:
        'Worked As a Software Development Intern at Truextend, I actively contributed throughout the entire development lifecycle. I took on multiple roles to ensure the success of each project.',
      responsibilities: [
        'Developed and maintained both frontend and backend components, ensuring a seamless user experience.',
        'Conducted testing, debugging, and quality assurance to identify and resolve system issues, improving stability.',
        'Actively contributed to Scrum meetings, providing insights and suggestions to enhance development strategies.',
        'Installed and configured software, performed hardware updates, and ensured smooth IT operations.',
        'Applied industry-standard security practices in software development, reinforcing system integrity and compliance.',
      ],
    },
    {
      position: 'Freelance Web Developer',
      company: 'Asociación Municipal de Taekwondo Quillacollo',
      location: 'Quillacollo',
      period: '2024 - Present',
      summary:
        'As a freelance web developer, I designed and built a dynamic website for the Asociación Municipal de Taekwondo Quillacollo, working independently to analyze requirements, solve technical challenges, and ensure an optimal user experience.',
      responsibilities: [
        'Led the end-to-end development of a website, from planning and design to deployment and maintenance.',
        'Worked closely with stakeholders to gather requirements and translate them into functional web solutions.',
        'Designed and implemented an intuitive user interface to enhance accessibility and usability.',
        'Integrated features for event management, schedules, and memberships to streamline operations.',
        'Ensured the website was fully responsive and optimized for performance across multiple devices.',
        'Independently researched and applied best practices to overcome technical challenges and improve functionality.',
        'Maintained clear and professional communication with the client to provide updates and gather feedback for continuous improvement.',
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
      name: 'Quillacollo Taekwondo Association Website',
      description:
        'An informational website for the Quillacollo Taekwondo Association, providing details about the association, its members, affiliated clubs, and news updates.',
      technologies: ['React', 'TypeScript', 'TailwindCSS'],
      repository: 'https://github.com/R4shad/Project-Tkd',
      demo: 'https://tkdqllo.netlify.app/',
    },
    {
      name: 'Taekwondo Championship Management - UI',
      description:
        'A web-based user interface for managing taekwondo championships, providing an intuitive and responsive experience for administrators and participants.',
      technologies: ['Angular', 'TypeScript', 'Bootstrap', 'JWT'],
      repository: 'https://github.com/R4shad/TkdHub_UI',
      demo: 'https://github.com/R4shad/TkdHub_UI',
    },
    {
      name: 'Taekwondo Championship Management - API',
      description:
        'A robust RESTful API built to handle championship management operations, including user authentication, match scheduling, and results tracking.',
      technologies: ['Express', 'TypeScript', 'MySQL', 'Sequelize', 'JWT'],
      repository: 'https://github.com/R4shad/TkdHub_API',
      demo: 'https://github.com/R4shad/TkdHub_API',
    },
    {
      name: 'IceCream POS - Billing System for Ice Cream Shop',
      description:
        'A web application designed to manage billing operations for an ice cream shop. It allows product registration, sales tracking, and daily report generation. Includes roles for cashier.',
      technologies: ['React', 'TypeScript'],
      repository: 'https://github.com/R4shad/Project-Tkd',
      demo: 'https://tkdqllo.netlify.app/',
    },
  ],
}
