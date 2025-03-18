import {
  ApiCertification,
  ApiRecord,
  ApiWorkExperience,
  ApiSkills,
  ApiProjects,
} from '../../../../types.d'
import { Studies } from './ResponsesTypes/Studies'
import { Certifications } from './ResponsesTypes/Certifications'
import { WorkExperience } from './ResponsesTypes/WorkExperience'
import { Skills } from './ResponsesTypes/Skills'
import { Projects } from './ResponsesTypes/Projects'

export const FormatedResponse = ({
  data,
}: {
  data:
    | ApiRecord
    | ApiCertification
    | ApiWorkExperience
    | ApiSkills
    | ApiProjects
}) => {
  if (!data?.data) {
    return <p className="error-message">No data available.</p>
  }

  if (
    Array.isArray(data.data) &&
    data.data.length > 0 &&
    'position' in data.data[0]
  ) {
    return <WorkExperience data={data as ApiWorkExperience} />
  }

  if (!Array.isArray(data.data) && 'university' in data.data) {
    return <Studies data={data as ApiRecord} />
  }

  if (
    Array.isArray(data.data) &&
    data.data.length > 0 &&
    'category' in data.data[0] &&
    'items' in data.data[0] &&
    'institution' in data.data[0].items[0]
  ) {
    return <Certifications data={data as ApiCertification} />
  }

  if (
    Array.isArray(data.data) &&
    data.data.length > 0 &&
    'category' in data.data[0] &&
    'items' in data.data[0] &&
    'level' in data.data[0].items[0]
  ) {
    return <Skills data={data as ApiSkills} />
  }

  if (
    Array.isArray(data.data) &&
    data.data.length > 0 &&
    'category' in data.data[0] &&
    'projects' in data.data[0] &&
    'name' in data.data[0].projects[0]
  ) {
    return <Projects data={data as ApiProjects} />
  }

  return <p className="error-message">Unknown data format.</p>
}
