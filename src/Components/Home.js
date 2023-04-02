import React from "react";
import { useEffect, useState } from "react";
import NewReleases from "./NewReleases";
import News from "./News";
import ZoomSlider from "./ZoomSlider";
import Events from "./Events";

function Home({ setColor }) {
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return () => {
      window.removeEventListener("resize", checkSize);
    };
  }, []);

  useEffect(() => {
    setColor("home");
  });

  return (
    <div>
      <div className="hero-cover">
        <ZoomSlider />
        <div className="dark-cover">
          <div className="hero-words-cont">
            <h1>Game Hub</h1>
            <p>A haven for casuals and tryhards</p>
          </div>
        </div>
      </div>
      <NewReleases />
      <News />
      <Events />
    </div>
  );
}

export default Home;
