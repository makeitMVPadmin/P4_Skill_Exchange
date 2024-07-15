import React, { useEffect, useState } from 'react';

interface PropTypes {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const ProjectCardModal: React.FC<PropTypes> = ({ open, onClose, children }) => {
  const [answers, setAnswers] = useState<any[]>([]);
  const [answerOne, setAnswerOne] = useState<string>('');
  const [answerTwo, setAnswerTwo] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!answerOne || !answerTwo) {
      alert("Please answer all the questions.");
      return;
    }
    const form = e.target as HTMLFormElement;
    const item = {
      id: Math.floor(Math.random() * 1000),
      answerOne: (form.elements.namedItem('question1') as HTMLInputElement).value,
      answerTwo: (form.elements.namedItem('question2') as HTMLInputElement).value
    };
    setAnswers((oldList) => {
      const newList = [...oldList, item];
      localStorage.setItem("answers", JSON.stringify(newList));
      return newList;
    });
    setAnswerOne("");
    setAnswerTwo("");
  };

  useEffect(() => {
    const itemsFromLocalStorage = localStorage.getItem("answers");
    if (itemsFromLocalStorage) {
      const parsedItemsFromLocalStorage = JSON.parse(itemsFromLocalStorage);
      setAnswers(parsedItemsFromLocalStorage);
    }
  }, []);

  return (
    <div
      className={`fixed inset-0 flex justify-center items-center transition-colors ${
        open ? 'visible bg-black/20' : 'invisible'
      }`}
      onClick={onClose}
    >
      <div
        className={`bg-white rounded-lg shadow p-6 transition-all max-w-md ${
          open ? 'scale-100 opacity-100' : 'scale-110 opacity-0'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-2 py-1 px-2 border border-neutral-200 rounded-md text-gray-400 bg-white hover:text-grey-600"
          onClick={onClose}
        >
          X
        </button>
        <article className="space-y-4">
          <h2 className="text-xl font-semibold">Apply to "task name"</h2>
          <section className="text-gray-700">
            Your skills and your project information from your profile will be included with your application.
          </section>
          <h3 className="text-lg font-medium">Additional Questions</h3>
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
        </article>
      </div>
    </div>
  );
};

export default ProjectCardModal;
