import React from "react";
import { ReusableImage, SecondResusable } from "../Hero/ReusableHero";

const ReusableChef = ({
  img1,
  heading,
  spoonImg,
  info,
  quoteImg,
  info1,
  sign,
  contact,
  awards,
  buttonFor,
}) => {
  return (
    <>
      <section className="chef">
        <div className="chef-image">
          {img1 && <ReusableImage image={img1} />}
        </div>
        <div className="chef-content">
          <div className="special-section">
            <SecondResusable heading={heading} spoon={spoonImg} info={info} />
          </div>
          <div className="chef-contents">
            {quoteImg && (
              <div className="quote">
                <img src={quoteImg} alt="" />
                <p>
                  Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit Auctor
                  Sit .
                </p>
              </div>
            )}
            {info1 && <p>{info1}</p>}

            {buttonFor && (
              <div className="content">
                <button>{buttonFor}</button>
              </div>
            )}

            {contact && (
              <div className="contact-info">
                <h5>Opening Hours</h5>
                <div className="timings">
                  <p> Mon - Fri: 10:00 Am - 02:00 Am</p>
                  <p>Sat - Sun: 10:00 Am - 03:00 Am</p>
                </div>
                <button>Visit Us</button>
              </div>
            )}

            {awards && (
              <div className="all-awards">
                {awards?.map((item, index) => {
                  return (
                    <div className="award-image" key={index}>
                      <img src={item.imgUrl} alt="" />
                      <div className="award-info">
                        <h3>{item.title}</h3>
                        <h5>{item.subtitle}</h5>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {sign && (
              <>
                <h6>Kevin Luo</h6>
                <img src={sign} alt="sign" />
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default ReusableChef;
