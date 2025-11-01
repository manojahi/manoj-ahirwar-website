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
    <div className="group relative bg-white border border-gray-200 rounded-xl p-5 sm:p-6 hover:shadow-xl hover:border-gray-300 transition-all duration-300">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />

      <div className="relative">
        <div className="flex items-start justify-between mb-3 sm:mb-4 gap-2">
          <span className="text-xs font-mono text-gray-400 uppercase tracking-wider line-clamp-1">
            {type}
          </span>
          <span className={`text-xs font-semibold px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full whitespace-nowrap ${getStatusColor(status)}`}>
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </span>
        </div>

        <h3 className="text-lg sm:text-xl font-bold text-black mb-2 sm:mb-3 group-hover:text-gray-700 transition-colors">
          {title}
        </h3>

        <p className="text-sm text-gray-600 mb-4 sm:mb-6 leading-relaxed">
          {description}
        </p>

        <Link
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-sm font-semibold text-black group-hover:gap-2 gap-1 transition-all"
        >
          <span className="line-clamp-1">{linkLabel}</span>
          <svg
            className="w-4 h-4 flex-shrink-0 transform group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
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
