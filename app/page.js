import React from "react";
import Home from "./components/Home";
import About from "./pages/About";
import Connect from "./pages/Connect";
import Project from "./pages/Project";
import Services from "./pages/Services";
const Page = () => {
  return (
    <div>
      <Home />
      <About />
      <Project />
      <Services />
      <Connect />
    </div>
  );
};

export default Page;
