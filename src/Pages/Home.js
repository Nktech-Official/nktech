import React from 'react'
import HomeRocket from "../Assets/Home-page-rocket.svg"
import PageTemplate from '../Components/Pages/PageTemplate'
export default function Home() {
  return (
    <>
    <PageTemplate
    
    name="Grow your business with"
    imgsrc={HomeRocket}
    visit="/service"
    btname="Get Started"
    />
   
    </>
  )
}
