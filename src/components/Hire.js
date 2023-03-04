import { React, useState} from "react";

function Hire() {
    const [hirebtn, sethirebtn] = useState(false);
  
  const showhirebtn = () => {
    console.log(window.screenY);
    if (window.scrollY >= 10) {
      sethirebtn(true);
    } else {
      sethirebtn(false);
    }
  };
  window.addEventListener("scroll", showhirebtn);
  return (
    <>
     {hirebtn &&(
        <div className="floating-hire-button">
          <a href="/contact">
            <h2>
              H<br />I<br />R<br />E<br />
              <br />M<br />E
            </h2>
          </a>
        </div>)}
    </>

  );
}

export default Hire;
