import React, { useState } from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Avatar,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import trainersData from "../../NutritionConsultantDetails.js/NutritionConsultantDetails";
import NavigationBar from "../Navbar";
import NotAFooter from "../NotAFooter";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import CustomForm from "../CustomForm.js";
import Button from "@mui/material/Button";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const TrainersRoute = () => {
  const [selectedTrainer, setSelectedTrainer] = useState(trainersData[0]);

  const handleTrainerClick = (trainer) => {
    setSelectedTrainer(trainer);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <NavigationBar />
      {/* Avatars */}
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={12} sx={{ margin: "2rem" }}>
          <div style={{ position: "relative" }}>
            <Grid
              container
              direction="row"
              style={{
                overflowX: "auto",
                flexWrap: "nowrap",
                padding: "1rem",
                gap: "2rem",
              }}
              id="trainersRouteAvatars"
            >
              <Grid item>
                <KeyboardArrowLeftIcon
                  style={{
                    position: "absolute",
                    left: 0,
                    bottom: "70px",
                    color: "white",
                  }}
                  id="noneMobileDevice"
                />
              </Grid>
              {trainersData.map((trainer) => (
                <Grid
                  item
                  key={trainer.id}
                  sx={{ alignItems: "center" }}
                  className="avatar"
                >
                  <Avatar
                    alt={trainer.name}
                    src={trainer.profileImg}
                    onClick={() => handleTrainerClick(trainer)}
                    sx={{ width: 90, height: 90, border: "2px solid #0d6efd" }}
                  />
                  <Typography
                    variant="body1"
                    style={{ whiteSpace: "nowrap" }}
                    className="trainersRouteAvatarName"
                  >
                    {trainer.name}
                  </Typography>
                </Grid>
              ))}
              <Grid item>
                <KeyboardArrowRightIcon
                  style={{
                    position: "absolute",
                    right: 0,
                    bottom: "70px",
                    color: "white",
                  }}
                  id="noneMobileDevice"
                />
              </Grid>
            </Grid>
          </div>
        </Grid>

        {/* Cards */}
        <Grid item xs={12} md={9}>
          <Card>
            <Typography
              variant="h2"
              component="div"
              style={{ color: "white", textAlign: "center", margin: "2%" }}
            >
              {selectedTrainer.name}
            </Typography>
            <img
              src={selectedTrainer.pageImg}
              alt={selectedTrainer.name}
              height="400px"
              className="aboutTrainerPageImg"
            />
            <CardContent
              style={{
                justifyContent: "center",
                backgroundColor: "gray",
                border: "2px solid",
                borderRadius: "10px",
                margin: "2% auto",
              }}
              id="trainersRouteParagraph"
            >
              <Typography
                variant="body2"
                color="white"
                style={{ textAlign: "right" }}
              >
                {selectedTrainer.description}
              </Typography>
            </CardContent>

            <CardContent
              style={{
                justifyContent: "center",
                backgroundColor: "gray",
                border: "2px solid",
                borderRadius: "10px",
                margin: "2% auto",
              }}
              id="trainersRouteParagraph"
            >
              <Typography
                variant="body2"
                color="white"
                style={{ textAlign: "right", fontWeight: "bold" }}
              >
                <ul>
                  <Typography id="trainersRouteHeadline">הסמכות</Typography>
                  <li>{selectedTrainer.course1}</li>
                  <li>{selectedTrainer.course2}</li>
                  <li>{selectedTrainer.course3}</li>
                  <li>{selectedTrainer.course4}</li>
                  <li>{selectedTrainer.course5}</li>

                  {selectedTrainer.story1 ||
                  selectedTrainer.story2 ||
                  selectedTrainer.story3 ? (
                    <>
                      <Typography id="trainersRouteHeadline">
                        כתבות שלי
                      </Typography>
                      {selectedTrainer.story1 && (
                        <li>
                          <a
                            href={selectedTrainer.hrefStory1}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              textDecoration: "none",
                              color: "#333333",
                              fontSize: "1.1rem",
                            }}
                          >
                            {selectedTrainer.story1}
                          </a>
                        </li>
                      )}
                      {selectedTrainer.story2 && (
                        <li>
                          <a
                            href="https://www.israelbody.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              textDecoration: "none",
                              color: "#333333",
                              fontSize: "1.1rem",
                            }}
                          >
                            {selectedTrainer.story2}
                          </a>
                        </li>
                      )}
                      {selectedTrainer.story3 && (
                        <li>
                          <a
                            href="https://www.israelbody.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              textDecoration: "none",
                              color: "#333333",
                              fontSize: "1.1rem",
                            }}
                          >
                            {selectedTrainer.story3}
                          </a>
                        </li>
                      )}
                    </>
                  ) : null}
                </ul>
              </Typography>
              <hr />
              <div style={{ textAlign: "center" }}>
                <a href={selectedTrainer.facebookPage}>
                  <img
                    src="/img/icons/facebookIcon.png"
                    width="70px"
                    height="67px"
                    alt="facebook icon"
                    style={{ margin: "0 10px" }}
                  />
                </a>
                <a href={selectedTrainer.instagramPage}>
                  <img
                    src="/img/icons/instagramIcon.png.webp"
                    width="60px"
                    height="60px"
                    alt="instagram icon"
                    style={{ margin: "0 10px" }}
                  />
                </a>
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <div style={{ textAlign: "center" }} id="trainerRouteForm">
        <Button
          variant="contained"
          style={{
            fontSize: "2.5rem",
            margin: "1rem auto",
            whiteSpace: "nowrap",
          }}
        >
          ?רוצים לשמוע עוד
        </Button>
        <CustomForm />
      </div>{" "}
      <NotAFooter />
    </ThemeProvider>
  );
};

export default TrainersRoute;
