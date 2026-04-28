import React, { useMemo, useState } from "react";
import ProjectCard from "./ProjectCard";
import StatusFilter from "./StatusFilter";
import { ProjectStatus } from "@/types/app-types";
import { projectData } from "@/constants/projectsData";

const Projects: React.FC = () => {
  const [currentStatus, setCurrentStatus] = useState<ProjectStatus | "all">(
    "all"
  );

  const orderedProjects = useMemo(() => {
    const byYearDesc = (a: { year?: number }, b: { year?: number }) =>
      (b.year ?? 0) - (a.year ?? 0);
    const live = projectData
      .filter((p) => p.status === "live")
      .sort(byYearDesc);
    const rest = projectData
      .filter((p) => p.status !== "live")
      .sort(byYearDesc);
    return [...live, ...rest];
  }, []);

  const filteredProjects = orderedProjects.filter(
    (project) => currentStatus === "all" || project.status === currentStatus
  );

  return (
    <section id="projects" className="py-16 sm:py-20 md:py-32 bg-gray-50 px-4 sm:px-6 border-t border-gray-200">
      <div className="container mx-auto max-w-4xl">
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

        <div className="flex flex-col gap-3 sm:gap-4">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
