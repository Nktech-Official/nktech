import React, { useState } from "react";
import contact from "../Assets/Contact.svg";
export default function Contact() {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    msg: "",
  });
  const InputEvent = (event) => {
    const { name, value } = event.target;
    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };
 const submit=(e)=>{
   e.preventDefault();
   alert(`My name is ${data.firstName} ${data.lastName}. My mobile number is ${data.phone} and email is ${data.email}, Here is what i want to say:- ${data.msg} `)
 }
  return (
    <>
      <div className="my-5 container-fluid">
        <div
          id="contact"
          className="header-img d-flex align-items-center justify-content-center"
        >
          <img
            src={contact}
            height="60%"
            id="contact-img"
            width="80%"
            alt=""
            className="img-fluid animated"
          />
        </div>
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={submit}>
              <div className="row">
                <div className="col">
                  <label htmlFor="firstName" className="form-label">
                    First Name
                  </label>
                  <input
                    onChange={InputEvent}
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={data.firstName}
                    className="form-control"
                    placeholder="First name"
                    aria-label="First name"
                  />
                </div>
                <div className="col">
                  <label htmlFor="lastName" className="form-label">
                    First Name
                  </label>
                  <input
                    onChange={InputEvent}
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={data.lastName}
                    className="form-control"
                    placeholder="Last name"
                    aria-label="Last name"
                  />
                </div>
              </div>
              <div className="mb-3 mt-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Email address
                </label>
                <input
                  onChange={InputEvent}
                  type="email"
                  name="email"
                  value={data.email}
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
              </div>
              <div className="mb-3 mt-3">
                <label htmlFor="phone" className="form-label">
                  Phone Number
                </label>
                <input
                  onChange={InputEvent}
                  type="tel"
                  name="phone"
                  value={data.phone}
                  className="form-control"
                  id="phone"
                  placeholder="62876523018"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label"
                >
                  Example textarea
                </label>
                <textarea
                  className="form-control"
                  name="msg"
                  onChange={InputEvent}
                  value={data.msg}
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
              <button
                className="btn btn-outline-primary rounded-pill"
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
