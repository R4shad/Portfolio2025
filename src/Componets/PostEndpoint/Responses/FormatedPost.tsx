import { ContactResponse } from './../../../types.d'

import './../../Endpoint/Responses/FormatedResponses/FormatedResponses.css'

export const FormatedPost = ({ data }: { data: ContactResponse }) => {
  return (
    <div className="response-formated-container">
      <h3>Contact</h3>
      <div className="contact category">
        <h3>{data.status}</h3>
        <ul>
          <li className="contact item">
            <p className="contact name">
              <strong>{data.data.email}</strong>
            </p>
            <p className="contact detail">{data.data.subject}</p>
            <p className="contact detail">{data.data.message}</p>
          </li>
        </ul>
      </div>
    </div>
  )
}
