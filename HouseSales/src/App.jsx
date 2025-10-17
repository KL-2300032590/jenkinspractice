import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import MainNavBar from './MainNavBar'
 function App() {
  return (
    <div>
      <BrowserRouter>
        <MainNavBar />
      </BrowserRouter>
    </div>
  )

}

export default App
