"use client";
import React, { JSX } from "react";
import Link from "next/link";

interface ProjectCardsProps {
  imgURL: string;
  title: string;
  description: string;
  projectURL: string;
  type: string;
  technologies: string[];
}

const ProjectCards: React.FC<ProjectCardsProps> = ({
  imgURL,
  title,
  description,
  projectURL,
  type,
  technologies,
}): JSX.Element => {
  return (
    <div className="rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 bg-stone-100">
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{
          backgroundImage: `url(${imgURL})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-slate-900 bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
          <Link
            href={projectURL}
            target="_blank"
            rel="noopener noreferrer"
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white flex items-center justify-center"
          >
            <span className="text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                className="bi bi-link-45deg"
                viewBox="0 0 16 16"
              >
                <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z" />
                <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z" />
              </svg>
            </span>
          </Link>
        </div>
      </div>
      <hr className="border-gray-200" />
      <div className="rounded-b-xl p-6 h-auto">
        <h6 className="font-semibold text-lg">{title}</h6>
        <p className="my-2 text-sm text-gray-400">{type}</p>
        <p className="text-gray-500">{description}</p>
        <div className="mt-4">
          <h6 className="font-medium text-sm text-gray-600 mb-2">
            Technologies Used:
          </h6>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-black text-gray-200 text-xs px-2 py-1 rounded-full hover:cursor-default hover:bg-stone-700 hover:text-gray-100"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCards;
