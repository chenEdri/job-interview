import React from "react";


export function Jumbo(props) {
  return (
    <section className="jumbo-container">
      <div className="main-container">
        <div className="slogan flex column sb align-left ">
          <div>Exquisite dining since 1989</div>
          <p>Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from the comfort of our farmhouse.</p>
          <button className="jumbo-btn">BOOK A TABLE</button>
        </div>
        <div className="jumbo-img"><img src="https://res.cloudinary.com/dygtul5wx/image/upload/v1616401944/job-interview%20pixle%20perfect/homepage/hero-bg-desktop_gu60ty.jpg" /></div>
      </div>
    </section>
  );
}
