"use client";

import { TechDetails as TechDetailsType } from "@/lib/types";
import Typography from "@/components/general/typography";
import Link from "@/components/navigation/link";
import ImageWrapper from "@/components/data-display/image-wrapper";

const TechDetails = ({ url, logo, darkModeLogo, label }: TechDetailsType) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <Link noCustomization href={url} externalLink>
        <ImageWrapper
          src={logo}
          srcForDarkMode={darkModeLogo}
          alt={label}
          className="h-16 w-16 transition-transform duration-300 md:h-20 md:w-20 md:hover:scale-110 lg:h-24 lg:w-24" // Adjust image size
        />
      </Link>
      <Typography variant="body1">{label}</Typography>
    </div>
  );
};

export default TechDetails;
