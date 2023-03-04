import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import { AiFillLinkedin,AiFillGithub,AiOutlineGitlab } from "react-icons/ai";
import { message,Space} from 'antd';
 
function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_lablyx6', 'template_ldzvbio', form.current, 'D04mYAYuZDzQQDbEy')
      .then((result) => {
          console.log(result.text);
          messageApi.open({
            type: 'success',
            content: 'Message send',
          });
      }, (error) => {
          console.log(error.text);
      });
  };
  const [messageApi, contextHolder] = message.useMessage();
  return (
    <div className="contact-page-1">
<div className="contact">
      <section className="contact-page">
        <div className="contact-container">
          <div className="contact-card">
          {contextHolder}
            <p className="contact-heading" data-aos="fade-down" data-aos-duration="1000">Contact us</p>
            <form ref={form} onSubmit={sendEmail} required="required">
            <div class="inputBox1">
              <input type="text" name="user_name" required="required" data-aos="zoom-in" data-aos-duration="2000" />
              <span>Your name</span>
            </div>
            <div class="inputBox">
                <input type="text" name="user_email" required="required" data-aos="zoom-in" data-aos-duration="2000" />
                <span>Email</span>
            </div>
            <div class="inputBox">
                <textarea name="message" required="required" data-aos="zoom-in" data-aos-duration="2000" />
                <span>Message</span>
            </div>
            <button  required="required" type="submit" class="enter" data-aos="zoom-in" data-aos-duration="2000" >Sent</button>
            </form>
          
          </div>
        </div>
      </section>
      <section className="contact-detail-page">
      <div className="contact-detail-page-heading" data-aos="fade-down" data-aos-duration="2000" >
        Get in touch 
        </div>
        
      <a href="mailto:blessondanielraj.s@gmail.com"><p data-aos="zoom-in" data-aos-duration="2000" ><span>Email:</span> blessondanielraj.s@gmail.com</p></a>
      <a href="tel:  +91 842 829 1673"><p data-aos="zoom-in" data-aos-duration="2000" ><span>Mobile:</span>  +91 842 829 1673</p></a>
     <div className="contact-detail-page-logo" data-aos="zoom-in" data-aos-duration="2000">
     <Space>
     <a href="https://github.com/blessondanielrajs" className="contact-icon"  >
              <AiFillGithub />
    </a>
    <a href=" https://www.linkedin.com/in/blesson-daniel-raj-s" className="contact-icon">
              <AiFillLinkedin />
            </a>
            <a href=" https://www.linkedin.com/in/blesson-daniel-raj-s" className="contact-icon">
              <AiOutlineGitlab />
            </a>
            </Space>
     </div>
    
      </section>
      
    </div>
    </div>
    
  );
}

export default Contact;
