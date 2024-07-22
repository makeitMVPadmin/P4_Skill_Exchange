import { FormikProps, FormikValues } from "formik";

import "./Summary.scss";

type SummaryStepProps = {
  form: FormikProps<FormikValues>;
  name: "Summary";
}; 

function Summary ({ form }: SummaryStepProps ) {
  const { headline, category, description, skills, duration} = form.values 
  
  return (
    
    <>          
      <div className="c_project-form__modal-body__content">
        <div className="modal__content-steps">
        {"Step 3"} / { "3" }
        </div>
        <div className="modal__content-title">
          <h1>Let’s review before you post</h1>
        </div>
        <div className="modal__content-description">
          <p>Take the time to ensure you have all the details you need. Double checking never hurt anybody!</p>
        </div>
      </div>
      <div className="c_project-form__modal-body-form">
        <div className="form__summary">
          <div className="form__summary-title">
            <h2>Summary</h2>
          </div>
          <ul className="form__summary-items">
            <li className="form__summary-items__item">
              <h3>Headline</h3>
              <p>{ headline }</p>
            </li>
            <li className="form__summary-items__item">
              <h3>Category</h3>
              <p>{ category }</p>
            </li>
            <li className="form__summary-items__item">
              <h3>Description</h3>
              <p>{ description }</p>
            </li>
            <li className="form__summary-items__item">
              <h3>Skills</h3>
              <p>{ skills }</p>
            </li>
            <li className="form__summary-items__item">
              <h3>Duration</h3>
              <p>{ duration }</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Summary;