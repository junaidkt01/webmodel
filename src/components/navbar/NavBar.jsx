import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./navbar.css";

const NavBar = () => {
  const [screenSize, setScreenSize] = useState(0);
  const [menuBtn, setMenuBtn] = useState(false);
  useEffect(() => {
    setScreenSize(window.innerWidth);
  }, [screenSize]);
  console.log("screenSize", screenSize);
  return (
    <>
      <div className="navbar">
        {screenSize >= 700 ? (
          <div className="nav-things">
            <div className="nav-link">
              <a href="#">Home</a>
              <a href="#">Pricing</a>
              <a href="#">Content</a>
            </div>
            <div className="name-icon">
              <p>KONTRAKO</p>
            </div>
            <div>
              <button className="button btn btn-primary">Get start</button>
            </div>
          </div>
        ) : (
          <div className="nav-things">
            <div className="name-icon">
              <p>KONTRAKO</p>
            </div>
            <div onClick={() => setMenuBtn(!menuBtn)} className="menu-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                class="bi bi-list"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                />
              </svg>
            </div>
          </div>
        )}
      </div>
      {menuBtn && (
        <div className="popup">
          <div className="nav-menu-links">
            <a href="#">Home</a>
            <br />
            <a href="#">Pricing</a>
            <br />
            <a href="#">Content</a>
          </div>
          <div className="menu-button">
            <button className="button btn btn-primary">Get start</button>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
