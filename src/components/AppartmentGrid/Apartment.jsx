import React from 'react'
import "../../styles/Apartment.scss"
import { Link } from 'react-router-dom'

function Apartment(props) {
  console.log("props dans apartment card", props);

  return (
    <div className='apartment'>
      <Link to="/flat" state={{ apartmentID: props.id }}>
        <img src={props.imageURL} alt='' />
        <div className='apartmentSub'>{props.title}</div>
      </Link>
    </div>
  )
}

export default Apartment