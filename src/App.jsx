import { Navbar, Header, Hero, Footer,Banner,Category,AboutUs,Service,Learningadvantages,Testimonial,GetstartedBanner } from "./components";

const App = () => (
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
    <div className="w-full flex items-center bg-indigo-200">
      <GetstartedBanner />
    </div>
    {/* Footer */}
    <div className='bg-gray-600 w-full'>
      <Footer />
    </div>
  </div>
);

export default App;
