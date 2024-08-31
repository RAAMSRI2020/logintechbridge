import { course } from "../assets"

const Service = () => (
    <section id='service'>
      <div className='flex flex-1 flex-col items-centers w-screen h-auto'>
        <div className='text-center w-[100%] '>
          <h4 className='font-poppins text-2xl leading-10'>Explore Categories</h4>
          <h1 className='font-poppins sm:text-6xl text-5xl leading-loose text-blue-500'>Top Categories</h1>
          <p className='font-poppins text-xl leading-[3rem] text-gray-700'>Explore our top categories for comprehensive IT training solutions tailored to your career goals.</p>
          
        </div>
        <div className='w-[100%] h-auto m-5 flex sm:flex-row flex-col'>
          <div className="w-[25vw] h-[15vh] bg-gray-600 flex flex-row rounded">
            <div className="bg-gray-400 w-[25%] rounded-md">
              <img src={course} alt="course" className="p-6"/>
            </div>
            <h4 className="text-black p-6">Software</h4>
          </div>
          <div className="w-[25vw] h-[15vh] bg-gray-600 flex flex-row rounded">
            <div className="bg-gray-400 w-[25%] rounded-md">
              <img src={course} alt="course" className="p-6"/>
            </div>
            <h4 className="text-black p-6">Software</h4>
          </div>          <div className="w-[25vw] h-[15vh] bg-gray-600 flex flex-row rounded">
            <div className="bg-gray-400 w-[25%] rounded-md">
              <img src={course} alt="course" className="p-6"/>
            </div>
            <h4 className="text-black p-6">Software</h4>
          </div>          <div className="w-[25vw] h-[15vh] bg-gray-600 flex flex-row rounded">
            <div className="bg-gray-400 w-[25%] rounded-md">
              <img src={course} alt="course" className="p-6"/>
            </div>
            <h4 className="text-black p-6">Software</h4>
          </div>
        </div>
      </div>
    </section>
  )


export default Service