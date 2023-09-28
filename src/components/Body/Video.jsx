import React, { useState, useRef, useEffect } from 'react';
import './Body.css';
import Video_1 from '../../assets/video.mp4';

const Video = () => {
  const playPauseBtn = useRef(null);
  const videoContainer = useRef(null);
  const video = useRef(null);
  const [isPaused, setIsPaused] = useState(true);

  useEffect(() => {
    if (playPauseBtn.current) {
      playPauseBtn.current.addEventListener('click', togglePlay);
    }

    return () => {
      if (playPauseBtn.current) {
        playPauseBtn.current.removeEventListener('click', togglePlay);
      }
    };
  }, []);

  useEffect(() => {
    if (video.current) {
      video.current.addEventListener('play', () => {
        if (videoContainer.current) {
          videoContainer.current.classList.remove('paused');
        }
        setIsPaused(false); 
      });

      video.current.addEventListener('pause', () => {
        if (videoContainer.current) {
          videoContainer.current.classList.add('paused');
        }
        setIsPaused(true); 
      });
    }

    return () => {
      if (video.current) {
        video.current.removeEventListener('play', () => {
          if (videoContainer.current) {
            videoContainer.current.classList.remove('paused');
          }
        });

        video.current.removeEventListener('pause', () => {
          if (videoContainer.current) {
            videoContainer.current.classList.add('paused');
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

  return (
    <>
      <div className="videoSection">
        <div className="videoContainer">
          <div className="videoControlContainer">
            <div className="timelineContainer">
              <div className="controls">
                <button className="playPauseBtn" ref={playPauseBtn}>
                  {isPaused ? (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="20" width="20">
                      <path fill="#FCAF36" d="M8 5v14l11-7z" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="20" width="20">
                      <path fill="#FCAF36" d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                    </svg>
                  )}
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
