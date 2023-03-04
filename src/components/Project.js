import { React, useState } from "react";
import Footer from "./Footer";
import Hire from "./Hire";
import { Divider, Card, Modal, Space } from "antd";
import { FloatButton } from 'antd';
function Project() {
  const [open1, setOpen1] = useState(false);
  const [loading1, setLoading1] = useState(false);
  const showModal1 = () => {
    setOpen1(true);
  };
  const handleOk1 = () => {
    setLoading1(true);
    setTimeout(() => {
      setOpen1(false);
    }, 3000);
  };
  const handleCancel1 = () => {
    setOpen1(false);
  };
  const [open2, setOpen2] = useState(false);
  const showModal2 = () => {
    setOpen2(true);
  };
  const handleOk2 = () => {
    setTimeout(() => {
      setOpen2(false);
    }, 3000);
  };
  const handleCancel2 = () => {
    setOpen2(false);
  };

  const [open3, setOpen3] = useState(false);
  const showModal3 = () => {
    setOpen3(true);
  };
  const handleOk3 = () => {
    setTimeout(() => {
      setOpen3(false);
    }, 3000);
  };
  const handleCancel3 = () => {
    setOpen3(false);
  };
  const [open4, setOpen4] = useState(false);
  const showModal4 = () => {
    setOpen4(true);
  };
  const handleOk4 = () => {
    setTimeout(() => {
      setOpen4(false);
    }, 3000);
  };
  const handleCancel4 = () => {
    setOpen4(false);
  };
  const [open5, setOpen5] = useState(false);
  const showModal5 = () => {
    setOpen5(true);
  };
  const handleOk5 = () => {
    setTimeout(() => {
      setOpen5(false);
    }, 3000);
  };
  const handleCancel5 = () => {
    setOpen5(false);
  };
  const [open6, setOpen6] = useState(false);
  const showModal6 = () => {
    setOpen6(true);
  };
  const handleOk6 = () => {
    setTimeout(() => {
      setOpen6(false);
    }, 3000);
  };
  const handleCancel6 = () => {
    setOpen6(false);
  };
  const [open7, setOpen7] = useState(false);
  const showModal7 = () => {
    setOpen7(true);
  };
  const handleOk7 = () => {
    setTimeout(() => {
      setOpen7(false);
    }, 3000);
  };
  const handleCancel7 = () => {
    setOpen7(false);
  };
  const [open8, setOpen8] = useState(false);
  const showModal8 = () => {
    setOpen8(true);
  };
  const handleOk8 = () => {
    setTimeout(() => {
      setOpen8(false);
    }, 3000);
  };
  const handleCancel8 = () => {
    setOpen8(false);
  };
  const [open9, setOpen9] = useState(false);
  const showModal9 = () => {
    setOpen9(true);
  };
  const handleOk9 = () => {
    setTimeout(() => {
      setOpen9(false);
    }, 3000);
  };
  const handleCancel9 = () => {
    setOpen9(false);
  };
  const [open10, setOpen10] = useState(false);
  const showModal10 = () => {
    setOpen10(true);
  };
  const handleOk10 = () => {
    setTimeout(() => {
      setOpen10(false);
    }, 3000);
  };
  const handleCancel10 = () => {
    setOpen10(false);
  };
  const [open11, setOpen11] = useState(false);
  const showModal11 = () => {
    setOpen11(true);
  };
  const handleOk11 = () => {
    setTimeout(() => {
      setOpen11(false);
    }, 3000);
  };
  const handleCancel11 = () => {
    setOpen11(false);
  };
  const [open12, setOpen12] = useState(false);
  const showModal12 = () => {
    setOpen12(true);
  };
  const handleOk12 = () => {
    setTimeout(() => {
      setOpen12(false);
    }, 3000);
  };
  const handleCancel12 = () => {
    setOpen12(false);
  };
  const [open13, setOpen13] = useState(false);
  const showModal13 = () => {
    setOpen13(true);
  };
  const handleOk13 = () => {
    setTimeout(() => {
      setOpen13(false);
    }, 3000);
  };
  const handleCancel13 = () => {
    setOpen13(false);
  };
  const [open14, setOpen14] = useState(false);
  const showModal14 = () => {
    setOpen14(true);
  };
  const handleOk14 = () => {
    setTimeout(() => {
      setOpen14(false);
    }, 3000);
  };
  const handleCancel14 = () => {
    setOpen14(false);
  };
  const [open15, setOpen15] = useState(false);
  const showModal15 = () => {
    setOpen15(true);
  };
  const handleOk15 = () => {
    setTimeout(() => {
      setOpen15(false);
    }, 3000);
  };
  const handleCancel15 = () => {
    setOpen15(false);
  };
  const [open16, setOpen16] = useState(false);
  const showModal16 = () => {
    setOpen16(true);
  };
  const handleOk16 = () => {
    setTimeout(() => {
      setOpen16(false);
    }, 3000);
  };
  const handleCancel16 = () => {
    setOpen16(false);
  };
  const [open17, setOpen17] = useState(false);
  const showModal17 = () => {
    setOpen17(true);
  };
  const handleOk17 = () => {
    setTimeout(() => {
      setOpen17(false);
    }, 3000);
  };
  const handleCancel17 = () => {
    setOpen17(false);
  };
  const [open18, setOpen18] = useState(false);
  const showModal18 = () => {
    setOpen18(true);
  };
  const handleOk18 = () => {
    setTimeout(() => {
      setOpen18(false);
    }, 3000);
  };
  const handleCancel18 = () => {
    setOpen18(false);
  };
  const [open19, setOpen19] = useState(false);
  const showModal19 = () => {
    setOpen19(true);
  };
  const handleOk19 = () => {
    setTimeout(() => {
      setOpen19(false);
    }, 3000);
  };
  const handleCancel19 = () => {
    setOpen19(false);
  };
  const [open20, setOpen20] = useState(false);
  const showModal20 = () => {
    setOpen20(true);
  };
  const handleOk20 = () => {
    setTimeout(() => {
      setOpen20(false);
    }, 3000);
  };
  const handleCancel20 = () => {
    setOpen20(false);
  };
  const [open21, setOpen21] = useState(false);
  const showModal21 = () => {
    setOpen21(true);
  };
  const handleOk21 = () => {
    setTimeout(() => {
      setOpen21(false);
    }, 3000);
  };
  const handleCancel21 = () => {
    setOpen21(false);
  };
  return (
    <div className="project">
      <Hire/>
      <section className="projectpage">
        <div className="project-heading">
          <Divider>
            <h1 data-aos="fade-down" data-aos-duration="2000">Projects</h1>
          </Divider>
        </div>
        <div className="projects-cards">
          <Card className="project-card" data-aos="zoom-in" data-aos-duration="2000">
            <div className="project-card-details">
              <p className="project-text-title">Bike service application</p>
            </div>

            <button onClick={showModal1} className="project-card-button">
              More info
            </button>
            <Modal
              open={open1}
              title="Bike service application"
              onOk={handleOk1}
              onCancel={handleCancel1}
              footer={[
                <button
                  className="project-git-button"
                  key="link"
                  loading={loading1}
                  onClick={handleOk1}
                >
                  <a href="https://github.com/blessondanielrajs/Bike_Service_Application_client">
                    Code
                  </a>
                </button>,
              ]}
            >
              <p>
                This application is for owners of Bike service stations. It
                helps the owners to list all the services they offer. Customers
                can choose one or more services to book
              </p>
            </Modal>
          </Card>
          <Card className="project-card" data-aos="zoom-in" data-aos-duration="2000">
            <div className="project-card-details">
              <p className="project-text-title">CKEDITOR-4</p>
            </div>
            <>
              <button onClick={showModal2} className="project-card-button">
                More info
              </button>
              <Modal
                open={open2}
                title="CKEDITOR-4"
                onOk={handleOk2}
                onCancel={handleCancel2}
                footer={[
                  <button
                    className="project-git-button"
                    key="link"
                    loading={loading1}
                    onClick={handleOk1}
                  >
                    <a href="https://blessondanielrajs.github.io/sample/">
                      Server
                    </a>
                  </button>,
                ]}
              >
                <p>
                  reader - A user with this role has a read-only access to the
                  document. ... commentator - A user with this role has a
                  read-only access to the document but is authorized to comment.
                  writer - A user with this role has full access to the document
                  Access - Maths formulas
                </p>
              </Modal>
            </>
          </Card>
          <Card className="project-card" data-aos="zoom-in" data-aos-duration="2000">
            <div className="project-card-details">
              <p className="project-text-title">Node.js-Skill Test</p>
            </div>
            <>
              <button onClick={showModal3} className="project-card-button">
                More info
              </button>
              <Modal
                open={open3}
                title=" Node.js-Skill Test"
                onOk={handleOk3}
                onCancel={handleCancel3}
                footer={[
                  <button
                    className="project-git-button"
                    key="link"
                    loading={loading1}
                    onClick={handleOk1}
                  >
                    <a href="https://gitlab.com/blessondanielrajs/server-councilling">
                      Code
                    </a>
                  </button>,
                ]}
              >
                <p>Server Page to Skill Test like Online Quiz</p>
              </Modal>
            </>
          </Card>
          <Card className="project-card" data-aos="zoom-in" data-aos-duration="2000">
            <div className="project-card-details">
              <p className="project-text-title">
                Educational Higher Education Assignment Submission System
              </p>
            </div>
            <>
              <button onClick={showModal4} className="project-card-button">
                More info
              </button>
              <Modal
                open={open4}
                title="Educational Higher Education Assignment Submission System"
                onOk={handleOk4}
                onCancel={handleCancel4}
                footer={[
                  <button
                    className="project-git-button"
                    key="link"
                    loading={loading1}
                    onClick={handleOk1}
                  >
                    <a href="https://gitlab.com/blessondanielrajs/mern-assignment">
                      Code
                    </a>
                  </button>,
                ]}
              >
                <p>
                  Educational Assignment is a complete online process includes
                  Create and manage classes, assignments, and marks online
                  without paper, Teachers can scan student work for authenticity
                  with originality reports
                </p>
              </Modal>
            </>
          </Card>
          <Card className="project-card" data-aos="zoom-in" data-aos-duration="2000">
            <div className="project-card-details">
              <p className="project-text-title">
                MBA/MCA Online Counselling - MERN Stack
              </p>
            </div>
            <>
              <button onClick={showModal5} className="project-card-button">
                More info
              </button>
              <Modal
                open={open5}
                title="MBA/MCA Online Counselling - MERN Stack"
                onOk={handleOk5}
                onCancel={handleCancel5}
                footer={[
                  <Space>
                    <button
                      className="project-git-button"
                      key="link"
                      loading={loading1}
                      onClick={handleOk1}
                    >
                      <a href="https://gitlab.com/blessondanielrajs/mern-samplemca-mba-councilling.git">
                        Code
                      </a>
                    </button>
                    <button
                      className="project-git-button"
                      key="link"
                      loading={loading1}
                      onClick={handleOk1}
                    >
                      <a href="https://gitlab.com/blessondanielrajs/servercouncilling.git">
                        Server
                      </a>
                    </button>
                  </Space>,
                ]}
              >
                <p>
                  MBA/MCA Admissions is a complete online process includes
                  Registration. This project includes the features of Online
                  Registration, Application Filling, Uploading of Certificate,
                  Certificate Verification, downloading all types of reports,
                  publish ranking a General and Community.
                </p>
              </Modal>
            </>
          </Card>
          <Card className="project-card" data-aos="zoom-in" data-aos-duration="2000">
            <div className="project-card-details">
              <p className="project-text-title">Covid 19 sample reports</p>
            </div>
            <>
              <button onClick={showModal6} className="project-card-button">
                More info
              </button>
              <Modal
                open={open6}
                title="Covid 19 sample reports"
                onOk={handleOk6}
                onCancel={handleCancel6}
                footer={[
                  <button
                    className="project-git-button"
                    key="link"
                    loading={loading1}
                    onClick={handleOk1}
                  >
                    <a href="https://gitlab.com/blessondanielrajs/covid_19_sample_reports">
                      Code
                    </a>
                  </button>,
                ]}
              >
                <p>Display Sample Reports</p>
              </Modal>
            </>
          </Card>
          <Card className="project-card" data-aos="zoom-in" data-aos-duration="2000">
            <div className="project-card-details">
              <p className="project-text-title">
                Mern stack - Omen shirts billing software
              </p>
            </div>
            <>
              <button onClick={showModal7} className="project-card-button">
                More info
              </button>
              <Modal
                open={open7}
                title="Mern stack - Omen shirts billing software"
                onOk={handleOk7}
                onCancel={handleCancel7}
                footer={[
                  <button
                    className="project-git-button"
                    key="link"
                    loading={loading1}
                    onClick={handleOk1}
                  >
                    <a href="https://gitlab.com/blessondanielrajs/omen-shirts-billing-software">
                      Code
                    </a>
                  </button>,
                ]}
              >
                <p>Shirt Shop Billing Software</p>
              </Modal>
            </>
          </Card>
          <Card className="project-card" data-aos="zoom-in" data-aos-duration="2000">
            <div className="project-card-details">
              <p className="project-text-title">
                Mern stack - React Rani Broilers Registration
              </p>
            </div>
            <>
              <button onClick={showModal8} className="project-card-button">
                More info
              </button>
              <Modal
                open={open8}
                title="Mern stack - React Rani Broilers Registration"
                onOk={handleOk8}
                onCancel={handleCancel8}
                footer={[
                  <button
                    className="project-git-button"
                    key="link"
                    loading={loading1}
                    onClick={handleOk1}
                  >
                    <a href="https://gitlab.com/blessondanielrajs/react-rani-broliers">
                      Code
                    </a>
                  </button>,
                ]}
              >
                <p>Mern stack - React Rani Broilers Registration</p>
              </Modal>
            </>
          </Card>
          <Card className="project-card" data-aos="zoom-in" data-aos-duration="2000">
            <div className="project-card-details">
              <p className="project-text-title">Mern stack react editors</p>
            </div>
            <>
              <button onClick={showModal9} className="project-card-button">
                More info
              </button>
              <Modal
                open={open9}
                title=" Mern stack react editors"
                onOk={handleOk9}
                onCancel={handleCancel9}
                footer={[
                  <button
                    className="project-git-button"
                    key="link"
                    loading={loading1}
                    onClick={handleOk1}
                  >
                    <a href="https://gitlab.com/blessondanielrajs/react-editors">
                      Code
                    </a>
                  </button>,
                ]}
              >
                <p>Text Editors Ck editor,Ace editor</p>
              </Modal>
            </>
          </Card>
          <Card className="project-card" data-aos="zoom-in" data-aos-duration="2000">
            <div className="project-card-details">
              <p className="project-text-title">React calculator</p>
            </div>
            <>
              <button onClick={showModal10} className="project-card-button">
                More info
              </button>
              <Modal
                open={open10}
                title="React calculator"
                onOk={handleOk10}
                onCancel={handleCancel10}
                footer={[
                  <button
                    className="project-git-button"
                    key="link"
                    loading={loading1}
                    onClick={handleOk1}
                  >
                    <a href="https://gitlab.com/blessondanielrajs/react-calculator">
                      Code
                    </a>
                  </button>,
                ]}
              >
                <p>React calculator</p>
              </Modal>
            </>
          </Card>
          <Card className="project-card" data-aos="zoom-in" data-aos-duration="1000">
            <div className="project-card-details">
              <p className="project-text-title">React chart examples</p>
            </div>
            <>
              <button onClick={showModal11} className="project-card-button">
                More info
              </button>
              <Modal
                open={open11}
                title="React chart examples"
                onOk={handleOk11}
                onCancel={handleCancel11}
                footer={[
                  <button
                    className="project-git-button"
                    key="link"
                    loading={loading1}
                    onClick={handleOk1}
                  >
                    <a href="https://gitlab.com/blessondanielrajs/react-chart-examples">
                      Code
                    </a>
                  </button>,
                ]}
              >
                <p>Sample Chart Examples</p>
              </Modal>
            </>
          </Card>
          <Card className="project-card" data-aos="zoom-in" data-aos-duration="1000">
            <div className="project-card-details">
              <p className="project-text-title">React chat box</p>
            </div>
            <>
              <button onClick={showModal12} className="project-card-button">
                More info
              </button>
              <Modal
                open={open12}
                title="React chat box"
                onOk={handleOk12}
                onCancel={handleCancel12}
                footer={[
                  <button
                    className="project-git-button"
                    key="link"
                    loading={loading1}
                    onClick={handleOk1}
                  >
                    <a href="https://gitlab.com/blessondanielrajs/react-chat-box">
                      Code
                    </a>
                  </button>,
                ]}
              >
                <p>React chat box</p>
              </Modal>
            </>
          </Card>
          <Card className="project-card" data-aos="zoom-in" data-aos-duration="1000">
            <div className="project-card-details">
              <p className="project-text-title">
                React chicken shop profit calculator
              </p>
            </div>
            <>
              <button onClick={showModal13} className="project-card-button">
                More info
              </button>
              <Modal
                open={open13}
                title="React chicken shop profit calculator"
                onOk={handleOk13}
                onCancel={handleCancel13}
                footer={[
                  <button
                    className="project-git-button"
                    key="link"
                    loading={loading1}
                    onClick={handleOk1}
                  >
                    <a href="https://gitlab.com/blessondanielrajs/react-chicken-shop-profit-calculator">
                      Code
                    </a>
                  </button>,
                ]}
              >
                <p>The Shop Profit based Calculator</p>
              </Modal>
            </>
          </Card>
          <Card className="project-card" data-aos="zoom-in" data-aos-duration="1000">
            <div className="project-card-details">
              <p className="project-text-title">React ecommerce</p>
            </div>
            <>
              <button onClick={showModal14} className="project-card-button">
                More info
              </button>
              <Modal
                open={open14}
                title="React ecommerce"
                onOk={handleOk14}
                onCancel={handleCancel14}
                footer={[
                  <button
                    className="project-git-button"
                    key="link"
                    loading={loading1}
                    onClick={handleOk1}
                  >
                    <a href="https://gitlab.com/blessondanielrajs/shop-ecomerence">
                      Code
                    </a>
                  </button>,
                ]}
              >
                <p>
                  E-commerce Website. A website that allows people to buy and
                  sell physical goods, services, and digital products over the
                  internet rather than at a brick-and-mortar location. Through
                  an e-commerce website, a business can process orders, accept
                  payments, manage shipping and logistics, and provide customer
                  service
                </p>
              </Modal>
            </>
          </Card>
          <Card className="project-card" data-aos="zoom-in" data-aos-duration="1000">
            <div className="project-card-details">
              <p className="project-text-title">React resume- jspdf</p>
            </div>
            <>
              <button onClick={showModal15} className="project-card-button">
                More info
              </button>
              <Modal
                open={open15}
                title="React resume- jspdf"
                onOk={handleOk15}
                onCancel={handleCancel15}
                footer={[
                  <button
                    className="project-git-button"
                    key="link"
                    loading={loading1}
                    onClick={handleOk1}
                  >
                    <a href="https://gitlab.com/blessondanielrajs/react-resume-details-jspdf">
                      Code
                    </a>
                  </button>,
                ]}
              >
                <p>To Get-Personal Details-Then-Make-Autopdf-Download</p>
              </Modal>
            </>
          </Card>
          <Card className="project-card" data-aos="zoom-in" data-aos-duration="1000">
            <div className="project-card-details">
              <p className="project-text-title">C online compiler</p>
            </div>
            <>
              <button onClick={showModal16} className="project-card-button">
                More info
              </button>
              <Modal
                open={open16}
                title="C online compiler"
                onOk={handleOk16}
                onCancel={handleCancel16}
                footer={[
                  <button
                    className="project-git-button"
                    key="link"
                    loading={loading1}
                    onClick={handleOk1}
                  >
                    <a href="https://gitlab.com/blessondanielrajs/c-online-compiler">
                      Code
                    </a>
                  </button>,
                ]}
              >
                <p>Online Compiler</p>
              </Modal>
            </>
          </Card>
          <Card className="project-card" data-aos="zoom-in" data-aos-duration="1000">
            <div className="project-card-details">
              <p className="project-text-title">C sharp online compiler</p>
            </div>
            <>
              <button onClick={showModal17} className="project-card-button">
                More info
              </button>
              <Modal
                open={open17}
                title="C sharp online compiler"
                onOk={handleOk17}
                onCancel={handleCancel17}
                footer={[
                  <button
                    className="project-git-button"
                    key="link"
                    loading={loading1}
                    onClick={handleOk1}
                  >
                    <a href="https://gitlab.com/blessondanielrajs/c-sharp-online-compiler">
                      Code
                    </a>
                  </button>,
                ]}
              >
                <p>Online Compiler</p>
              </Modal>
            </>
          </Card>
          <Card className="project-card" data-aos="zoom-in" data-aos-duration="1000">
            <div className="project-card-details">
              <p className="project-text-title">CPP online compiler</p>
            </div>
            <>
              <button onClick={showModal18} className="project-card-button">
                More info
              </button>
              <Modal
                open={open18}
                title="CPP online compiler"
                onOk={handleOk18}
                onCancel={handleCancel18}
                footer={[
                  <button
                    className="project-git-button"
                    key="link"
                    loading={loading1}
                    onClick={handleOk1}
                  >
                    <a href="https://gitlab.com/blessondanielrajs/cpp-online-compiler">
                      Code
                    </a>
                  </button>,
                ]}
              >
                <p>online compiler</p>
              </Modal>
            </>
          </Card>
          <Card className="project-card" data-aos="zoom-in" data-aos-duration="1000">
            <div className="project-card-details">
              <p className="project-text-title">Java online compiler</p>
            </div>
            <>
              <button onClick={showModal19} className="project-card-button">
                More info
              </button>
              <Modal
                open={open19}
                title="Java online compiler"
                onOk={handleOk19}
                onCancel={handleCancel19}
                footer={[
                  <button
                    className="project-git-button"
                    key="link"
                    loading={loading1}
                    onClick={handleOk1}
                  >
                    <a href="https://gitlab.com/blessondanielrajs/java-online-compiler">
                      Code
                    </a>
                  </button>,
                ]}
              >
                <p>online compiler</p>
              </Modal>
            </>
          </Card>
          <Card className="project-card" data-aos="zoom-in" data-aos-duration="1000">
            <div className="project-card-details">
              <p className="project-text-title">python online compiler</p>
            </div>
            <>
              <button onClick={showModal20} className="project-card-button">
                More info
              </button>
              <Modal
                open={open20}
                title="python online compiler"
                onOk={handleOk20}
                onCancel={handleCancel20}
                footer={[
                  <button
                    className="project-git-button"
                    key="link"
                    loading={loading1}
                    onClick={handleOk1}
                  >
                    <a href="https://gitlab.com/blessondanielrajs/python-online-compiler">
                      Code
                    </a>
                  </button>,
                ]}
              >
                <p>online compiler</p>
              </Modal>
            </>
          </Card>
          <Card className="project-card" data-aos="zoom-in" data-aos-duration="1000">
            <div className="project-card-details">
              <p className="project-text-title">Login page</p>
            </div>
            <>
              <button onClick={showModal21} className="project-card-button">
                More info
              </button>
              <Modal
                open={open21}
                title="Login page"
                onOk={handleOk21}
                onCancel={handleCancel21}
                footer={[
                  <button
                    className="project-git-button"
                    key="link"
                    loading={loading1}
                    onClick={handleOk1}
                  >
                    <a href="https://gitlab.com/blessondanielrajs/login">
                      Code
                    </a>
                  </button>,
                ]}
              >
                <p>Sample Login Page</p>
              </Modal>
            </>
          </Card>
        </div>
      </section>
      <FloatButton.BackTop />
      <Footer/>
    </div>
    
  );
}

export default Project;
