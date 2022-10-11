import React from 'react'
import { BrowserRouter ,Routes, Route } from 'react-router-dom'
import Main1 from '../components/Main1'
import Main2 from '../components/Main2'
import Main3 from '../components/Main3'
import Layout from '../components/Layout'
const AppRouter = () => {
  return (
    
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Main1/>}/>
            <Route path='Main2' element={<Main2/>}/>
            <Route path='Main3' element={<Main3/>}/>
          </Route>
        </Routes>
        <Layout />
    </BrowserRouter>
    
  )
}

export default AppRouter