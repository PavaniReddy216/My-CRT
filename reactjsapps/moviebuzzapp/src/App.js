import logo from './logo.svg';
import './App.css';
import Movie from './Components/Movie';
import Likes from './Components/Likes';
import ListRender from './Components/ListRender';
import ObjectRender from './Components/ObjectRender';
import Login from './Components/Login';
function App() {
  return (
    <div className="App">
     <Movie heroName="prabhas" villanName= "prakash raj" children="67"/>
     <Movie heroName="Tej" villanName= "vijaysethupathi" children="68"/>
     <Likes/>
     <ListRender/>
     <ObjectRender/>
     <Login/>
    </div>

  );
}

export default App;
