import React from 'react'
import Banner from '../../layout/Banner/Banner'
import ApartmentDescription from '../../components/ApartmentDescription/ApartmentDescription'
import "../../styles/AboutDescription.scss"
import "../../styles/About.scss"

function About() {
  return (
    <div>
      <Banner />
      <div className="aboutContainer">
        <ApartmentDescription />
        <ApartmentDescription />
        <ApartmentDescription />
        <ApartmentDescription />
      </div>
    </div>
  )
}

export default About