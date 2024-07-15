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

let jobs = projectData.jobs;

const MarketPlace = () => {
  return (
    <div className="mx-auto p-4 w-full">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-gray-100 p-6 col-span-1 ">
          <h2 className="text-xl font-bold mb-2">Filter</h2>
          <CategoryDropdown></CategoryDropdown>
        </div>
        <div className="bg-white p-6 col-span-3">
          <h2 className="text-xl font-bold mb-2">Market Place</h2>
          <div className="w-full flex sm:items-center flex-wrap gap-5">
            {jobs.map((job: Job) => {
              return <JobCard key={job.id} jobDetails={job} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketPlace;
