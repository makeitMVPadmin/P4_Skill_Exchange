import React, { useEffect, useState } from "react";
import "./ProjectsCard.scss";
import projectData from "../../../../data/dummy_data_extended.json";

interface ProjectProps {
  name: string;
  description: string;
  url: string;
}

// A single Project component
const Project: React.FC<ProjectProps> = ({ name, description, url }) => {
  return (
    <div className="projects__project">
      <div className="projects__project-thumbnail">
        <img src={url} alt={name} />
      </div>
      <div className="projects__project-name">{name}</div>
      <div className="projects__project-description">{description}</div>
    </div>
  );
};

interface ProjectData {
  project_name: string;
  project_description: string;
  project_url: string;
}

const ProjectsCard: React.FC = () => {
  const [projects, setProjects] = useState<ProjectData[]>([]);

  useEffect(() => {
    setProjects(projectData.user_projects);
  }, []);

  return (
    <div className="projects">
      <h2 className="projects__title">Projects</h2>
      <div className="projects__list">
        {projects.map((project, index) => (
          <Project
            key={index}
            name={project.project_name}
            description={project.project_description}
            url={project.project_url}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsCard;
