import { arrow,banner,officebuilding,tick } from "../assets"
const ContactUs = () =>  (
    <section id="contact-us" className="flex flex-col items-center justify-center">
        <div className="flex items-center justify-center relative">
            <img src="" alt="banner" className="h-[20vh] w-screen  border-black"/>
            <div className="flex flex-row space-x-2 absolute">
                <span>Home</span>
                <img src={arrow} alt="arrow" />
                <span>Contact Us</span>
            </div>
        </div>
        <div className="flex flex-col justify-center items-center text-wrap text-center font-poppins space-y-4">
            <span className="text-blue-700 uppercase">Training Institute in Coimbatore</span>
            <p className="text-3xl">Our's Premier IT Training Institute in Coimbatore</p>
            <p className="text-xl text-wrap">LOGIN TechBridge, Coimbatore's premier  training institute, offers top-notch IT training courses and certifications in the latest tech fields. Reach out today to elevate your career in IT and software networking. For inquiries, call us at 96777 81155 or explore our website for more information.</p>
        </div>
        <div className="flex flex-row w-screen items-center justify-center m-2">
            <div className="w-[40%] h-[60%] border-transparent  border-slate-100 p-2">
                <img src={officebuilding} alt="building_image"/>
            </div>
            <div className="w-[40%] h-[60%] border-transparent  border-slate-100 p-2">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.012678136275!2d72.62720471496035!3d23.20408828484967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2a7c764c02db%3A0x68d2455407fdf29b!2sRhyno%20Wheels%20Private%20Limited!5e0!3m2!1sen!2sin!4v1633350200012!5m2!1sen!2sin"
                width="100%"
                height="380"
                allowFullScreen=""
                loading="lazy"
                title="LoginTechBridge PVT LTD"
                ></iframe>

            </div>
            
        </div>

        <div className="w-[100%] flex flex-row">
                <div className="w-[30%] flex flex-col  border-black border-5 m-4">
                    <h3 className="font-semibold leading-3 font-poppins text-3xl p-5 pl-40">Location</h3>
                    <h2 className="font-medium leading-3 font-poppins text-left p-3 pl-40 text-xl">Address</h2>
                    <p className="font-normal leading-normal text-wrap pl-40 text-[1rem]">2/516, SNA Complex, Pollachi Main Road, Coimbatore, Tamil Nadu 641050</p>
                    <h2 className="font-medium leading-3 font-poppins text-left p-3 pl-40 text-xl">Email</h2>
                    <span className="font-normal leading-normal text-wrap pl-40 text-[1rem]">
                        <a href={`mailto:${"info@logintechbridge.com"}`}>info@logintechbridge.com</a>
                    </span>
                    <h2 className="font-medium leading-3 font-poppins text-left p-3 pl-40 text-xl">Phone</h2>
                    <span className="font-normal leading-normal text-wrap pl-40 space-x-1 text-[1rem]">
                        <a  href={`tel:${"+918015030882"}`}>8015030882
                        </a>
                        <a href={`tel:${"+918015030883"}`}>8015030883
                        </a>
                    </span>
                </div>
                <div className="w-[30%] flex flex-col ">
                    <h3 className="font-poppins text-3xl font-semibold m-5">Working Days and Hours</h3>
                    <div className="font-poppins text-xl font-normal pl-10">
                        <table>
                            <tr>
                                <td className="py-2">Monday</td>
                                <td>10:00am - 7:00pm</td>
                            </tr>
                            <tr>
                                <td className="py-2">Tuesday</td>
                                <td>10:00am - 7:00pm</td>
                            </tr>                            
                            <tr>
                                <td className="py-2">Wednesday</td>
                                <td>10:00am - 7:00pm</td>
                            </tr>                            
                            <tr>
                                <td className="py-2">Thursday</td>
                                <td>10:00am - 7:00pm</td>
                            </tr>                            
                            <tr>
                                <td className="py-2">Friday</td>
                                <td>10:00am - 7:00pm</td>
                            </tr>                            
                            <tr>
                                <td className="py-2 ">Saturday</td>
                                <td>10:00am - 7:00pm</td>
                            </tr>                            
                        </table>
                    </div>
                </div>
                <div className="w-[40%] flex flex-col">
                    <h3 className="font-poppins text-3xl font-semibold m-5 ml-14">Features</h3>
                    <ul className="flex flex-col">
                        <div className="flex flex-row space-x-2 p-1">
                        <img src={tick} alt="tick" className="h-6 w-6  " />
                        <li className="font-poppins text-[1rem]">Comprehensive Curriculum</li>
                        </div>
                        <div className="flex flex-row space-x-2 p-1">
                        <img src={tick} alt="tick" className="h-6 w-6  " />
                        <li className="font-poppins text-[1rem]">Comprehensive Curriculum</li>
                        </div>
                        <div className="flex flex-row space-x-2 p-1">
                        <img src={tick} alt="tick" className="h-6 w-6  " />
                        <li className="font-poppins text-[1rem]">Comprehensive Curriculum</li>
                        </div>
                        <div className="flex flex-row space-x-2 p-1">
                        <img src={tick} alt="tick" className="h-6 w-6  " />
                        <li className="font-poppins ttext-[1rem]">Comprehensive Curriculum</li>
                        </div>
                        <div className="flex flex-row space-x-2 p-1">
                        <img src={tick} alt="tick" className="h-6 w-6  " />
                        <li className="font-poppins text-[1rem]">Comprehensive Curriculum</li>
                        </div>
                        <div className="flex flex-row space-x-2 p-1">
                        <img src={tick} alt="tick" className="h-6 w-6  " />
                        <li className="font-poppins ttext-[1rem]">Comprehensive Curriculum</li>
                        </div>
                        <div className="flex flex-row space-x-2 p-1">
                        <img src={tick} alt="tick" className="h-6 w-6  " />
                        <li className="font-poppins text-[1rem]">Comprehensive Curriculum</li>
                        </div>
                        <div className="flex flex-row space-x-2 p-1">
                        <img src={tick} alt="tick" className="h-6 w-6  " />
                        <li className="font-poppins text-[1rem]">Comprehensive Curriculum</li>
                        </div>

                    </ul>
                </div>
            </div>
    </section>
)


export default ContactUs