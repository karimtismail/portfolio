"use client"; // Ensure this is at the top

import React, { useRef, memo } from "react";
import Typography from "@/components/general/typography";
import Container from "@/components/layout/container";
import Card from "@/components/layout/card";
import Tag from "@/components/data-display/tag";
import { CourceDetails as CourceDetailsType } from "@/lib/types";
import { COURCES } from "@/lib/data";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Progress = memo(
  ({ value, className }: { value: number; className?: string }) => (
    <div className={`w-full bg-gray-200 rounded-full h-2.5 ${className}`}>
      <div
        className="bg-blue-600 h-2.5 rounded-full transition-all duration-300 ease-in-out"
        style={{ width: `${value}%` }}
      ></div>
    </div>
  )
);

Progress.displayName = "Progress";

const CourseCard = memo(({ course }: { course: CourceDetailsType }) => (
  <Card className="flex flex-col w-64 sm:w-72 flex-shrink-0 bg-white p-4 rounded-lg shadow-md border border-gray-200 transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-blue-50 mx-2 my-2">
    <div className="flex flex-col h-full justify-between">
      <div>
        <Typography
          variant="h4"
          className="text-gray-800 mb-1 font-semibold text-base sm:text-lg break-words whitespace-normal"
        >
          {course.name}
        </Typography>
        <Typography className="text-gray-600 mb-2 text-xs sm:text-sm break-words whitespace-normal">
          {course.institution} • {course.duration}
        </Typography>
      </div>
      <div className="mt-2">
        <Progress value={course.progress} className="mb-1" />
        <Typography className="text-xs text-gray-500 break-words whitespace-normal">
          {course.progress}% Complete
        </Typography>
      </div>
      <div>
        <Typography
          variant="h5"
          className="text-gray-800 mb-1 font-semibold text-xs sm:text-sm"
        >
          Skills Gained:
        </Typography>
        <div className="flex flex-wrap gap-1 max-w-full overflow-hidden">
          {course.skills.map((skill) => (
            <Tag key={skill} label={skill} />
          ))}
        </div>
      </div>
    </div>
  </Card>
));

CourseCard.displayName = "CourseCard";

const CourseSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "right" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <Container id="learning" className="bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center gap-4 mb-6">
        <Tag label="learning" />
        <Typography variant="subtitle" className="text-center font-semibold">
          My Learning Journey:
        </Typography>
      </div>

      <div className="relative py-4 flex items-center">
        <button
          onClick={() => handleScroll("left")}
          className="hidden sm:flex bg-gradient-to-r from-gray-300 to-gray-400 rounded-full p-2 shadow-lg hover:from-gray-400 hover:to-gray-500 transition-colors duration-300 items-center justify-center z-10 mr-2"
          aria-label="Scroll Left"
        >
          <FaChevronLeft className="text-gray-700 text-lg" />
        </button>

        <div
          ref={scrollRef}
          className="overflow-x-auto whitespace-nowrap flex-grow mx-4 scrollbar-hide"
        >
          <div className="flex flex-row gap-4 sm:gap-6">
            {COURCES?.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>

        <button
          onClick={() => handleScroll("right")}
          className="hidden sm:flex bg-gradient-to-r from-gray-300 to-gray-400 rounded-full p-2 shadow-lg hover:from-gray-400 hover:to-gray-500 transition-colors duration-300 items-center justify-center z-10 ml-2"
          aria-label="Scroll Right"
        >
          <FaChevronRight className="text-gray-700 text-lg" />
        </button>
      </div>
    </Container>
  );
};

export default CourseSection;
