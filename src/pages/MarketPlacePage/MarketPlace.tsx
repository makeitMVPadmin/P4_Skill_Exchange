import { useState, useEffect } from 'react'
import JobCard from '../../components/JobCard/JobCard'
import CategoryDropdown from '../../components/CategoryDropdown/CategoryDropdown'
import { getAllTasks } from '@/src/utils/Firebase'
import { Job } from '@/src/interfaces/types'

const MarketPlace = () => {
  const [jobs, setJobs] = useState<Job[]>([])
  const [filteredJobs, setFilteredJobs] = useState<Job[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  // Fetch jobs data from Firebase when component mounts
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const jobData = await getAllTasks()
        setJobs(jobData)
      } catch (error) {
        console.error('Error fetching jobs data:', error)
      }
    }
    fetchJobs()
  }, [])

  // Filter jobs based on selectedCategory
  useEffect(() => {
    const filterJobs = () => {
      const jobsToDisplay = selectedCategory
        ? jobs.filter(
            (job: Job) =>
              job.categories?.some(category => category === selectedCategory) ??
              false
          )
        : jobs

      setFilteredJobs(jobsToDisplay)
    }

    filterJobs()
  }, [selectedCategory, jobs])
  const onSelectCategory = (category: string) => {
    setSelectedCategory(category)
  }

  return (
    <div className="mx-auto p-4 w-full">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-gray-100 p-6 col-span-1 ">
          <CategoryDropdown onSelectCategory={onSelectCategory} />
        </div>
        <div className="bg-white p-6 col-span-3">
          <h2 className="text-xl font-bold mb-2">Marketplace</h2>
          <div className="w-full flex sm:items-center flex-wrap gap-5">
            {filteredJobs.map((job: Job) => (
              <JobCard key={job.id} job={job} flag={false} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MarketPlace
