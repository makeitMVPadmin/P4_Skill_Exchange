import { useState } from "react";
import JobCard from "../../components/JobCard/JobCard";
import CategoryDropdown from "../../components/CategoryDropdown/CategoryDropdown";
import projectData from "../../data/dummy_data_extended.json";

interface Job {
  id: number;
  name: string;
  category: string;
  job_tags: string[];
  job_description: string;
}

const MarketPlace = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const onSelectCategory = (category: string) => {
    setSelectedCategory(category);
  };

  // Filter jobs based on selectedCategory
  const filteredJobs = selectedCategory
    ? projectData.jobs.filter((job: Job) => job.category === selectedCategory)
    : projectData.jobs;

  return (
    <div className="mx-auto p-4 w-full">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-gray-100 p-6 col-span-1 ">
          <h2 className="text-xl font-bold mb-2">Filter</h2>
          <CategoryDropdown onSelectCategory={onSelectCategory} />
        </div>
        <div className="bg-white p-6 col-span-3">
          <h2 className="text-4xl font-bold my-2">Market Place</h2>
          <div className="flex flex-wrap justify-between gap-5">
            { filteredJobs.map((job: Job) => (
              <JobCard key={job.id} jobDetails={job} />
            ))
            }
          </div>
          </div>
        </div>
      </div>
  );
};

export default MarketPlace;
