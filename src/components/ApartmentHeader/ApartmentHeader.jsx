import React from 'react'
import "../../styles/ApartmentPage.scss"

function ApartmentHeader() {
    return (
        <div className='appartmentTitle'>
            <h1 className="apartmentPageTitle">Cozy loft on the Canal Saint-Martin</h1>
            <h2 className="apartmentPageSubtitle">Paris, Île-de-France</h2>
            <div className="apartmentTags">
                <span>Cozy</span>
                <span>Canal</span>
                <span>Paris 10</span>
            </div>
        </div>
    )
}

export default ApartmentHeader