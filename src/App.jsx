import './App.css'
import Navbar from './components/navbar.jsx';
import Hero from './components/hero.jsx';
import Contact from './components/contact.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {

  return (
    <div>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Hero />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>

      </BrowserRouter>

    </div>
  )
}

export default App
