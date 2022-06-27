import './App.css';
import Navbar from './componets/Navbar'
import Home from './componets/Home'
import  About from './componets/About'
import Singin from './componets/Singin'
import Singup from './componets/Singup'
import {BrowserRouter,Routes,Route} from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbar/>}>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/singin' element={<Singin />} />
          <Route path='/singup' element={<Singup />} />
          </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
