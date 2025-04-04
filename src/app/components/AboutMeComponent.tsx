import { FaDownload } from "react-icons/fa";
import Button from "./Button";
import Image from "next/image";
import aboutMe from "/public/images/profile.jpeg";

const AboutMeComponent = () => {
  return (
    <section id='about-me' className='relative lg:py-0 py-6'>
      <div className='container mx-auto px-4 sm:px-10' >
        <div className='grid grid-cols-12 gap-6'>
          <div
            data-aos='fade-right'
            className='col-span-12  lg:col-span-6 rounded-full'
          >
            <Image
              className='w-full h-full lg:p-20 object-contain rounded-full'
              src={aboutMe}
              alt='profile'
            />
          </div>
          <div
            data-aos='fade-left'
            className='col-span-12 lg:col-span-6 flex flex-col relative items-start justify-center'
          >
            <h1 className='relative text-black text-4xl sm:text-5xl'>
              About Me
            </h1>
            <div className='flex mt-2'>
              <div className='relative ms-24 w-3 h-3 border border-black rounded-full before:absolute before:h-0.5 before:top-1 before:bg-black before:w-16 before:right-5 after:absolute after:h-0.5 after:top-1 after:bg-black after:w-16 after:left-5'></div>
            </div>
            <p className='text-black mt-5  text-base lg:text-lg '>Software Engineer, <span className="text-blue-600 font-semibold">Consociate Solutions Private Limited</span> Feb 2024 –  Current | Pune, India</p>
            <p className='text-black mt-2  text-base lg:text-lg '>• Designed and developed user-friendly, scalable frontend systems using modern frameworks like React JS, Next.JS</p>
            <p className='text-black mt-2  text-base lg:text-lg '>• Ensured intuitive UI/UX, cross-browser compatibility, and adherence to mobile-first design principles to enhance user experience across various devices</p>
            <p className='text-black mt-2  text-base lg:text-lg '>• Collaborated with international clients to gather requirements using tools like JIRA, Miro, and Trello; conducted needs
            analysis, provided time estimations, and improved project delivery timelines by 12% on average.</p>
            <div className='relative block mt-8 line'>
              <Button
                classes='border-orange-500 bg-transparent stroke-orange-500 hover:text-white'
                title='Download Resume'
                icon={
                  <FaDownload
                    className='ml-1 inline-block text-sm font-bold'
                    width={24}
                    height={24}
                  />
                }
                link='/resume/suraj-jadhav-Resume.pdf'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutMeComponent;
