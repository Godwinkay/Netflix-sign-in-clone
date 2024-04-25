import Signin from "./components/Signin";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from './components/Signup'

function App() {
  return (
    <div>
    <Router>
      <Routes>
       <Route path="/" element= {<Signin />} />
       <Route path="/signup" element= {<Signup />} />
      </Routes>
    </Router>
    </div>
     
    
  );
}

export default App;
