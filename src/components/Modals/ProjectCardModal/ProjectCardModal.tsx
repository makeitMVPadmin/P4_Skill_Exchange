import React, { useEffect, useState } from 'react';

interface PropTypes {
  isProjectCardModalOpen: boolean;
  onClose: () => void;
  onViewMoreProjects: () => void;
}

const ProjectCardModal: React.FC<PropTypes> = ({ isProjectCardModalOpen, onClose, onViewMoreProjects }) => {
  const [answers, setAnswers] = useState<any[]>([
    { id: 1, answerOne: "Sample answer one", answerTwo: "Sample answer two" }
  ]);
  const [answerOne, setAnswerOne] = useState<string>('');
  const [answerTwo, setAnswerTwo] = useState<string>('');
  const [isReviewMode, setIsReviewMode] = useState<boolean>(false);
  const [submissionComplete, setSubmissionComplete] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!answerOne || !answerTwo) {
      alert("Please answer all the questions.");
      // TODO: replace the alert in the future
      return;
    }
    setIsReviewMode(true);
  };

  const handleFinalSubmit = () => {
    const item = {
      id: Math.floor(Math.random() * 1000),
      answerOne,
      answerTwo,
    };

    try {
      setAnswers((oldList) => {
        const answers = [...oldList, item];
        // TODO: saving to the localStorage will be replaced with saving to the backend.
        localStorage.setItem("answers", JSON.stringify(answers));
        return answers;
      });
      setAnswerOne("");
      setAnswerTwo("");
      setIsReviewMode(false);
      setSubmissionComplete(true);
    } catch (error) {
      console.error("Error saving to localStorage:", error);
      // TODO: Add error handling logic (e.g., display an error message to the user)
    }
  };

  useEffect(() => {
    const itemsFromLocalStorage = localStorage.getItem("answers");
    if (itemsFromLocalStorage) {
      const parsedItemsFromLocalStorage = JSON.parse(itemsFromLocalStorage);
      setAnswers(parsedItemsFromLocalStorage);
    }
  }, []);

  const renderForm = () => (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div>
        <label className="block text-gray-700" htmlFor="question1">
          Question 1
        </label>
        <input
          className="w-full px-3 py-2 border border-gray-300 rounded"
          type="text"
          name="question1"
          value={answerOne}
          onChange={(e) => setAnswerOne(e.target.value)}
        />
      </div>
      <div>
        <label className="block text-gray-700" htmlFor="question2">
          Question 2
        </label>
        <input
          className="w-full px-3 py-2 border border-gray-300 rounded"
          type="text"
          name="question2"
          value={answerTwo}
          onChange={(e) => setAnswerTwo(e.target.value)}
        />
      </div>
      <div className="flex justify-end space-x-4">
        <button
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
          type="button"
          onClick={onClose}
        >
          Back
        </button>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          type="submit"
        >
          Review
        </button>
      </div>
    </form>
  );

  const renderReview = () => (
    <div>
      <div className="mb-4">
        <label className="block text-gray-700" htmlFor="question1">
          Question 1
        </label>
        <p className="w-full px-3 py-2 border border-transparent rounded bg-white">{answerOne}</p>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700" htmlFor="question2">
          Question 2
        </label>
        <p className="w-full px-3 py-2 border border-transparent rounded bg-white">{answerTwo}</p>
      </div>
      <div className="flex justify-end space-x-4">
        <button
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
          type="button"
          onClick={() => setIsReviewMode(false)}
        >
          Back
        </button>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          type="button"
          onClick={handleFinalSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );

  return (
    <div
      className={`fixed inset-0 flex justify-center items-center transition-colors ${
        isProjectCardModalOpen ? 'visible bg-black/20' : 'invisible'
      }`}
      onClick={onClose}
    >
      <div
        className={`bg-white rounded-lg shadow p-6 transition-all max-w-md ${
          isProjectCardModalOpen ? 'scale-100 opacity-100' : 'scale-110 opacity-0'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-2 py-1 px-2 border border-neutral-200 rounded-md text-gray-400 bg-white hover:text-grey-600"
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
        >
          X
        </button>
        <article className="space-y-4">
          {!submissionComplete ? (
            <>
              <h2 className="text-xl font-semibold">Apply to "task name"</h2>
              <section className="text-gray-700">
                Your skills and your project information from your profile will be included with your application.
              </section>
              <h3 className="text-lg font-medium">Additional Questions</h3>
              {!isReviewMode ? renderForm() : renderReview()}
            </>
          ) : (
            <div className="text-center">
              <h2 className="text-xl font-semibold">Application submitted</h2>
              <div className="flex justify-center items-center my-4">
                <svg
                  className="w-12 h-12 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </div>
              <p className="mb-4">Your application to "task name" has been submitted</p>
              <div className="flex justify-center space-x-4">
                <button
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  type="button"
                  onClick={onViewMoreProjects}
                >
                  View more projects
                </button>
                <button
                  className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
                  type="button"
                  onClick={onClose}
                >
                  Go to profile
                </button>
              </div>
            </div>
          )}
        </article>
      </div>
    </div>
  );
};

export default ProjectCardModal;
