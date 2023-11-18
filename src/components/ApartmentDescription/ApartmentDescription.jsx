import React from 'react'
import "../../styles/ApartmentPage.scss"

function ApartmentDescription() {
    return (
        <div className='apartmentDescriptionArea'>
            <div className="apartmentDescription">
                <p className='descriptionHeader'>
                    <span>Description</span>
                    <i className="fa-solid fa-chevron-up"></i>
                </p>
                <p className='descriptionContent'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae facilis laudantium veniam itaque, harum maxime, cumque soluta labore blanditiis maiores cupiditate vero repellat id nisi, consequuntur tempore architecto eos velit deserunt accusantium veritatis. Libero alias harum dignissimos amet magni officia tenetur voluptas provident commodi et obcaecati, ea iste, sunt eveniet.
                </p>

            </div>
        </div>

    )
}

export default ApartmentDescription