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
    <section className="py-16 bg-gray-100 px-4">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Some of the things I have built
        </h2>
        <StatusFilter
          currentStatus={currentStatus}
          onStatusChange={setCurrentStatus}
          projects={projectData}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
