import './App.css';
import { Navbar } from './Components/Navbar';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="alert alert-dismissible alert-success">
      <button type="button" className="btn-close" data-bs-dismiss="alert"></button>
      <strong> Well done! </strong>
    </div>
    </div>
  );
}

export default App;
