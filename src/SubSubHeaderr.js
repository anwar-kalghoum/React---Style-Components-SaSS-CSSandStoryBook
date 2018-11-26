import React from "react";

import "./SubSubHeaderr.scss";

class SubSubHeaderr extends React.Component {
  render() {
    return (
      <div className="SubSubHeader__flex-content1">
        <div className="SubSubHeader__flex-containe1">
          <link
            href="https://fonts.googleapis.com/css?family=Montserrat:100,100i,200,200i,300,300i,400,400i,500,600,600i,700,700i,800,800i,900,900i"
            rel="stylesheet"
          />
          <div className="SubSubHeader__flex-text1">
            <span className="SubSubHeader__textblanc1"> 10%</span>{" "}
            <span className="SubSubHeader__testbarra1">STUDENT DISCOUNT</span>
            &nbsp; &nbsp; &#10095;
          </div>
          <div className="SubSubHeader__flex-text11">
            <span className="SubSubHeader__textblanc11"> $ 9.95 </span>-{" "}
            <span className="SubSubHeader__testbarra11">
              UNLIMITED NEXT DAY DELIVERY FOR 1 YEAR
            </span>{" "}
            &nbsp; &#10095;
          </div>
          <div className="SubSubHeader__flex-text21">
            <span className="SubSubHeader__textblanc21">
              FREE DELIVERY WORLDWIDE
            </span>
            &nbsp; &#10095;
          </div>
        </div>
      </div>
    );
  }
}
export default SubSubHeaderr;
