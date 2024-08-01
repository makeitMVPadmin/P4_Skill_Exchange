import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons'
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons'
import { getAllTasks } from '@/src/utils/Firebase'

import { useState } from 'react'

type Job = {
  id: number
  title: string
  description: string
  imageUrl: string
  jobSkills: string[]
  categories: string[]
}

type JobCardProps = {
  job: Job
}

const JobCard = ({ job }: JobCardProps) => {
  console.log(JSON.stringify(job))
  const { jobSkills, categories, description, title } = job

  const [likeProject, setLikeProject] = useState(false)

  const handleUnLike = () => {
    setLikeProject(false)
  }

  const handleLike = () => {
    setLikeProject(true)
  }

  return (
    //  <Link to={`/marketplace/${job.id}`}>
    <div className="flex-grow p-4 pb-8  rounded overflow-hidden border-b-8 border-black border-4 border-r-8 shadow-lg bg-white">
      <div className="flex items-center justify-between px-2 pb-4">
        <h3 className="text-base font-bold ">{title}</h3>
        {likeProject ? (
          <div className="bg-yellow-300 rounded-full p-2 flex justify-center items-center">
            <FontAwesomeIcon
              className="h-6 w-6 bg-yellow-300"
              icon={faHeartSolid}
              onClick={handleUnLike}
            />
          </div>
        ) : (
          <div className="bg-yellow-300 rounded-full p-2 flex justify-center items-center">
            <FontAwesomeIcon
              className="h-6 w-6 "
              icon={faHeartRegular}
              onClick={handleLike}
            />
          </div>
        )}
      </div>
      <Link to={`/marketplace/${job.id}`}>
        <img
          className="w-full"
          src="https://via.placeholder.com/250x150"
          alt="Sunset in the mountains"
        />
        <div className="py-4">
          <p className="text-gray-700 text-base">{description}</p>
        </div>
      </Link>
      {/* <button className="border border-neutral-300 rounded-lg py-1.5 px-10 my-2 bg-blue-800 hover:bg-blue-600 text-white ml-6">
        Apply
      </button> */}
      <div className=" flex justify-start items-center mb-4 ">
        {categories.map((category: string) => (
          <span className="inline-block bg-yellow-300 rounded-full px-4 py-2">
         {category}
        </span>))}
      </div>
      <hr className=" h-0.5 border-t-0 bg-gray-200 " />
      <div className=" py-3">
        <p className="text-gray-700 text-base font-medium">SKILLS & TOOLS</p>
      </div>

      {jobSkills?.map((job_tag: string) => (
        <span
          key={job_tag}
          className="inline-block bg-blue-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
        >
          {job_tag}
        </span>
      ))}
    </div>
    // </Link>
  )
}

export default JobCard
