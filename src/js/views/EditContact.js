import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

const EditContact = () => {
  return (
          <div className="container d-flex justify-content-center">
            <form className="container mt-5">
              <div className="row text-center">
              <h1>Add a New Contact</h1>
              </div>
              <div className="container-fluid row">
              <label>Full Name
                <input className="form-control" placeholder="Full Name">
      
                </input>
              </label>
              </div>
              <div className="container-fluid row">
              <label><h6>Email</h6>
                <input className="form-control" placeholder="Enter Email">
      
                </input>
              </label>
              </div>
      
              <div className="container-fluid row">
              <label><h6>Phone</h6>
                <input className="form-control" placeholder="Enter Phone">
      
                </input>
              </label>
              </div>
      
              <div className="container-fluid row">
              <label><h6>Address</h6>
                <input className="form-control " placeholder="Enter Adress">
      
                </input>
              </label>
              <button className="btn btn-success mt-4" type="submit">Save</button>
              <Link className="mt-3" to="/">Or Get back to contacts</Link>
              </div>
            </form>
          </div>
        )
      }

export default EditContact