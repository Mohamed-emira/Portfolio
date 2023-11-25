import React from 'react'
import Home from '../Home'
import About from '../About'
import Profile from '../Profile'
import Portoflio from '../Portoflio'
import SocialMedia from '../SocialMedia'
import Work from '../Work'
import Footer from '../Footer'
export default function Index() {
  return (
    <div>
       <Home/>
       <Work/>
       <Portoflio/>
       <Profile/>
      <About/>
      <SocialMedia/>
      <Footer/>
    </div>
  )
}
