import React from "react";

import "./CarDetails.css";

const CarDetails = ({ marca, placa }) => {
  return (
    <div>
      <h3 className="carDetails">
        Marca {marca} - Placa: {placa}
      </h3>
    </div>
  );
};

export default CarDetails;
