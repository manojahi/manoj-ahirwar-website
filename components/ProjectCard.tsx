import React from "react";
import Link from "next/link";
import { Project } from "@/types/app-types";

const ProjectCard: React.FC<Project> = ({
  title,
  description,
  type,
  link,
  status,
  linkLabel,
}) => {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden transition-all duration-300 flex flex-col h-full">
      <div className="p-6 flex-grow">
        <div className="flex justify-between items-center mb-4">
          <span className="px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-100 rounded-full">
            {type}
          </span>
          <span
            className={`px-3 py-1 text-xs font-semibold rounded-full ${getStatusColor(
              status
            )}`}
          >
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </span>
        </div>
        <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
      <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 mt-auto">
        <Link
          href={link}
          target="_blank"
          passHref
          className="text-blue-500 hover:text-blue-600 font-medium flex items-center"
        >
          <span>{linkLabel}</span>
          <svg
            className="w-4 h-4 ml-2"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

const getStatusColor = (status: string): string => {
  switch (status) {
    case "live":
      return "bg-green-100 text-green-600";
    case "sold":
      return "bg-yellow-100 text-yellow-600";
    case "discontinued":
      return "bg-red-100 text-red-600";
    case "never launched":
      return "bg-gray-100 text-gray-600";
    default:
      return "bg-gray-100 text-gray-600";
  }
};

export default ProjectCard;
