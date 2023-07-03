import React from "react";
import videoBg from "../videoBg/women1.mp4";
import Typography from "@mui/material/Typography";

function VideoBackground() {
  const isMobile = window.innerWidth <= 767;

  if (isMobile) {
    return null; // Render nothing if on mobile screens
  }

  return (
    <div className="videoBg">
      <div className="videoBgOverlay">
        <video src={videoBg} autoPlay loop muted className="darkenVideo" />

        <div className="videoText">
          <Typography variant="h1" style={{ fontFamily: "Rubik Dirt, cursive", color:"white"}}>
            השינוי שלך
          </Typography>
          <Typography variant="h3" style={{ fontFamily: "Rubik Dirt, cursive", color:"white" }}>
            מתחיל כאן
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default VideoBackground;
