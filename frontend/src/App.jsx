import { useState } from 'react'
import Products  from './Components/productList';
import './App.css'

function App() {

  return (
    <>
      <div className="container  text-danger">
         <Products/>
      </div>
    </>
  )
}

export default App
