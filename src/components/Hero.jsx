import { home } from "../assets";

const Hero = () => (
  <section id='hero' className='flex flex-col sm:flex-col md:flex-col lg:flex-row lg:h-screen h-auto'>
    {/* Text Content */}
    <div className='flex-1 flex justify-center items-start flex-col lg:px-12 px-6 py-12 lg:py-0 text-center sm:text-left md:text-center lg:text-left'>
      <p className='font-title text-5xl '>
        <p className="text-gray-500 leading-normal">We Help You Achieve <br className="sm:block hidden"/> Your Tech <br className="sm:block hidden"/><span className="text-blue-400">Career Goals</span></p>
        <span className='text-black text-[1.25rem] font-light font-paragraph leading-none mt-4'>
          We're not just another bootcamp or IT course. We're a strong network of <br className="sm:hidden block"/> 
          like-minded IT professionals, Designers, Architects, Employers, and Mentors. Gain access to exclusive tech events, jobs, freelance gigs, and chatrooms.
        </span>
      </p>
    </div>

    {/* Image Content */}
    <div className='flex-1 flex justify-center items-center lg:h-full h-64'>
      <img src={home} alt="home" className="w-[100%] h-[100%] object-cover" />
    </div>
  </section>
);

export default Hero;
