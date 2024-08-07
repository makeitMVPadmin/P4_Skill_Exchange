import { useState } from 'react'
import './CreateProjectModal.scss'
import mvpMascot from '@/src/assets/Icons/MVPmascot.svg'
import skillsData from '@/src/data/availableSkills.json'

interface ProjectModalProps {
  onClose: () => void
  onSubmit: (project: any) => void
}

const CreateProjectModal: React.FC<ProjectModalProps> = ({
  onClose,
  onSubmit
}) => {
  const [step, setStep] = useState(1)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [jobSkills, setJobSkills] = useState<string[]>([])
  const [selectedSkill, setSelectedSkill] = useState<string>('')
  const [header, setHeader] = useState('')
  const [thumbnail, setThumbnail] = useState('')
  const [jobDuration, setJobDuration] = useState(0)
  const [categories, setCategories] = useState<string[]>([])
  const [selectedCoverImage, setSelectedCoverImage] = useState<string | null>(
    null
  )
  const [coverImageURL, setCoverImageURL] = useState<string>('')
  const [rotation, setRotation] = useState(0)

  const { development, design } = skillsData

  const nextStep = () => {
    setStep(step + 1)
    setRotation(rotation + 70)
  }

  const prevStep = () => {
    setStep(step - 1)
    setRotation(rotation - 70)
  }

  const handleSkillSelect = (skill: string) => {
    if (skill && !jobSkills.includes(skill)) {
      setJobSkills([...jobSkills, skill])
      setSelectedSkill('')
    }
  }

  const handleURLInput = () => {
    setSelectedCoverImage(coverImageURL)
  }

  const handleSubmit = () => {
    const newProject = {
      title,
      description,
      jobSkills,
      header,
      thumbnail: selectedCoverImage || thumbnail,
      jobDuration,
      categories
    }
    onSubmit(newProject)
  }

  //Cover image links
  const coverImage1 =
    'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  const coverImage2 =
    'https://images.unsplash.com/photo-1592609931041-40265b692757?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  const coverImage3 =
    'https://images.unsplash.com/photo-1521931961826-fe48677230a5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

  return (
    <div className="project-modal">
      <div className="project-modal__content">
        <div className="project-modal__mascot-container">
          <img
            src={mvpMascot}
            alt="MVP Mascot"
            className="project-modal__mascot"
            style={{ transform: `rotate(${rotation}deg)` }}
          />
        </div>
        {step === 1 && (
          <div className="project-modal__step">
            <div className="project-modal__main">
              <div className="project-modal__question">
                <h2 className="project-modal__title">
                  Step 1 of 6:
                  <br />
                  <strong>Start</strong>{' '}
                </h2>

                <div className="project-modal__underline"></div>
                <p className="project-modal__description">
                  Write a strong headline to gain the attention of a talented
                  Skill Provider.
                </p>
              </div>
              <div className="project-modal__answer">
                <label className="project-modal__label" htmlFor="title">
                  Write a strong headline
                </label>
                <input
                  className="project-modal__input"
                  name="title"
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                  placeholder="Eg. Mobile App Developer Needed"
                />
              </div>
            </div>

            <div className="project-modal__progress">
              <div className="project-modal__progress--tracker1"></div>
            </div>
            <div className="project-modal__buttons">
              <div className="project-modal__buttons--blue"></div>
              <div className="project-modal__buttons--white">
                <button
                  className="project-modal__button  project-modal__button--next"
                  onClick={nextStep}
                >
                  Next: Info
                </button>
              </div>
            </div>
          </div>
        )}
        {step === 2 && (
          <div className="project-modal__step">
            <div className="project-modal__main">
              <div className="project-modal__question">
                <h2 className="project-modal__title">
                  Step 2 of 6: <br />
                  <strong>Info</strong>
                </h2>
                <div className="project-modal__underline"></div>
                <p className="project-modal__description">
                  A good description of what you want helps your post stand out.
                </p>
              </div>
              <div className="project-modal__answer">
                <label className="project-modal__label" htmlFor="description">
                  Write a 2-3 sentence description
                </label>
                <textarea
                  className="project-modal__textarea"
                  name="description"
                  value={description}
                  onChange={e => setDescription(e.target.value)}
                  placeholder="Eg. We are looking for a mobile app developer to help us build a new app for our business."
                />
              </div>
            </div>
            <div className="project-modal__progress">
              <div className="project-modal__progress--tracker2"></div>
            </div>
            <div className="project-modal__buttons">
              <div className="project-modal__buttons--blue">
                <button
                  className="project-modal__button project-modal__button--back"
                  onClick={prevStep}
                >
                  Back
                </button>
              </div>
              <div className="project-modal__buttons--white">
                <button
                  className="project-modal__button project-modal__button--next"
                  onClick={nextStep}
                >
                  Next: Skills
                </button>
              </div>
            </div>
          </div>
        )}
        {step === 3 && (
          <div className="project-modal__step">
            <div className="project-modal__main">
              <div className="project-modal__question">
                <h2 className="project-modal__title">
                  Step 3 of 6: <br />
                  <strong>Skills</strong>
                </h2>
                <div className="project-modal__underline"></div>
                <p className="project-modal__description">
                  This helps skill providers know what is expected of them and
                  will help you connect with the people you need.
                </p>
              </div>
              <div className="project-modal__answer">
                <label className="project-modal__label" htmlFor="category">
                  Category{' '}
                </label>
                <select
                  className="project-modal__select"
                  value={categories}
                  onChange={e => setCategories([e.target.value])}
                >
                  <option value="" disabled>
                    Select a category
                  </option>
                  <option value="Copywriting">Copywriting</option>
                  <option value="Data Analysis">Data Analysis</option>
                  <option value="Development (Back-End)">
                    Back-End Development
                  </option>
                  <option value="Development (Front-End)">
                    Front-End Development
                  </option>
                  <option value="Development (Full-Stack)">
                    Full-Stack Development
                  </option>
                  <option value="Editing & Proofreading">
                    Editing & Proofreading
                  </option>
                  <option value="Graphic Design">Graphic Design</option>
                  <option value="Product Management">Product Management</option>
                  <option value="Social Media">Social Media</option>
                  <option value="Web Development">Web Development</option>
                  <option value="UX/UI Design">UX/UI Design</option>
                  <option value="Other">Other</option>
                </select>
                <label className="project-modal__label" htmlFor="skills">
                  Add skills you're looking for
                </label>
                <div className="project-modal__skills">
                  {jobSkills.map((skill, index) => (
                    <span key={index} className="project-modal__skill">
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="project-modal__skill-selection">
                  <select
                    value={selectedSkill}
                    onChange={e => setSelectedSkill(e.target.value)}
                    className="project-modal__select"
                  >
                    <option value="" disabled>
                      Select a skill
                    </option>
                    <optgroup label="Development Skills">
                      {development.map(skill => (
                        <option key={skill} value={skill}>
                          {skill}
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="Design Skills">
                      {design.map(skill => (
                        <option key={skill} value={skill}>
                          {skill}
                        </option>
                      ))}
                    </optgroup>
                  </select>
                  <button
                    onClick={() => handleSkillSelect(selectedSkill)}
                    className="project-modal__skill-add-button"
                  >
                    Add Skill
                  </button>
                </div>
              </div>
            </div>
            <div className="project-modal__progress">
              <div className="project-modal__progress--tracker3"></div>
            </div>
            <div className="project-modal__buttons">
              <div className="project-modal__buttons--blue">
                <button
                  className="project-modal__button project-modal__button--back"
                  onClick={prevStep}
                >
                  Back
                </button>
              </div>
              <div className="project-modal__buttons--white">
                <button
                  className="project-modal__button project-modal__button--next"
                  onClick={nextStep}
                >
                  Next: Duration
                </button>
              </div>
            </div>
          </div>
        )}
        {step === 4 && (
          <div className="project-modal__step">
            <div className="project-modal__main">
              <div className="project-modal__question">
                <h2 className="project-modal__title">
                  Step 4 of 6: <br />
                  <strong>Duration</strong>
                </h2>
                <div className="project-modal__underline"></div>
                <p className="project-modal__description">
                  Please specify how long this project will last.
                </p>
              </div>
              <div className="project-modal__answer">
                <label className="project-modal__label" htmlFor="jobDuration">
                  How long will the project be?
                </label>
                <select
                  name="jobDuration"
                  className="project-modal__select"
                  value={jobDuration}
                  onChange={e => setJobDuration(Number(e.target.value))}
                >
                  <option value={0}>Select the duration</option>
                  <option value={1}>1 week</option>
                  <option value={2}>2 weeks</option>
                  <option value={4}>1 month</option>
                  <option value={6}>6 weeks</option>
                  <option value={8}>2 months</option>
                </select>
              </div>
            </div>
            <div className="project-modal__progress">
              <div className="project-modal__progress--tracker4"></div>
            </div>
            <div className="project-modal__buttons">
              <div className="project-modal__buttons--blue">
                <button
                  className="project-modal__button project-modal__button--back"
                  onClick={prevStep}
                >
                  Back
                </button>
              </div>
              <div className="project-modal__buttons--white">
                <button
                  className="project-modal__button project-modal__button--next"
                  onClick={nextStep}
                >
                  Next: Cover Image
                </button>
              </div>
            </div>
          </div>
        )}
        {step === 5 && (
          <div className="project-modal__step">
            <div className="project-modal__main">
              <div className="project-modal__question">
                <h2 className="project-modal__title">
                  Step 5 of 6: <br />
                  <strong>Cover Image</strong>
                </h2>
                <div className="project-modal__underline"></div>
                <p className="project-modal__description">
                  Choose a photo to help your project stand out.
                </p>
              </div>
              <div className="project-modal__answer">
                {selectedCoverImage && (
                  <div className="project-modal__selected-cover">
                    <img
                      src={selectedCoverImage}
                      alt="Selected Cover"
                      className="project-modal__selected-image"
                    />
                  </div>
                )}
                <div className="project-modal__cover-image-selection">
                  <div className="project-modal__cover-upload"></div>
                  <div className="project-modal__cover-select">
                    <h4 className="project-modal__cover-select-title">
                      Select an image
                    </h4>
                    <div className="project-modal__cover-images">
                      <img
                        src={coverImage1}
                        onClick={() => setSelectedCoverImage(coverImage1)}
                        alt="Cover Option 1"
                        className="project-modal__cover-image"
                      />
                      <img
                        src={coverImage2}
                        onClick={() => setSelectedCoverImage(coverImage2)}
                        alt="Cover Option 2"
                        className="project-modal__cover-image"
                      />
                      <img
                        src={coverImage3}
                        onClick={() => setSelectedCoverImage(coverImage3)}
                        alt="Cover Option 3"
                        className="project-modal__cover-image"
                      />
                    </div>
                  </div>
                  {/* <div className="project-modal__cover-url-input">
                    <h4 className="project-modal__cover-url-title">
                      Or enter an image URL
                    </h4>
                    <input
                      type="text"
                      placeholder="Enter image URL"
                      value={coverImageURL}
                      onChange={e => setCoverImageURL(e.target.value)}
                      className="project-modal__cover-url-field"
                    />
                    <button
                      onClick={handleURLInput}
                      className="project-modal__cover-url-button"
                    >
                      Use URL
                    </button>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="project-modal__progress">
              <div className="project-modal__progress--tracker5"></div>
            </div>
            <div className="project-modal__buttons">
              <div className="project-modal__buttons--blue">
                <button
                  className="project-modal__button project-modal__button--back"
                  onClick={prevStep}
                >
                  Back
                </button>
              </div>
              <div className="project-modal__buttons--white">
                <button
                  className="project-modal__button project-modal__button--next"
                  onClick={nextStep}
                >
                  Next: Review
                </button>
              </div>
            </div>
          </div>
        )}
        {step === 6 && (
          <div className="project-modal__step">
            <div className="project-modal__main">
              <div className="project-modal__question">
                <h2 className="project-modal__title">
                  Step 6 of 6: <br />
                  <strong>Review</strong>
                </h2>
                <div className="project-modal__underline"></div>
                <p className="project-modal__description">
                  Take the time to ensure you have all the details you need.
                  Double checking never hurt anybody!
                </p>
              </div>
              <div className="project-modal__answer">
                <div className="project-modal__review">
                  <h2 className="project-modal__review-title">
                    Take one last look before you go-go!
                  </h2>
                  <h3 className="project-modal__review-review">
                    Headline: {title}
                  </h3>
                  <p className="project-modal__review-category">
                    Category: {categories.join(', ')}
                  </p>
                  <p className="project-modal__review-description">
                    Description: {description}
                  </p>
                  <p className="project-modal__review-skills">
                    Skills: {jobSkills.join(', ')}
                  </p>
                  {selectedCoverImage && (
                    <img
                      src={selectedCoverImage}
                      alt="Cover"
                      className="project-modal__review-cover"
                    />
                  )}
                </div>
              </div>
            </div>
            <div className="project-modal__progress">
              <div className="project-modal__progress--tracker6"></div>
            </div>
            <div className="project-modal__buttons">
              <div className="project-modal__buttons--blue">
                <button
                  className="project-modal__button project-modal__button--back"
                  onClick={prevStep}
                >
                  Back
                </button>
              </div>
              <div className="project-modal__buttons--white">
                <button
                  className="project-modal__button project-modal__button--submit"
                  onClick={handleSubmit}
                >
                  Complete
                </button>
              </div>
            </div>
          </div>
        )}
        <button className="project-modal__close" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  )
}

export default CreateProjectModal
