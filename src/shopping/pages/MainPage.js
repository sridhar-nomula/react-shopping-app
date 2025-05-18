import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Banner from '../components/Banner'
import Collections from '../components/Collections'
import { Gents } from '../data'


const MainPage = () => {
    const [gentsFashion, setGentsFasion]= useState(Gents)
    

  return (
    <div>
      
      
        <Header />
        <Banner />
        <Collections gentsFashion={gentsFashion}/>
        <Footer />
        
        
    </div>
  )
}

export default MainPage
