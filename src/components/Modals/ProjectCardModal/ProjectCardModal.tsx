import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import MascotImage from '@/public/icons/MVP mascot.svg'
import {
  submitUserForJob,
  getUserDataForSpecificTask
} from '@/src/utils/Firebase'
import { applyJobPropTypes } from '@/src/interfaces/types'

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
      // Create an array of objects where each object has the question as a key and answer as the value
      const formattedAnswers = questions.map((question, index) => ({
        [question]: currentAnswers[index] || ''
      }))

      // Submit the formatted answers to the backend
      await submitUserForJob(userId, jobId, formattedAnswers)

      // Update local state
      setCurrentAnswers({})
      setIsReviewMode(false)
      setSubmissionComplete(true)
    } catch (error) {
      console.error('Error submitting to Firestore:', error)
    }
  }

  const renderForm = () => (
    <form className="space-y-4" onSubmit={handleSubmit}>
      {questions?.map((question, index) => (
        <div key={index}>
          <label className="block text-gray-700" htmlFor={`question${index}`}>
            {question}
          </label>
          <input
            className="w-full px-3 py-2 border-2 border-black rounded shadow-sm shadow-gray-500 text-sm font-light"
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
      <div className="flex justify-end space-x-4">
        <button
          className="px-4 py-2 bg-blue-900 text-white rounded hover:bg-blue-700"
          type="submit"
        >
          Next: Review
        </button>
      </div>
    </form>
  )

  const renderReview = () => (
    <div>
      {questions?.map((question, index) => (
        <div className="mb-4" key={index}>
          <label className="block text-gray-700" htmlFor={`question${index}`}>
            {question}
          </label>
          <p className="w-full px-3 py-2 border border-transparent rounded bg-white">
            {currentAnswers[index] || ''}
          </p>
        </div>
      ))}
      <div className="flex justify-end space-x-4">
        <button
          className="px-4 py-2 bg-white text-gray-700 border border-black rounded hover:bg-gray-100"
          type="button"
          onClick={() => setIsReviewMode(false)}
        >
          Back
        </button>
        <button
          className="px-4 py-2 bg-blue-900 text-white rounded hover:bg-blue-700"
          type="button"
          onClick={handleFinalSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  )

  const renderSubmissionComplete = () => (
    <div className="text-center">
      <h2 className="text-xl font-semibold">Application submitted</h2>
      <div className="flex justify-center items-center my-4">
        <img src={MascotImage} alt="success image" />
      </div>
      <p className="mb-4 text-sm">
        Your application to "{taskTitle}" has been submitted
      </p>
      <div className="flex justify-center space-x-4">
        <Link
          to="/"
          className="px-4 py-2 bg-white text-gray-700 border border-black rounded hover:bg-gray-100"
        >
          View more projects
        </Link>
        <Link
          to="/profile"
          className="px-4 py-2 bg-blue-900 text-white rounded hover:bg-blue-600 text-center"
        >
          Go to profile
        </Link>
      </div>
    </div>
  )

  return (
    <div
      className={`fixed inset-0 flex justify-center items-center transition-colors backdrop-blur-sm ${isProjectCardModalOpen ? 'visible bg-black/40' : 'invisible'}`}
      onClick={onClose}
    >
      <div
        className={`bg-white rounded-lg shadow p-6 border border-black transition-all max-w-xl ${isProjectCardModalOpen ? 'scale-100 opacity-100' : 'scale-110 opacity-0'}`}
        onClick={e => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-2 py-1 px-2 rounded-md text-gray-500 bg-white hover:text-grey-600"
          onClick={e => {
            e.stopPropagation()
            onClose()
          }}
        >
          X
        </button>
        <article className="space-y-4">
          {submissionComplete ? (
            renderSubmissionComplete()
          ) : (
            <>
              <h2 className="text-lg font-medium">Apply to: {taskTitle}</h2>
              <section className="text-gray-900 bg-blue-300 p-2 text-sm rounded-md">
                Your profile information will be automatically included with
                your application.
              </section>
              <h3 className="text-lg font-medium">Additional Questions</h3>
              {isReviewMode ? renderReview() : renderForm()}
            </>
          )}
        </article>
      </div>
    </div>
  )
}

export default ProjectCardModal
