import styles from "./style";
import { Navbar,Header} from "./components";

const App = () => (
  <div className="w-full overflow-hidden">
    {/* Header */}
    <div className="w-full flex  items-center h-[5vh]">
      <Header/>
    </div>
    
    {/* Navbar */}
    <div className="w-full flex items-center">
      <Navbar />
    </div>

    {/* Content Area */}
    <div className={`${styles.flexCenter} ${styles.paddingX}`}>
      <div className={`${styles.boxWidth}`}>
        {/* Add your other components here */}
      </div>
    </div>
  </div>
);

export default App;
