import { ContactFormData } from './../../../types.d'

interface JsonInputProps {
  jsonData: ContactFormData
  setJsonData: (data: ContactFormData) => void
}

export const JsonPost = ({ jsonData, setJsonData }: JsonInputProps) => {
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
        className="json input"
        value={JSON.stringify(jsonData, null, 2)}
        onChange={handleChange}
        rows={5}
      />
    </div>
  )
}
