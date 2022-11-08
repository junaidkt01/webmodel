import React from "react";
import "./service.css";
import { data } from "../../api.js";

const Service = () => {
  return (
    <div className="service">
      <div className="service-content">
        <div className="head">
          <h1>Our Property</h1>
        </div>
        <div className="text">
          <p>
            We provide various type of properties for you with different
            categories
          </p>
        </div>
        <div className="filter">
          <a href="">Popular</a>
          <a href="">Categories</a>
          <a href="">Minimalist</a>
          <a href="">Modern</a>
          <a href="">Classical</a>
        </div>
      </div>
      <div className="cards">
        {data.map((items) => {
          return (
            <div className="card">
              <img src={items.image} alt="Loading..." />
              <h4>{items.name}</h4>
              <p>{items.description}</p>
              <h4>${items.price}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Service;
