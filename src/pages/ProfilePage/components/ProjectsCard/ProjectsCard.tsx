import "./ProjectsCard.scss";

interface ProjectProps {
  name: string;
  image: string;
  description: string;
  url: string;
}

// A single Project component
const Project: React.FC<ProjectProps> = ({ name, description, image, url }) => {
  return (
    <a href={url} target="_blank" className="projects__project">
      <div className="projects__project-thumbnail">
        <img src={image} alt={name} />
      </div>
      <div className="projects__project-name">{name}</div>
      <div className="projects__project-description">{description}</div>
    </a>
  );
};

interface ProjectData {
  project_name: string;
  project_image: string;
  project_description: string;
  project_url: string;
}

interface ProjectsCardProps {
  projects: ProjectData[];
}

const ProjectsCard: React.FC<ProjectsCardProps> = ({ projects }) => {
  return (
    <div className="projects">
      <h2 className="projects__title">Projects</h2>
      <div className="projects__list">
        {projects.map((project, index) => (
          <Project
            key={index}
            name={project.project_name}
            image={project.project_image}
            description={project.project_description}
            url={project.project_url}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsCard;
