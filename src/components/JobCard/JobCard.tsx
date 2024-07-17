import { Link } from "react-router-dom";

import React, { useState } from "react";
import ProjectCardModal from "../Modals/ProjectCardModal/ProjectCardModal";

@@ -14,49 +16,25 @@ interface JobCardProps {
}

const JobCard: React.FC<JobCardProps> = ({ jobDetails }) => {
  const [isProjectCardModalOpen, setIsProjectCardModalOpen] = useState<boolean>(false);

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <img
        className="w-full"
        src="https://via.placeholder.com/400x200"
        alt={jobDetails.name}
        alt="Sunset in the mountains"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{jobDetails.name}</div>
        <p className="text-gray-700 text-base">{jobDetails.job_description}</p>
      </div>
      <button
        className="border border-neutral-300 rounded-lg py-1.5 px-10 my-2 bg-blue-800 hover:bg-blue-600 text-white ml-6"
        onClick={() => setIsProjectCardModalOpen(true)}
      >
        Apply
      </button>
      <ProjectCardModal isOpen={isProjectCardModalOpen} onClose={() => setIsProjectCardModalOpen(false)}>
        <h1 className="pcmodal__maintitle">Application for {jobDetails.name}</h1>
        <h2 className="pcmodal__title">Questions</h2>
        <form className="pcmodal__form">
          <label className="pcmodal__form--label" htmlFor="yearsofexperience">
            How many years of coding experience do you have?
          </label>
          <input
            className="pcmodal__form--input"
            placeholder="Enter your years of experience"
            type="text"
            name="yearsofexperience"
          />
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Apply Now
          </button>
        </form>
      </ProjectCardModal>
      <div className="px-6 pt-4 pb-2">
        {jobDetails.job_tags.map((job_tag: string) => (
          <span key={job_tag} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {job_tag}
          </span>
        ))}
        {jobDetails.job_tags.map((job_tag: string) => {
          return (
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {job_tag}
            </span>
          );
        })}
      </div>
    </div>
  );