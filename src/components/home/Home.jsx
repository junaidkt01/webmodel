import React, { useState } from "react";
import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="images">
        <div className="image1 col-xs-12 col-md-8">
          <div className="content">
            <h1 className="head-content">
              Easy way to find the <br /> property according to <br /> your
              choice.
            </h1>
            <p>
              We provide valrious property models for you at affordable <br />
              prices and the best quality
            </p>
            <div className="table">
              <div className="table1">
                <label for="cars">Location</label>
                <br />
                <select name="cars" id="cars">
                  <option value="volvo">Jakarta, indonasia</option>
                </select>
              </div>
              <div className="table2">
                <label for="cars">Property Type</label>
                <br />
                <select name="cars" id="cars">
                  <option value="volvo">Minimalist House</option>
                </select>
              </div>
              <div className="table3">
                <label for="cars">Price Range</label>
                <br />
                <select name="cars" id="cars">
                  <option value="volvo">$300 - $600</option>
                </select>
              </div>
              <div className="search-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  class="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </div>
            </div>
            <div className="checkbox">
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#0d6efd"
                  class="bi bi-check-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                </svg>
                100% best quality guarantee
              </p>
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#0d6efd"
                  class="bi bi-check-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                </svg>
                More affordable price
              </p>
            </div>
          </div>
        </div>
        <div className="image2 col-xs-12 col-md-4"></div>
      </div>
    </div>
  );
};

export default Home;
