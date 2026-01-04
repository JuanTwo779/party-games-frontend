import { createRoot } from 'react-dom/client'
import './index.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import App from './App.jsx'
import CahPlayer from './pages/cah/Player.jsx'
import CahHost from './pages/cah/Host.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}></Route>
      <Route path='/cah' element={<CahPlayer/>}></Route>
      <Route path='/cah/host' element={<CahHost/>}></Route>
    </Routes>
  </BrowserRouter>
)
