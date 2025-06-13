
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Component/Home/home';
import { Link } from 'react-router-dom';
import SignUp from './Component/My_Account/SignUp';

function App() {
  return (
    <div className="App">
  <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/signup" element={<SignUp />} />

      </Routes>
    </Router>
    </div>
  );
}

export default App;












// <Router>
  
//   <Routes>
//     <Route path="/" element={<Home />} />       {/* Optional Home Page */}
//     <Route path="/signup" element={<SignUp />} /> {/* Full page sign up */}
//     {/* <Route path="/signin" element={<SignIn />} /> Full page sign in */}
//   </Routes>
// </Router>