import React, { useEffect, useState } from "react";
import "./Cursor.css";
function Cursor() {
  const [coord, setCoord] = useState({ x: "", y: "" });
  function HandleCursor(e) {
    setCoord({
      x: `${e.clientX}`,
    });
  }
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      setCoord({
        x: `${e.clientX}`,
        y: `${e.clientY}`,
      });
    });

    return window.removeEventListener("mousemove", (e) => {
      setCoord({
        x: `${e.clientX}`,
        y: `${e.clientY}`,
      });
    });
  }, []);
  return (
    <div
      className="cursor"
      style={{
        top: `${coord.y + "px"}`,
        left: `${coord.x + "px"}`,
      }}
    ></div>
  );
}

export default Cursor;
