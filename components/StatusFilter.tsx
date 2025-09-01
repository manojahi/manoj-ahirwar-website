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
    <div className="flex justify-center mb-4 md:mb-12 px-2">
      <div className="flex flex-wrap justify-center gap-1 md:gap-0 md:inline-flex md:rounded-md md:shadow-sm" role="group">
        {statuses.map((status) => (
          <button
            key={status}
            type="button"
            className={`px-2 py-1 md:px-4 md:py-2 text-xs md:text-sm font-medium border whitespace-nowrap ${
              currentStatus === status
                ? "bg-blue-500 text-white border-blue-500 z-10"
                : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50 hover:text-gray-900"
            } ${
              // Mobile: all buttons rounded, Desktop: only first and last
              "rounded-md md:rounded-none"
            } ${status === "all" ? "md:rounded-l-lg" : ""} ${
              status === "never launched" ? "md:rounded-r-lg" : ""
            }`}
            onClick={() => onStatusChange(status)}
          >
            <span className="capitalize">{status}</span>
            <span className="ml-1 text-xs opacity-75">({getStatusCount(status)})</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default StatusFilter;
