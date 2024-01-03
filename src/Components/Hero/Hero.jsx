import React from "react";
import ReusableHero, { ReusableImage, SecondResusable } from "./ReusableHero";
import images from "../../constants/images";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <ReusableHero title="Chase The New Flavour" />

        <SecondResusable
          heading="THE KEY TO FINE DINING"
          info="Sit Tellus Lobortis Sed Senectus Vivamus Molestie. Condimentum Volutpat Morbi Facilisis Quam Scelerisque Sapien. Et, Penatibus Aliquam Amet Tellus"
          buttonFor="Explore Menu"
        />
      </div>

        <ReusableImage image={images.welcome} />

    </section>
  );
};

export default Hero;
