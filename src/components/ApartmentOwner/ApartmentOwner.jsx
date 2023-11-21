import React from 'react'
import "../../styles/ApartmentPage.scss"

function ApartmentOwner() {
  return (
    <div className="apartmentOwner">
          <div className="apartmentOwnerDetails">
            <h3>
              <span>Alexandre</span>
              <span>Dumas</span>
            </h3>
            <div className="apartmentOwnerBadge"></div>
          </div>
          <div className="apartmentOwnerStars">
            <span className='on'>★</span>
            <span className='on'>★</span>
            <span className='on'>★</span>
            <span className='off'>★</span>
            <span className='off'>★</span>
          </div>
        </div>
  )
}

export default ApartmentOwner