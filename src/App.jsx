import React from 'react'
import Electronics from './components/Electronics'
import { Link, Route, Routes } from 'react-router-dom'
import Clothing from './components/Clothing'
import Layout from './components/Layout'

function App() {
  return (
    <div>
       <Routes>
            <Route path="/products" element={<Layout/>}>
                <Route path="elec" element={<Electronics/>}  />
                <Route path="clg" element={<Clothing/>}  />
            </Route>
        </Routes> 


    </div>

  )
}

export default App





