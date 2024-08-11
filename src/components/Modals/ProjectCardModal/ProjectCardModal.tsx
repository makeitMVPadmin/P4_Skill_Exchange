import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import MascotImage from '@/public/icons/MVP mascot.svg'
import {
  submitUserForJob,
  getUserDataForSpecificTask
} from '@/src/utils/Firebase'
import { applyJobPropTypes } from '@/src/interfaces/types'
import './ProjectCardModal.scss'

// Define prop types

const ProjectCardModal: React.FC<applyJobPropTypes> = ({
  isProjectCardModalOpen,
  onClose,
  questions,
  jobId,
  userId,
  taskTitle
}) => {
  const [currentAnswers, setCurrentAnswers] = useState<{
    [key: number]: string
  }>({})
  const [isReviewMode, setIsReviewMode] = useState<boolean>(false)
  const [submissionComplete, setSubmissionComplete] = useState<boolean>(false)
  const predefinedQuestions = [
    'What experience do you have related to this project?',
    'Why are you interested in this project?'
  ]

  const questionsToUse =
    questions && questions.length > 0 ? questions : predefinedQuestions

  useEffect(() => {
    if (jobId) {
      getUserDataForSpecificTask(jobId).catch(console.error)
    }
  }, [jobId])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const areAllQuestionsAnswered = questions.every(
      (_, index) =>
        currentAnswers[index] !== undefined && currentAnswers[index] !== ''
    )

    if (!areAllQuestionsAnswered) {
      alert('Please answer all the questions.')
      return
    }
    setIsReviewMode(true)
  }

  const handleFinalSubmit = async () => {
    try {
      const formattedAnswers = questionsToUse.map((question, index) => ({
        [question]: currentAnswers[index] || ''
      }))

      await submitUserForJob(userId, jobId, formattedAnswers)

      setCurrentAnswers({})
      setIsReviewMode(false)
      setSubmissionComplete(true)
    } catch (error) {
      console.error('Error submitting to Firestore:', error)
    }
  }

  const renderForm = () => (
    <form className="project-card-modal__form" onSubmit={handleSubmit}>
      {questionsToUse?.map((question, index) => (
        <div key={index} className="project-card-modal__form-item">
          <label
            className="project-card-modal__form-label"
            htmlFor={`question${index}`}
          >
            {question}
          </label>
          <input
            className="project-card-modal__form-input"
            type="text"
            name={`question${index}`}
            id={`question-${index}`}
            value={currentAnswers[index] || ''}
            onChange={e =>
              setCurrentAnswers(prev => ({ ...prev, [index]: e.target.value }))
            }
          />
        </div>
      ))}
      <div className="project-card-modal__form-actions">
        <button
          className="project-card-modal__button project-card-modal__button--primary"
          type="submit"
        >
          Next: Review
        </button>
      </div>
    </form>
  )

  const renderReview = () => (
    <div className="project-card-modal__review">
      {questionsToUse?.map((question, index) => (
        <div className="project-card-modal__form-item" key={index}>
          <label
            className="project-card-modal__form-label"
            htmlFor={`question${index}`}
          >
            {question}
          </label>
          <p className="project-card-modal__form-input project-card-modal__form-input--readonly">
            {currentAnswers[index] || ''}
          </p>
        </div>
      ))}
      <div className="project-card-modal__review-actions">
        <button
          className="project-card-modal__button project-card-modal__button--secondary"
          type="button"
          onClick={() => setIsReviewMode(false)}
        >
          Back
        </button>
        <button
          className="project-card-modal__button project-card-modal__button--primary"
          type="button"
          onClick={handleFinalSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  )

  const renderSubmissionComplete = () => (
    <div className="project-card-modal__submission-complete">
      <h2 className="project-card-modal__submission-title">
        Application submitted
      </h2>
      <div className="project-card-modal__submission-image">
        <img src={MascotImage} alt="success image" />
      </div>
      <p className="project-card-modal__submission-text">
        Your application to "{taskTitle}" has been submitted
      </p>
      <div className="project-card-modal__submission-actions">
        <Link
          to="/"
          className="project-card-modal__button project-card-modal__button--secondary"
        >
          View more projects
        </Link>
        <Link
          to="/profile"
          className="project-card-modal__button project-card-modal__button--primary"
        >
          Go to profile
        </Link>
      </div>
    </div>
  )

  return (
    <div
      className={`project-card-modal ${isProjectCardModalOpen ? 'project-card-modal--open' : 'project-card-modal--closed'}`}
      onClick={onClose}
    >
      <div
        className="project-card-modal__container"
        onClick={e => e.stopPropagation()}
      >
        <button
          className="project-card-modal__close-button"
          onClick={e => {
            e.stopPropagation()
            onClose()
          }}
        >
          X
        </button>
        <article className="project-card-modal__article">
          {submissionComplete ? (
            renderSubmissionComplete()
          ) : (
            <>
              <h2 className="project-card-modal__title">
                Apply to: {taskTitle}
              </h2>
              <section className="project-card-modal__info">
                Your profile information will be automatically included with
                your application.
              </section>
              <h3 className="project-card-modal__subtitle">
                Additional Questions
              </h3>
              {isReviewMode ? renderReview() : renderForm()}
            </>
          )}
        </article>
      </div>
    </div>
  )
}

export default ProjectCardModal
