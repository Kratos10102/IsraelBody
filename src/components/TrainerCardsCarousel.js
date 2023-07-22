import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import trainersData from "../NutritionConsultantDetails.js/NutritionConsultantDetails";
import InfoIcon from "@mui/icons-material/Info";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Link } from "react-router-dom";
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

function TrainerCardsCarousel() {
  const [ref, inView] = useInView();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 5000,
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
    <>
      <div className="TrainersApp" style={{ color: "white" }}>
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
              מי יביא אותך <span style={{ color: "#FA6E07" }}>לתוצאות</span>
            </Typography>
          </motion.div>
        </ThemeProvider>

        <Slider {...settings}>
          {trainersData.map((item) => (
            <div key={item.id} className="card">
              <div className="cardTop">
                <img
                  id="trainerImg"
                  src={item.profileImg}
                  alt={item.title}
                ></img>
              </div>
              <h2 className="cardBottomH2">{item.name}</h2>
              <div className="cardBottom">
                <Link to={item.aboutPage} onClick={scrollToTop}>
                  <InfoIcon id="aboutIcon" style={{ color: "#C0C0C0" }} />
                </Link>
                <Link to={item.instagramPage}>
                  <InstagramIcon id="instagram" style={{ color: "#C0C0C0" }} />
                </Link>
                <Link item={item.facebookPage}>
                  <FacebookIcon id="facebook" style={{ color: "#C0C0C0" }} />
                </Link>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}

export default TrainerCardsCarousel;
