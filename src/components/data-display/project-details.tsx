import Image from "next/image";
import { ExternalLink } from "lucide-react";
import DefaultImage from "/public/images/default-image.png";

import { ProjectDetails as ProjectDetailsType } from "@/lib/types";
import { mergeClasses } from "@/lib/utils";
import Typography from "@/components/general/typography";
import Link from "@/components/navigation/link";
import Tag from "@/components/data-display/tag";
import Card from "@/components/layout/card";
import type { StaticImageData } from "next/image"; // Add this import

type ProjectDetailsProps = ProjectDetailsType & {
  layoutType: "default" | "reverse";
  url?: string;
  previewImage?: string | StaticImageData; // Ensure this includes StaticImageData
  category: string;
  name: string;
  description: string;
  technologies: string[];
};

const ProjectDetails = ({
  category,
  name,
  description,
  technologies,
  url,
  previewImage,
  layoutType = "default",
}: ProjectDetailsProps) => {
  const imageSrc = previewImage || DefaultImage;
  const imageAlt = previewImage ? `${name} preview` : "Default Image";

  const linkElement = url ? (
    <Link noCustomization href={url} externalLink>
      <Image src={imageSrc} alt={imageAlt} />
    </Link>
  ) : (
    <Image src={imageSrc} alt={imageAlt} />
  );

  return (
    <Card className="mx-auto flex w-full max-w-6xl flex-col md:flex-row">
      {/* Image */}
      <div
        className={mergeClasses(
          "flex items-center justify-center border-gray-100 bg-gray-50 p-8 dark:bg-gray-200 max-md:rounded-t-xl md:w-1/2 lg:p-12",
          layoutType === "default"
            ? "md:rounded-l-xl md:border-r"
            : "md:order-last md:rounded-r-xl md:border-l"
        )}
      >
        {linkElement}
      </div>

      <div
        className={mergeClasses(
          "flex flex-col gap-6 p-8 md:w-1/2 lg:p-12",
          layoutType === "default" ? "" : "md:order-first"
        )}
      >
        <Typography variant="subtitle" className="font-semibold text-gray-900">
          {name}
        </Typography>
        <Typography>{description}</Typography>
        <div className="flex flex-wrap gap-2">
          {technologies?.map((technology, index) => (
            <Tag key={index} label={technology} />
          ))}
        </div>
        {url && (
          <Link
            href={url}
            noCustomization
            className="self-start rounded-lg p-1.5 hover:bg-gray-50 [&_svg]:stroke-gray-500"
            externalLink
          >
            <ExternalLink />
          </Link>
        )}
      </div>
    </Card>
  );
};

export default ProjectDetails;
