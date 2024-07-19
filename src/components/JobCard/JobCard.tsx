import { Link } from 'react-router-dom';
interface JobDetails {
  id: number;
  name: string;
  category: string;
  job_tags: string[];
  job_description: string;
  jobSkills: string[];
}

interface JobCardProps {
  jobDetails: JobDetails;
  flag: boolean;
}

const JobCard: React.FC<JobCardProps> = ({ jobDetails, flag }) => {
  const { id, name, job_tags, job_description, jobSkills } = jobDetails;
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
          {job_tags.map((job_tag: string) => (
            <span key={job_tag} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {job_tag}
            </span>
          ))}
        </div>
        {flag && (
          <div className="border-t border-gray-200 my-4">
            <div className="px-6 py-4">
              <p className="text-gray-400">SKILLS & TOOLS</p>
            </div>
            <div className="px-6 pt-4 pb-2">
              {jobSkills.map((skill: string) => (
                <span key={skill} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  {skill}
                </span>
              ))}
            </div>
            <div className="px-6 pt-4 pb-2">
              <p className="inline-block bg-blue-300 px-3 py-1">In progress</p>
            </div>
          </div>
        )}
      </div>
    </Link>
  );
};

export default JobCard;
