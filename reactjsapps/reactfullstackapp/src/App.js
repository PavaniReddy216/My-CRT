import logo from './logo.svg';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import AboutUs from './components/About';
import Courses from './components/Courses';
import Login from './components/Login';
import Home from './components/Home';
import Signup from './components/Signup';

function App() {
  return (
    <div className="App">
     <Header/>
     <Navbar/>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<AboutUs/>}/>
      <Route path='/courses' element={<Courses/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Signup/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
