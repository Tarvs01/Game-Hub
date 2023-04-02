import React from "react";
import { news } from "../data/news";
import { useEffect, useState } from "react";
import Article from "./Article";

function Esports({ setColor }) {
  const [size, setSize] = useState(window.innerWidth);

  useEffect(() => {
    setColor("esports");
  });

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return () => {
      window.removeEventListener("resize", checkSize);
    };
  }, []);

  return (
    <section className="new-section news-section">
      <h1>Esports News</h1>
      {news.map((item) => {
        return <Article news={{ ...item }} key={item.id} />;
      })}
    </section>
  );
}

export default Esports;
