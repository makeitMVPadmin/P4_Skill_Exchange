import { Link } from 'react-router-dom'

type Job = {
  id: number,
  title: string
  description: string
  imageUrl: string
  job_tags: string[]
}

type JobCardProps = {
  job: Job
}

const JobCard = ({ job }: JobCardProps) => {

  return (
    <Link to={`/marketplace/${job.id}`}>
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
        <img
          className="w-full"
          src="https://via.placeholder.com/400x200"
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
            quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
            nihil.
          </p>
        </div>
        <button
          className="border border-neutral-300 rounded-lg py-1.5 px-10 my-2 bg-blue-800 hover:bg-blue-600 text-white ml-6"
        >
          Apply
        </button>
        <div className="px-6 pt-4 pb-2">
          {job.job_tags?.map((job_tag: string) => (
            <span
              key={job_tag}
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              {job_tag}
            </span>
          ))}

          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #photography
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #travel
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #winter
          </span>
        </div>
      </div>
    </Link>
  )
}

export default JobCard
