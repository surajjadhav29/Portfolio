import { FaDownload } from "react-icons/fa"
import ProgressBar from "./ProgressBar"
import Button from "./Button"
import Image from "next/image"
import aboutMe from "/public/images/profile.jpeg";

const AboutMeComponent=()=>{
    return(
    <section id='about-me' className='relative py-10'>
    <div className='container mx-auto px-4 sm:px-10'>
      <div className='grid grid-cols-12 gap-6 mt-10'>
        <div
          data-aos='fade-right'
          className='col-span-12 lg:col-span-6 rounded-full'
        >
          <Image
            className='w-full h-auto object-contain rounded-full'
            src={aboutMe}
            alt=''
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
          <p className='text-black mt-5 text-sm sm:text-base'>
            Passionate Front-End and Back-End Developer with over 1+ years
            of experience in web development. Proficient in creating custom,
            SEO-friendly websites, with a strong expertise in WordPress.
            Currently advancing my skills in the MERN stack and AI to
            deliver cutting-edge solutions. Committed to providing
            high-quality, user-focused digital experiences.
          </p>

          <div className=' grid lg:grid-cols-2 grid-cols-2 w-full gap-3'>
            <div className='mt-3 w-full'>
              <label className='text-black inline-block mb-1'>
                HTML Conversion
              </label>
              <ProgressBar percentage={"100%"} width='w-full ' />
            </div>

            <div className='mt-3 w-full'>
              <label className='text-black inline-block mb-1'>
                Frontend Web Development
              </label>
              <ProgressBar percentage={"95%"} width='w-[95%]' />
            </div>
            <div className='mt-3 w-full'>
              <label className='text-black inline-block mb-1'>
                Website Creation
              </label>
              <ProgressBar percentage={"85%"} width='w-[85%]' />
            </div>
          </div>
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
              link='/resume/'
            />
          </div>
        </div>
      </div>
    </div>
  </section>
    )
}
export default AboutMeComponent