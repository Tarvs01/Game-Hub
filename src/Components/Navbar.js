import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ setColor }) => {
  let breakPoint = 500;

  const [size, setSize] = useState(window.innerWidth);
  const [show, setShow] = useState(false);

  const checkSize = () => {
    setSize(window.innerWidth);
    if (size > breakPoint) {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return () => {
      window.removeEventListener("resize", checkSize);
    };
  });

  return (
    <div className="nav-container">
      <nav>
        <a href="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            width="351"
            height="125"
            viewBox="0 0 351 125"
          >
            <g
              transform="matrix(2.84 0 0 1 174.82 62.24)"
              id="pGVm2nteJUYCb0H7KDloa"
            >
              <path
                style={{
                  stroke: "rgb(247, 47, 58)",
                  strokewidth: 1,
                  strokeDasharray: "none",
                  strokeLinecap: "butt",
                  strokeDashoffset: 0,
                  strokeLinejoin: "miter",
                  strokeMiterlimit: 4,
                  fill: "black",
                  fillRule: "nonzero",
                  opacity: 1,
                }}
                vectorEffect="non-scaling-stroke"
                transform=" translate(0, 0)"
                d="M -61.12489 -35.19179 C -61.12489 -49.51424 -57.03925 -61.12488 -51.99937 -61.12488 L 51.999359999999996 -61.12488 L 51.999359999999996 -61.12488 C 57.039249999999996 -61.12488 61.12488 -49.51424 61.12488 -35.19179 L 61.12488 35.1918 L 61.12488 35.1918 C 61.12488 49.514250000000004 57.03924 61.12489 51.999359999999996 61.12489 L -51.99937 61.12489 L -51.99937 61.12489 C -57.03926 61.12489 -61.12489 49.514250000000004 -61.12489 35.1918 z"
                strokeLinecap="round"
              />
            </g>
            <g
              transform="matrix(1 0 0 1 88.18 76.69)"
              id="WtsvfbDAg5Tan0_LXhES9"
            >
              <text
                fontFamily="Quicksand"
                fontSize="56"
                fontStyle="normal"
                fontWeight="700"
                line-height="1"
                style={{
                  stroke: "none",
                  strokeWidth: 1,
                  strokeDasharray: "none",
                  strokeLinecap: "butt",
                  strokeDashoffset: 0,
                  strokeLinejoin: "miter",
                  strokeMiterlimit: 4,
                  fill: "white",
                  fillRule: "nonzero",
                  opacity: 1,
                  whiteSpace: "pre",
                }}
              >
                <tspan x="-78.8" y="8.78">
                  GAME
                </tspan>
              </text>
            </g>
            <g
              transform="matrix(1.27 0 0 0.75 252.34 62.24)"
              id="aCdz4mWG9Jf1SJiRwomKs"
            >
              <path
                style={{
                  stroke: "rgb(65, 64, 171)",
                  strokeWidth: 0,
                  strokeDasharray: "none",
                  strokeLinecap: "butt",
                  strokeDashoffset: 0,
                  strokeLinejoin: "miter",
                  strokeMiterlimit: 4,
                  fill: "rgb(247, 47, 58)",
                  fillRule: "nonzero",
                  opacity: 1,
                }}
                vectorEffect="non-scaling-stroke"
                transform=" translate(0, 0)"
                d="M -61.12469 -26.54735 C -61.12469 -45.64389 -51.97044 -61.124700000000004 -40.6781 -61.124700000000004 L 40.6781 -61.124700000000004 L 40.6781 -61.124700000000004 C 51.970439999999996 -61.124700000000004 61.12469 -45.643890000000006 61.12469 -26.54735 L 61.12469 26.54734 L 61.12469 26.54734 C 61.12469 45.643879999999996 51.97044 61.12469 40.6781 61.12469 L -40.6781 61.12469 L -40.6781 61.12469 C -51.970439999999996 61.12469 -61.12469 45.64388 -61.12469 26.54734 z"
                strokeLinecap="round"
              />
            </g>
            <g
              transform="matrix(1 0 0 1 252.34 62.24)"
              id="VTdBpGnNrYSL4FvlVFnw_"
            >
              <text
                fontFamily="Quicksand"
                fontSize="57"
                fontStyle="normal"
                fontWeight="700"
                line-height="1"
                style={{
                  stroke: "none",
                  strokeWidth: 1,
                  strokeDasharray: "none",
                  strokeLinecap: "butt",
                  strokeDashoffset: 0,
                  strokeLinejoin: "miter",
                  strokeMiterlimit: 4,
                  fill: "rgb(0, 0, 0)",
                  fillRule: "nonzero",
                  opacity: 1,
                  whiteSpace: "pre",
                }}
              >
                <tspan x="-67.5" y="24.11">
                  HUB
                </tspan>
              </text>
            </g>
          </svg>
        </a>

        {size > breakPoint ? (
          <div className="nav-links-cont">
            <Link
              to="/"
              id="home"
              onClick={() => {
                setColor("home");
              }}
            >
              Home
            </Link>
            <Link
              to="/library"
              id="library"
              onClick={() => {
                setColor("library");
              }}
            >
              Library
            </Link>
            <Link
              to="/esports"
              id="esports"
              onClick={() => {
                setColor("esports");
              }}
            >
              Esports
            </Link>
          </div>
        ) : null}
        {size <= breakPoint ? (
          <div
            className="small-menu"
            onClick={() => {
              setShow(!show);
            }}
          >
            {!show && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-list"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                />
              </svg>
            )}
            {show && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-x-lg"
                viewBox="0 0 16 16"
              >
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
              </svg>
            )}
            {show && (
              <div className="small-menu-cont">
                <Link to="/">Home</Link>
                <Link to="/library">Library</Link>
                <Link to="/esports">Esports</Link>
              </div>
            )}
          </div>
        ) : null}
      </nav>
    </div>
  );
};

export default Navbar;
