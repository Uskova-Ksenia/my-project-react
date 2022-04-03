import React from "react";
import "./index.css";



const Button = ({text, onClick}) => {
  return (
    <button className="btn btn_type_primary" onClick={onClick}>
        {text}
    </button>
  );
};

export default Button;
