import React from "react";
import { FaChevronRight } from "react-icons/fa";
import project1 from "/public/images/image.png";
import project2 from "/public/images/bulltenimage.png";
import project3 from "/public/images/projects/Scoop-Home.png";
import Image, { StaticImageData } from "next/image";
import Button from "./Button";

interface Project {
    title: string;
    description: string;
    image: StaticImageData;
    liveLink: string;
    tags: string[];
}

const projectsData: Project[] = [
  {
    title: "The Good Home Teams",
    description:"Collaborated in developing a responsive, dynamic UI using Tailwind CSS, optimizing for mobile-first design and minimizing CSS overhead to enhance performance and scalability.Integrated the frontend with a headless CMS, enabling seamless real-time content updates and dynamic UI management via API for non-technical users.•Implemented Server-Side Rendering (SSR) and Static Site Generation (SSG) to improve SEO, page load times, and contentdelivery efficiency.",
    image: project1,
    liveLink: "https://thegoodhomesteam.com/",
    tags: ["HTML5", "TailwindCss", "JavaScript", "Next.js", "Slick Slider"],
  },
  {
    title: "Bullten",
    description:"Implemented React design patterns like Provider Pattern, to streamline state management and reduce prop drilling, while managing application state with Redux. Implemented a configuration-based UI to enable dynamic adjustments and flexible interface customization based on admin Settings.Wrote comprehensive test cases using Jest and Enzyme, covering diverse scenarios to ensure code quality, functionality, and performance, reducing bugs significantly.",
    image: project2,
    liveLink: "https://bullten.consociate.co.in/",
    tags: ["HTML5", "TailwindCss", "JavaScript", "Next.js", "Slick Slider"],
  },
];

const Projects: React.FC = () => {
  return (
    <div>
      {projectsData.map((project, index) => (
        <div key={index} data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-12 projects-wrapper gap-6 my-4 p-5 rounded-3xl">
          <div className="md:col-span-4">
            <Image
              className="rounded-3xl w-full" layout="responsive"
              src={project.image}
              alt={project.title}
            />
          </div>
          <div className="md:col-span-8 flex flex-col justify-center">
            <h2 className="text-xl md:text-3xl font-bold text-white">
              {project.title}
            </h2>
            <p className="text-lg mt-2 text-gray-200 mb-2">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tags, index) => (
                <span key={index} className="bg-orange-400 text-white rounded-xl px-3 py-[0.5px]">
                  {tags}
                </span>
              ))}
            </div>
            <div className="relative block mt-8 line">
            <Button
                classes="border-white bg-transparent text-white hover:text-white"
                title="Live Preview"
                icon={<FaChevronRight className="ml-1 inline-block text-sm font-bold w-6" />}
                link={project.liveLink}
            />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
