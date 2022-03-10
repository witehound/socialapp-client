import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/register/Register";
import Profile from "./pages/profile/Profile";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/profile/:username" element={<Profile/>}/>
       </Routes>
    </Router>
  );
}

export default App;
