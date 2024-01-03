import React, { useRef, useState } from "react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import { meal } from "../../constants";

const Video = () => {
  const [playVideo, setPlayVideo] = useState(false);

  const videoRef = useRef();

  const handingVideo = () => {
    setPlayVideo((prevVideo) => !prevVideo);

    if (playVideo) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
  };

  return (
    <section className="video-section">
      <div className="video">
        <video
          src={meal}
          ref={videoRef}
          type="video/mp4"
          loop
          controls={false}
          muted
        />

        <div className="video-overlay">
          <div className="vidoe-black-backgroud">
            {playVideo ? (
              <h3 onClick={handingVideo}>
                <BsPauseFill />
              </h3>
            ) : (
              <h3 onClick={handingVideo}>
                <BsFillPlayFill />{" "}
              </h3>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Video;
