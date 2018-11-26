import React from "react";

import "./SubFooter.scss";

class FooterTwo extends React.Component {
  render() {
    return (
      <div className="SubFooter__rectangle-27-copy">
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat:100,100i,200,200i,300,300i,400,400i,500,600,600i,700,700i,800,800i,900,900i"
          rel="stylesheet"
        />
        <div className="SubFooter__privacy-content">
          <div className="SubFooter__privacy-cookies1">PRIVACY & COOKIES</div>
          <div className="SubFooter__privacy-cookies2">TERMS & CONDITIONS</div>
          <div className="SubFooter__privacy-cookies3">STORE DIRECTORY</div>
          <div className="SubFooter__privacy-cookies4">ABOUT US</div>
        </div>
        <div className="SubFooter__privacy-content">
          <div className="SubFooter__the-celebrities-name">
            The celebrities named or featured on have not endorsed recommended
            or approved
          </div>
        </div>

        <div className="SubFooter__privacy-contenttwo">
          <img
            alt=""
            className="SubFooter__the-image1"
            src="https://uploads.codesandbox.io/uploads/user/27849c50-097b-4336-bd17-9bdf58adc822/Nzfq-facebook%20icon.svg"
          />
          <img
            alt=""
            className="SubFooter__the-image2"
            src="https://uploads.codesandbox.io/uploads/user/27849c50-097b-4336-bd17-9bdf58adc822/w2As-twitter%20icon.svg"
          />
          <img
            alt=""
            className="SubFooter__the-image3"
            src="https://uploads.codesandbox.io/uploads/user/27849c50-097b-4336-bd17-9bdf58adc822/FNNp-google%20+%20icon.svg"
          />{" "}
          <img
            alt=""
            className="SubFooter__the-image4"
            src="https://uploads.codesandbox.io/uploads/user/27849c50-097b-4336-bd17-9bdf58adc822/hKaq-instagram%20icon.svg"
          />
        </div>
      </div>
    );
  }
}
export default FooterTwo;
