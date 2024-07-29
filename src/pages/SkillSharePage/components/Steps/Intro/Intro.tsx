import { FormikProps, FormikValues } from "formik";

type IntroStepProps = {
  form: FormikProps<FormikValues>;
  name: "Intro";
};

function IntroStep({ form }: IntroStepProps ) {

  return (
    <>          
      <div className="c_project-form__modal-body__content">
        <div className="modal__content-steps">
        {"Step 1"} / { "3" }
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
            <input 
              type="text" 
              value={form.values.headline}
              onChange={form.handleChange}
              name="headline"
            />
            <p>E.g: Build a mobile app with Flutter</p>
          </div>

          <div className="form-item">
            <label htmlFor="category">What category is your task?</label>
            <input 
              type="text" 
              value={form.values.category}
              onChange={form.handleChange}
              name='category'
            />
            <p>E.g: UX Design</p>
          </div>
          
          <div className="form-item">
            <label htmlFor="description">Description</label>
            <textarea 
              typeof="text" 
              aria-multiline
              onChange={form.handleChange}
              value={form.values.description}
              name="description"
              />
            <p>Enter a unique description for your task</p>
          </div>
        </form>
      </div>
    </>
  )
}

export default IntroStep