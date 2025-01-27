const Getintouch = () =>(
    <section id='getintouch' className='w-full h-auto flex items-center justify-center font-poppins '>
        <div className='w-[90%] sm:w-[70%] md:w-[60%] h-auto md:h-40  bg-gradient-to-r from-blue-300  via-blue-400  to-blue-500  rounded-lg  my-3'>
          <div className="w-full px-3 py-4 h-full flex flex-col md:flex-row">
            <div className="w-full md:w-[40%] h-full flex flex-col items-center md:items-end justify-center">
              <span className="leading-3 text-2xl py-4 text-white">Get In Touch:</span>
              <span> <a href={`mailto:info@logintechbridge.com`} className="text-white hover:underline leading-3 text-xl">
                      info@logintechbridge.com
              </a></span>
            </div>
            <div className="w-full md:w-[20%] flex items-center justify-center relative">
                <span className="size-24 rounded-full inline bg-gradient-to-r from-blue-300 to-blue-500 filter blur inset-1"></span>
                <span className=" absolute size-20 rounded-full bg-white flex items-center justify-center ring-1 ring-blue-400 fliter text-xl text-indigo-500 z-10">Or</span>

            </div>
            <div className="w-full md:w-[40%] h-full flex flex-col items-center md:items-start justify-center">
              <span className="leading-3 text-2xl py-4 text-white">Call Us Via:</span>
              <span> 
                <a href={`tel:+918015030883`} className="text-white hover:underline cursor-pointer text-xl">
                    8015030883
                </a>
              </span>
            </div>
          </div>
        </div>
    </section>
  )


export default Getintouch