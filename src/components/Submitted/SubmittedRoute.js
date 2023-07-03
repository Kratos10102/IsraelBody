import React from "react";
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";



export default function SubmittedRoute() {
  return (
    <>
      <div className="submittedFormContainer">
        <div style={{ whiteSpace: "nowrap" }}>
          <Typography variant="h2">קיבלנו את הבקשה</Typography>
        </div>
        <div>
          <Typography variant="h5">
            נציג מטעמנו יחזור אליך עד יומיים משליחת הבקשה, שעות הפעילות שלנו
            בנושא פגישות ייעוץ הן משעה 9:00-18:00
          </Typography>
        </div>
        <Link to="/">
        <Button  variant="contained" size="large" style={{ margin: "2rem" }}>חזרה לדף הראשי</Button>
        </Link>
      </div>
    </>
  );
}
