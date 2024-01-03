import ReusableChef from "../Chef/ReusableChef";
import React, { useRef, useState } from "react";
import { images } from "../../constants";

import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";

const galleryImages = [
  images.gallery01,
  images.gallery02,
  images.gallery03,
  images.gallery04,
];

const Gallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };


  return (
    <section className="gallery">
      <div className="gallery-content">
        <ReusableChef
          heading="Photo Gallery
        "
          spoonImg={images.spoon}
          info="Instagram"
          info1="Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Volutpat Mattis Ipsum Turpis Elit Elit Scelerisque Egestas Mu."
          buttonFor="view More"
        />
      </div>

      <div className="image-gallery">
        <div className="map-image" ref={scrollRef}>
          {galleryImages.map((img, index) => {
            return (
              <div
                key={index}
                 className="random"
              >
                <img src={img} alt="img" />

                <div className="setting">
                    <h6><BsInstagram /></h6>
                </div>
              </div>
            );
          })}
        </div>

        <div className="button">
          <button onClick={() => scroll('left')}>
            <BsArrowLeftShort />
          </button>
          <button onClick={() => scroll('right')}>
            <BsArrowRightShort />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
