import closeIcon from "/icons/close-icon.svg";

import "./CreateProjectForm.scss";
import Button from "@/src/components/SeButton/SeButton";

type CreateProjectProps = {
  handleFormChange: () => void;
}

function CreateProjectForm({ handleFormChange }: CreateProjectProps) {
  return (
    <div className="c_project-form">
      <div className="c_project-form__wrapper"></div>
      <section className="c_project-form__modal">
        <header className="c_project-form__modal-header">
          <button onClick={handleFormChange}>
            <img src={closeIcon} alt="" />
          </button>
        </header>
        <div className="c_project-form__modal-body">
          <div className="c_project-form__modal-body__content">
            <div className="modal__content-steps">
              1/5
            </div>
            <div className="modal__content-title">
              <h1>Let’s get started with making a new project</h1>
            </div>
            <div className="modal__content-description">
              <p>This helps your post stand out to the right candidates. You want to get noticed right away!</p>
            </div>
          </div>
          <div className="c_project-form__modal-body-form">

          </div>
        </div>
        <footer className="c_project-form__modal-footer">
          <Button variant="outline" text="Go Back" onClick={() => {}}/>
          <Button variant="solid" text="Next: Description" onClick={() => {}}/>
        </footer>
      </section>
    </div>
  )
}

export default CreateProjectForm