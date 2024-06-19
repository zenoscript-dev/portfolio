import React from "react";
import "./HomePage.css";
import freelancingLogo from "../../Assets/freelancer-icon.svg";
import Navbar from "../../Components/Navbar/Navbar";
import PageWrapper from "../../Components/PageWrapper/PageWrapper";
import ExperienceCard from "../../Components/ExperienceCard/ExperienceCard";
import Footer from "../../Components/Footer/Footer";
import SkillCard from "../../Components/SkillCard/SkillCard";
import { ImHtmlFive } from "react-icons/im";
import { SiCss3 } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiExpo } from "react-icons/si";
import { SiNestjs } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiSqlite } from "react-icons/si";
import { SiGit } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { SiFirebase } from "react-icons/si";
import BlogCard from "../../Components/BlogCard/BlogCard";
import { BsArrowRight } from "react-icons/bs";

const HomePage = () => {
  const skillsData = [
    {
      name: "HTML",
      icon: ImHtmlFive,
    },
    {
      name: "CSS",
      icon: SiCss3,
    },
    {
      name: "JAVASCRIPT",
      icon: SiJavascript,
    },
    {
      name: "REACT",
      icon: SiReact,
    },
    {
      name: "EXPO",
      icon: SiExpo,
    },
    {
      name: "NESTJS",
      icon: SiNestjs,
    },
    {
      name: "MONGODB",
      icon: SiMongodb,
    },
    {
      name: "FIREBASE",
      icon: SiFirebase,
    },
    {
      name: "SQL",
      icon: SiMysql,
    },
    {
      name: "SQLITE",
      icon: SiSqlite,
    },
    {
      name: "GIT",
      icon: SiGit,
    },
    {
      name: "GITHUB",
      icon: SiGithub,
    },
  ];
  return (
    <PageWrapper>
      <Navbar />
      <section className="hero">
        <div className="hero-wrapper">
          <div className="hero-text">
            <div className="status txt-light">Available for work</div>
            <h1>
              I'm Ashok — a{" "}
              <span className="txt-light">Full Stack web developer </span>
              from India, focusing on building functional websites that will
              <span className="txt-light"> increase </span>
              conversion and help
              <span className="txt-light"> reach customers.</span>
            </h1>
          </div>
        </div>
      </section>
      {/* work section */}
      <section className="section" id="work">
        <h2>
          Latest <span className="txt-light">Work</span>
        </h2>
        <div className="grid"></div>
      </section>

      {/* experience section */}
      <section className="section" id="experience">
        <div className="experience-wrapper">
          <div className="experience-left">
            <h2>
              My <span className="txt-light">Experience</span>
            </h2>
            <p>
              As a freelancer I worked on
              Python,React,Nodejs,NestJS,Javascript,React Native and many more
              technologies.
            </p>
          </div>
          <div className="experience-content">
            <ExperienceCard
              logo="https://inventechinfo.com/static/media/inventechlogo.8d77812ee08bf5afc89c.png"
              company="Inventech"
              role="full stack web dev"
              timeLine="2023 - Current"
            />
            <ExperienceCard
              logo={freelancingLogo}
              company="Freelancing"
              role="Programmer"
              timeLine="2019 - 2023"
            />
          </div>
        </div>
      </section>

      {/* skills section */}

      <section className="section">
        <div className="skills-wrapper">
          <div className="skills-left">
            <h2>
              My <span className="txt-light">Skills</span>
            </h2>
            <p>As a freelancer I worked on all these technologies.</p>
          </div>
          <div className="skills-right">
            {skillsData.map((skill) => (
              <SkillCard key={skill.name} Icon={skill.icon} name={skill.name} />
            ))}
          </div>
        </div>
      </section>

      {/* blogs setion */}
      <section className="section" id="blogs">
        <div className="blogs-wrapper">
          <div className="blogs-header">
            <h2>
              My <span className="txt-light">Blog</span>
            </h2>
            <a href="/blogs"><BsArrowRight />view more</a>
          </div>
          <div className="blogs-list">
            <BlogCard img="/logo512.png" text="this is example blog asjdbaskjdasjkdsadasashdhaduishduhuhwqihiwuhewuiheqwuihewiuheiuwq"/>
            <BlogCard img="/logo512.png" text="this is example blog asjdbaskjdasjkdsadasashdhaduishduhuhwqihiwuhewuiheqwuihewiuheiuwq"/>
            <BlogCard img="/logo512.png" text="this is example blog asjdbaskjdasjkdsadasashdhaduishduhuhwqihiwuhewuiheqwuihewiuheiuwq"/>
          </div>
        </div>
      </section>
      <Footer />
    </PageWrapper>
  );
};

export default HomePage;
