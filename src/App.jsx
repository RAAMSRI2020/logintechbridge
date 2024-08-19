import styles from "./style";
import Navbar from './components/Navbar';

const App = () => (
  <div className="w-full overflow-hidden">
    {/* Ensure Navbar spans the entire width */}
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
