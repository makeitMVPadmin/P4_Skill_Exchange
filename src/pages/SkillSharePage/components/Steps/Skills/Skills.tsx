import { useState } from "react";

function SkillsStep({ currentIndex = 2, steps = 3}) {
  const [headline, setHeadline] = useState("");
  const [category, setCategory] = useState("");
  return (
    
    <>          
      <div className="c_project-form__modal-body__content">
        <div className="modal__content-steps">
        {currentIndex} / { steps }
        </div>
        <div className="modal__content-title">
          <h1>Select the skills required for the task</h1>
        </div>
        <div className="modal__content-description">
          <p>This helps skill providers know what is expected of them and will help you connect with the people you need.</p>
        </div>
      </div>
      <div className="c_project-form__modal-body__form">
        <form>
          <div className="form-item">
            <label htmlFor="headline">Search skills or add your own</label>
            <input type="text" value={headline}/>
            <p>Choose up to 2-3 skills for the project</p>
          </div>

          <div className="form-item">
            <label htmlFor="categort">How long will the Project take?</label>
            <input type="text" value={category}/>
            <p>E.g: 1-2 weeks or 3-6 months</p>
          </div>

        </form>
      </div>
    </>
  )
}

export default SkillsStep