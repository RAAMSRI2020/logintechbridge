import { CategoryList } from "../constants"
import "../index.css"
const Category = () => (
    <section id='service'>
        <div className='flex flex-1 flex-col items-center w-[100vw] h-auto md:m-6 m-0'>
            <div className='text-center w-[100%] m-2'>
                <h4 className='font-poppins text-2xl leading-10'>Explore Categories</h4>
                <h1 className='font-poppins sm:text-6xl text-5xl leading-loose text-blue-500'>Top Categories</h1>
                <p className='font-poppins text-xl leading-[3rem] text-gray-700'>Explore our top categories for comprehensive IT training solutions tailored to your career goals.</p>
            </div>
            
            {/* Grid Container */}
            <div className='w-full h-auto m-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1'>
                {CategoryList.map((category, index) => (
                    <div key={category.id} className="sm:w-[20wv] md:w-[25vw] lg:w-[30vw] w-screen h-[15vh] flex flex-row rounded cursor-pointer border-2  shadow hover:bg-blue-400 ">
                        <div className=" sm:w-[10%] md:w-[25%] w-[25%] rounded-none md:p-6 p-4 ">
                            <img src={category.icon} alt={index} className="h-12 w-12"/>
                        </div>
                        <h4 className="text-blue-400 hover:text-white font-semibold font-poppins sm:text-xl text-[1rem] p-8 ">{category.title}</h4>
                    </div>
                ))}
            </div>
        </div>
    </section>
)

export default Category
