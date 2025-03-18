import { useState } from 'react'
import './../Endpoint/Endpoint.css'
import './PostEndpoint.css'
import { SlArrowDown } from 'react-icons/sl'

import { JsonPost } from './Responses/JsonPost'
import { FormatedPost } from './Responses/FormatedPost'
import { ContactFormData } from '../../types'
import { JsonResponse } from './Responses/JsonResponse'

const initialData: ContactFormData = {
  email: '',
  subject: 'General Inquiry',
  message: 'Hello, I would like to get in touch!',
}

export const PostEndpoint = () => {
  const [expand, setExpand] = useState(false)
  const [response, setResponse] = useState(false)
  const [responseType, setResponseType] = useState('json')
  const [executed, setExecuted] = useState(false)
  const [jsonData, setJsonData] = useState<ContactFormData>(initialData)
  const [error, setError] = useState<string | null>(null)
  const [status, setStatus] = useState<number | null>(null)

  const validateData = (data: ContactFormData) => {
    if (!data.email || !data.subject || !data.message) {
      return 'All fields are required.'
    }
    if (!data.email.includes('@')) {
      return 'Invalid email format.'
    }
    return null
  }

  const handleExecute = async () => {
    const validationError = validateData(jsonData)
    if (validationError) {
      setError(validationError)
      return
    }

    setError(null)
    setExecuted(true)
    try {
      const response = await fetch('https://formspree.io/f/mzzezbny', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(jsonData),
      })

      if (response.ok) {
        setStatus(200)
        setResponse(true)
      } else {
        setStatus(response.status)
      }
    } catch (error) {
      console.log(error)
      setError('Failed to send data.')
    }
  }

  return (
    <div className="endpoint">
      <div className="endpoint-title-container">
        <div className="endpoint-title">Contact</div>
        <div className="endpoint-description">A way to interact with me</div>
      </div>
      <div className="endpoint-header" onClick={() => setExpand(!expand)}>
        <span className="api-method post">POST</span>
        <span className="api-path">/contacts</span>
        <span className="api-description">
          Reach out to Amir with any questions, job offers, or networking
          opportunities.
        </span>
        <SlArrowDown className={`api-icon ${expand ? 'rotate' : ''}`} />
      </div>
      <div className={`endpoint-content ${expand ? 'expand' : 'collapse'}`}>
        <div className="endpoint-url">http://amirbarra.info/api/contact</div>

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
        <div className="response-container">
          <p>Input:</p>
          <hr />
          {error && <div className="error-message">{error}</div>}
          <JsonPost jsonData={jsonData} setJsonData={setJsonData} />
        </div>
        {response && (
          <div className="response-container">
            <p>Response:</p>
            <hr />
            {status === 200 ? (
              <div className="success-message">Success! Data sent.</div>
            ) : (
              <div className="error-message">Error: {status}</div>
            )}
            {responseType === 'json' ? (
              <JsonResponse jsonData={jsonData} setJsonData={setJsonData} />
            ) : (
              <FormatedPost data={{ status: 200, data: jsonData }} />
            )}
          </div>
        )}
      </div>
    </div>
  )
}
