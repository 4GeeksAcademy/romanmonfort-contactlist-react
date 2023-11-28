import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";


const AddContact = () => {
  const { store, actions } = useContext(Context)
  const [ contacto, setContacto ] = useState({});
  const [Name,setName] = useState("")
  const [Email,setEmail] = useState("")
  const [Address,setAdress] = useState("")
  const [Phone,setPhone] = useState("")

 

  

  return (
    <div className="container d-flex justify-content-center">
      <form className="container mt-5">
        <div className="row text-center">
          <h1>Add a New Contact</h1>
        </div>
        <div className="container-fluid row">
          <label>Full Name
            <input className="form-control" onChange={(e)=> setName(e.target.value)} name="full_name" placeholder="Full Name">

            </input>
          </label>
        </div>
        <div className="container-fluid row">
          <label><h6>Email</h6>
            <input className="form-control" onChange={(e)=> setEmail(e.target.value)} name="email" placeholder="Enter Email">

            </input>
          </label>
        </div>

        <div className="container-fluid row">
          <label><h6>Phone</h6>
            <input className="form-control" onChange={(e)=> setPhone(e.target.value)} name="phone" placeholder="Enter Phone">

            </input>
          </label>
        </div>

        <div className="container-fluid row">
          <label><h6>Address</h6>
            <input className="form-control " onChange={(e)=> setAdress(e.target.value)} name="address" placeholder="Enter Adress">

            </input>
          </label>
          <button className="btn btn-success mt-4" onClick={()=>actions.createContact(Name,Email,Address,Phone)} type="submit">Save</button>
          <Link className="mt-3" to="/">Or Get back to contacts</Link>
        </div>
      </form>
    </div>
  )
}

export default AddContact
