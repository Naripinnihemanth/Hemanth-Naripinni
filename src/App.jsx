import React from "react";
import Home from "./Components/Home/Home";
import Nav from "./Components/NavBar/Nav";
import About from "./Components/About/About";
// import Light from "./Components/Light/Light";
import Projects from "./Components/Projects/Projects";
function App() {
  return (
    <>
      <Nav />
      <Home />
      <About />
      <Projects />
    </>
  );
}

export default App;
