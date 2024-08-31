import { Navbar, Header, Hero, Footer,Banner } from "./components";

const App = () => (
  <div className="w-full overflow-hidden bg-white">
    {/* Header */}
    <div className="w-full flex items-center h-[5vh] bg-black">
      <Header />
    </div>

    {/* Navbar */}
    <div className="w-full h-[13vh] flex items-center bg-blue-900">
      <Navbar />
    </div>

    {/* Content Area */}
    <div className="w-full flex items-center bg-white">
      <Hero />
      
      
    </div>
    <div className="w-full flex items-center bg-blue-700">
      <Banner/>
    </div>
  
    {/* Footer */}
    <div className='bg-gray-600 w-full'>
      <Footer />
    </div>
  </div>
);

export default App;
