"use client";

import { useState } from "react";
import { PROJECTS } from "@/lib/data";
import ProjectDetails from "@/components/data-display/project-details";
import Tag from "@/components/data-display/tag";
import Typography from "@/components/general/typography";
import Container from "@/components/layout/container";

const categories = ["All", "Intercom Enterprise", "ITI"];

const WorkSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const filteredProjects = PROJECTS.filter((project) => {
    if (selectedCategory === "All") return true;
    return project.category === selectedCategory;
  });

  return (
    <Container id="work">
      <div className="flex flex-col items-center gap-4">
        <div className="self-center">
          <Tag label="Work" />
        </div>
        <Typography variant="subtitle" className="max-w-xl text-center">
          Some of the noteworthy projects I have built through:
        </Typography>
      </div>

      {/* Tab Buttons */}
      <div className="flex justify-center gap-4 mb-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`py-2 px-4 rounded ${selectedCategory === category ? "bg-gray-200" : "bg-gray-100"}`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Render Filtered Projects */}
      {filteredProjects.map((project, index) => (
        <ProjectDetails
          key={project.name}
          {...project}
          layoutType={index % 2 === 0 ? "default" : "reverse"}
        />
      ))}
    </Container>
  );
};

export default WorkSection;
