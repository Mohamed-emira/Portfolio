import './App.css';
import Navbar from './Component/Navbar';
import Index from './Component/Index';
import Contact from './Component/Contact';
import { BrowserRouter, Route ,Routes} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
       <Route exact path='/' element={<Index/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      </Routes>
      
      </BrowserRouter>
      

    </div>
  );
}

export default App;
