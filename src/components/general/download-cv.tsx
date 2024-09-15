"use client";

import Button from "@/components/general/button";

const isProd = process.env.NODE_ENV === "production";
const cvPath = "/files/Karim Taha - Software Engineer - CV.pdf";
const DownloadCV = () => {
  return (
    <Button
      onClick={() =>
        window?.open(isProd ? "/portfolio" + cvPath : cvPath, "_blank")
      }
    >
      Download CV
    </Button>
  );
};

export default DownloadCV;
