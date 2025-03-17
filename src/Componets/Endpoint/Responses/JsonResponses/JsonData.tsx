import {
  ApiRecord,
  ApiCertification,
  ApiWorkExperience,
  ApiSkills,
  ApiProjects,
} from '../../../../types.d'

export const JsonData = ({
  data,
}: {
  data:
    | ApiRecord
    | ApiCertification
    | ApiWorkExperience
    | ApiSkills
    | ApiProjects
}) => {
  const { status, data: responseData } = data

  return (
    <div className="response-container">
      <pre>{JSON.stringify({ status, data: responseData }, null, 2)}</pre>
    </div>
  )
}
