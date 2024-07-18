import { useState } from "react";
import PlusIcon from "/icons/plus-icon.svg";

import "./CreateProjectCard.scss";
import Button from "@/src/components/Button/Button";
import CreateProjectForm from "../CreateProjectForm/CreateProjectForm";

function CreateProjectCard({ handleButtonClick }: any ) {
  const [onFormOpen, setFormOpen] = useState(false);
  
  const handleFormChange = () => {
    setFormOpen(!onFormOpen)
  }

  return (
    <div className="create__project">
      <img src={PlusIcon} alt="plus-icon-outline" />

      <div className="create__project-text">
        <h1>Need Help? Create a Project</h1>
        <p>Find skilled talent to bring your ideas to life by creating a post.</p>
      </div>

      <Button 
        text={"Create Project"} 
        onClick={handleFormChange}
      />

      { onFormOpen && <CreateProjectForm /> }
    </div>
  )
}

export default CreateProjectCard