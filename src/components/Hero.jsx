import { home } from "../assets";

const Hero = () => (
  <section id='hero' className='flex flex-col sm:flex-col md:flex-col lg:flex-row lg:h-screen'>
    {/* Text Content */}
    <div className='flex-1 flex justify-center items-start flex-col lg:px-12 px-6 py-12 lg:py-0 text-center sm:text-left md:text-center lg:text-left'>
      <p className='font-title leading-10'>
        <span className='text-gray-500 text-5xl font-extrabold leading-tight'>We Help You Achieve</span><br />
        <span className='text-gray-500 text-5xl font-extrabold leading-tight'>Your Tech</span><br />
        <span className='text-blue-400 text-5xl font-extrabold leading-tight'>Career Goals</span><br />
        <span className='text-gray-400 text-[1rem] font-light font-paragraph leading-normal mt-4'>We're not just another bootcamp or IT course. We're a strong network of <br /> like-minded IT professionals, Designers, Architects, Employers, and Mentors.Gain access to exclusive tech events, jobs, freelance gigs, and chatrooms.</span>
      </p>
    </div>

    {/* Image Content */}
    <div className='flex-1 flex justify-center items-center lg:h-full h-64'>
      <img src={home} alt="home" className="w-full h-full object-cover" />
    </div>
  </section>
);

export default Hero;
