import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import NavigationBar from "../Navbar";
import NotAFooter from "../NotAFooter";
import BeforeAndAfterList from "../../NutritionConsultantDetails.js/BeforeAndAfter";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function BeforeAfterRoute() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationBar />

      <Box sx={{ display: "flex", justifyContent: "center", paddingTop: "7%" }}>
        <Grid container spacing={5} justifyContent="center">
          {BeforeAndAfterList.map((item) => (
            <Grid item key={item.id} xs={12} sm={6} md={4} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="400"
                    image={item.img}
                    alt="Before and after change"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      style={{ textAlign: "right" }}
                    >
                      {item.nameHebrew}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <NotAFooter />
    </ThemeProvider>
  );
}
