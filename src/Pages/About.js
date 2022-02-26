import React from "react";
import PageTemplate from "../Components/PageTemplate";
import HomeRocket from "../Assets/Home-page-rocket.svg"


export default function About() {
  return (
    <>
      {" "}
      <PageTemplate
       name="Welcome to About Page "
       
       imgsrc={HomeRocket}
       visit="/contact"
       btname="Contact Now"
       />
    </>
  );
}
