import { aboutus1 ,aboutus2,tick} from "../assets"


const AboutUs = () => (
    <section id='about-us ' className="border-2 border-white shadow-current bg-indigo-100">
        <div className="w-full flex flex-1 md:flex-row flex-col items-center h-auto ">
            {/* Image section */}
            <div className="relative flex w-screen md:w-[50vw]  bg-dimWhite shadow border border-white">
                <div className="relative w-full h-[80%] opacity-65">
                    <img src={aboutus1} alt="aboutus-1" className="w-full h-full object-cover" />
                </div>
  
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[70%] h-[50%] sm:w-[60%] sm:h-[40%] md:w-[50%] md:h-    [30%] z-10 opacity-80 sm:block inline">
                    <img src={aboutus2} alt="aboutus-2" className="w-full h-full object-cover md:block hidden" />
                </div>
            </div>

            {/* text section */}
            <div className="h-[100%] md:w-[50vw] w-screen flex flex-col p-4 ">
                <h4 className="font-poppins  font-extrabold text-blue-400 text-3xl leading-loose p-3">ABOUT US</h4>
                <p className="font-poppins text-3xl font-semibold leading-loose">Leading the Way to Career <br className="sm:block hidden"/> Success <span className="text-blue-400 ">Login TechBridge</span></p>
                <p className=" text-gray-600 leading-loose text-wrap p-3 text-justify">Welcome to LOGIN TECHBRIDGE, a distinguished hub for skill development that has been at the forefront of transforming aspiring individuals into industry-ready professionals. With over a decade of expertise in the teaching and learning process, we take pride in our commitment to fostering talent across various domains.We cater to a diverse audience, including students from engineering and arts colleges, job seekers, and working professionals. Our tailored training programs are designed to meet the specific needs of each group, ensuring a dynamic and engaging learning experience..</p>
                <ul className="leading-loose p-4">
                    <li>
                        <img src={tick} className="h-6 w-6 inline leading-loose"/>
                        <span>
                            Globally Updated Technology
                        </span>
                    </li>
                    <li>
                        <img src={tick} className="h-6 w-6 inline leading-loose"/>
                            <span>
                                100% Job Oriented Courses
                            </span>
                    </li>
                    <li>
                        <img src={tick} className="h-6 w-6 inline leading-loose"/>
                            <span>
                                Qualified Staff Members
                            </span>
                    </li>
                </ul>
            </div>
        </div>
    </section>
  )


export default AboutUs