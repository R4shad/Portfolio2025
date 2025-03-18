import { ApiCertification } from '../../../../../types.d'
import './../FormatedResponses.css'

export const Certifications = ({ data }: { data: ApiCertification }) => {
  return (
    <div className="response-formated-container">
      <h2>Certifications</h2>
      {data.data.map((category) => (
        <div key={category.category} className="certification category">
          <h3>{category.category}</h3>
          <ul>
            {category.items.map((cert) => (
              <li key={cert.name} className="certification item">
                <p className="certification name">
                  <strong>{cert.name}</strong>
                </p>
                <p className="certification detail">
                  <strong>Institution:</strong> {cert.institution}
                </p>
                <p className="certification detail">
                  <strong>Location:</strong> {cert.location}
                </p>
                <p className="certification detail">
                  <strong>Date:</strong> {cert.date}
                </p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
