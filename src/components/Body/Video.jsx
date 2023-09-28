// import React from 'react'
import "./Body.css";
import Video_1 from "../../assets/video.mp4";

const Video = () => {
  return (
    <>
      <div className="videoSection">
        <div className="videoContainer">
          <video muted>
            <source src={Video_1} type="video/mp4" />
          </video>
          <div className="videoControlContainer">
            <div className="timelineContainer">
              <div className="controls">
                <button className="playPauseBtn">Play</button>
                <button className="playPauseBtn">Play</button>
              </div>
            </div>
          </div>
        </div>
        <div className="videoContentContainer">
          <h2>Video Heading</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates
            fuga, cumque aliquid iure hic suscipit unde reprehenderit facere
            quibusdam consectetur voluptatem laborum. Accusamus, nemo.
          </p>
        </div>
      </div>
    </>
  );
};

export default Video;
