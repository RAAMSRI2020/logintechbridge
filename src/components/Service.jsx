import { academy,academyImg } from "../assets"
import {Viewmore} from "../components"
import { ServiceList } from "../constants"

const Service = () => (
    <section id='service' className='w-full overflow-hidden flex  flex-1 '>
        <div className='w-full overflow-hidden flex flex-1  flex-col'>
            <div className='w-full flex items-center justify-center my-10'>
                <h2 className='font-semibold font-poppins text-4xl  leading-loose'>Our Services</h2>
            </div>

            <div className="sm:mx-6  md:mx-20 m-0 flex sm:flex-row flex-col md:space-x-6 sm:space-x-4 space-x-0 justify-center">
                {ServiceList.map((service,index)=>(
                <div  key={service.id} className="sm:h-auto h-[100vh] sm:w-[40vw] md:w-[20vw] w-screen border-2 border-black rounded shadow bg-dimWhite">
                    <div className="h-[25%] ">
                    <img src={service.image} alt={index} className="h-[25vh] w-full " />
                    </div>
                    <div className="">
                        <div className="h-16 w-16 bg-blue-600 rounded-full flex items-center justify-center mx-[37%] relative shadow shadow-blue-200">
                            <img src={service.icon} alt={index} className="h-12 w-12 object-cover" />
                        </div>
                        <div className="flex items-center justify-center p-4 flex-col">
                            <span className="text-xl text-wrap font-poppins leading-normal text-center">
                                {service.title}
                            </span>
                            <p className="font-poppins leading-loose p-4 px-3 sm:w-[80%] w-full h-full">
                                {service.description}
                            </p>
                        </div>
                        <div className="flex items-center justify-center my-4">
                            <Viewmore />
                        </div>
                    </div>
                </div>
                ))}
            </div>
            
        </div>
    </section>
  )


export default Service