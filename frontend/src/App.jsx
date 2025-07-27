import { useState } from 'react'
import Products  from './Components/productList';
import CreateModalProduct from './Components/createProducts';
import './App.css'

function App() {

  return (
    <>
      <div className="container  text-danger">
         <Products/>
      </div>

      {/* Modal for creating Product */}
      <CreateModalProduct/>
    </>
  )
}

export default App
