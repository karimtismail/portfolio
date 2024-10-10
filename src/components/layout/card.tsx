import { mergeClasses } from "@/lib/utils";
import React, { FC, useMemo } from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "outline" | "elevated" | "flat";
  status?: "future" | "current" | "completed";
  shape?: "rounded" | "circle" | "square";
  statusColor?: string;
}

// Main Card component
const Card: FC<CardProps> = ({
  className,
  variant = "elevated",
  status,
  shape = "rounded",
  statusColor,
  children,
  ...props
}) => {
  // Memoized computation of classes based on props
  const variantClass = useMemo(() => getVariantClass(variant), [variant]);
  const shapeClass = useMemo(() => getShapeClass(shape), [shape]);
  const statusColorClass = useMemo(
    () => getStatusColorClass(status, statusColor),
    [status, statusColor]
  );

  // Render status tag only if status is provided
  const renderStatusTag = useMemo(() => {
    if (!status) return null;
    return (
      <span className={`text-xs p-1 rounded-md ${statusColorClass}`}>
        {capitalizeFirstLetter(status)}
      </span>
    );
  }, [status, statusColorClass]);

  return (
    <div
      className={mergeClasses(
        "bg-gray dark:bg-gray-100 max-w-full",
        variantClass,
        shapeClass,
        className
      )}
      {...props}
    >
      <div className="flex justify-between items-center mb-2">
        {/* Render the status tag */}
        {renderStatusTag}
      </div>
      {children}
    </div>
  );
};

export default Card;

// Helper function to get the correct variant class
const getVariantClass = (variant: CardProps["variant"]) => {
  switch (variant) {
    case "outline":
      return "border border-gray-300";
    case "flat":
      return "shadow-none";
    default:
      return "shadow-md";
  }
};

// Helper function to get the correct shape class
const getShapeClass = (shape: CardProps["shape"]) => {
  switch (shape) {
    case "circle":
      return "rounded-full";
    case "square":
      return "rounded-none";
    default:
      return "rounded-xl";
  }
};

// Helper function to get status color class
const getStatusColorClass = (
  status?: CardProps["status"],
  statusColor?: string
) => {
  if (statusColor) return statusColor;

  switch (status) {
    case "future":
      return "text-indigo-500 bg-indigo-100"; // Soft indigo tones for "future"
    case "current":
      return "text-teal-500 bg-teal-100"; // Teal for "current" with a refreshing look
    case "completed":
      return "text-amber-600 bg-amber-100"; // Amber for a sense of achievement
    default:
      return "text-gray-600 bg-gray-100"; // Neutral tones for undefined
  }
};

// Helper function to capitalize the first letter
const capitalizeFirstLetter = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1);
