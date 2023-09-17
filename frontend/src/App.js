import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/NavBar.jsx';
import About from './components/places/About.jsx';
import More from './components/places/More.jsx';
import AddJob from './components/places/Add.jsx';

function App() {
  return (
  <BrowserRouter>
  <NavBar />
  <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route exact path="/aboutus" element={<About/>}/>
    <Route exact path="/morejobs" element={<More/>}/>
    <Route exact path="/addjobs" element={<AddJob/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
