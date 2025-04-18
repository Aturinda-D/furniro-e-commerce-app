import React from "react";
import Benefits from "../components/Benefits";
import Hero from "../components/Hero";

const Shop = () => {
  return (
    <div className="shop">
      <main>
        <Hero title={"shop"} />
        <div className="display-options"></div>
        <div className="products"></div>
      </main>
      <Benefits />
    </div>
  );
};

export default Shop;
