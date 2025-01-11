import React from "react";

import useMusicPlayer from "../hooks/useMusicPlayer";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import PauseIcon from "@mui/icons-material/Pause";

const TrackList = () => {
  const { trackList, currentTrackName, playTrack, isPlaying } =
    useMusicPlayer();

  return (
    <>
      {trackList.map((track, index) => (
        <div key={index}>
          <div onClick={() => playTrack(index)}>{track.name}</div>
          <button onClick={() => playTrack(index)}>
            {currentTrackName === track.name && isPlaying ? (
              <PauseIcon />
            ) : (
              <PlayCircleIcon />
            )}
          </button>
        </div>
      ))}
    </>
  );
};

export default TrackList;
