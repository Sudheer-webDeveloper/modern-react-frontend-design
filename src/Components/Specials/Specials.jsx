import React from "react";
import { SecondResusable } from "../Hero/ReusableHero";
import images from "../../constants/images";
import { wines } from "../../constants/data";
import {cocktails} from "../../constants/data";

const Specials = () => {
  return (
    <main>
      <section className="specials" id="menu">
        <div className="special-section">
          <SecondResusable
            heading="Today's Special"
            info="Menu That Fits You Palatte spoon"
            spoon={images.spoon}
          />
        </div>

        <div className="special-second-coloum">
          <div className="special-wine">
            <h2>Wine $ Beer</h2>
            {wines.map((item) => {
              return (
                <div className="wine" key={item.title}>
                  <div className="contents">
                    <h4>{item.title}</h4>
                    <div />
                    <h3>{item.price}</h3>
                  </div>
                  <h5>{item.tags}</h5>
                </div>
              );
            })}
          </div>
          {/* // */}
          <div className="special-image">
            <img src={images.menu} alt="" />
          </div>
          {/* // */}
          <div className="special-wine">
          <h2>Cocktails</h2>
          {cocktails.map((item) => {
              return (
                <div className="wine" key={item.title}>
                  <div className="contents">
                    <h4>{item.title}</h4>
                    <div />
                    <h3>{item.price}</h3>
                  </div>
                  <h5>{item.tags}</h5>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Specials;
