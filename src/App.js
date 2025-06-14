
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Home from './Component/Home/home';
import GettingStarted from './Component/Getting-Started/GettingStarted';
import SignUp from './Component/SignUp/SignUp';
import SignInPage from './Component/SignIn/SignIn';
import GettingStartedBtn from './Component/Getting-Started/GetStartBtn';


function App() {
  return (
    <div className="App">
  <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="getting-started" element={<GettingStarted />} />
        <Route path="getstartbtn" element={<GettingStartedBtn />} />
        <Route path='/signin' element={<SignInPage />} />
        <Route path="/signup" element={<SignUp/>} />

      </Routes>
    </Router>
    </div>
  );
}

export default App;









