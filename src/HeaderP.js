import React from "react";
import MediaQuery from "react-responsive";
import Header from "./Header";
import SubHeader from "./SubHeader";
import SubSubHeaderr from "./SubSubHeaderr";
import HeaderMobile from "./Header/HeaderMobile";
import "./styles.scss";

function HeaderP() {
  return <div className="App">
      <link href="https://fonts.googleapis.com/css?family=Montserrat:100,100i,200,200i,300,300i,400,400i,500,600,600i,700,700i,800,800i,900,900i" rel="stylesheet" />
      {/* Menu */}

      <MediaQuery query="(min-width: 1201px)">
        <Header />
        <SubHeader />
      <SubSubHeaderr />
      </MediaQuery>

      <MediaQuery query="(min-width: 200px) and (max-width: 1200px)">
        <HeaderMobile />
      </MediaQuery>
    </div>;
}
export default HeaderP;
