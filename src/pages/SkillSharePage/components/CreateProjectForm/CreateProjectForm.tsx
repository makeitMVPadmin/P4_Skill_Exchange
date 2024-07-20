import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, FormikProps, FormikValues } from "formik";

import { generateSteps, generateInitialValues, getStepSchema } from "../Steps";

import "./CreateProjectForm.scss";
import closeIcon from "/icons/close-icon.svg";
import Button from "@/src/components/SeButton/SeButton";
import SeProgressBar from "@/src/components/SeProgressBar/SeProgressBar";

type CreateProjectProps = {
  handleFormChange: () => void;
}

function CreateProjectForm({ handleFormChange }: CreateProjectProps) {
  const [steps] = useState(generateSteps());
  const [initialValues] = useState(generateInitialValues(steps));
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate()

  const goNext = () => {
    currentIndex < steps.length && setCurrentIndex((oldIndex) => oldIndex + 1);
  };

  const goBack = () => {
    currentIndex > 0 && setCurrentIndex((oldIndex) => oldIndex - 1);
  };

  const getFormProgress = () => {
    const percentage = (currentIndex / steps.length * 100).toFixed(2)
    return Number(percentage);
  }

  const renderCurrentStep = (form: FormikProps<FormikValues>) => {
    const step = steps[currentIndex];

    // opportunity to extend commonProps here with other relevant information
    const commonProps = {
      name: step.name,
      form,
    };

    const StepComponent = step.component;

    return <StepComponent {...commonProps} />;
  };

  const handleSubmitForm = (values: FormikValues) => {
    // Opportunity to perform API call here
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    }).then(() => {
      handleFormChange()
      navigate(`/skillshare`);
    });
  };


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
             {currentIndex} / {steps.length}
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
        <SeProgressBar value={getFormProgress()} colorScheme="#0954B0" />
        <footer className="c_project-form__modal-footer">
          <Button variant="outline" text="Go Back" onClick={goBack}/>
          { currentIndex < steps.length ? 
            ( <Button variant="solid" text="Next Step" onClick={goNext}/> )
            :
            (
              <Button variant="solid" text="Submit" onClick={handleSubmitForm} />
            )
          }
        </footer>
      </section>
    </div>
  )
}

export default CreateProjectForm