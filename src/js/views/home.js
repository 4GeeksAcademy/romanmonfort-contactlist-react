import React,{useContext, useEffect} from 'react'
import ContactCard from '../component/ContactCard'
import { Context } from '../store/appContext'
import { Link } from 'react-router-dom'
import "../../styles/home.css"

const home = () => {
  const{store,actions}=useContext(Context);
  
  
  

 console.log(store.agenda)

  return (
	<div className='container mt-5'>
		<div className='row'>
                <div className='col-9'>

                </div>
                <div className='col'>
                  <Link to="/add-contact">
                    <button className='btn btn-success '> Add New Contact </button>
                  </Link>
                </div>
            </div>
            {store.agenda && store.agenda.map((contacto,index)=>(
            <ContactCard key={index} name={contacto.full_name} img={contacto.address} phone={contacto.phone} email={contacto.email} address={contacto.address} />))
}
	</div>
  )
}


export default home
