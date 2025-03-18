import { ContactFormData } from './../../../types.d'

interface JsonResponseProps {
  jsonData: ContactFormData
  setJsonData: (data: ContactFormData) => void
}

export const JsonResponse = ({ jsonData, setJsonData }: JsonResponseProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    try {
      const updatedJson: ContactFormData = JSON.parse(event.target.value)
      setJsonData(updatedJson)
    } catch (error) {
      console.error('Invalid JSON', error)
    }
  }

  return (
    <div className="textarea-container">
      <textarea
        className="json response"
        value={JSON.stringify({ status: 200, data: jsonData }, null, 2)}
        onChange={handleChange}
        rows={8}
      />
    </div>
  )
}
