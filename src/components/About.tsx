import React from "react";
import Austine from "../Images/Austine.jpg"; 

const About: React.FC = () => {
  return (
    <section className="about-container">
      <img src={Austine} alt="Ager Austine" className="profile-image" />

      <h2>About Me</h2>
      <p>
        I am Ager Austine, a Software Engineer at <b>Rightsify AI Company</b>.
        I specialize in Python and the MERN stack, with experience working on projects with <b>Huawei</b>.
      </p>
      <p>
        I have spoken at hackathons in top Kenyan universities, such as <b>Kenyatta University</b>, and I hold a certification from <b>IEEE AI & ML Colloquium</b>.
      </p>
      <p>
        Feel free to connect with me on <a href="https://www.linkedin.com/in/ageraustin" target="_blank" rel="noopener noreferrer">LinkedIn</a>.
      </p>
    </section>
  );
};

export default About;