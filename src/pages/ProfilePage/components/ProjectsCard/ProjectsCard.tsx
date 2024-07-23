import "./ProjectsCard.scss";
import { ProjectDetails } from "@/src/interfaces/types";

// A single Project component
const Project: React.FC<ProjectDetails> = ({
  project_name,
  project_description,
  project_image,
  project_url,
}) => {
  return (
    <a href={project_url} target="_blank" className="projects__project">
      <div className="projects__project--thumbnail">
        <img
          className="projects__project--img"
          src={project_image}
          alt={project_name}
        />
      </div>
      <div className="projects__project--name">{project_name}</div>
      <div className="projects__project--description">
        {project_description}
      </div>
    </a>
  );
};

interface ProjectsCardProps {
  projects: ProjectDetails[];
}

const ProjectsCard: React.FC<ProjectsCardProps> = ({ projects }) => {
  return (
    <div className="projects">
      <h2 className="projects__title">Portfolio Projects</h2>
      <div className="projects__list">
        {projects.map((project, index) => (
          <Project
            key={index}
            project_name={project.project_name}
            project_image={project.project_image}
            project_description={project.project_description}
            project_url={project.project_url}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsCard;
