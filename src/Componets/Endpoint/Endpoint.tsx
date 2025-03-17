import { useState } from 'react'
import './Endpoint.css'
import { SlArrowDown } from 'react-icons/sl'
import { FormatedResponse } from './Responses/FormatedResponses/FormatedResponses'
import { JsonData } from './Responses/JsonResponses/JsonData'
import {
  ApiCertification,
  ApiProjects,
  ApiRecord,
  ApiSkills,
  ApiWorkExperience,
} from '../../types.d'

export const Endpoint = ({
  data,
}: {
  data:
    | ApiRecord
    | ApiCertification
    | ApiWorkExperience
    | ApiSkills
    | ApiProjects
}) => {
  const [expand, setExpand] = useState(false)
  const [response, setResponse] = useState(false)
  const [responseType, setResponseType] = useState('json')
  const [executed, setExecuted] = useState(false)

  const handleExecute = () => {
    setResponse(true)
    setExecuted(true)
  }

  return (
    <div className="endpoint">
      <div className="endpoint-title-container">
        <div className="endpoint-title">{data.endpoint}</div>
        <div className="endpoint-description">{data.description}</div>
      </div>
      <div className="endpoint-header" onClick={() => setExpand(!expand)}>
        <span className="api-method">GET</span>
        <span className="api-path">/{data.endpoint.toLowerCase()}</span>
        <span className="api-description">{data.getDescription}</span>
        <SlArrowDown className={`api-icon ${expand ? 'rotate' : ''}`} />
      </div>
      <div className={`endpoint-content ${expand ? 'expand' : 'collapse'}`}>
        <div className="endpoint-url url">{data.url}</div>
        <div className="buttons">
          <button
            className={executed ? 'button disabled' : 'button'}
            onClick={handleExecute}
            disabled={executed}
          >
            Execute
          </button>
          <div className="response-buttons">
            <button
              className={`button ${responseType === 'json' ? 'disabled' : ''}`}
              onClick={() => setResponseType('json')}
            >
              JSON
            </button>
            <button
              className={`button ${
                responseType === 'formated' ? 'disabled' : ''
              }`}
              onClick={() => setResponseType('formated')}
            >
              Formatted
            </button>
          </div>
        </div>
        {response && (
          <div className="response-container">
            <p>Response:</p>
            <hr />
            {responseType === 'json' ? (
              <JsonData data={data} />
            ) : (
              <FormatedResponse data={data} />
            )}
          </div>
        )}
      </div>
    </div>
  )
}
