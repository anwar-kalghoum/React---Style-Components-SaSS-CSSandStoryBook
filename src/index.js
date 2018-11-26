import React from "react";
import ReactDOM from "react-dom";
import MediaQuery from "react-responsive";
// Menu
import HeaderP from "./HeaderP";
import HeaderMobile from "./Header/HeaderMobile";

//Content
import Content from "./Content";


//Footer
import Footer from "./Footer";
import SubFooter from "./SubFooter";
import FooterMobile from './FooterMobile';
import SubFooterMob from './SubFooterMob';
import "./index.css";

export default function App() {
  return (
    <div className="App">
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat:100,100i,200,200i,300,300i,400,400i,500,600,600i,700,700i,800,800i,900,900i"
        rel="stylesheet"
      />

      <MediaQuery query="(min-width: 1201px)">
        <HeaderP />
      </MediaQuery>
      <MediaQuery query="(min-width: 200px) and (max-width: 1200px)">
        <HeaderMobile />
      </MediaQuery>

      {/* Menu */}
      {/* Content */}
  
        <Content />
 

      {/* Footer */}
      <MediaQuery query="(min-width: 1201px)">
      <Footer />
      <SubFooter />
      </MediaQuery>
      <MediaQuery query="(min-width: 200px) and (max-width: 1200px)">
        <FooterMobile />
        <SubFooterMob />
      </MediaQuery>
   
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
