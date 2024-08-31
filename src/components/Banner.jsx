import { BannerList } from "../constants";

const Banner = () => (
    <section id='banner'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 md:w-[50vw] lg:w-[100vw] w-screen'>
            {BannerList.map((item, index) => (
                <div key={item.id} 
                    className='flex flex-col bg-blue-500 p-4 sm:p-6 rounded-lg'>
                    <div className='flex justify-center items-center mb-4'>
                        <div className='w-16 h-16 sm:w-18 sm:h-18 rounded-full overflow-hidden flex justify-center items-center bg-gray-500'>
                            <img 
                                src={item.icon} 
                                alt={`icon-${index}`} 
                                className='w-12 h-12 object-cover' 
                            />
                        </div>
                    </div>
                    <div className='flex flex-col text-center text-dimWhite'>
                        <h3 className='font-poppins font-extrabold text-4xl sm:text-4xl'>{item.title}</h3>
                        <span className='font-poppins font-semibold text-2xl sm:text-xl'>{item.value}</span>
                    </div>
                </div>
            ))}
        </div>
    </section>
);

export default Banner;
