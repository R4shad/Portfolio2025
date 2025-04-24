import { ApiProjects, Project } from '../../../../../types.d'

export const Projects = ({ data }: { data: ApiProjects }) => {
  return (
    <div className="response-formated-container">
      <h3>Projects</h3>
      <ul>
        {data.data.map((project: Project) => (
          <li key={project.name} className="project item">
            <p className="project name">
              <strong>{project.name}</strong>
            </p>
            <p className="project detail">{project.description}</p>
            <p className="project detail">
              <strong>Technologies:</strong> {project.technologies.join(', ')}
            </p>
            {project.repository && (
              <p className="project-link">
                <strong>Repo:</strong>{' '}
                <a
                  href={project.repository}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.repository}
                </a>
              </p>
            )}
            {project.demo && (
              <p className="project-link">
                <strong>Live Demo:</strong>{' '}
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.demo}
                </a>
              </p>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}
