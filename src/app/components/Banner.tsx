"use client";
import { gsap, Power1 } from "gsap";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { FiGithub, FiInstagram } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import next from "/public/images/nexticon.jpeg";
import react from "/public/images/react.png";
import javascript from "/public/images/javascript.jpeg";

const Banner = () => {

  useEffect(() => {
    const tlCan = gsap.timeline({ repeat: -1 });

    tlCan
      .to(".can", {
        duration: 3,
        y: "-=30",
        x: "+=20",
        rotation: "-=5",
        ease: Power1.easeInOut,
      })
      .to(".can", {
        duration: 2,
        y: "+=30",
        x: "-=20",
        rotation: "-=5",
        ease: Power1.easeInOut,
      })
      .to(".can", {
        duration: 3,
        y: "-=20",
        rotation: "+=5",
        ease: Power1.easeInOut,
      })
      .to(".can", {
        duration: 3,
        y: "+=20",
        rotation: "+=5",
        ease: Power1.easeInOut,
      })
      .to(".can", { duration: 3, y: "-=50", ease: Power1.easeInOut })
      .to(".can", { duration: 3, y: "+=50", ease: Power1.easeInOut })
      .to(".can", { duration: 3, y: "-=30", ease: Power1.easeInOut })
      .to(".can", { duration: 3, y: "+=30", ease: Power1.easeInOut })
      .to(".can", { duration: 2, y: "-=30", ease: Power1.easeInOut })
      .to(".can", { duration: 2, y: "+=30", ease: Power1.easeInOut });

    gsap.to(tlCan, { duration: 27, ease: Power1.easeInOut });
  }, []);

  useEffect(() => {
    const tlCan = gsap.timeline({ repeat: -1 });
    tlCan
      .to(".react", { duration: 1, y: "60", ease: Power1.easeInOut })
      .to(".react", { duration: 1, y: "60", ease: Power1.easeInOut })
      .to(".react", { duration: 1, y: "30", ease: Power1.easeInOut })
      .to(".react", { duration: 1, y: "30", ease: Power1.easeInOut })
      .to(".react", { duration: 1, y: "30", ease: Power1.easeInOut })
      .to(".react", { duration: 1, y: "30", ease: Power1.easeInOut });

    gsap.to(tlCan, { duration: 28, ease: Power1.easeInOut });
  }, []);

  return (
    <>
      <div className='bg-black sm1:pt-16 md:pt-0'>
         <div className='relative  hidden lg:block h-screen'>
          <div className='w-4/5 pt-20 m-auto border-0 border-red-500 opacity-1'id='main'>
            <div className='z-0 text-2xl font-normal tracking-tighter text-white border-0 border-red-500 font-change2'>
              <span className='text-blue-400 border-0 border-red-500 text-3xl absolute top-[17.5rem]'>
                &nbsp;Suraj Jadhav
              </span>
            </div>
            <div className='absolute z-10 font-extrabold tracking-tighter text-white lg:text-8xl xl:text-9xl font-change2 top-[20rem] md:text-7xl sm3:text-7xl'>
              FULLSTACK
            </div>
            <div className='z-30 font-extrabold tracking-tighter text-white lg:text-8xl xl:text-9xl font-change2 font-stencil2 top-[20rem] absolute md:text-7xl sm3:text-7xl'>
              FULLSTACK
            </div>
            <div className='absolute z-10 font-extrabold tracking-tighter text-white lg:text-8xl xl:text-9xl font-change2 xl:top-[28rem] md:top-[25rem] lg:top-[26rem] md:text-7xl sm3:text-7xl'>
              <span className='text-blue-400/30 font-stencil23 relative water-effect'>
                WEB
              </span>
              <span className='sm1:block md:inline'>&nbsp;DEVELOPER</span>
            </div>
            <div className='absolute z-30 font-extrabold tracking-tighter text-white lg:text-8xl xl:text-9xl font-change2 font-stencil2 md:top-[25rem] xl:top-[27.95rem] lg:top-[26rem] md:text-7xl sm3:text-7xl'>
              <span className='text-blue-400/30 font-stencil23'>WEB</span>
              <span className='sm1:block md:inline'>&nbsp;DEVELOPER</span>
            </div>
          </div>
          <div className='absolute w-4/5 m-auto border-0 border-red-500 top-[2rem] lg:left-[9rem] xl:left-[10rem] md:left-[5rem] z-20'>
            {/* {/ <Image src={aboutMe} alt="" width={700} height={100} className="m-auto transition duration-300 transform grayscale"></Image> /} */}
          </div>
          <div className='absolute z-40 md:w-1/3 lg:w-1/4 xl:w-1/5 text-xl text-white md:left-[5rem] md:top-[31.5rem] lg:top-[34.5rem] xl:top-[38rem] xl:left-[10rem] lg:left-[6.5rem] sm3:w-1/2 sm3:top-[20rem] sm3:left-[5rem]'>
            I am a passionate and creative
            <span className='font-bold text-blue-400'>
               Full Stack Developer
            </span>{" "}
            with experience in creating highly polished Interfaces for the{" "}
            <span className='font-bold text-blue-400'>web</span> & mobile
          </div>
          <div className='absolute z-30 flex space-x-3 lg:top-[35rem] xl:top-[38rem] md:right-8 xl:right-[10rem] md:top-[31rem]'>
            <a
              href='https://github.com/surajjadhav29'
              target='_blank'
              rel='noreferrer'
            >
              <div className='text-white bg-black rounded-full sm1:text-xl md:text-2xl lg:text-3xl sm1:p-3 md:p-3 lg:p-3 hover:bg-white hover:text-black hover:scale-75 '>
                <FiGithub />
              </div>
            </a>
            <a
              href='https://www.linkedin.com/in/surajjadhav29/'
              target='_blank'
              rel='noreferrer'
            >
              <div className='text-white bg-black rounded-full sm1:text-xl md:text-2xl lg:text-3xl sm1:p-3 md:p-3 lg:p-3 hover:bg-white hover:text-black hover:scale-75 '>
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href='https://www.instagram.com'
              target='_blank'
              rel='noreferrer'
            >
              <div className='text-white bg-black rounded-full sm1:text-xl md:text-2xl lg:text-3xl sm1:p-3 md:p-3 lg:p-3 hover:bg-white hover:text-black hover:scale-75 '>
                <FiInstagram />
              </div>
            </a>
          </div>
         <div className="flex justify-end mt-12 ">
         <section className='panel flex justify-end'>
            <div className='can-wrapper'>
              <div className='can h-24 w-28'>
                <Image src={next} alt='About Me' className="object-cover h-full w-full" />
              </div>
            </div>
          </section>
        
          <section className='panel flex justify-end'>
            <div className='can-wrapper group'>
              <div className='can  hover:rotate-y-90 transition-transform duration-300 ease-in-out group-hover:scale-x-[-1]'>
                <Image
                  src={javascript}
                  alt='About Me'
                  width={150}
                  height={150}
                />

              </div>
            </div>
          </section>
          <section className='panel flex justify-end'>
            <div className='can-wrapper'>
              <div className='react h-24 w-28'>
                <Image src={react} alt='About Me'  className="object-cover h-full w-full" />
              </div>
            </div>
          </section>
         </div>
        </div> 
        

  
         <div
          id='home'
          className=' top-0 h-screen bg-cover border-0 border-red-500 block lg:hidden px-4'>
          <div className='w-full pt-36 m-auto border-0 border-red-500 opacity-1'id='main'>
             <div className='z-0 text-2xl font-normal tracking-tighter text-white border-0 border-red-500 font-change py-6'>
              <span className='text-blue-400 border-0 border-red-500 text-3xl'>
                &nbsp;Suraj Jadhav
              </span>
            </div>
           <div className="flex gap-6">
           <div className='font-extrabold tracking-tighter text-center text-white font-change2'>
              FULLSTACK
            </div>
            <div className=' z-20 font-extrabold tracking-tighter text-center font-change2 text-blue-400 sm1:text-6xl'>
              WEB
            </div>
           </div>
            <div className='text-5xl font-extrabold tracking-tighter text-white font-change2 font-stencil2 py-4'>
              <span className=''>DEVELOPER</span>
            </div>
          </div>
          <div className='z-40 w-11/12 text-sm text-white border-0 border-red-500  sm1:hidden'>
            Hello,I&apos;m
            <span className='font-bold text-blue-400'> Suraj Jadhav</span>,a
            passionate and creative 
            <span className='font-bold text-blue-400'>
              Full Stack Developer
            </span>{" "}
            with experience in creating highly polished Interfaces for the{" "}
            <span className='font-bold text-blue-400'>web</span> & mobile
          </div>
          <div className='z-50 flex flex-row  sm1:top-[24rem] sm2:top-[25rem] md:top-[33rem] space-x-2 justify-end right-4 mt-12'>
            <a
              href='https://github.com/surajjadhav29'
              target='_blank'
              rel='noreferrer'
            >
              <div className='p-2 mt-2 text-white rounded-full sm1:text-2xl'>
                <FiGithub />
              </div>
            </a>
            <a
              href='https://www.linkedin.com/in/surajjadhav29/'
              target='_blank'
              rel='noreferrer'
            >
              <div className='p-2 mt-2 text-white rounded-full sm1:text-2xl'>
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href='https://www.instagram.com'
              target='_blank'
              rel='noreferrer'
            >
              <div className='p-2 mt-2 text-white rounded-full sm1:text-2xl'>
                <FiInstagram />
              </div>
            </a>
          </div>
        </div> 
      </div>
    </>
  );
};
export default Banner
