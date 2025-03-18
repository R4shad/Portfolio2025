import { ApiWorkExperience } from './../../../../../types.d'
import './../FormatedResponses.css'

export const WorkExperience = ({ data }: { data: ApiWorkExperience }) => {
  return (
    <div className="response-formated-container">
      <h2>Work Experience</h2>
      {data.data.map((job, index) => (
        <div key={index} className="work-experience category">
          <h3>{job.position}</h3>
          <ul>
            <li className="work-experience item">
              <p className="work-detail">
                <strong>Company:</strong> {job.company}
              </p>
              <p className="work-experience detail">
                <strong>Period:</strong> {job.period}
              </p>
              <p className="work-experience detail">
                <strong>Location:</strong> {job.location}
              </p>
              <p className="work-experience ">
                <strong>Responsibilities:</strong>
              </p>
              <ul className="work-responsibilities detail">
                {job.responsibilities.map((task, i) => (
                  <li key={i} className="work-task detail">
                    {task}
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      ))}
    </div>
  )
}
