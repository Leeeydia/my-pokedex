import { useState } from 'react'
import './App.css'

function App() {
  

 return (
  <Router>
  <Routes>
    <Route path="/" element={<Home />} />
    {* 포켓몬도감과 디테일페이지 추가 *}
  </Routes>
</Router>
  )
}

export default App
