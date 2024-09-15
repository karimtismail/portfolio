import Image from "next/image";

import FullPoseImage from "/public/images/about-me.jpg";
import Tag from "@/components/data-display/tag";
import Container from "@/components/layout/container";
import Typography from "@/components/general/typography";
import Link from "@/components/navigation/link";
import { EXTERNAL_LINKS } from "@/lib/data";

const AboutMeSection = () => {
  return (
    <Container className="bg-gray-50" id="about">
      <div className="self-center">
        <Tag label="About me" />
      </div>

      <div className="flex w-full flex-col justify-between gap-12 md:flex-row">
        {/* Image */}
        <div className="flex justify-center md:order-first md:justify-end">
          <div className="relative h-[380px] w-[320px] md:h-[460px] md:w-[380px] lg:h-[520px] lg:w-[440px]">
            <Image
              src={FullPoseImage}
              alt="Fullpose of Karim"
              className="absolute z-10 h-[360px] w-[280px] border-8 border-gray-50 max-md:left-5 md:right-0 md:top-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"
              style={{ objectFit: "cover" }}
            ></Image>
            <div className="absolute h-[360px] w-[320px] border-8 border-transparent bg-gray-200 max-md:top-5 md:bottom-0 md:left-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"></div>
          </div>
        </div>

        {/* Content */}
        <div className="flex max-w-xl flex-col gap-6">
          <Typography variant="h3">
            Interested in knowing more about me? Here you have it:
          </Typography>
          <Typography>
            I&apos;m a dedicated backend developer with a focus on Java
            technologies. I have a passion for blending the technical and visual
            elements of digital products, with a strong emphasis on user
            experience, efficient design, and writing clean, high-performance
            code.
          </Typography>
          <Typography>
            Since starting my journey in 2022, I&apos;ve continuously embraced
            new technologies and tackled various challenges along the way.
            Currently, I&apos;m utilizing tools like Spring Boot, Oracle, and
            Docker to create cutting-edge backend solutions. My goal is always
            to deliver top-quality code, while staying adaptable and eager to
            learn.
          </Typography>
          <Typography>
            I love working on projects from conception all the way through to
            deployment. When I&apos;m not deep in development, you&apos;ll
            likely find me exploring new tech trends or contributing to
            open-source initiatives.
          </Typography>
          <Typography>
            Connect with me on{" "}
            <Link
              noCustomization
              externalLink
              withUnderline
              href={EXTERNAL_LINKS.LINKEDIN}
            >
              LinkedIn
            </Link>{" "}
            for professional updates, or check out my projects on{" "}
            <Link
              noCustomization
              externalLink
              withUnderline
              href={EXTERNAL_LINKS.GITHUB}
            >
              GitHub
            </Link>
            .
          </Typography>
          <Typography>A few quick facts about me.</Typography>{" "}
          <div className="flex flex-col gap-2 md:flex-row md:gap-6">
            <ul className="flex list-inside list-disc flex-col gap-2">
              <Typography component="li" className="whitespace-nowrap">
                Bachelor’s in Education (Science Department)
              </Typography>
              <Typography component="li" className="whitespace-nowrap">
                Completed intensive 9-month Java specialization at ITI
              </Typography>
              <Typography component="li" className="whitespace-nowrap">
                Currently pursuing a Diploma in Computer Science
              </Typography>
              <Typography component="li" className="whitespace-nowrap">
                Lifelong learner
              </Typography>
              <Typography component="li" className="whitespace-nowrap">
                Aspiring indie developer
              </Typography>
            </ul>
          </div>
          <Typography>
            One last thing, I&apos;m available for freelance work, so feel free
            to reach out and say hello! I promise I don&apos;t bite 😉
          </Typography>
        </div>
      </div>
    </Container>
  );
};

export default AboutMeSection;
