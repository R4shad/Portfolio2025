import { ApiSkills } from '../../../../../types'
import './../FormatedResponses.css'

export const Skills = ({ data }: { data: ApiSkills }) => {
  return (
    <div className="response-formated-container">
      <h2>Skills</h2>
      {data.data.map((category) => (
        <div key={category.category} className="skill category">
          <h3>{category.category}</h3>
          <ul>
            {category.items.map((skill) => (
              <li key={skill.name} className="skill item">
                <p className="skill name">
                  <strong>{skill.name}</strong>
                </p>
                <p className="skill detail">
                  <strong>Level:</strong> {skill.level}
                </p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
