import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Navbar } from './Components/Navbar';
import { Home } from './Views/Home';
import { Appointments } from './Views/Products/Appointments';
import { Register } from './Views/Products/Register';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/register/:sku' element={<Register/>}/>
          <Route path='/register/' element={<Register/>}/>
          <Route exact path='/appointments' element={<Appointments/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
