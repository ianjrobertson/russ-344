import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";

function App() {
  

  return (
    <div className="relative">
      {/* Main canvas */}
      <Routes>
        <Route path='/russ-344' element={<Home/>}/>
        <Route path='/russ-344/gallery' element={<Gallery/>}/>
      </Routes>
    </div>
  );
}

export default App;
