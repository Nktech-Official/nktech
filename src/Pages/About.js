import React from "react";
import PageTemplate from "../Components/Pages/PageTemplate";
import about from "../Assets/about.svg"


export default function About() {
  return (
    <>
      {" "}
      <PageTemplate
       name="Welcome to About Page "
       
       imgsrc={about}
       visit="/contact"
       btname="Contact Now"
       />
    </>
  );
}
