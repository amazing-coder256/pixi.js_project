import { useState } from "react";

import spinButton from "../../assets/images/wheel/btn-spin.png";
import marker from "../../assets/images/wheel/marker.png";
import wheel from "../../assets/images/wheel/wheel.png";

import data from "../../api";

import "./styles.css";

const Wheel = () => {
  const [position, setPosition] = useState(0);
  const [isRotating, setIsRotating] = useState(false);

  const handleRotate = () => {
    const newPosition = data().position;
    setPosition(newPosition);
    setIsRotating(true);
    setTimeout(() => {
      alert("The number of selected piece is " + newPosition);
      setPosition(0);
      setIsRotating(false);
    }, 3100);
  };

  return (
    <div className="container">
      <img src={marker} alt="marker" className="marker" />
      <div id="wheel" className="wheel">
        <img className={`rotate-${position}`} src={wheel} alt="image" />
      </div>
      <button onClick={handleRotate} disabled={isRotating}>
        <img src={spinButton} alt="button" className="spin-button" />
      </button>
    </div>
  );
};

export default Wheel;
