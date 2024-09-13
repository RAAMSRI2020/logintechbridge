import GetstartedButton from "./GetstartedButton"

const GetstartedBanner = () => (
    <section id='get-started' className='w-full sm:h-[60vh] h-auto flex flex-col items-center justify-center'>
        <div className='w-[100%] text-wrap flex items-center justify-center m-3 text-center'>
            <p className='font-poppins text-4xl'>Obtain Your Accredited Skills Certification With</p>
        </div>
        <div className="m-3">
            <h1 className='font-title text-3xl text-blue-500 text-center' >LOGIN TechBridge</h1>
        </div>
        <div className='flex items-center m-3'>
            <GetstartedButton />
        </div>
    </section>
  )


export default GetstartedBanner