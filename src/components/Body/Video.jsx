import { useState, useRef, useEffect } from "react";
import "./Body.css";
import Video_1 from "../../assets/video.mp4";

const Video = () => {
  const playPauseBtn = useRef(null);
  const videoContainer = useRef(null);
  const video = useRef(null);
  const volumeBtn = useRef(null);
  const fullScreenBtn = useRef(null);
  const [isPaused, setIsPaused] = useState(true);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    if (playPauseBtn.current) {
      playPauseBtn.current.addEventListener("click", togglePlay);
    }

    if (fullScreenBtn.current) {
      fullScreenBtn.current.addEventListener("click", toggleFullScreen);
    }

    if (volumeBtn.current) {
      volumeBtn.current.addEventListener("click", toggleMute);
    }

    return () => {
      if (playPauseBtn.current) {
        playPauseBtn.current.removeEventListener("click", togglePlay);
      }

      if (fullScreenBtn.current) {
        fullScreenBtn.current.removeEventListener("click", toggleFullScreen);
      }

      if (volumeBtn.current) {
        volumeBtn.current.removeEventListener("click", toggleMute);
      }
    };
  }, []);

  useEffect(() => {
    if (video.current) {
      video.current.addEventListener("play", () => {
        if (videoContainer.current) {
          videoContainer.current.classList.remove("paused");
        }
        setIsPaused(false);
      });

      video.current.addEventListener("pause", () => {
        if (videoContainer.current) {
          videoContainer.current.classList.add("paused");
        }
        setIsPaused(true);
      });
    }

    return () => {
      if (video.current) {
        video.current.removeEventListener("play", () => {
          if (videoContainer.current) {
            videoContainer.current.classList.remove("paused");
          }
        });

        video.current.removeEventListener("pause", () => {
          if (videoContainer.current) {
            videoContainer.current.classList.add("paused");
          }
        });
      }
    };
  }, []);

  const togglePlay = () => {
    if (video.current) {
      if (video.current.paused) {
        video.current.play();
      } else {
        video.current.pause();
      }
    }
  };

  const toggleFullScreen = () => {
    if (video.current) {
      if (video.current.requestFullscreen) {
        video.current.requestFullscreen();
      } else if (video.current.mozRequestFullScreen) {
        video.current.mozRequestFullScreen();
      } else if (video.current.webkitRequestFullscreen) {
        video.current.webkitRequestFullscreen();
      }
    }
  };

  const toggleMute = () => {
    if (video.current) {
      video.current.muted = !video.current.muted;
      setIsMuted(video.current.muted);
    }
  };

  return (
    <>
      <div className="videoSection">
        <div className="videoContainer" ref={videoContainer}>
          <div className="videoControlContainer">
            <div className="timelineContainer">
              <div className="controls">
                <button className="playPauseBtn" ref={playPauseBtn}>
                  {isPaused ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      height="20"
                      width="20"
                    >
                      <path fill="#FCAF36" d="M8 5v14l11-7z" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      height="20"
                      width="20"
                    >
                      <path
                        fill="#FCAF36"
                        d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"
                      />
                    </svg>
                  )}
                </button>
                <button className="volumeBtn" ref={volumeBtn}>
                  {isMuted ? (
                    <svg
                      width="25"
                      height="25"
                      viewBox="0 -3 30 30"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g >
                        <g
                          transform="translate(-311.000000, -573.000000)"
                          fill="#FCAF36"
                        >
                          <path
                            d="M336.444,585 L340.617,580.827 C341.067,580.377 341.109,579.688 340.711,579.289 C340.312,578.891 339.623,578.933 339.173,579.383 L335,583.556 L330.827,579.383 C330.377,578.933 329.688,578.891 329.289,579.289 C328.891,579.688 328.933,580.377 329.383,580.827 L333.556,585 L329.383,589.173 C328.933,589.623 328.891,590.312 329.289,590.711 C329.688,591.109 330.377,591.067 330.827,590.617 L335,586.444 L339.173,590.617 C339.623,591.067 340.312,591.109 340.711,590.711 C341.109,590.312 341.067,589.623 340.617,589.173 L336.444,585 L336.444,585 Z M325,573 L318,577.667 L318,592.333 L325,597 C326.104,597 327,596.104 327,595 L327,575 C327,573.896 326.104,573 325,573 L325,573 Z M311,581 L311,589 C311,590.104 311.896,591 313,591 L316,591 L316,579 L313,579 C311.896,579 311,579.896 311,581 L311,581 Z"
                          ></path>
                        </g>
                      </g>
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      viewBox="0 0 518.518 518.518"
                    >
                      <g>
                        <g>
                          <path
                            fill="#FCAF36"
                            d="M253.674,80.899L90.27,197.638H26.392C11.857,197.638,0,209.495,0,224.03v70.457c0,14.534,11.857,26.392,26.392,26.392
                       H90.27l163.557,116.739c11.857,8.491,21.419,3.52,21.419-11.016V91.915C275.246,77.38,265.607,72.407,253.674,80.899z"
                          />
                          <path
                            fill="white"
                            d="M342.338,81.97c-12.164,0-22.033,9.869-22.033,22.032s9.869,22.032,22.033,22.032c72.98,0,132.115,59.135,132.115,132.116
                       c0,72.981-59.135,132.115-132.115,132.115c-12.164,0-22.033,9.869-22.033,22.032s9.869,22.032,22.033,22.032
                       c97.307,0,176.18-78.872,176.18-176.18C518.518,160.918,439.723,81.97,342.338,81.97z"
                          />
                          <path
                            fill="white"
                            d="M342.338,313.153c-12.164,0-22.033,9.868-22.033,22.031c0,12.164,9.869,22.032,22.033,22.032
                       c54.773,0,99.066-44.37,99.066-99.067c0-54.698-44.369-99.067-99.066-99.067c-12.164,0-22.033,9.868-22.033,22.032
                       s9.869,22.032,22.033,22.032c30.369,0,55.08,24.633,55.08,55.08C397.418,288.673,372.785,313.153,342.338,313.153z"
                          />
                        </g>
                      </g>
                    </svg>
                  )}
                </button>
                <button className="fullScreenBtn" ref={fullScreenBtn}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    height="30"
                    width="30"
                  >
                    <path
                      fill="#FCAF36"
                      d="M2,9 L0,9 L0,14 L5,14 L5,12 L2,12 L2,9 L2,9 Z M0,5 L2,5 L2,2 L5,2 L5,0 L0,0 L0,5 L0,5 Z M12,12 L9,12 L9,14 L14,14 L14,9 L12,9 L12,12 L12,12 Z M9,0 L9,2 L12,2 L12,5 L14,5 L14,0 L9,0 L9,0 Z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <video ref={video}>
            <source src={Video_1} type="video/mp4" />
          </video>
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
