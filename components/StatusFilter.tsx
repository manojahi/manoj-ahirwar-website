import React from "react";
import { ProjectStatus } from "@/types/app-types";

interface StatusFilterProps {
  currentStatus: ProjectStatus | "all";
  onStatusChange: (status: ProjectStatus | "all") => void;
}

const StatusFilter: React.FC<StatusFilterProps> = ({
  currentStatus,
  onStatusChange,
}) => {
  const statuses: (ProjectStatus | "all")[] = [
    "all",
    "live",
    "sold",
    "discontinued",
    "selling",
    "never launched",
  ];

  return (
    <div className="flex justify-center mb-4 md:mb-12">
      <div className="inline-flex rounded-md shadow-sm" role="group">
        {statuses.map((status) => (
          <button
            key={status}
            type="button"
            className={`px-2 py-1 md:px-4 md:py-2 text-xs md:font-medium border ${
              currentStatus === status
                ? "bg-blue-500 text-white border-blue-500 z-10"
                : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50 hover:text-gray-900"
            } ${status === "all" ? "rounded-l-lg" : ""} ${
              status === "never launched" ? "rounded-r-lg" : ""
            }`}
            onClick={() => onStatusChange(status)}
          >
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default StatusFilter;
