import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import AboutRoute from "./components/About/AboutRoute";
import StoresRoute from "./components/Stores/StoresRoute";
import BeforeAfterRoute from "./components/BeforeAfterRoute/BeforeAfterRoute";
import TrainersRoute from "./components/Trainers/TrainersRoute";
import TermsIsraelBody from "./components/Terms/TermsIsraelBodyRoute";
import SubmittedRoute from "./components/Submitted/SubmittedRoute";

const Homepage = () => {
  return (
    <div>
      <App />
    </div>
  );
};

const About = () => {
  return (
    <div>
      <AboutRoute />
    </div>
  );
};

const Trainers = () => {
  return (
    <div>
      <TrainersRoute />
    </div>
  );
};

const Stores = () => {
  return (
    <div>
      <StoresRoute />
    </div>
  );
};

const BeforeAndAfter = () => {
  return (
    <div>
      <BeforeAfterRoute />
    </div>
  );
};

const Terms = () => {
  return (
    <div>
      <TermsIsraelBody />
    </div>
  );
};

const SubmittedForm = () => {
  return (
    <div>
      <SubmittedRoute />
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/trainers" element={<Trainers />} />
        <Route path="/stores" element={<Stores />} />
        <Route path="/beforeandafter" element={<BeforeAndAfter />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/submitted-form" element={<SubmittedForm />} />

        {/* Define other routes here */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
