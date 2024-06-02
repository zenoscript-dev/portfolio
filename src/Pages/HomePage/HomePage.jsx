import React from "react";
import "./HomePage.css";
import Navbar from "../../Components/Navbar/Navbar";
import PageWrapper from "../../Components/PageWrapper/PageWrapper";

const HomePage = () => {
  return (
    <PageWrapper>
      <section className="hero">
        <div className="hero-wrapper">
          <Navbar />
          <div className="hero-text">
            <div className="status txt-light">Available for work</div>
            <h1>
              I'm Ashok — a <span className="txt-light">Full Stack web developer </span>
              from India, focusing on building functional websites that will
              <span className="txt-light"> increase </span>
              conversion and help
              <span className="txt-light"> reach customers.</span>
            </h1>
          </div>
        </div>
      </section>
      {/* work section */}
      <section className="section">
        <div className="grid">
            <div className="project1"></div>
            <div className="project2"></div>
            <div className="project3"></div>
            <div className="project4"></div>
        </div>
      </section>

      {/* experience section */}
    </PageWrapper>
  );
};

export default HomePage;
