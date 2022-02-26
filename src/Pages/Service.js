import React from "react";
import Card from "../Components/Pages/Card";
import Sdata from "../Components/Data/Sdata";
export default function Service() {
  return (
    <div className="my-5">
      <h1 className="text-center">Our Services</h1>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
           {Sdata.map((info,index)=>{
            return(
              <Card imgsrc={info.imgsrc} key={index} title={info.title}/>
            )
           })}
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
