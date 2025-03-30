import Banner from "./components/Banner";
import SkillComponent from "./components/SkillComponent";
import AboutMeComponent from "./components/AboutMeComponent";
import EducationComponent from "./components/EducationComponent";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <>
      <Banner />
      <AboutMeComponent />
      {/* <SoftSkillsSlide/> */}
      <SkillComponent />

      {/* <SoftSkillsSlide/> */}

      <EducationComponent />

      <section id='projects' className='projects relative p-5 md:p-20 bg-black'>
        {/* <Image className="absolute w-full rounded-[45px] bottom-0 left-0" src={servicesBg} alt=""/> */}
        <div data-aos='fade-up' className='mb-14'>
          <h1 className='relative text-white text-3xl md:text-5xl text-center'>
          Company Projects
          </h1>
          <div className='flex justify-center mt-2'>
            <div className='relative w-3 h-3 border border-white rounded-full before:absolute before:h-0.5 before:top-1 before:bg-white before:w-24 before:right-5 after:absolute after:h-0.5 after:top-1 after:bg-white after:w-24 after:left-5'></div>
          </div>
        </div>
        <Projects />

      </section>
    </>
  );
}
