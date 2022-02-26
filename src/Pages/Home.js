import React from 'react'
import HomeRocket from "../Assets/Home-page-rocket.svg"
import PageTemplate from '../Components/PageTemplate'
export default function Home() {
  return (
    <>
    <PageTemplate
    
    name="Grow your business with"
    imgsrc={HomeRocket}
    visit="/services"
    btname="Get Started"
    />
   
    </>
  )
}
