import { useState } from "react";
import PlusIcon from "/icons/plus-icon.svg";

import Button from "@/src/components/SeButton/SeButton";
import CreateProjectForm from "../CreateProjectForm/CreateProjectForm";

import "./CreateProjectCard.scss";

function CreateProjectCard() {
  const [isFormOpen, setFormOpen] = useState(false);
  
  const handleFormChange = () => {
    setFormOpen(!isFormOpen)
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

      { isFormOpen && <CreateProjectForm /> }
    </div>
  )
}

export default CreateProjectCard