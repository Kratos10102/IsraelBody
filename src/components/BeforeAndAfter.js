import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import Slider from "react-slick";
import BeforeAndAfterList from "../NutritionConsultantDetails.js/BeforeAndAfter.js";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CustomForm from "../components/CustomForm.js";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

const settings = {
  dots: false,
  arrows: false, // Disable the next arrow
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  speed: 5000,
  autoplaySpeed: 0,
  pauseOnHover: true,
  cssEase: "linear",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        speed: 4000,
      },
    },
  ],
};

export default function ActionAreaCard() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <ThemeProvider theme={theme}>
      <div className="BeforeAndAfterSection">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <Typography variant="body1" id="BeforeAndAfterSectionP">
            השינויים שלנו
          </Typography>
        </motion.div>

        <Slider {...settings}>
          {BeforeAndAfterList.map((item) => (
            <Card sx={{ maxWidth: 600 }} key={item.id}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="350"
                  image={item.img}
                  alt="Before and after change"
                  style={{ objectFit: "contain" }}
                />
                <CardContent style={{ textAlign: "right" }}>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.nameHebrew}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </Slider>

        <Stack spacing={2} direction="column">
          <Button
            href="/beforeandafter"
            variant="text"
            style={{ fontSize: "1.2rem" }}
          >
            עוד תוצאות
          </Button>
          <div style={{ textAlign: "center", display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
            <Button
              variant="contained"
              style={{ fontSize: "2rem", margin: "0 auto" }}
            >
              {" "}
              !אני רוצה לשמוע פרטים
            </Button>
            <div className="CustomFormWidthOnDesktop">
              <CustomForm />
              </div>
          </div>
        </Stack>
      </div>
    </ThemeProvider>
  );
}
