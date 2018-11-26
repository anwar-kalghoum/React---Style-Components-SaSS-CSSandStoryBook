import React from "react";

import {
Footerre,
Footerrectangle27,
FootercontentDisplay,
Footerquestions,
Footerhelptrackorderret,
FootercontentDisTwo,
Footerdded,
Footershippingto,
FooterBlockImg,
FooterimgSize,
FootergreenColorr,
  DIVA, DIVAB, DIVAC, DIVAD } from './FooterMobileStyle'

function Footer() {
  return (
      <Footerre>
        <Footerrectangle27>
          <link
            href="https://fonts.googleapis.com/css?family=Montserrat:100,100i,200,200i,300,300i,400,400i,500,600,600i,700,700i,800,800i,900,900i"
            rel="stylesheet"
          />
          <div>
            <FootercontentDisplay>
            <DIVA>
                <Footerquestions>questions</Footerquestions>
                <Footerhelptrackorderret>
                  Help <br />Track Order <br />Returns
                </Footerhelptrackorderret>
            </DIVA>
            <DIVAB>
                <Footerquestions>WHAT’S IN STORE</Footerquestions>
                <Footerhelptrackorderret>
                  Help <br />Track Order <br />Returns
                </Footerhelptrackorderret>
            </DIVAB>
            <DIVAC>
                <Footerquestions>FOLLOW US</Footerquestions>
                <Footerhelptrackorderret>
                  Facebook<br />
                  Twitter<br />
                  Google+<br />
                  Instagram
                </Footerhelptrackorderret>
            </DIVAC>
            <DIVAD>
                <Footerquestions>MORE ABOUT</Footerquestions>
                <Footerhelptrackorderret>
                  Corporate Responsibility<br />
                  Jobs at DINK<br />
                  Investors<br />
                  As Seen On Screen
                </Footerhelptrackorderret>
            </DIVAD>
         
            </FootercontentDisplay>
          </div>
          <FootercontentDisTwo>
            <Footerdded>
              <Footershippingto> SHIPPING TO:</Footershippingto>
            <FootergreenColorr>
                <option value="audi" selected>
                  
                </option>
            </FootergreenColorr>
            </Footerdded>
            {/*img1*/}
            <FooterBlockImg>
              <div>
                <FooterimgSize
                  src="https://uploads.codesandbox.io/uploads/user/27849c50-097b-4336-bd17-9bdf58adc822/FGSu-cards%20icons%20(3).png"
                />
                 </div>
                </FooterBlockImg>
            {/* img */}
          </FootercontentDisTwo>
        </Footerrectangle27>
      </Footerre>
   
  );
}

export default Footer;
