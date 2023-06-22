import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home"

import NavigationBar from "./Components/NavigationBar";
import "./styles/main.css"
import "./styles/mobile/responsive.css"
import Commitment from "./Pages/Commitment";

function App() {
  return (
    <div className="card-container">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/main/commitment" element={<Commitment />}/>
        </Routes>
        <div className="button-music-wrapper">
          <button className="button-music">
          <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" className="icon-pause" width={"24px"} height={"24px"}>
            <path fill="#fff" d="M4.27 3 3 4.27l9 9v.28c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4v-1.73L19.73 21 21 19.73 4.27 3zM14 7h4V3h-6v5.18l2 2z"></path>
          </svg>
          </button>
        </div>
        <NavigationBar />  
      </Router>
    </div>
  );
}

export default App;
