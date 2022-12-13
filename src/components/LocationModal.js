import React from "react";

export default function LocationModal({
  locationDetails,
  handleClose,
  showModal,
}) {
  if (!showModal) return null;
  return (
    <div>
      <div>
        <span>{locationDetails.street}</span>
      </div>
      <div>
        <span>{locationDetails.postal_code}</span>
        <span>{locationDetails.city}</span>
      </div>
      <div>
        <span>{locationDetails.state}</span>
        <span>{locationDetails.country} </span>
      </div>
      <button onClick={handleClose}>CLOSE</button>
    </div>
  );
}
