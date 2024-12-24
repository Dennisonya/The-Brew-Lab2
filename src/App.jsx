import Homepage from './components/Homepage'
import ContactUs from './components/ContactUs'
import AboutUs from './components/AboutUs'
import Shopping from './components/Shopping'
import { BrowserRouter, Routes,Route } from 'react-router-dom'


function App() {
  return(
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/About" element={<AboutUs/>}/>
        <Route path="/Contact" element={<ContactUs/>}/> 
        <Route path="/Shop" element={<Shopping/>}/>
    </Routes>
  </BrowserRouter>
  )
}

export default App
