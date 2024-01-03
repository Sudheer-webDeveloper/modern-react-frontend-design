import React from "react";
import { SecondResusable } from "../Hero/ReusableHero";
import images from "../../constants/images";

const About = () => {
  return (
    <main className="about-main" id="about">

    <section className="about">
      <div className="first-about-section">
        <SecondResusable
          heading="About Us"
          info="Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Quis Pharetra Adipiscing Ultrices Vulputate Posuere Tristique. In Sed Odio Nec Aliquet Eu Proin Mauris Etc"
          buttonFor="Know More"
          spoon={images.spoon}
        />
      </div>

      <div className="about-image">
        <img src={images.knife} alt="" />
      </div>

      <div className="second-about-section">
        <SecondResusable
          heading="Our History"
          info="Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Quis Pharetra Adipiscing Ultrices Vulputate Posuere Tristique. In Sed Odio Nec Aliquet Eu Proin Mauris Etc"
          buttonFor="Know More"
          spoon={images.spoon}
        />
      </div>
    </section>

    <div className="about-g">
        <img src={images.G} alt="G" />
    </div>
    </main>

  );
};

export default About;
