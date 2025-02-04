import React from "react";
import "../App.css"; 

const Contact: React.FC = () => {
  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <p>If you would like to get in touch, please contact me at:</p>
      <ul>
        <li>Email:agerausten@gmail.com <a href="ageraustin@gmail.com"></a></li>
        <li>Phone: +254743737349</li>
      </ul>
      <p>Feel free to reach out on my socials as well!</p>
    </section>
  );
};

export default Contact;