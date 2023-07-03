import React from "react";
import FamousClientsList from "../NutritionConsultantDetails.js/FamousClientsList";
import Slider from "react-slick";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Typography
let theme = createTheme();
theme = responsiveFontSizes(theme);
// Setting motion & detect
const AnimatedTypography = motion(Typography);
AnimatedTypography.defaultProps = {
  animate: {
    y: 0,
    opacity: 1,
    transition: { delay: 10 },
  },
  initial: { y: -20, opacity: 0 },
};

function FamousClients() {
  const [ref, inView] = useInView();

  // Carousel Settings
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 4500,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          autoplay: true,
          autoplaySpeed: 2000,
          pauseOnHover: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          autoplay: true,
          autoplaySpeed: 2000,
          pauseOnHover: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          pauseOnHover: true,
        },
      },
    ],
  };

  return (
    <div className="FamousClientApp" style={{ color: "white" }}>
      <ThemeProvider theme={theme}>
        <motion.div
          ref={ref}
          initial={{ y: -100, opacity: 0 }} // Set the initial position and opacity
          animate={inView ? { y: 0, opacity: 1 } : {}} // Animate to the desired position and opacity when in view
          transition={{ duration: 1 }} // Set the animation duration
        >
          <Typography
            variant="h2"
            style={{ textAlign: "center", marginBottom: "20px" }}
          >
            בין <span style={{ color: "#FA6E07" }}>לקוחותינו</span>
          </Typography>
        </motion.div>
      </ThemeProvider>

      <Slider {...settings}>
        {FamousClientsList.map((item) => (
          <div className="cardFamousClient" key={item.id}>
            <div className="cardFamousClient-top">
              <img src={item.profileImg} alt="Profile" />
            </div>
            <div
              className="cardFamousClient-middle"
              style={{
                fontSize: "2rem",
                fontFamily: "tinos",
                color: "#F97B22",
              }}
            >
              {item.nameHebrew}
            </div>
            <div
              className="cardFamousClient-bottom"
              style={{ fontWeight: "bold", color: "#E67925" }}
            >
              {item.nameEnglish}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default FamousClients;
