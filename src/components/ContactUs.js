import React from "react";
import CustomForm from "../components/CustomForm.js";
import HorizontalLinearGtop from "./HorizontalLinearG-top";

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

function ContactUs() {
  const [ref, inView] = useInView();

  return (
    <>
      <HorizontalLinearGtop />

      <section className="israelbodyForm">
        <ThemeProvider theme={theme}>
          <motion.div
            ref={ref}
            initial={{ y: -100, opacity: 0 }} // Set the initial position and opacity
            animate={inView ? { y: 0, opacity: 1 } : {}} // Animate to the desired position and opacity when in view
            transition={{ duration: 1 }} // Set the animation duration
          >
            <Typography
              variant="h1"
              id="leaveDetailsHeadline"
            >
              השאירו פרטים
            </Typography>
          </motion.div>
          <div className="CustomFormWidthOnDesktop">
          <CustomForm />
          </div>
        </ThemeProvider>
      </section>
    </>
  );
}

export default ContactUs;
