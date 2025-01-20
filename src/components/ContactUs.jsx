import { arrow,banner,officebuilding,tick } from "../assets"
import {TimingList,FeatureList} from "../constants"
const ContactUs = () =>  (
    <section id="contact-us" className=" w-full h-auto flex flex-col items-center justify-center">
        <div className="flex items-center justify-center relative">
            <img src="" alt="banner" className="h-[20vh] w-screen  border-black"/>
            <div className="flex flex-row space-x-2 absolute text-wrap">
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
        <div className="flex flex-col md:flex-row w-full items-center justify-center">
  {/* Image container */}
  <div className="w-full md:w-1/2 p-2 flex justify-center items-center">
    <img 
      src={officebuilding} 
      alt="building_image" 
      className="w-full h-auto max-h-[50vh] md:max-h-[80vh] object-contain"
    />
  </div>

  {/* Map container */}
  <div className="w-full md:w-1/2 p-2 flex justify-center items-center">
    <iframe 
      className="w-full h-[50vh] md:h-[80vh] object-contain border-0" 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.012678136275!2d72.62720471496035!3d23.20408828484967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2a7c764c02db%3A0x68d2455407fdf29b!2sRhyno%20Wheels%20Private%20Limited!5e0!3m2!1sen!2sin!4v1633350200012!5m2!1sen!2sin" 
      allowFullScreen="" 
      loading="lazy" 
      title="LoginTechBridge PVT LTD"
    ></iframe>
  </div>
</div>

<div className="w-full flex flex-col md:flex-row items-start justify-between p-4 space-y-4 md:space-y-0">
  {/* Location Section */}
  <div className="w-full md:w-1/3 flex flex-col p-4 space-y-3">
    <h3 className="font-semibold font-poppins text-3xl">Location</h3>
    <div className="md:pl-4">
      <h2 className="font-medium text-xl">Address</h2>
      <p className="font-normal text-[1rem]">
        2/516, SNA Complex, Pollachi Main Road, Coimbatore, Tamil Nadu 641050
      </p>
    </div>
    <div className="md:pl-4">
      <h2 className="font-medium text-xl">Email</h2>
      <span className="font-normal text-[1rem]">
        <a href={`mailto:info@logintechbridge.com`} className="text-blue-500 hover:underline">
          info@logintechbridge.com
        </a>
      </span>
    </div>
    <div className="md:pl-4">
      <h2 className="font-medium text-xl">Phone</h2>
      <span className="font-normal text-[1rem] flex flex-col space-y-1">
        <a href={`tel:+918015030882`} className="text-blue-500 hover:underline">
          8015030882
        </a>
        <a href={`tel:+918015030883`} className="text-blue-500 hover:underline">
          8015030883
        </a>
      </span>
    </div>
  </div>

  {/* Working Days and Hours Section */}
    
        <div className="w-full md:w-1/3 flex flex-col p-4">
        <h3 className="font-semibold font-poppins text-3xl mb-4">Working Days and Hours</h3>
        <div className="space-y-3">
        {TimingList.map((timing) => (
            <table key={timing.id} className="font-poppins text-xl">
            <tbody>
                <tr>
                <td className="py-2 font-medium">{timing.day}</td>
                <td className="px-8">{timing.time}</td>
                </tr>
            </tbody>
            </table>
        ))}
        </div>
    </div>

    {/* Features Section */}
    <div className="w-full md:w-1/3 flex flex-col p-4">
        <h3 className="font-semibold font-poppins text-3xl mb-4">Features</h3>
        <ul className="space-y-3">
        {FeatureList.map((feature) => (
            <li key={feature.id} className="flex items-center space-x-3">
            <img src={tick} alt="tick" className="h-6 w-6" />
            <span className="font-poppins text-[1rem]">{feature.description}</span>
            </li>
        ))}
        </ul>
        </div>
        </div>
        <div className="w-full h-auto md:h-[80vh] flex flex-col items-center justify-center m-3">
            <form action="#" className="flex flex-col items-center space-y-6 font-poppins bg-white h-auto md:h-[100%] md:w-[30%] p-10 border-2 border-transparent text-center">
                <h1 className="font-semibold text-2xl leading-loose">Get In Touch</h1>
                <h2 className="font-medium text-xl leading-normal">Fill in the form to get free career counselling</h2>
                <input type="text" name="" id="" placeholder="your name"/>
                <input type="text" placeholder="your email" />
                <input type="text" name="" id="" placeholder="your mobile number"/>
                <input type="text" name="" id="" placeholder="Enquiry for"/>
            </form>
        </div>

    </section>
)


export default ContactUs