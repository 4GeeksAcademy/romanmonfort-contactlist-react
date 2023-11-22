import React from 'react'

const ContactCard = (props) => {
    return (
        <div className='container mt-5'>
            <div className='row border'>
                <div className='col img rounded'>
                    <img src={props.img} alt ></img>
                </div>
                <div className='col'>
                    <h4 className=''>MYKE sjdalsjdkajd</h4>
                    <h5 className="m-2"><i className="fa-solid fa-location-dot me-3" style={{ color: "#545659" }}></i> {props.name}</h5>
                    <p className="m-2"><i className="fa-solid fa-phone me-3" style={{ color: "#4f5763" }}></i>{props.phone}</p>
                    <p className="m-2" ><i className="fa-solid fa-envelope me-3" style={{ color: "#64676d" }}></i>{props.email}</p>
                </div>
                <div className='col-3'></div>
                <div className='col-2 d-flex '>
            
                <i className="fa-solid fa-pen m-3" style={{color: "#000000"}}></i>
                    
                    
                <i className="fa-solid fa-trash m-3" style={{color: "#000000"}}></i>
                    
                </div>
            </div>

        </div>
    )
}

export default ContactCard