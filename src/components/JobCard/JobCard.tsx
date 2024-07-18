import { Link } from "react-router-dom";

interface JobDetails {
  id: number;
  name: string;
  category: string;
  job_tags: string[];
  job_description: string;
}
interface JobCardProps {
  jobDetails: JobDetails;
}

const JobCard: React.FC<JobCardProps> = ({ jobDetails }) => {
  const { id, name, job_tags, job_description } = jobDetails;
  return (
    <Link to={`/marketplace/${id}`}>
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
        <img
          className="w-full"
          src="https://via.placeholder.com/400x200"
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{name}</div>
          <p className="text-gray-700 text-base">{job_description}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          {job_tags.map((job_tag: string) => {
            return (
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                {job_tag}
              </span>
            );
          })}
        </div>
      </div>
    </Link>
  );
};

export default JobCard;
