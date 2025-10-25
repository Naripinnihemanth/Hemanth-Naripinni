import React, { useEffect } from "react";
import "./Home.css";
import { motion } from "framer-motion";
function Home() {
  return (
    <div className="home" id="home">
      <motion.p
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="line"
      >
        I design in pixels and speak in React
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, transform: "translateY(50px)" }}
        whileInView={{ opacity: 1, transform: "translateY(0px)" }}
        transition={{ duration: 0.8 }}
        className="logo"
      >
        PORTFOLIO
      </motion.h1>
    </div>
  );
}

export default Home;
