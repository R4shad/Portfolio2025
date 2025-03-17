import { ApiCertification } from './../../../../../types.d'
import './../FormatedResponses.css'

export const Certifications = ({ data }: { data: ApiCertification }) => {
  return (
    <div className="response-formated-container2">
      <h2>Certifications</h2>
      {data.data.map((category) => (
        <div key={category.category} className="certification-category">
          <h3>{category.category}</h3>
          <ul>
            {category.items.map((cert) => (
              <li key={cert.name} className="certification-item">
                <p className="cert-name">
                  <strong>{cert.name}</strong>
                </p>
                <p className="cert-detail">
                  <strong>Institution:</strong> {cert.institution}
                </p>
                <p className="cert-detail">
                  <strong>Location:</strong> {cert.location}
                </p>
                <p className="cert-detail">
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
