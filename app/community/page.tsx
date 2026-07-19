import React from 'react'
import CustomCursor from '../components/CustomCursor'
import Cards from './components/cards'
import Header from '../components/Header'
import Footer from '../components/Footer'

const page = () => {
  return (
    <div>
        <CustomCursor/>
        <Header/>
        <Cards/>
        <Footer/>
      
    </div>
  )
}

export default page
