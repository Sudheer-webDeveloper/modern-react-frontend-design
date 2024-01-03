import React from "react";
import ReusableChef from "../Chef/ReusableChef";
import images from "../../constants/images";
import { awards } from "../../constants/data";

const Awards = () => {
  return (
    <section className="awards" id="awards">
      <ReusableChef
        img1={images.laurels}
        heading="Our Laurels"
        spoonImg={images.spoon}
        info="Awards & Recognition"
        awards={awards}
      />
    </section>
  );
};

console.log(awards);
export default Awards;
