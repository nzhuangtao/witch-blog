import './App.css';
import { Routes, Route } from 'react-router-dom';
// 导入页面
import Home from "./pages/home";
import About from "./pages/about";
import Laboratory from "./pages/laboratory";
import Tag from "./pages/tag";
import Detail from './pages/detail';
import Nav from "./components/nav/nav.jsx"
function App() {
  return (
    <div className="App">
     
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/tag' element={<Tag />}></Route>
          <Route path='/laboratory' element={<Laboratory />}></Route>
          <Route path='/detail' element={<Detail />}></Route>
        </Routes>

      <footer>
          <div className=''>

          </div>
      </footer>
    </div>
  );
}

export default App;
