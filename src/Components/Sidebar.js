import React from "react";
import { useState, useEffect } from "react";
import { categories } from "../data/categories.js";
import { Link, useNavigate } from "react-router-dom";

function Sidebar({ setColor }) {
  let breakPoint = 1090;
  const navigate = useNavigate();
  const [size, setSize] = useState(window.innerWidth);
  const [page, setPage] = useState("All");
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
    navigate(`/library/search/${e.target.value}`, { replace: true });
  };

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
    setColor("library");
  });

  return (
    <div className="sidebar-container">
      <div className="search-container">
        <input value={search} onChange={handleChange} />
        <Link to={`/library/search/${search}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </Link>
      </div>

      {size > breakPoint ? (
        <div className="categories-container">
          <Link
            to={`/library`}
            className="categories-item"
            onClick={() => {
              setPage("All");
            }}
          >
            All
          </Link>
          {categories.map((item) => {
            return (
              <Link
                to={`/library/${item.type}`}
                className="categories-item"
                key={item.id}
                onClick={() => {
                  setPage(item.type);
                }}
              >
                {item.type}
              </Link>
            );
          })}
        </div>
      ) : null}
      {size <= breakPoint ? (
        <div className="small-categories-cont">
          <div
            className="categories-words"
            onClick={() => {
              setShow(!show);
            }}
          >
            Category: {page}
          </div>
          {show && (
            <div className="small-categories">
              <Link
                to={`/library`}
                className="small-categories-item"
                onClick={() => {
                  setPage("All");
                  setShow(!show);
                }}
              >
                All
              </Link>
              {categories.map((item) => {
                return (
                  <Link
                    to={`/library/${item.type}`}
                    className="small-categories-item"
                    key={item.id}
                    onClick={() => {
                      setPage(item.type);
                      setShow(!show);
                    }}
                  >
                    {item.type}
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
}

export default Sidebar;
