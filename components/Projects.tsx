import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import StatusFilter from "./StatusFilter";
import { ProjectStatus } from "@/types/app-types";
import { projectData } from "@/constants/projectsData";

const Projects: React.FC = () => {
  const [currentStatus, setCurrentStatus] = useState<ProjectStatus | "all">(
    "all"
  );

  const filteredProjects = projectData.filter(
    (project) => currentStatus === "all" || project.status === currentStatus
  );

  return (
    <section id="projects" className="py-16 sm:py-20 md:py-32 bg-gray-50 px-4 sm:px-6 border-t border-gray-200">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12 sm:mb-16">
          <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 mb-3 sm:mb-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black">
              Products Launched
            </h2>
            <span className="text-xs sm:text-sm font-mono text-gray-400">
              ({projectData.length})
            </span>
          </div>
          <p className="text-gray-600 text-base sm:text-lg md:text-xl font-light max-w-2xl">
            A selection of products and ventures I&apos;ve built, launched, and learned from
          </p>
        </div>

        <StatusFilter
          currentStatus={currentStatus}
          onStatusChange={setCurrentStatus}
          projects={projectData}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
