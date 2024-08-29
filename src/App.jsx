import { Navbar, Header, Hero, Footer } from "./components";
import styles from "./style"; // Make sure this path is correct if you are using custom styles

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

    {/* Footer */}
    <div className='bg-gray-600 w-full'>
      <div className={`${styles.boxWidth}`}>
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
