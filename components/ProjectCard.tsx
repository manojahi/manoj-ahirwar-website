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
  year,
  revenue,
}) => {
  return (
    <div className="group relative bg-white border border-gray-200 rounded-xl p-4 sm:p-5 hover:shadow-md hover:border-gray-300 transition-all duration-300">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-6">
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2 mb-1.5 flex-wrap">
            <span className="text-[11px] font-mono text-gray-400 uppercase tracking-wider">
              {type}
            </span>
            {year && (
              <>
                <span className="text-gray-300">·</span>
                <span className="text-[11px] font-mono text-gray-400">
                  {year}
                </span>
              </>
            )}
            <span
              className={`text-[11px] font-semibold px-2 py-0.5 rounded-full whitespace-nowrap ${getStatusColor(
                status
              )}`}
            >
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </span>
            {revenue && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-100">
                <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-700/70">
                  Rev
                </span>
                <span className="text-[11px] font-semibold text-emerald-700">
                  {revenue}
                </span>
              </span>
            )}
          </div>

          <h3 className="text-lg font-bold text-black group-hover:text-gray-700 transition-colors mb-1">
            {title}
          </h3>

          <p className="text-sm text-gray-600 leading-relaxed">
            {description}
          </p>
        </div>

        <Link
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center self-start text-sm font-semibold text-black gap-1 group-hover:gap-2 transition-all flex-shrink-0"
        >
          <span>{linkLabel}</span>
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
