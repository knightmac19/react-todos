import React from "react";
import "./App.css";

import Jumbotron from "./components/Layout/Jumbotron";
import Footer from "./components/Layout/Footer";

const App = () => {
  return (
    <div className="content-wrap">
      <Jumbotron />
      <Footer />
    </div>
  );
};

export default App;
