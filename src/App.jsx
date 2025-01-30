import { Navbar, Header, Hero, Footer,Banner,Category,AboutUs,Service,Learningadvantages,Testimonial,GetstartedBanner,Getintouch} from "./components";
import { modalImg,close } from "./assets";
import { useEffect, useState } from "react";
const App = () => {

  const [isOpen, setIsOpen] = useState(false);
    
  const styles=isOpen ? "hidden" : "";
  function toggle(){
     
     const newState = !isOpen; // Calculate the new state
  setIsOpen(newState);
  
      
  }

  return (
   <>
   <div>
    <section id="pop-up-modal" className={`${styles} w-screen h-screen flex items-center justify-center bg-transparent`}>
                 <div className="h-full w-full flex items-center justify-center non">
                     <div className="w-[50%] h-auto flex items-center  border-2 border-b-4 border-gray-700 rounded-lg shadow-xl -p-2">
                         <div className="w-[50%] h-full bg-cover bg-repeat">
                             <img src={modalImg} alt="modal-image" className="bg-cover " />
                         </div>
                         <div className="w-[50%] h-full flex flex-col font-poppins">
                             
                                 <div className="w-full h-[100%] ml-[20.5rem]">
                                     <img src={close} alt="" className="size-6 "
                                     onClick={()=>toggle()} />
                                 </div>
                             
         
                             <form action="#" className="w-full h-full space-y-7 mt-10" >
                                 <div className="flex flex-col items-center">
                                     <span className="leading-normal text-2xl">Please fill out this form</span>
                                 </div>
                                 <div className="flex flex-col items-center">
                                     <span className="leading-normal text-xl p-2" >name</span>
                                     <input type="text" placeholder="eg:Mathavan" className="px-3 py-2 font-poppins text-gray-300 border-2 border-gray-500  rounded-xl shadow-sm focus:outline-none focus:border-blue-200 focus:ring-1 focus:ring-blue-400  border-1"/>
                                 </div>
                                 <div className="flex flex-col items-center">
                                     <span className="leading-normal text-xl p-2">Email</span>
                                     <input type="text" placeholder="eg:name@gmail.com" className="px-3 py-2 font-poppins text-gray-300 border-2 border-gray-500  rounded-xl shadow-sm focus:outline-none focus:border-blue-200 focus:ring-1 focus:ring-blue-400 border-1"/>
                                 </div>
                                 <div className="flex flex-col items-center">
                                     <span className="leading-normal text-xl p-2">Mobile no</span>
                                     <input type="text" placeholder="eg:9876543210" className="px-3 py-2 font-poppins text-gray-300 border-2 border-gray-500  rounded-xl shadow-sm focus:outline-none focus:border-blue-200 focus:ring-1 focus:ring-blue-400 border-1"/>
                                 </div>
                                 <div className="flex flex-col items-center">
                                     <button type="submit" className="w-24 bg-blue-500 text-center text-white rounded-lg cursor-pointer p-2">Submit</button>
                                 </div>
                             </form>
                         </div>
                     </div>
                 </div>
             </section>
             </div>
    <div className={`${!isOpen ? "bg-transparent":""} `}>
  <div className="w-full overflow-hidden ">
    {/* Header */}
    <div className="w-full flex items-center h-[3rem] bg-black ">
      <Header />
    </div>
  
    {/* Navbar */}
    <div className="w-full h-[5.5rem] flex items-center bg-blue-900">
      <Navbar />
    </div>
  
    {/* Content Area */}
    <div className="w-full flex items-center bg-gray-200">
      <Hero />
    </div>
    <div className="w-full flex items-center bg-blue-700">
      <Banner/>
    </div>
    <div className={`${isOpen ? "hidden" : ''} bg-transparent w-full h-full flex items-center z-10`}>
         
    </div>
    <div className="w-full flex items-center bg-indigo-100">
      <Category />
    </div>
    <div className="w-full flex items-center bg-indigo-100">
      <AboutUs/>
    </div>
    <div className="w-full flex items-center bg-indigo-100">
      <Service/>
    </div>
    <div className="w-full flex items-center bg-indigo-100">
      <Learningadvantages/>
    </div>
    <div className="w-full flex items-center bg-indigo-100">
      <Testimonial/>
    </div>
    <div className="w-full flex items-center bg-indigo-100">
      <Getintouch />
    </div>
    <div className="w-full flex items-center bg-indigo-200">
      <GetstartedBanner />
    </div>

    {/* Footer */}
    <div className='bg-gray-600 w-full'>
      <Footer />
    </div>
  </div>
  

    </div>
 
   
   </>  

  

  )
 
}


export default App;
