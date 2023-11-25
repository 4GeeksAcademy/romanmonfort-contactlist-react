import React from 'react'
import { Link } from 'react-router-dom'

const ContactCard = (props) => {
    return (
        <div className='container mt-5'>
            <div className='row border'>
                <div className='col img '>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_kBfeU-XWI5wXXjr3FXlztKvDNTn5Tzscv96FgDDk0A&s"
                        alt="Descripción de la imagen"
                        className='img ms-4'
                    />
                </div>
                <div className='col-5'>
                    <h4 className=''>{props.name}</h4>
                    <h5 className="m-2"><i className="fa-solid fa-location-dot me-3" style={{ color: "#545659" }}></i> {props.name}</h5>
                    <p className="m-2"><i className="fa-solid fa-phone me-3" style={{ color: "#4f5763" }}></i>{props.phone}</p>
                    <p className="m-2" ><i className="fa-solid fa-envelope me-3" style={{ color: "#64676d" }}></i>{props.email}</p>
                    <p className="m-2" ><i className="fa-solid fa-envelope me-3" style={{ color: "#64676d" }}></i>{props.address}</p>
                </div>
                <div className='col-3'></div>
                <div className='col-2 d-flex '>
                   
                  <Link to="/edit-contact"><i className="fa-solid fa-pen m-3" style={{ color: "#000000" }}></i></Link>  


                   <i onClick={()=>{}} className="fa-solid fa-trash m-3" style={{ color: "#000000" }}></i> 

                </div>
            </div>

        </div>
    )
}

export default ContactCard