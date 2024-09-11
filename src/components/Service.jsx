import { ServiceList } from "../constants";
import Viewmore from "./Viewmore";

const Service = () => (
    <section id="service" className="w-full overflow-hidden flex  flex-1  h-auto">
        <div className="w-full overflow-hidden flex flex-1  flex-col ">
        <div className="w-full flex items-center justify-center my-10">
            <h2 className="font-semibold font-poppins text-4xl  leading-loose">
            Our Services
            </h2>
        </div>
        <div className="w-full overflow-hidden flex sm:flex-row flex-col justify-center">
            {/* You may want to wrap ServiceList.map() return block */}
            {ServiceList.map((service, index) => (
            <div key={service.id} className="md:w-[25%] w-screen h-auto border-2 shadow md:m-10 -m-1 sm:m-2">
                <div className="w-[100%] relative">
                    <img src={service.image} alt="serviceImg" className="h-52 w-[100%]" />
                </div>
                <div className="absolute flex flex-1 justify-center items-center sm:w-[25%] w-screen sm:ml-6 md:ml-0">
                    <div className="h-16 w-16 bg-blue-600 rounded-full flex justify-center sm:-mt-8 -mt-10  items-center">
                        <img src={service.icon} alt="serviceIcon" className="h-14 w-14 " />
                    </div>
                </div>
                {/* Description and Viewmore section */}
                <div className="w-[100%]  text-wrap p-10 text-center font-poppins">
                    <h3 className="text-2xl leading-relaxed text-blue-500">
                        {service.title}
                    </h3>
                    <p className="text-[1rem] leading-loose p-3">
                        {service.description}
                    </p>
                    <div className="w-[100%]">
                        <Viewmore />
                    </div>
                </div>
            </div>
            ))}
        </div>
        </div>
    </section>
);

export default Service;
