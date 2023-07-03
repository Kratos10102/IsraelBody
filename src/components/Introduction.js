import React from "react";
import Typography from "@mui/material/Typography";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import Grid from "@mui/material/Grid";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

function Introduction() {
  const [ref1, inView1] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const [ref2, inView2] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const theme = createTheme({
    palette: {
      mode: "dark",
    },
  });


  return (
    <div className="introductionSection">
        <ThemeProvider theme={theme}>

      <Grid
        container
        spacing={10}
        sx={{ flexDirection: { xs: "column", sm: "row" } }}
      >
        <Grid item xs={12} sm={6} sx={{ order: { xs: 2, sm: 1 }, px: 0 }}>
          <motion.div
            ref={ref1}
            initial={{ opacity: 0 }}
            animate={{ opacity: inView1 ? 1 : 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
          <Card>
          <CardContent>
            <Typography
              variant="body1"
              sx={{ textAlign: "right", color: "white", fontWeight: "bold" }}
              id="introductionSectionP"
            >
              בפגישה הראשונה נלמד להכיר אתכם, נבין מה המטרה שלכם ובתוך כמה זמן
              אפשר להגיע לשם. בכל פגישה המומחים שלנו לתזונה, עיצוב וחיטוב הגוף
              יבצעו איתכם מדידות של ההיקפים, משקל ובדיקה של האחוזי שומן. מפגישה
              לפגישה נבדוק את ההתקדמות, את ההצלחה, את מה שעברתם בפן הפיזי וגם
              הריגשי ונערוך שינויים והתאמות בצורה כזאת שתעזור לכם להמשיך להתקדם
              למטרה. שנים של נסיון הראו לנו תמיד ש-70% מהדרך עוברת דרך תזונה
              נכונה המותאמת בצורה אישית לכל אחד ואחת,
            </Typography>
            </CardContent>
            </Card>
          </motion.div>
        </Grid>
        <Grid item xs={12} sm={6} sx={{ order: { xs: 1, sm: 2 }, px: 0 }}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: inView1 ? 1 : 0 }}
            transition={{ duration: 1 }}
          >
            <Typography
              variant="h2"
              sx={{ textAlign: "left", color: "#FA6E07" }}
              id="introductionSectionH2"
            >
               ?איך השינוי שלך מתחיל
            </Typography>
          </motion.div>
        </Grid>
      </Grid>

      <Grid
        container
        spacing={10}
        sx={{ flexDirection: { xs: "column", sm: "row" } }}
        style={{marginTop: "20%"}}
      >
        <Grid item xs={12} sm={6} sx={{ order: { xs: 2, sm: 1 }, px: 0 }}>
          <motion.div
            ref={ref2}
            initial={{ opacity: 0 }}
            animate={{ opacity: inView2 ? 1 : 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
          <Card>
          <CardContent>
            <Typography
              variant="body1"
              sx={{ textAlign: "right", color: "white", fontWeight: "bold" }}
              id="introductionSectionP"
            >
              אם ניסיתם סוגי דיאטות שונות, קיבלת ייעוץ תזונה מחבר, מכר או מאמן
              שמבין עניין, התאמנתם בכל הכוח אבל לא ראיתם שינוי. וגם אם סוף סוף
              החלטתם שאתם רוצים להתחיל אבל עדיין לא יודעים איך אנשי המקצוע
              ותזונאי הספורט בישראלבודי ילוו אתכם לתוצאה, זו ההזדמנות שלכם לגלות
              ולצאת לדרך. במסגרת בתוכנית תפגשו אחת לתקופה עם יועץ מומחה או דיאטן
              ספורט קליני מומחים לעיצוב וחיטוב הגוך, לפגישה פרונטלית (או אונליים
              - לגמרי לבחירתכם). בפגישה יועץ התזונה או תזונאי הספורט יעשה איתכם
              תהליך בניית תוכניצ אימונים ויתאים לכם תפריט תזונה אישי בהתאם
              לנתונים האישיים שלכם, מהלך היום שלכם, העדפת האישיות שלכם והמגבלות
              השונות והאילוצים הקיימים לכל אחד ואחת מאיתנו.
            </Typography>
            </CardContent>
            </Card>
          </motion.div>
        </Grid>
        <Grid item xs={12} sm={3} sx={{ order: { xs: 1, sm: 2 }, px: 0 }}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: inView2 ? 1 : 0 }}
            transition={{ duration: 1 }}
          >
            <Typography
              variant="h5"
              sx={{ textAlign: "left", color: "#FA6E07" }}
              id="introductionSectionH2"
              
            >
              ?איך תדע שהתוכנית מתאימה
            </Typography>
          </motion.div>
        </Grid>
      </Grid>
      </ThemeProvider>

    </div>
  );
}

export default Introduction;
