import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../store/appContext'



const ContactCard = (props) => {
    const { store, actions } = useContext(Context)
    return (
        <div className='container mt-5'>
            <div className='row border'>
                <div className='col img '>
                    <img
                        src="https://png.pngtree.com/png-vector/20220218/ourmid/pngtree-unknown-person-vector-icon-on-white-background-black-symbol-doubt-vector-png-image_44401836.jpg"
                        alt="Descripción de la imagen"
                        className='img ms-4'
                        style={{width: "15vh"}}
                    />
                </div>
                <div className='col-5'>
                    <h4 className=''>{props.name}</h4>
                    <p className="m-2"><i className="fa-solid fa-phone me-3" style={{ color: "#4f5763" }}></i>{props.phone}</p>
                    <p className="m-2" ><i className="fa-solid fa-envelope me-3" style={{ color: "#64676d" }}></i>{props.email}</p>
                    <p className="m-2" ><i className="fa-solid fa-location-dot me-3" style={{ color: "#64676d" }}></i>{props.address}</p>
                </div>
                <div className='col-3'></div>
                <div className='col-2 d-flex '>

                    <Link to="/edit-contact" onClick={(e)=>{
                        actions.getContact(props.index)
                        
                        }}><i className="fa-solid fa-pen m-3" style={{ color: "#000000" }}></i></Link>


                    <i
                        onClick={() => {
                            if (window.confirm("¿Estás seguro de que quieres eliminar este contacto?")) {
                                actions.deleteContact(props.id);
                                window.location.reload()
                            }
                        }}
                        className="fa-solid fa-trash m-3"
                        style={{ color: "#000000" }}
                    ></i>

                </div>
            </div>

        </div>
    )
}

export default ContactCard