import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const EditContact = () => {
  const { store, actions } = useContext(Context);
  const [Name, setName] = useState(store.contacto.full_name || "");
  const [Email, setEmail] = useState(store.contacto.email || "");
  const [Address, setAddress] = useState(store.contacto.address || "");
  const [Phone, setPhone] = useState(store.contacto.phone || "");
  const [Id, setId] = useState(store.contacto.id || "");

  const handleSave = () => {
    actions.updateContact(Name, Email, Address, Phone, Id);
  };

  return (
    <div className="container d-flex justify-content-center">
      <form className="container mt-5">
        <div className="row text-center">
          <h1>Edit Contact</h1>
        </div>
        <div className="container-fluid row">
          <label>
            Full Name
            <input
              className="form-control"
              value={Name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Full Name"
            />
          </label>
        </div>
        <div className="container-fluid row">
          <label>
            <h6>Email</h6>
            <input
              className="form-control"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email"
            />
          </label>
        </div>
        <div className="container-fluid row">
          <label>
            <h6>Phone</h6>
            <input
              className="form-control"
              value={Phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter Phone"
            />
          </label>
        </div>
        <div className="container-fluid row">
          <label>
            <h6>Address</h6>
            <input
              className="form-control"
              value={Address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Enter Address"
            />
          </label>
          <button
            className="btn btn-success mt-4"
            type="button"
            onClick={handleSave}
          >
            Save
          </button>
          <Link className="mt-3" to="/">
            Or Get back to contacts
          </Link>
        </div>
      </form>
    </div>
  );
};

export default EditContact;
