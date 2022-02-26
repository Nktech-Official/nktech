import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Card(props) {
  return (
    <div className="col-md-4 col-10 mx-auto">
    <div className="card">
    <img src={props.imgsrc} width="308" height="200" className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">{props.title}</h5>
      <p className="card-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, nisi quia, commodi veritatis quos praesentium .
      </p>
      <NavLink to="" className="btn btn-primary">
        Get Started
      </NavLink>
    </div>
  </div>
  </div>
  )
}
