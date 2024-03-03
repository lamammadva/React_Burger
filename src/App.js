import './App.css';
import {Routes,Route} from 'react-router-dom';
import { Home } from './components/Home';
import { Contact } from './components/Contact';
import { Menu } from './components/Menu';
import { About } from './components/About';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/about' exact element={<About/>}/>
        <Route path='/contact' exact element={<Contact/>}/>
        <Route path='/menu' exact element={<Menu/>}/>
      </Routes>
      <Footer/>
      
    </div>
  );
}

export default App;
