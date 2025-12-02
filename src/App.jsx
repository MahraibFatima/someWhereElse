import './App.css'
import Home from './components/home.jsx';
import Contact from './components/contact.jsx';
import About from './components/about.jsx';
import Services from './components/services.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {

  return (
    <div>

      <BrowserRouter>  
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path= '/services' element={<Services />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>

      </BrowserRouter>

    </div>
  )
}

export default App
