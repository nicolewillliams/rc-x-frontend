import React from "react";

function PlayerDetails(props) {
  return(
    <div className="c-player--details">
        <h3 className="details-title">Title: {props.song.title}</h3>
        <h4 className="details-artist">Artist: {props.song.artist}</h4>
    </div>
  );
};

export default PlayerDetails;