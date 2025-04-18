import React from "react";
import { Link } from "react-router-dom";

const Hero = ({ title }) => {
  return (
    <section className="hero">
      <h1>{title}</h1>
      <p>
        <Link to={"/"}>home</Link> &gt; <span>{title}</span>
      </p>
    </section>
  );
};

export default Hero;
