import React from "react";
import { ReusableImage, SecondResusable } from "../Hero/ReusableHero";
import images from "../../constants/images";
import ReusableChef from "./ReusableChef";

const Chef = () => {
  return (
    <>
      

        <ReusableChef img1={images.chef} heading="What We Believe In" spoon={images.spoon} info="Chef's Word"  quoteImg={images.quote} info1="Auctor Sit Iaculis In Arcu. Vulputate Nulla Lobortis Mauris Eget Sit. Nulla Scelerisque Scelerisque Congue Ac Consequat, Aliquam Molestie Lectus Eu. Congue Iaculis Integer Curabitur Semper Sit Nunc." sign={images.sign} />
    </>
  );
};

export default Chef;
