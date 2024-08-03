import Button from "@/src/components/SeButton/SeButton";
import Tag from "@/src/components/Tag/Tag";
import { FormikProps, FormikValues } from "formik";
import { useState } from "react";

type SkillsStepProps = {
  form: FormikProps<FormikValues>;
  name: "Skills";
};

function SkillsStep({ form }: SkillsStepProps) {
  const [skillItemInputField, setSkillItemInputField] = useState('');  


 const addFormSkill = () => {
  if (skillItemInputField && !form.values.skills.includes(skillItemInputField)) {
    const updatedSkills = [...form.values.skills, skillItemInputField];
    form.setFieldValue("skills", updatedSkills);
    setSkillItemInputField("");  // or skillItemInputFieldInputField
  }
}

  const handleNewSkill = (event: any) => {
    setSkillItemInputField(event.target.value)
  }

  return (  
    <>          
      <div className="c_project-form__modal-body__content">
        <div className="modal__content-steps">
        {"Step 2"} / { "3" }
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
            <div className="form-item__skills-input">
              <input 
                type="text" 
                value={skillItemInputField}
                onChange={handleNewSkill}
                name="skills"
              />
              <Button 
                onClick={addFormSkill} 
                text="+"
                variant="solid"
              />
            </div>
            <p>Choose up to 2-3 skills for the project</p>
              <div className="form-item__skills">
                { form.values.skills?.map((skill: string, index: number) => (
                    <Tag text={skill} key={index} />
                ))}
              </div>
          </div>

          <div className="form-item">
            <label htmlFor="duration">How long will the Project take?</label>
            <input 
              type="text" 
              value={form.values.duration}
              onChange={form.handleChange}
              name="duration"
            />
            <p>E.g: 1-2 weeks or 3-6 months</p>
          </div>

        </form>
      </div>
    </>
  )
}

export default SkillsStep