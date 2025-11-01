import React from "react";
import { ProjectStatus, Project } from "@/types/app-types";

interface StatusFilterProps {
  currentStatus: ProjectStatus | "all";
  onStatusChange: (status: ProjectStatus | "all") => void;
  projects: Project[];
}

const StatusFilter: React.FC<StatusFilterProps> = ({
  currentStatus,
  onStatusChange,
  projects,
}) => {
  const statuses: (ProjectStatus | "all")[] = [
    "all",
    "live",
    "sold",
    "discontinued",
    "selling",
    "never launched",
  ];

  const getStatusCount = (status: ProjectStatus | "all"): number => {
    if (status === "all") {
      return projects.length;
    }
    return projects.filter((project) => project.status === status).length;
  };

  return (
    <div className="mb-8 sm:mb-12">
      <div className="flex flex-wrap gap-2 sm:gap-3">
        {statuses.map((status) => (
          <button
            key={status}
            type="button"
            className={`px-3 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold rounded-lg transition-all whitespace-nowrap
            ${
              currentStatus === status
                ? "bg-black text-white shadow-lg"
                : "bg-white text-gray-700 border border-gray-200 hover:border-gray-400 hover:shadow-md"
            }`}
            onClick={() => onStatusChange(status)}
            aria-pressed={currentStatus === status}
            aria-label={`Filter by ${status} projects (${getStatusCount(status)})`}
          >
            <span className="capitalize">{status}</span>
            <span className={`ml-1.5 sm:ml-2 text-xs font-mono ${currentStatus === status ? "opacity-70" : "opacity-50"}`}>
              {getStatusCount(status)}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default StatusFilter;
