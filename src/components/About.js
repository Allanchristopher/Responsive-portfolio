import React from "react";
import Footer from "./Footer";
import Hire from "./Hire";
import {
  AiOutlineCaretRight,
  AiOutlineHtml5,
  AiOutlineAntDesign,
  AiFillWindows,
  AiOutlineAndroid,
  AiFillGithub,
  AiFillGitlab
} from "react-icons/ai";
  
  import { FaReact, FaNode,FaStripe} from "react-icons/fa";
import {
  DiJavascript1,
  DiCss3,
  DiMysql,
  DiPhp,
  DiBootstrap,
  DiPython,
  DiJava,
  DiLinux,
  DiVisualstudio,
  DiBitbucket,
  DiJira,
} from "react-icons/di";
import { SiPostman, SiRedux } from "react-icons/si";
import { IoMdLeaf } from "react-icons/io";
import { CiDatabase} from "react-icons/ci";
import { RxCode } from "react-icons/rx";
import { Timeline, Card, Divider } from "antd";
import { FloatButton } from 'antd';
function About() {
  return (
    <div className="about">
      <Hire/>
      <section className="aboutFirstpage">
        <div className="about-heading">
          <h1 data-aos="fade-down" data-aos-duration="2000">
            About<span>Me</span>
          </h1>
          <p data-aos="fade-up" data-aos-duration="2000">
            Hi, I'm <span>Blessan daniel raja</span> from Madurai, TamilNadu.I
            have 1 year and 2 months experience in software developer. Now im
            working as a full stack developer in 5X Technologies in chennai.
            <br />
            <br />
            Apart from coding, these are some other activities that I enjoy:
            <br />
            <br />
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <AiOutlineCaretRight /> Traveling
            <br />
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <AiOutlineCaretRight /> Listening to Music
            <br />
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <AiOutlineCaretRight /> cooking
          </p>
        </div>
        <div className="about-experience">
          <Divider>
            <h1 data-aos="fade-down" data-aos-duration="2000">Experience</h1>
          </Divider>
          <div className="experience-content">
            <Timeline mode="alternate">
              <Timeline.Item color="#9b59b6">
                {" "}
                <p className="experience-card" data-aos="fade-right" data-aos-duration="3000">
                  Software developer
                  <br />
                  5X Technologies
                  <br />
                  Jul 2022 - Present
                </p>
              </Timeline.Item>
              <Timeline.Item color="#9b59b6">
                <p className="experience-card" data-aos="fade-left" data-aos-duration="1000">
                  Software Engineer
                  <br />
                  Theecode Technologies Pvt Ltd <br />
                  Jan 2022 - Jul 2022
                </p>
              </Timeline.Item>
              <Timeline.Item color="#9b59b6">
                {" "}
                <p className="experience-card" data-aos="fade-right" data-aos-duration="1000">
                  Web Development Intern <br />
                  KaroStartup
                  <br />
                  Mar 2022
                </p>
              </Timeline.Item>
            </Timeline>
          </div>
        </div>
        <div className="skills">
          <Divider>
            <h1 data-aos="fade-down" data-aos-duration="1000">Skills</h1>
          </Divider>
          <div className="skill-card">
            <Card className="skill-card-size" data-aos="zoom-in" data-aos-duration="1000">
              <FaReact className="skill-icon-color" />
              <br />
              <span>React</span>
            </Card>
            <Card className="skill-card-size" data-aos="zoom-in" data-aos-duration="1000">
              <FaNode className="skill-icon-color" />
              <br />
              <span>Node js</span>
            </Card>
            <Card className="skill-card-size" data-aos="zoom-in" data-aos-duration="1000">
              <DiJavascript1 className="skill-icon-color" />
              <br />
              <span>Java Script</span>
            </Card>
           
            <Card className="skill-card-size" data-aos="zoom-in" data-aos-duration="1000">
              <SiRedux className="skill-icon-color" />
              <br />
              <span>Redux</span>
            </Card>
            <Card className="skill-card-size" data-aos="zoom-in" data-aos-duration="1000">
              <DiCss3 className="skill-icon-color" />
              <br />
              <span>CSS</span>
            </Card>
            <Card className="skill-card-size" data-aos="zoom-in" data-aos-duration="1000">
              <AiOutlineHtml5 className="skill-icon-color" />
              <br />
              <span>HTML</span>
            </Card>
            <Card className="skill-card-size" data-aos="zoom-in" data-aos-duration="1000">
              <DiMysql className="skill-icon-color" />
              <br />
              <span>My SQL</span>
            </Card>
            <Card className="skill-card-size" data-aos="zoom-in" data-aos-duration="1000">
              <DiPhp className="skill-icon-color" />
              <br />
              <span>Php</span>
            </Card>
            <Card className="skill-card-size" data-aos="zoom-in" data-aos-duration="1000">
              <IoMdLeaf className="skill-icon-color" />
              <br />
              <span>MangoDB</span>
            </Card>
            <Card className="skill-card-size" data-aos="zoom-in" data-aos-duration="1000">
              <DiPython className="skill-icon-color" />
              <br />
              <span>Python</span>
            </Card>
            <Card className="skill-card-size" data-aos="zoom-in" data-aos-duration="1000">
              <DiJava className="skill-icon-color" />
              <br />
              <span>java</span>
            </Card>
            <Card className="skill-card-size" data-aos="zoom-in" data-aos-duration="1000">
              < AiOutlineAndroid className="skill-icon-color" />
              <br />
              <span>Android</span>
            </Card>
          </div>
        </div>
        <div className="tools">
          <Divider>
            <h1 data-aos="fade-down" data-aos-duration="1000">
              <span>Tools</span> That i use
            </h1>
          </Divider>
          <div className="skill-card">
            <Card className="skill-card-size" data-aos="zoom-in" data-aos-duration="1000">
              <DiLinux className="skill-icon-color" />
              <br />
              <span>Linux</span>
            </Card>
            <Card className="skill-card-size" data-aos="zoom-in" data-aos-duration="1000">
              <AiFillWindows className="skill-icon-color" />
              <br />
              <span>windows</span>
            </Card>
            <Card className="skill-card-size" data-aos="zoom-in" data-aos-duration="1000">
              <AiOutlineAntDesign className="skill-icon-color" />
              <br />
              <span>Antd design</span>
            </Card>
            <Card className="skill-card-size" data-aos="zoom-in" data-aos-duration="1000">
              <DiBootstrap className="skill-icon-color" />
              <br />
              <span>Bootstrap</span>
            </Card>
            <Card className="skill-card-size" data-aos="zoom-in" data-aos-duration="1000">
              <CiDatabase className="skill-icon-color" />
              <br />
              <span>Database</span>
            </Card>
            <Card className="skill-card-size" data-aos="zoom-in" data-aos-duration="1000">
              <DiVisualstudio className="skill-icon-color" />
              <br />
              <span>Visualstudio</span>
            </Card>
            <Card className="skill-card-size" data-aos="zoom-in" data-aos-duration="1000">
              <FaStripe className="skill-icon-color" />
              <br />
              <span>Stripe</span>
            </Card>
            <Card className="skill-card-size" data-aos="zoom-in" data-aos-duration="1000">
              <DiJira className="skill-icon-color" />
              <br />
              <span>Jira</span>
            </Card>
            <Card className="skill-card-size" data-aos="zoom-in" data-aos-duration="1000">
              <DiBitbucket className="skill-icon-color" />
              <br />
              <span>Bitbucket</span>
            </Card>
            <Card className="skill-card-size" data-aos="zoom-in" data-aos-duration="1000">
              <RxCode className="skill-icon-color" />
              <br />
              <span>X code</span>
            </Card>
            <Card className="skill-card-size" data-aos="zoom-in" data-aos-duration="1000">
              <AiFillGitlab className="skill-icon-color" />
              <br />
              <span>Gitlab</span>
            </Card>
            <Card className="skill-card-size" data-aos="zoom-in" data-aos-duration="1000">
              <AiFillGithub className="skill-icon-color" />
              <br />
              <span>Git</span>
            </Card>
            <Card className="skill-card-size" data-aos="zoom-in" data-aos-duration="1000">
              <SiPostman className="skill-icon-color" />
              <br />
              <span>Postman</span>
            </Card>
          </div>
        </div>
      </section>
      <FloatButton.BackTop />
      <Footer/>
    </div>
  );
}

export default About;
