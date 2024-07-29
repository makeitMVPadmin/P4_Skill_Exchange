import { useState } from "react";
import { Formik, FormikProps, FormikValues } from "formik";

import { generateSteps, generateInitialValues, getStepSchema } from "../Steps";

import closeIcon from "/icons/close-icon.svg";
import Button from "@/src/components/SeButton/SeButton";
import SeProgressBar from "@/src/components/SeProgressBar/SeProgressBar";

import "./CreateProjectForm.scss";

type CreateProjectProps = {
  handleFormChange: () => void;
}

function CreateProjectForm({ handleFormChange }: CreateProjectProps) {
  const [steps] = useState(generateSteps());
  const [initialValues] = useState(generateInitialValues(steps));
  const [currentIndex, setCurrentIndex] = useState(0);

  const goNext = () => {
    currentIndex < steps.length && setCurrentIndex((oldIndex) => oldIndex + 1);
  };

  const goBack = () => {
    currentIndex > 0 && setCurrentIndex((oldIndex) => oldIndex - 1);
  };

  const getFormProgress = () => {
    const percentage = ((currentIndex + 1) / steps.length * 100).toFixed(2)
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

  const handleSubmitForm = async ( form: FormikValues ) => {
    // Perform API call here
    return new Promise<void>((resolve) => {
      setTimeout(() => {
         resolve();
      }, 2000);
    }).then(() => {
      handleFormChange()
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
        
          <Formik
            initialValues={initialValues}
            validationSchema={getStepSchema(currentIndex, steps)}
            onSubmit={handleSubmitForm}
            validateOnMount
          >
            {(form) => { 
              return (
                <>
                  <div className="c_project-form__modal-body">
                    {renderCurrentStep(form)}
                  </div>
                  <SeProgressBar value={getFormProgress()} colorScheme="#0954B0" />
                  <footer className="c_project-form__modal-footer">
                    <Button variant="outline" text="Go Back" onClick={goBack}/>
                    { currentIndex < 2 ? 
                      ( <Button 
                          variant="solid" 
                          text="Next Step" 
                          onClick={goNext}
                        /> 
                      )
                      :
                      (
                        <Button variant="solid" text="Submit" onClick={() => handleSubmitForm(form)} />
                      )
                    }
                  </footer>
                </>
              )
            }}
          </Formik>
        


      </section>
    </div>
  )
}

export default CreateProjectForm