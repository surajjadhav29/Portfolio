import { HiAcademicCap, HiBookOpen, HiBriefcase } from "react-icons/hi"

const EducationComponent=()=>{
    return(
        <section className="my-journey py-6 bg-gray-50" style={{
            backgroundImage: "url('/images/aboutusback.png')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}>
        <div data-aos="fade-up">
            <h1 className="relative text-5xl text-center">My Journey</h1>
            <div className="flex justify-center mt-2 mb-14">
                <div className="relative w-3 h-3 border border-black rounded-full before:absolute before:h-0.5 before:top-1 before:bg-black before:w-16 before:right-5 after:absolute after:h-0.5 after:top-1 after:bg-black after:w-16 after:left-5"></div>
            </div>
        </div>        
        <div className="grid grid-rows-1 grid-cols-12 gap-6 mx-4 md:mx-20">
            <div data-aos="fade-right" className="col-span-12 lg:col-span-6">
                    <div className="card p-6 ">
                        <div className="border-b-2 flex items-center pb-4 gap-4">
                            <HiBookOpen className="bg-orange-400 text-white w-16 h-16 p-4 flex justify-center items-center rounded-full" />
                            <h2 className="text-3xl">Education</h2>
                        </div>
                        <div className="card-body py-4">
                            <div className="flex justify-between items-center mt-4">
                                <div>
                                    <h2 className="text-xl font-medium">JSPM's Rajarshi Shahu College of Engineering</h2>
                                    <p className="text-sm text-gray-500">B.Tech Information Technology</p>
                                </div>
                                <div>
                                    <p className="bg-orange-400 text-white px-2 py-1 rounded text-xs">Sep 2019 to Aug 2023</p>
                                </div>
                            </div>                                                           
                        </div>
                        <div className="card-body py-4">
                            <div className="flex justify-between items-center mt-4">  
                                <div>
                                    <h2 className="text-xl font-medium">SMT.SARASWATIBAI BHALE PATIL JR.COLLEGE</h2>
                                    <p className="text-sm text-gray-500">12th Grade Of Secondary Education</p>
                                </div>
                                <div>
                                    <p className="bg-orange-400 text-white px-2 py-1 rounded text-xs">Sep 2017 to Aug 2019</p>
                                </div>
                            </div>                                                           
                        </div>
                        <div className="card-body py-4">
                            <div className="flex justify-between items-center mt-4">
                                <div>
                                    <h2 className="text-xl font-medium">NVS Marathwada High School Parbhani</h2>
                                    <p className="text-sm text-gray-500">10th</p>
                                </div>
                                <div>
                                    <p className="bg-orange-400 text-white px-2 py-1 rounded text-xs">May-16-2017</p>
                                </div>
                            </div>                                                           
                        </div>
                    </div>
            </div>
            <div data-aos="fade-left" className="col-span-12 lg:col-span-6">
                    <div className="card rounded-lg border-gray-300 p-6 mb-6">
                        <div className="border-b-2 flex items-center pb-4 gap-4">
                            <HiBriefcase className="bg-orange-400 text-white w-16 h-16 p-4 flex justify-center items-center rounded-full" />
                            <h2 className="text-3xl">Work Experince</h2>
                        </div>
                        <div className="card-body py-4">
                            <div className="flex justify-between items-center mt-4">
                                <div>
                                    <h2 className="text-xl font-medium">Consociate Solutions Pvt Ltd</h2>
                                    <p className="text-sm text-gray-500">Associate Software Engineer</p>
                                </div>
                                <div>
                                    <p className="bg-orange-400 text-white px-2 py-1 rounded text-xs">Feb-7 to current </p>
                                </div>
                            </div>                                                        
                        </div>
                    </div>
                    <div className="card rounded-lg  p-6">
                        <div className="border-b-2 flex items-center pb-4 gap-4">
                            <HiAcademicCap className="bg-orange-400 text-white w-16 h-16 p-4 flex justify-center items-center rounded-full" />
                            <h2 className="text-3xl">Certificates</h2>
                        </div>
                        <div className="card-body py-4">
                            <div className="flex justify-between items-center mt-4">
                                <div>
                                    <h2 className="text-xl font-medium">ITpreneurpune</h2>
                                    <p className="text-sm text-gray-500">MERN Stack Development Course – 2023</p>
                                </div>
                                <div>
                                    <p className="bg-orange-400 text-white px-2 py-1 rounded text-xs">Enrolled 2022</p>
                                </div>
                            </div>
                            
                            <div className="flex justify-between items-center mt-4">
                                <div>
                                    <h2 className="text-xl font-medium">Vowtech IT Training Center</h2>
                                    <p className="text-sm text-gray-500">HTML,CSS,Javascript  – 2022</p>
                                </div>
                                <div>
                                    <p className="bg-orange-400 text-white px-2 py-1 rounded text-xs">Enrolled 2022-</p>
                                </div>
                            </div>                             
                        </div>
                    </div>
                   
            </div>
        </div>
    </section> 
    )
}
export default EducationComponent