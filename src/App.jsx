import {Routes,Route} from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Home from './pages/Home';
import About from './pages/About';
import Learning from './pages/Learning/Learning';
import LearningLang from './pages/Learning/LearningLang';
import LearningDB from './pages/Learning/LearningDB';
import LearningService from './pages/Learning/LearningService';
import LearningFramework from './pages/Learning/LeaningFramework';
import LearningLibrary from './pages/Learning/LearningLibrary';
import LearningIDE from './pages/Learning/LearningIDE';
import APIs from './pages/APIs';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/Learning/ScrollToTop';


function App() {
  return (
    <div>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/learning" element={<Learning />}></Route>
        <Route path="/learning/languages" element={<LearningLang />}></Route>
        <Route path="/learning/frameworks" element={<LearningFramework />}></Route>
        <Route path="/learning/services" element={<LearningService />}></Route>
        <Route path="/learning/databases" element={<LearningDB />}></Route>
        <Route path="/learning/libraries" element={<LearningLibrary />}></Route>
        <Route path="/learning/IDEs" element={<LearningIDE />}></Route>
        <Route path="/apis" element={<APIs />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
