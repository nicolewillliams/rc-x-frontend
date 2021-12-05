import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause} from '@fortawesome/free-solid-svg-icons';

function PlayerControls(props) {
  return(
    <div className="c-player--controls">
        <button className="play-btn" onClick={() => props.setIsPlaying(!props.isPlaying)}>
          <FontAwesomeIcon icon={props.isPlaying ? faPause : faPlay} />
        </button>
        <button >Buy</button>
    </div>
  );
};

export default PlayerControls;