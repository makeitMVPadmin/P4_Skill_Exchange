import projectData from "../../data/dummy_data_extended.json";
import { useParams } from "react-router-dom";
import ProjectCardModal from "@/src/components/Modals/ProjectCardModal/ProjectCardModal";
import TaskOwner from "../../components/TaskOwner/TaskOwner"
import "./ProejctPage.scss"

function ProjectPage() {
  const { id } = useParams();
  const jobDetails = projectData.jobs.find(
    (job) => job.id === parseInt(id, 10)
  );
  return (
    <div className="task__detail">
      <div className="task__detail-header">
        <div className="task__detail-header__info">
          <h1 className="task__title">{jobDetails.name}</h1>
          <p className="task__description">{jobDetails.job_description}</p>
  
          <div className="task__tags">
            <div>
              {jobDetails.job_tags.map(tag => (
                <span
                  key={tag}
                  className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="task__detail-header__apply">
          <button className="apply__button" onClick={() => setOpen(true)}>
            apply
          </button>
          <ProjectCardModal open={open} onClose={() => setOpen(false)}>
            <h1 className="pcmodal__maintitle">
              Application for Cool Project #1
            </h1>
            <h2 className="pcmodal__title">Questions</h2>
            <form className="pcmodal__form">
              <label className="pcmodal__form--label" htmlFor="yearsofexperience">
                How many years of coding experience do you have?
              </label>
              <input
                className="pcmodal__form--input"
                placeholder="Enter your years of experience"
                type="text"
                name="yearsofexperience"
              />
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Apply Now
              </button>
            </form>
          </ProjectCardModal>
        </div>
      </div>
      <div className="task__detail-bottom">
        <article className="task__content">
          <div className="task__content-header">
            <h3 className="task__content-title">About the Task</h3>
            <p className="task__content">{jobDetails.job_description}</p>
          </div>
          <div className="task__content-bottom">
            <h5>Responsibilities of the task</h5>
            <ul className="task__content-list">
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </li>
              <li>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </li>
              <li>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.
              </li>
              <li>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                officia deserunt mollit anim id est laborum
              </li>
            </ul>
          </div>
        </article>
        <TaskOwner
          createdDate={jobDetails.created_date}
          jobOwner={jobDetails.job_owner}
        />
      </div>
    </div>
  )
  
}

export default ProjectPage;
