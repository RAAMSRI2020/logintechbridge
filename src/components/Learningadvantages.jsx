import LearningAnimation from "./LearningAnimation"
import { LearningAdavantagesList } from "../constants";


const Learningadvantages = () =>(
    <section id="learning-agvantages " className="md:m-6 m-0 w-full">
            <div className="font-poppins  flex flex-1 items-center justify-center m-4 text-wrap">
                <h4 className="font-normal text-blue-600 text-[1.05rem] leading-loose ">BENEFITS</h4>
            </div>
            <div className="font-poppins  flex flex-1 items-center justify-center text-wrap text-center">
                <h1 className="font-semibold text-4xl">Learning Advantages</h1>
            </div>
            <div className="w-full h-auto flex md:flex-row flex-col ">
                <div className="flex items-center md:w-[50vw] w-screen sm:m-6 m-0">
                    <LearningAnimation/>
                </div>
                <div className="flex items-center  md:w-[50vw] w-full">
                    <div className="grid md:grid-cols-2 sm:grid-cols-4 grid-cols-1 md:w-[100%] w-full h-auto md:m-6">
                        {LearningAdavantagesList.map((advantage,index)=>(
                            <div key={advantage.id} className="md:h-[80%]  h-auto md:w-[80%]  sm:w-[25vw] sm:h-[30vh] w-screen   flex flex-1 flex-col justify-center items-center md:m-16 m-0 bg-blue-400 border  shadow-md rounded">
                            <img src={advantage.icon} alt={index} className="md:h-28 md:w-28  sm:h-20 sm:w-20 h-24 w-24 object-cover md:p-0 sm:p-0 p-4"  />
                            <span className="font-poppins text-[1rem] font-semibold text-black text-center md:p-0 p-2">{advantage.title}</span>
                        </div>
                        ))
                        }
                    </div>
                    
                </div>
            </div>
            
    </section>
  )


export default Learningadvantages;