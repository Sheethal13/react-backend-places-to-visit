import { useEffect, useState } from 'react';
import Places from './Places.jsx';




export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlaces,setAvailablePlaces]=useState([]);
  useEffect(() => {
    fetch(('http://localhost:3001/places')).then((response) => {
      return response.json();
    }).then((resData) => {
      setAvailablePlaces(resData);
    })
  },[])
  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
