import React from 'react'
import '../../styles/AppartmentGrid.scss'
import Apartment from './Apartment'

function AppartmentGrid() {
  return (
    <div className='grid'>
        <Apartment/>
        <Apartment/>
        <Apartment/>
        <Apartment/>
    
    </div>
  )
}

export default AppartmentGrid