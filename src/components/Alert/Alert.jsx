import React from "react";
import "./Alert.css";
export const Alert = ({variant= "info"}) => {
  return (
    <div className={`alert-container alert-${variant}`}>
        <p className="alert-title">{variant}</p>
      <p className="text">Lorem ipsum dolor sit amet consectetur.</p>
    </div>
  );
};
