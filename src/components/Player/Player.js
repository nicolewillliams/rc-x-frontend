import React, {useState, useRef, useEffect } from "react";
import PlayerDetails from "./PlayerDetails";
import PlayerControls from"./PlayerControls";

function Player(props) {
  const audioEL = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isPlaying) {
      audioEL.current.currentTime = 62;
      audioEL.current.play();
    } else {
      audioEL.current.pause();
    }
  });

  return(
    <div className="c-player">
      <div className="details-img">
        <img src={props.songs[props.currentSongIndex].img_src} />
        <audio src={props.songs[props.currentSongIndex].src} ref={audioEL}></audio>
        <PlayerControls isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
        <PlayerDetails song={props.songs[props.currentSongIndex]} />
      </div>
    </div>
  );
};

export default Player;