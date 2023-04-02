import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { allGames } from "../data/all-games";
import Card from "./Card";

function Search() {
  const { term } = useParams();
  let games = allGames;
  const [regex, setRegex] = useState(/ /);

  let result = true;

  useEffect(() => {
    setRegex(new RegExp(String(term).toLowerCase()));
  }, [term]);

  return (
    <div className="testinging">
      <h3 className="results-for">
        Results for <span> "{term}"</span>
      </h3>
      <div className="cards-cont scroll">
        {games.map((game) => {
          if (regex.test(game.name.toLowerCase())) {
            result = false;
            return <Card key={game.id} props={{ ...game }} />;
          } else {
            return null;
          }
        })}
        {result && <h2>No results found</h2>}
      </div>
    </div>
  );
}

export default Search;
