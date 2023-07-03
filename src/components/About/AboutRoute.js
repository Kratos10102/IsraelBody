import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import NavigationBar from "../Navbar";
import NotAFooter from "../NotAFooter";
import Stack from "@mui/material/Stack";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function StoresRoute() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationBar />
      <Box
        sx={{
          paddingTop: "5%",
          paddingBottom: "10%",
        }}
      >
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          textAlign="right"
        >
          <Grid item xs={10} sm={8} md={5}>
            <Card>
              <CardContent>
                <Typography
                  variant="h5"
                  component="div"
                  style={{ textAlign: "center" }}
                >
                  נעים להכיר, אנחנו ישראלבודי
                  <br />
                </Typography>
                <Typography variant="body1" style={{ paddingTop: "3%" }}>
                  חברת ישראלבודי שמה לעצמה מטרה לספק ולענות לדרישותיהן המקצועיות
                  של לקוחותינו העוסקים בכל פעילות גופנית שהיא. כחברה הותיקה,
                  הגדולה והמרושתת בישראל אשר הוקמה בשנת 2001 ואחת ממייסדות התחום
                  בישראל, מתמחה הרשת במתן יעוץ תזונתי ספורטיבי לחדרי כושר,
                  ספורטאים מתחילים, ספורטאים מקצועיים ואנשים רגילים מן השורה
                  המקדישים את זמנם לספורט ולאורח חיים בריא
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={10} sm={10} md={10}>
            <img
              src="img/AboutUsImgs/aboutUsImg1.png"
              alt="About Us1"
              style={{
                display: "block",
                margin: "2% auto",
                border: "2px solid #333",
                borderRadius: "8px",
                maxWidth: "100%",
              }}
            />
          </Grid>
          <Grid item xs={10} sm={8} md={5}>
            <Card>
              <CardContent>
                <Typography
                  variant="h5"
                  component="div"
                  style={{ textAlign: "center" }}
                >
                  תזונת ספורט - זה אנחנו
                  <br />
                </Typography>
                <Typography variant="body1" style={{ paddingTop: "3%" }}>
                  ברשת ישראלבודי אנו לא מתפשרים על איכות הצוות המקצועי ואיכות
                  המוצרים, ביכולתנו לספק את השירות הטוב ביותר ואת האמצעים
                  המתקדמים ביותר מהם תוכלו להנות, החל ממחקרים, עדכונים מדעיים,
                  כנסים, מוצרים חדשים ועוד
                  <hr />
                </Typography>
                <Typography
                  variant="body1"
                  style={{ fontWeight: "bold", color: "#FA6E07" }}
                >
                  היום, בעולם בו המידע זמין ונגיש מאי פעם, המידע הרב מבלבל ויוצר
                  אין ספור שיטות, תאוריות ומיתוסים. מבין כל זה אנו באים ומבודדים
                  עבורכם את המידע האמין והמקצועי ביותר, המגובה במחקרים המתקדמים,
                  המובילים והרציניים ביותר וכמובן שנות הניסיון הרבות
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={10} sm={8} md={10}>
            <img
              src="img/AboutUsImgs/aboutUsImg2.png"
              alt="About Us2"
              style={{
                display: "block",
                margin: "2% auto",
                border: "2px solid #333",
                borderRadius: "8px",
                maxWidth: "100%",
              }}
            />
          </Grid>
          <Grid item xs={10} sm={3} md={5}>
            <Card>
              <CardContent>
                <Typography
                  variant="h5"
                  component="div"
                  style={{ textAlign: "center" }}
                >
                  אנשי מקצוע אשר ילוו אתכם להצלחה <br />
                </Typography>
                <Typography variant="body1" style={{ paddingTop: "3%" }}>
                  בישראלבודי קיימת מחלקת ייעוץ תזונת ספורט המובילה בישראל בתחום
                  הכושר והאימון הגופני ( מעל ל-7 מומחי תזונה) . צוות היועצים
                  מכיל בתוכו תזונאים קליניים וספורט, יועצי תזונת ספורט ומאמני
                  כושר מהמובילים בענף הכושר, התזונה והבריאות. כיום, אנו גאים
                  לשרת במסירות ונכונות למעלה מ 20,000 לקוחות ביניהם - חדרי כושר,
                  מדריכי כושר מוסמכים, מועדונים, יחידות צבאיות וגופי ביטחון,
                  קבוצות כדורגל וכדורסל מקצועיות, שחיינים, אנשי ברזל וטריאתלון,
                  רוכבי אופניים, נבחרות, וכמובן לקוחות פרטיים מכל רחבי הארץ.
                  פגישות הייעוץ מתבצעות בכל אחד מסניפי הרשת, באופן אישי - יעוץ
                  מול לקוח, במשרד פרטי, שקט ובעיקר משרה אווירת רוגע ומקצועיות
                </Typography>
              </CardContent>
            </Card>
            <Stack spacing={2} direction="row">
              
            </Stack>
          </Grid>
        </Grid>
      </Box>

      <NotAFooter />
    </ThemeProvider>
  );
}
