import React from "react";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
  Typography,
  Grid,
} from "@mui/material";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomForm from "./CustomForm.js";

let theme = createTheme();
theme = responsiveFontSizes(theme);
const AnimatedTypography = motion(Typography);

function Homepage() {
  const isMobile = window.innerWidth <= 767;

  if (!isMobile) {
    return null;
  }

  return (
    <div className="HomepageDiv">
      <ThemeProvider theme={theme}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <div
              style={{ textAlign: "right", marginTop: "10%", color: "white" }}
            >
              <AnimatedTypography
                animate={{
                  y: 0,
                  opacity: 1,
                  transition: { delay: 0.5, duration: 2 },
                }}
                initial={{ y: -100, opacity: 0 }}
              >
                <Typography variant="h1" class="h1Homepage">
                  השינוי שלך
                </Typography>
              </AnimatedTypography>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 1, duration: 1 } }}
              >
                <Typography
                  class="h3Homepage"
                  variant="h3"
                  style={{ color: "#fa6e07" }}
                >
                  מתחיל כאן
                </Typography>
              </motion.div>
            </div>
          </Grid>
        </Grid>

        <CustomForm />

        <div id="homepageDownArrow">
          <span />
          <span />
          <span />
        </div>
      </ThemeProvider>
    </div>
  );
}

export default Homepage;
