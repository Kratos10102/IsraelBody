import React, { useState } from "react";
import NotAFooter from "../NotAFooter";
import NavigationBar from "../Navbar";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Button from "@mui/material/Button";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import StoresData from "../StoresData.js";
import CustomForm from "../CustomForm.js";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function StoresRoute() {
  const [selectedStore, setSelectedStore] = useState(StoresData[0]);

  const handleStoreClick = (store) => {
    setSelectedStore(store);
  };

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <NavigationBar />

        {/* Stores List */}
        <div id="storesRouteStores">
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={12} sx={{ margin: "2rem" }}>
              <div style={{ position: "relative" }}>
                <Grid
                  container
                  direction="row"
                  justifyContent="center"
                  style={{
                    overflowX: "auto",
                    flexWrap: "nowrap",
                    padding: "1rem",
                    gap: "2rem",
                  }}
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
                  {StoresData.map((store) => (
                    <Grid
                      item
                      key={store.id} // Use store.id instead of selectedStore.id
                      sx={{ alignItems: "center" }}
                      onClick={() => handleStoreClick(store)}
                    >
                      <div style={{ whiteSpace: "nowrap" }}>
                        <Button
                          variant="contained"
                          color="primary"
                          size="large"
                          className={`store-button${
                            store === selectedStore ? " disabled" : ""
                          }`}
                        >
                          {store.storeName}{" "}
                          {/* Use store.storeName instead of selectedStore.storeName */}
                        </Button>
                      </div>
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
          </Grid>

          {/* Store Content */}
          <Grid item xs={12}>
            <Card style={{ textAlign: "center" }}>
              <Typography variant="h2"> {selectedStore.storeName} </Typography>{" "}
              {/* Fix 'variant' typo */}
              <CardContent style={{ padding: "1rem 0 1rem 0" }}>
                <img
                  src={selectedStore.israelbodyMapLocationImg}
                  alt={selectedStore.storeName}
                  height="400"
                  width="550"
                  id="israelbodyMapLocationImg"
                />
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
                  variant="h5"
                  color="white"
                  style={{ textAlign: "right" }}
                >
                  {selectedStore.storeAdress}
                </Typography>
                <hr />
                <div style={{ textAlign: "center" }}>
                  <a href={selectedStore.storeWazeLink}>
                    <img
                      src="/img/icons/wazeIcon.png"
                      width="60px"
                      height="60px"
                      alt="waze icon"
                      style={{ margin: "0 10px", borderRadius: "10px" }}
                    />
                  </a>
                  <a href={selectedStore.storeMapLink}>
                    <img
                      src="/img/icons/googleMapsIcon.png"
                      width="60px"
                      height="60px"
                      alt="google maps icon"
                      style={{ margin: "0 10px" }}
                    />
                  </a>
                </div>
              </CardContent>
            </Card>

            <Typography
              variant="h4"
              style={{ textAlign: "center", color: "#fd7e14" }}
            >
              ?רוצים לשמוע פרטים נוספים
            </Typography>
            <div
              className="CustomFormWidthOnDesktop"
              style={{ margin: "0 auto" }}
            >
              <CustomForm />
            </div>
          </Grid>
        </div>

        <NotAFooter />
      </ThemeProvider>
    </>
  );
}

export default StoresRoute;
