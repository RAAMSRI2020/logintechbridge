import { Navbar,Header,Home} from "./components";

const App = () => (
  <div className="w-full overflow-hidden bg-gray-200">
    {/* Header */}
    <div className="w-full flex  items-center h-[5vh] bg-black">
      <Header/>
    </div>
    
    {/* Navbar */}
    <div className="w-full h-[12vh] flex items-center bg-blue-900">
      <Navbar />
    </div>

    {/* Content Area */}
    <div className="w-full flex  items-center bg-gray-200">
      <Home/>
    </div>
  </div>
);

export default App;
