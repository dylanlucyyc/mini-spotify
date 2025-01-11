import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import PauseIcon from "@mui/icons-material/Pause";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import useMusicPlayer from "../hooks/useMusicPlayer";

function Controller() {
  const { playNextTrack, playPreviousTrack, isPlaying, togglePlay } =
    useMusicPlayer();

  return (
    <div>
      <SkipPreviousIcon onClick={playPreviousTrack} />
      {isPlaying ? (
        <PauseIcon onClick={togglePlay} />
      ) : (
        <PlayCircleIcon onClick={togglePlay} />
      )}
      <SkipNextIcon onClick={playNextTrack} />
    </div>
  );
}

export default Controller;
