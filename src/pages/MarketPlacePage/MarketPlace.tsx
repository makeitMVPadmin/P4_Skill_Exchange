import { useState, useEffect } from 'react';
import JobCard from '../../components/JobCard/JobCard';
import CategoryDropdown from '../../components/CategoryDropdown/CategoryDropdown';
import { getAllTasks } from '@/src/utils/Firebase';
import { Job } from '@/src/interfaces/types'
import './MarketPlace.scss';

interface Job {
  id: string;
  usedId: string;
  categories: string[];
  title: string;
  header: string;
  about: string;
  description: string;
  thumbnail: string;
  assignedUser: string;
  status: number;
  createdAt: number;
  updatedAt: number;
  jobDuration: number;
  jobSkills: string[];
  questions: number;
}


const MarketPlace = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>('All'); // Default to 'All'

  // Fetch jobs data from Firebase when component mounts
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const jobData = await getAllTasks();
        setJobs(jobData);
        setFilteredJobs(jobData); // Initialize filteredJobs with all jobs
      } catch (error) {
        console.error('Error fetching jobs data:', error);
      }
    };
    fetchJobs();
  }, []);

  // Filter jobs based on selectedCategory
  useEffect(() => {
    const filterJobs = () => {
      const jobsToDisplay = selectedCategory === 'All'
        ? jobs
        : jobs.filter((job: Job) =>
            job.categories?.some(category => category === selectedCategory) ?? false
          );

      setFilteredJobs(jobsToDisplay);
    };

    filterJobs();
  }, [selectedCategory, jobs]);

  const onSelectCategory = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div className="marketplace-container">
      <div>
        <div>
          <CategoryDropdown onSelectCategory={onSelectCategory} />
        </div>
        <div className="marketplace-content">
          <h2 className="marketplace-title">Projects you might like</h2>
          <div className="job-cards-container">
            {filteredJobs.map((job: Job) => (
              <JobCard key={job.id} job={job} flag={false} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketPlace;
