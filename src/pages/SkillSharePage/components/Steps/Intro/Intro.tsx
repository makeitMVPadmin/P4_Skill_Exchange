import { useState } from "react";
import { FormikProps, FormikValues } from "formik";

// import { getInputProps } from "util/forms";

type IntroStepProps = {
  form: FormikProps<FormikValues>;
  name: "emailAddress";
};

function IntroStep({ currentIndex = 1, steps = 3 }) {
  const [headline, setHeadline] = useState("");
  const [category, setCategory] = useState("");

  return (
    <>          
      <div className="c_project-form__modal-body__content">
        <div className="modal__content-steps">
        {currentIndex} / { steps }
        </div>
        <div className="modal__content-title">
          <h1>Let’s get started with making a new project</h1>
        </div>
        <div className="modal__content-description">
          <p>This helps your post stand out to the right candidates. You want to get noticed right away!</p>
        </div>
      </div>
      <div className="c_project-form__modal-body__form">
        <form>
          <div className="form-item">
            <label htmlFor="headline">Write a strong headline for your task</label>
            <input type="text" value={headline}/>
            <p>E.g: Build a mobile app with Flutter</p>
          </div>

          <div className="form-item">
            <label htmlFor="categort">What category is your task?</label>
            <input type="text" value={category}/>
            <p>E.g: UX Design</p>
          </div>
          
          <div className="form-item">
            <label htmlFor="description">Description</label>
            <input type="text" />
            <p>Enter a unique description for your task</p>
          </div>
        </form>
      </div>
    </>
  )
}

export default IntroStep