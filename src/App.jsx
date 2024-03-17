import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Setting from './Pages/Setting'

const App = () => {
  return (
    <>
<BrowserRouter>
<Routes>
  <Route path="/"          element={<Home/>}/>
  <Route path="/about"     element={<About/>}/>
  <Route path="/setting"   element={<Setting/>}/>
  </Routes>
  </BrowserRouter>
    </>
  )
}

export default App