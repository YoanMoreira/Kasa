import React from 'react'
import "../../styles/Apartment.scss"
import { Link } from 'react-router-dom'

function Apartment() {
  return (
    <div className='apartment'>
      <Link to="/flat">
        <div className='apartmentSub'>Titre de la location</div>
        </Link>
        </div>
  )
}

export default Apartment