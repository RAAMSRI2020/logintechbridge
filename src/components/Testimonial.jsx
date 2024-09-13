import Feedback from "./Feedback"
import { feedback } from "../constants"
import { Carousel,IconButton } from "@material-tailwind/react";

const Testimonial = () =>(
    <section id='testimonial' className='w-full h-full flex md:flex-row flex-col'>
      <div className='sm:w-[100vw] md:w-[50vw] w-screen flex flex-col items-start p-12 border-2 shadow space-y-2'>
        <span className=' text-blue-600 leading-loose'>TESTIMONIAL</span>
        <p className='text-3xl leading-normal'>What Our Students <br className='sm:block hidden'/> Have To Say</p>
        <p className='text-wrap text-justify font-normal leading-normal text-gray-500'>First-hand experiences from our students in their testimonials, sharing insights on their educational journey with us.</p>
      </div>
      <div className="w-70vw flex sm:flex-row flex-col items-start  justify-center relative shadow z-[1]">
        <Carousel transition={{ duration: 1.5 }}
        className="rounded-xl"
        prevArrow={({ handlePrev }) => (
          <IconButton
            variant="text"
            color="white"
            size="lg"
            onClick={handlePrev}
            className="!absolute top-2/4 left-4 -translate-y-2/4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
          </IconButton>
        )}
        nextArrow={({ handleNext }) => (
          <IconButton
            variant="text"
            color="white"
            size="lg"
            onClick={handleNext}
            className="!absolute top-2/4 !right-4 -translate-y-2/4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </IconButton>
        )}
        >
          {feedback.map((card)=><Feedback key={card.id} {...card} />)}
        </Carousel>
      </div>
    </section>
  )


export default Testimonial