import React from "react";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import NewFeatureMotion from "../components/NewFeatureMotion.js"

// Typography
let theme = createTheme();
theme = responsiveFontSizes(theme);

function AboutUs() {
  const [ref, inView] = useInView();

  return (
    <div className="aboutUs">
    <a href="https://wa.me/972586929029/">
        <img
          src="/img/icons/whatsapp.avif"
          alt="whats'up icon"
          id="whatsupIconFixed"
        />
      </a>
      <img
        src={process.env.PUBLIC_URL + "/img/gil-granot.avif"}
        className="gil-granot-img"
        alt="gil granot"
        style={{ flex: "0 0 auto", marginRight: "1rem" }}
      />
      <div style={{ flex: "1", maxWidth: "100%" }}>
        <ThemeProvider theme={theme}>
          <motion.div
            ref={ref}
            initial={{ y: -100, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1 }}
          >
            <Typography variant="h2" style={{ marginBottom: "20px", textAlign: "center" }}>
              <span style={{ color: "#FA6E07" }}>קצת</span> עלינו
            </Typography>
          </motion.div>
        </ThemeProvider>
        <motion.div
          ref={ref}
          initial={{ y: -100, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <Typography variant="body1" className="AboutUsParagraph" id="AboutUsParagraph">
            רשת ישראלבודי קיימת משנת 2001, הרשת עוסקת בייעוץ מקצועי לתזונה
            ואימונים. הייעוץ מותאם למגוון של אנשים, החל מאנשים המתעניינים באורח
            חיים בריא ועד לספורטאים מקצועיים. מטרתנו היא לראות את הלקוחות שלנו
            מצליחים להגיע למטרותיהם וכן, לשמור על התהליך גם לאחר סיום המפגשים.
            פגישות הייעוץ מותאמות לגברים ונשים כאחד
          </Typography>
        </motion.div>
        <div style={{ whiteSpace: "nowrap" }}>
        <NewFeatureMotion />
        </div>
       </div>
    </div>
  );
}

export default AboutUs;
