import React from "react";
import images from "../../constants/images";

const ReusableHero = ({ title }) => {
  return (
    <div className="spoon">
      <h4>{title}</h4>
      <img src={images.spoon} alt="spoon" />
    </div>
  );
};

export default ReusableHero;

export const SecondResusable = ({heading,info, buttonFor,spoon}) => {
  return (
    <div className="content">
        <div className="spoon">
      {heading && <h1>{heading}</h1>}
      {spoon && <img src={spoon} alt="" /> }
        </div>
      
      <p>
        {info}
      </p>
     {buttonFor && <button>{buttonFor}</button>}
    </div>
  );
};


export const ReusableImage = ({image})=>{
    return (

    <div className="hero-image">
        <img src={image} alt="" />
    </div>
    )
}