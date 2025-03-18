import { ApiRecord } from '../../../../../types'
import './../FormatedResponses.css'
export const Studies = ({ data }: { data: ApiRecord }) => {
  return (
    <div className="response-formated-container studies">
      <div className="university-info">
        <p>
          <strong>University:</strong> {data.data.university}
        </p>
        <p>
          <strong>Years:</strong> {data.data.years}
        </p>
        <p>
          <strong>Degree:</strong> {data.data.degree}
        </p>
        <p>
          <strong>Achievements:</strong> {data.data.achievements}
        </p>
        <p>
          <strong>Grade Average:</strong> {data.data.gradeAverage}
        </p>
        <p>
          <strong>Title Method:</strong> {data.data.titleMethod}
        </p>
      </div>
      <img className="umss" src={data.data.thumbnail} alt="University Icon" />
    </div>
  )
}
