import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Navbar } from './Components/Navbar';
import { Home } from './Views/Home';
import { Register } from './Views/Products/Register';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/register' element={<Register/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
