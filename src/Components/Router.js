import React from "react";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Search from "./Search";
import Category from "./Category";
import Home from "./Home";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import All from "./All";
import Error from "./Error";
import Footer from "./Footer";
import Esports from "./Esports";

function Router() {
  const [pageHighlight, setPageHighlight] = useState("home");

  const setColor = (page) => {
    setPageHighlight((prevState) => {
      if (window.innerWidth > 500) {
        document.querySelector(`#${prevState}`).style.color = "white";
        document.querySelector(`#${page}`).style.color = "rgb(247, 47, 58)";
        return page;
      } else {
        return prevState;
      }
    });
  };

  return (
    <div>
      <Navbar setColor={setColor} />
      <div className="routes-container">
        <Routes>
          <Route path="/" element={<Home setColor={setColor} />} />

          <Route path="/library/">
            <Route
              index
              element={
                <div className="library-container">
                  <Sidebar setColor={setColor} />
                  <div className="games-container">
                    <All />
                  </div>
                </div>
              }
            />

            <Route
              path="search/:term"
              element={
                <div className="library-container">
                  <Sidebar setColor={setColor} />
                  <div className="games-container">
                    <Search />
                  </div>
                </div>
              }
            />

            <Route
              path=":id"
              element={
                <div className="library-container">
                  <Sidebar setColor={setColor} />
                  <div className="games-container">
                    <Category />
                  </div>
                </div>
              }
            />
          </Route>

          <Route path="/esports" element={<Esports setColor={setColor} />} />

          <Route path="*" element={<Error />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default Router;
