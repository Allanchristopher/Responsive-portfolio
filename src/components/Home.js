import {React,useState} from "react";
import Footer from "./Footer";
import Hire from "./Hire";
import { TypeAnimation } from "react-type-animation";
import hand from "../assets/hand.png";
import logo from "../assets/home.svg";
import { Divider } from "antd";
import { FloatButton, } from 'antd';
function Home() {

  return (
    <div className="Home">
       <Hire/>
      <section className="Firstpage">
        <div className="firstpage-content" >
          <div className="box-wrapper" data-aos="fade-down" data-aos-duration="2000">
            <div className="box"></div>
          </div>
          <div className="firstpage-content1" >
            <h3 data-aos="fade-up" data-aos-duration="2000">
              Hi there!
              <img className="handicon" src={hand} alt="hand" />
            </h3>
            <h1 data-aos="fade-up" data-aos-duration="2000">
              I'm <span>Blessan daniel raja</span>
            </h1>
            <div className="profile-detail-role">
              <span className="primary-text">
                <h1 data-aos="fade-up" data-aos-duration="2000" >
                  <TypeAnimation
                    repeat={Infinity}
                    sequence={[
                      "Web developer",
                      1000,
                      "Software developer",
                      1000,
                      "Full stack developer",
                      1000,
                      "Mern Stack developer",
                      1000,
                    ]}
                  />
                </h1>
              </span>
            </div>
            <div data-aos="zoom-out" data-aos-duration="1000">
              <a href="/contact" className="btn">
                Hire me{" "}
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="secondpage">
       <Divider><h1 data-aos="fade-down" data-aos-duration="1000">
          Let Me <span>Introduce</span> Myself
        </h1></Divider> 
        <div className="second-page-content">
          <div className="second-page-text" data-aos="fade-right" data-aos-duration="1000">
            <p>
              Developed 6+ full-stack web application to analyze and process
              data for different applications.
              <br />
              <br />
              Ensure apllications security and ability to interact with multiple{" "}
              <span>APIs and databases</span>
              <br />
              <br />
              Designed and created a knowledge management platform on a
              knowledge graph, utilizing a range of technologies, including{" "}
              <i>
                <span>
                  Mongo dB, Express, React.js, Node.js and JavaScript{" "}
                </span>
              </i>
              and specialties include quickly{" "}
              <i>
                <span>learning new skills</span>
              </i>{" "}
              and
              <i>
                <span>
                  programming languages, problem solving, responsive design
                  principles, website optimization, and the Model View
                  Controller (MVC) methods of organizing code
                </span>{" "}
              </i>
            </p>
          </div>
          <div className="second-page-imgcontent" data-aos="fade-left" data-aos-duration="1000">
            <img className="second-page-img" src={logo} alt="hand" />
          </div>
        </div>
      </section>
 
      <FloatButton.BackTop 
      tooltip={<div>Back to top</div>}
       />
    <Footer/>
  
    </div>
    
  );
}

export default Home;
