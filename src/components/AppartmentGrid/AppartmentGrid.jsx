import React, { useEffect, useState } from 'react';
import '../../styles/AppartmentGrid.scss';
import Apartment from './Apartment';

function AppartmentGrid() {
  const [apartments, setApartments] = useState([]);

  useEffect(() => {
    fetchApartments();
  }, []);

  function fetchApartments() {
    fetch("lodgmentList.json")
      .then((res) => res.json())
      .then((data) => setApartments(data))
      .catch(console.error);
  }

  return (
    <div className='grid'>
      {apartments.map((apartment) => (
        <Apartment key={apartment.id} title={apartment.title} imageURL={apartment.cover} id={apartment.id}/>
      ))}
    </div>
  );
}

export default AppartmentGrid;