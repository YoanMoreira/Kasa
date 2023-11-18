import React, { useEffect, useState } from 'react';
import "../../styles/ApartmentPage.scss"
import "../../styles/variable/variable.scss"
import ApartementBanner from '../../components/ApartmentBanner/ApartementBanner';
import ApartmentDescription from '../../components/ApartmentDescription/ApartmentDescription';
import ApartmentHeader from '../../components/ApartmentHeader/ApartmentHeader';
import ApartmentOwner from '../../components/ApartmentOwner/ApartmentOwner';
import { useLocation, useParams } from 'react-router-dom';

function Lodgment() {
  const location = useLocation();
  const { apartmentId } = useParams();
  console.log("location", location);

  const [selectedFlat, setSelectedFlat] = useState(null);

  useEffect(() => {
    fetchApartmentData();
  }, []);

  function fetchApartmentData() {
    fetch("lodgmentList.json")
      .then((res) => res.json())
      .then((flats) => {
        console.log("flats", flats);
        const flat = flats.find((flat) => flat.id.toString() === apartmentId);
        console.log("flat", flat);
        setSelectedFlat(flat);
      })
      .catch(console.error);
  }


  return (
    <div className='apartmentPage'>
      {selectedFlat && (
        <div>
          selectedFlat: {JSON.stringify(selectedFlat)}
        </div>
      )}
      <ApartementBanner />
      <div className="apartmentHeader">
        <ApartmentHeader />
        <ApartmentOwner />
      </div>
      <div className='apartmentDescriptionArea'>
        <ApartmentDescription />
        <ApartmentDescription />
      </div>
    </div>
  );
}

export default Lodgment;
