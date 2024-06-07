import React from "react";
import "./HomePage.css";
import freelancingLogo from "../../Assets/freelancer-icon.svg"
import Navbar from "../../Components/Navbar/Navbar";
import PageWrapper from "../../Components/PageWrapper/PageWrapper";
import ExperienceCard from "../../Components/ExperienceCard/ExperienceCard";

const HomePage = () => {
  return (
    <PageWrapper>
      <Navbar />
      <section className="hero">
        <div className="hero-wrapper">
          
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
        <h2>Latest <span className="txt-light">Work</span></h2>
        <div className="grid">
           
        </div>
      </section>

      {/* experience section */}
      <section className="section">
        <div className="experience-wrapper">
          <div className="experience-left">
          <h2>My <span className="txt-light">Experience</span></h2>
          <p>As a freelancer I worked on Python,React,Nodejs,NestJS,Javascript,React Native and many more technologies.</p>
          </div>
          <div className="experience-content">
            <ExperienceCard logo='https://inventechinfo.com/static/media/inventechlogo.8d77812ee08bf5afc89c.png' company='Inventech' role="full stack web dev" timeLine="2023 - Current"/>
            <ExperienceCard logo={freelancingLogo} company='Freelancing' role="Programmer" timeLine="2019 - 2023"/>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default HomePage;
