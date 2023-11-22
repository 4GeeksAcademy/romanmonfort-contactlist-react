import React from 'react'
import ContactCard from '../component/ContactCard'

const home = () => {
  return (
	<div className='container mt-5'>
		<div className='row'>
                <div className='col-9'>

                </div>
                <div className='col'>
                    <button className='btn btn-success '> Add New Contact </button>
                </div>
            </div>
		<ContactCard name="" img="" phone="" email="" />
	</div>
  )
}


export default home
