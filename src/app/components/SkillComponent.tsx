import React from 'react';
import html from "/public/images/htmlfive.png";
import css from "/public/images/css.png";
import javascript from "/public/images/javascript.png";
import typescript from "/public/images/typescript.png";
import nextjs from "/public/images/nexticon.jpeg";
import giticon from "/public/images/giticon.png";
import Github from "/public/images/Github.png";
import tailwindcss from "/public/images/tailwindcss.png";
import Bootstrap from "/public/images/Bootstrap.png";
import Firebase from "/public/images/Firebase.png";
import shopify from "/public/images/Shopify.jpeg";
import { HiAcademicCap, HiBookOpen, HiBriefcase } from 'react-icons/hi';
import ProgressBar from './ProgressBar';
import Image from 'next/image';


const SkillComponent: React.FC = () => {
  return (
    <section id='skills' className='skills py-6 px-4'>
    <div>
      <div data-aos='fade-up'>
        <h1 className='relative text-7xl text-center'>My Skills</h1>
        <div className='flex justify-center mt-2'>
          <div className='relative w-3 h-3 border border-black rounded-full before:absolute before:h-0.5 before:top-1 before:bg-black before:w-16 before:right-5 after:absolute after:h-0.5 after:top-1 after:bg-black after:w-16 after:left-5'></div>
        </div>
      </div>
      <div className='px-0 md:px-10 py-10'>
        <h2 className='text-2xl underline'>Languages:</h2>
        <div
          data-aos='fade-right'
          className='w-full grid lg:grid-cols-2 gap-4 grid-cols-1  mb-10 md:mb-0'
        >
          <div className='flex w-fll justify-center  items-center gap-3 shadow-lg p-3 rounded-lg border-[1px] mt-4 group'>
            <label className='inline-block mt-3 mb-1 text-4xl  font-bold  lg:w-[390px] w-full text-center group-hover:text-blue-500'>
              HTML
            </label>
            <div className='hidden lg:block'>
              <p className='text-lg font-semibold'>
                HTML5 is a markup language used for building web pages. It
                provides semantic structure and improved multimedia support.
              </p>
              <ProgressBar percentage={"98%"} width='w-[98%]' />
            </div>
            <div className='hover:rotate-y-90 h-20 w-36 transition-transform duration-300 ease-in-out group-hover:scale-x-[-1]'>
              <Image src={html} alt='' />
            </div>
          </div>
          <div className='flex w-fll justify-center  items-center gap-3 shadow-lg p-3 rounded-lg border-[1px] mt-4 group'>
            <label className='inline-block mt-3 mb-1 text-4xl  font-bold  lg:w-[390px] w-full text-center group-hover:text-blue-500'>
              CSS
            </label>
            <div className='hidden lg:block'>
              <p className='text-lg font-semibold'>
                CSS3 is used for styling the content of web pages. It
                introduces new features like flexbox and animations.
              </p>
              <ProgressBar percentage={"98%"} width='w-[98%]' />
            </div>
            <div className='hover:rotate-y-90 h-20 w-36 transition-transform duration-300 ease-in-out group-hover:scale-x-[-1]'>
              <Image src={css} alt='' />
            </div>
          </div>
          <div className='flex w-fll justify-center  gap-3 shadow-lg p-3 rounded-lg border-[1px] mt-4'>
          <label className='inline-block mt-3 mb-1 text-4xl  font-bold  lg:w-[390px] w-full text-center group-hover:text-blue-500'>
              JavaScript
            </label>
            <div className='hidden lg:block'>
              <p className='text-lg font-semibold'>
              JavaScript is a programming language for web development. It enables interactive behavior and dynamic content.

              </p>
              <ProgressBar percentage={"98%"} width='w-[98%]' />
            </div>
            <div className='rounded-full'>
              <Image src={javascript} alt='' className="rounded-full" />
            </div>
          </div>
          <div className='flex w-fll justify-center  gap-3 shadow-lg p-3 rounded-lg border-[1px] mt-4'>
          <label className='inline-block mt-3 mb-1 text-4xl  font-bold  lg:w-[390px] w-full text-center group-hover:text-blue-500'>
              NEXT.js
            </label>
            <div className='hidden lg:block'>
              <p className='text-lg font-semibold'>
                HTML5 is a markup language used for building web pages. It
                provides semantic structure and improved multimedia support.
              </p>
              <ProgressBar percentage={"98%"} width='w-[98%]' />
            </div>
            <div className='hover:rotate-y-90 h-20 w-36 transition-transform duration-300 ease-in-out group-hover:scale-x-[-1]'>
              <Image src={nextjs} alt='' className="rounded-full" />
            </div>
          </div>
          <div className='flex w-fll justify-center  items-center gap-3 shadow-lg p-3 rounded-lg border-[1px] mt-4 group'>
          <label className='inline-block mt-3 mb-1 text-4xl  font-bold  lg:w-[390px] w-full text-center group-hover:text-blue-500'>
              TypeScript
            </label>
            <div className='hidden lg:block'>
              <p className='text-lg font-semibold'>
              TypeScript is a superset of JavaScript for static typing. It improves code maintainability and tooling support.
              </p>
              <ProgressBar percentage={"98%"} width='w-[98%]' />
            </div>
            <div className='hover:rotate-y-90 h-20 w-36 rounded-full transition-transform duration-300 ease-in-out group-hover:scale-x-[-1]'>
              <Image src={typescript} alt=''  className="rounded-full"/>
            </div>
          </div>
        </div>
        <h2 className='text-2xl underline mt-10'>Version Control:</h2>
        <div className='grid lg:grid-cols-2 grid-cols-1 gap-4'>
          <div className='flex w-fll justify-center  items-center gap-3 shadow-lg p-3 rounded-lg border-[1px] mt-4 group'>
            <label className='inline-block mt-3 mb-1 text-4xl  font-bold  lg:w-[390px] w-full text-center group-hover:text-blue-500'>
              Git
            </label>
            <div className='hidden lg:block'>
              <p className='text-lg font-semibold'>
                HTML5 is a markup language used for building web pages. It
                provides semantic structure and improved multimedia support.
              </p>
              <ProgressBar percentage={"80%"} width='w-[80%]' />
            </div>
            <div className='hover:rotate-y-90 h-20 w-36 transition-transform duration-300 ease-in-out group-hover:scale-x-[-1]'>
              <Image src={giticon} alt='' />
            </div>
          </div>
          <div className='flex w-fll justify-center  items-center gap-3 shadow-lg p-3 rounded-lg border-[1px] mt-4 group'>
            <label className='inline-block mt-3 mb-1 text-4xl  font-bold  lg:w-[390px] w-full text-center group-hover:text-blue-500'>
              Github
            </label>
            <div className='hidden lg:block'>
              <p className='text-lg font-semibold'>
                HTML5 is a markup language used for building web pages. It
                provides semantic structure and improved multimedia support.
              </p>
              <ProgressBar percentage={"80%"} width='w-[80%]' />
            </div>
            <div className='hover:rotate-y-90 h-20 w-36 transition-transform duration-300 ease-in-out group-hover:scale-x-[-1]'>
              <Image src={Github} alt='' />
            </div>
          </div>
        </div>
        <h2 className='text-2xl underline mt-4'>Frameworks:</h2>
        <div data-aos='fade-left' className='w-full grid lg:grid-cols-2 grid-cols-1 gap-4'>
          <div className='flex w-fll justify-center  items-center gap-3 shadow-lg p-3 rounded-lg border-[1px] mt-4 group'>
            <label className='inline-block mt-3 mb-1 text-4xl  font-bold  lg:w-[390px] w-full text-center group-hover:text-blue-500'>
              Tailwind CSS
            </label>
            <div className='hidden lg:block'>
              <p className='text-lg font-semibold'>
                HTML5 is a markup language used for building web pages. It
                provides semantic structure and improved multimedia support.
              </p>
              <ProgressBar percentage={"80%"} width='w-[80%]' />
            </div>
            <div className='hover:rotate-y-90 h-20 w-36 transition-transform duration-300 ease-in-out group-hover:scale-x-[-1]'>
              <Image src={tailwindcss} alt='' />
            </div>
          </div>
          <div className='flex w-fll justify-center  items-center gap-3 shadow-lg p-3 rounded-lg border-[1px] mt-4 group'>
            <label className='inline-block mt-3 mb-1 text-4xl  font-bold  lg:w-[390px] w-full text-center group-hover:text-blue-500'>
              Bootstrap 5
            </label>
            <div className='hidden lg:block'>
              <p className='text-lg font-semibold'>
                HTML5 is a markup language used for building web pages. It
                provides semantic structure and improved multimedia support.
              </p>
              <ProgressBar percentage={"80%"} width='w-[80%]' />
            </div>
            <div className='hover:rotate-y-90 h-20 w-36 transition-transform duration-300 ease-in-out group-hover:scale-x-[-1]'>
              <Image src={Bootstrap} alt='' />
            </div>
          </div>
        </div>
        {/* <h2 className='text-2xl underline mt-10'>Databases:</h2>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
          <div className='flex w-fll justify-center  items-center gap-3 shadow-lg p-3 rounded-lg border-[1px] mt-4 group'>
            <label className='inline-block mt-3 mb-1 text-4xl  font-bold  lg:w-[390px] w-full text-center group-hover:text-blue-500'>
              MySQL
            </label>
            <div className='hidden lg:block'>
              <p className='text-lg font-semibold'>
                HTML5 is a markup language used for building web pages. It
                provides semantic structure and improved multimedia support.
              </p>
              <ProgressBar percentage={"80%"} width='w-[80%]' />
            </div>
            <div className='hover:rotate-y-90 h-20 w-36 transition-transform duration-300 ease-in-out group-hover:scale-x-[-1]'>
              <Image src={html} alt='' />
            </div>
          </div>
          <div className='flex w-fll justify-center  items-center gap-3 shadow-lg p-3 rounded-lg border-[1px] mt-4 group'>
            <label className='inline-block mt-3 mb-1 text-4xl  font-bold  lg:w-[390px] w-full text-center group-hover:text-blue-500'>
              Firebase
            </label>
            <div className='hidden lg:block'>
              <p className='text-lg font-semibold'>
                HTML5 is a markup language used for building web pages. It
                provides semantic structure and improved multimedia support.
              </p>
              <ProgressBar percentage={"80%"} width='w-[80%]' />
            </div>
            <div className='hover:rotate-y-90 h-20 w-36 transition-transform duration-300 ease-in-out group-hover:scale-x-[-1] rounded-full'>
              <Image src={Firebase} alt=''  className="h-full w-ful rounded-full" />
            </div>
          </div>
        </div> */}

        <h2 className='text-2xl underline mt-10'>CMS:</h2>
        <div className="grid lg:grid-cols-2 grid-cols-1 ">
          <div className='flex w-fll justify-center  items-center gap-3 shadow-lg p-3 rounded-lg border-[1px] mt-4 group'>
            <label className='inline-block mt-3 mb-1 text-4xl  font-bold  lg:w-[390px] w-full text-center group-hover:text-blue-500'>
              Shopify
            </label>
            <div className='hidden lg:block'>
              <p className='text-lg font-semibold'>
                HTML5 is a markup language used for building web pages. It
                provides semantic structure and improved multimedia support.
              </p>
              <ProgressBar percentage={"80%"} width='w-[80%]' />
            </div>
            <div className='hover:rotate-y-90 h-20 w-36 transition-transform duration-300 ease-in-out group-hover:scale-x-[-1]'>
              <Image src={shopify} alt='' className="h-full w-ful" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  );
}

export default SkillComponent;
