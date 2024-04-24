import { useState } from "react";
import { Navbar } from "./components/navbar/";
import { Footer } from "./components/footer/";
import HomePage from "./containers/homePage/homePage";

function App() {
  return (
    <>
      <Navbar />

      <HomePage />

      <Footer />
    </>
  );
}

export default App;
