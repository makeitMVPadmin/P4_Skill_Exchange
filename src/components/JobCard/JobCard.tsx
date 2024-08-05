import { Link } from 'react-router-dom'

interface Job {
  id: string
  usedId: string
  categories: string[]
  title: string
  header: string
  about: string
  description: string
  thumbnail: string
  assignedUser: string
  status: number
  createdAt: number
  updatedAt: number
  jobDuration: number
  jobSkills: string[]
  questions: number
}

interface JobCardProps {
  job: Job
}

const JobCard = ({ job }: JobCardProps) => {
  return (
    <Link to={`/marketplace/${job.id}`}>
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
        <img className="w-full" src={job.thumbnail} alt={job.title} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{job.title}</div>
          <p className="text-gray-700 text-base">{job.description}</p>
        </div>
        <button className="border border-neutral-300 rounded-lg py-1.5 px-10 my-2 bg-blue-800 hover:bg-blue-600 text-white ml-6">
          Apply
        </button>
        <div className="px-6 pt-4 pb-2">
          {job.categories?.map((category: string) => (
            <span
              key={category}
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              {category}
            </span>
          ))}
        </div>
      </div>
    </Link>
  )
}

export default JobCard
