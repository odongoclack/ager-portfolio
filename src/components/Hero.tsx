import React from "react";
import Austine from "../Images/Austine.jpg";
import "../App.css";

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <img src={Austine} alt="Ager Austine" className="hero-img" />
      <h1>Hi, I'm Ager Austine</h1>
      <p>Software Engineer | AI Enthusiast | Full-Stack Developer</p>
    </section>
  );
};

export default Hero;