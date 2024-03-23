import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Setting from './Pages/Setting'
import Crud from './Pages/Crud'

const App = () => {
  return (
    <>
<BrowserRouter>
<Routes>
  <Route path="/"          element={<Home/>}/>
  <Route path="/about"     element={<About/>}/>
  <Route path="/setting"   element={<Setting/>}/>
  <Route path="/crud"    element={<Crud/>} />
  </Routes>
  </BrowserRouter>
    </>
  )
}

export default App