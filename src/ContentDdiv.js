/* eslint-disable no-unused-vars */
import React from "react";

import {
  BlockDback,
  BlockDdisplay,
  BlockDpic,
  BlockDinstagramicon,
  ButtonV,
  BlockDblurredback,
  BlockDtop8streetstylet,
  BlockDthesoftsuncollect,
  BlockDrectangle61,
  BlockDtext61,
  BlockDpic2,
  BlockDlastnews,
  BlockDwhohastakenbeyon,
  BlockDitstimetototall,
  BlockDjune2016,
  BlockDcercle3,
  BlockDcercle,
  BlockDcercle2,
  BlockDblurredback2,
  BlockDusehashtagandshow,
  BlockDoval,
  BlockDoval27,
  BlockDovalimg,
  BlockDpic3,
  BlockDpic4,
  BlockDovalf,
  BlockDlinkarrowcopy4,
  BlockDinstagramicon2,
  BlockDaboutdink,
  BlockDonlineshopforuniq,
  BlockDmoreinfo,
  BlockDmoreflech
} from "./ContentDdivStyle";
import MediaQuery from "react-responsive";
function ContentDdiv() {
  return (
    <BlockDback>
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat:100,100i,200,200i,300,300i,400,400i,500,600,600i,700,700i,800,800i,900,900i"
        rel="stylesheet"
      />
      <BlockDdisplay>
        {/* B1*/}
        <BlockDpic>
          <BlockDinstagramicon
            src="https://uploads.codesandbox.io/uploads/user/27849c50-097b-4336-bd17-9bdf58adc822/hKaq-instagram%20icon.svg"
            alt=""
          />
        </BlockDpic>
        {/*B2 */}

        <BlockDblurredback>
          <BlockDtop8streetstylet>
            TOP 8 STREET STYLE TRENDS: SPRING 2016
          </BlockDtop8streetstylet>
          <BlockDthesoftsuncollect>
            THE SOFT SUN COLLECTION ESSENTIALS
          </BlockDthesoftsuncollect>
          <BlockDrectangle61>
            <BlockDtext61> VIEW THE TOP </BlockDtext61>
          </BlockDrectangle61>
        </BlockDblurredback>
        {/* B3*/}
        <BlockDpic3>
          <BlockDinstagramicon
            src="https://uploads.codesandbox.io/uploads/user/27849c50-097b-4336-bd17-9bdf58adc822/hKaq-instagram%20icon.svg"
            alt=""
          />
        </BlockDpic3>
        {/* B3*/}
        <BlockDpic2>
          <BlockDlastnews>LAST NEWS</BlockDlastnews>
          <BlockDwhohastakenbeyon>
            “WHO HAS TAKEN BEYONCÉ'S CROWN?”
          </BlockDwhohastakenbeyon>
          <BlockDitstimetototall>
            IT's time to "totally pause," as twenty years after its cinematic
            release, Clueless, the musical has been
          </BlockDitstimetototall>
          <BlockDjune2016>26 JUNE 2016</BlockDjune2016>
          <BlockDcercle3>
            <BlockDcercle />
            <BlockDcercle2 />
            <BlockDcercle2 />
          </BlockDcercle3>
        </BlockDpic2>
        {/* B4*/}
        <BlockDblurredback2>
          <BlockDusehashtagandshow>
            USE HASHTAG AND SHOW YOUR STYLE
          </BlockDusehashtagandshow>
          <BlockDoval>
            <BlockDoval27>
              <BlockDovalimg
                src="https://uploads.codesandbox.io/uploads/user/27849c50-097b-4336-bd17-9bdf58adc822/Nzfq-facebook%20icon.svg"
                alt=""
              />
            </BlockDoval27>
            <BlockDoval27>
              <BlockDovalimg
                src="https://uploads.codesandbox.io/uploads/user/27849c50-097b-4336-bd17-9bdf58adc822/w2As-twitter%20icon.svg"
                alt=""
              />
            </BlockDoval27>
            <BlockDoval27>
              <BlockDovalimg
                src="https://uploads.codesandbox.io/uploads/user/27849c50-097b-4336-bd17-9bdf58adc822/FNNp-google%20+%20icon.svg"
                alt=""
              />
            </BlockDoval27>
            <BlockDoval27>
              <BlockDovalimg
                src="https://uploads.codesandbox.io/uploads/user/27849c50-097b-4336-bd17-9bdf58adc822/2dFr-instagram%20icon%20(1).svg"
                alt=""
              />
            </BlockDoval27>
          </BlockDoval>
        </BlockDblurredback2>
        {/* B5*/}

        {/* B6*/}
      </BlockDdisplay>

      <BlockDaboutdink>ABOUT DINK</BlockDaboutdink>

      <MediaQuery query="(min-width: 1440px) and (max-width: 1440px)">
        <BlockDonlineshopforuniq>
          Online shop for unique, stylish lifestyle clothing. We are passionate
          about eco fashion,
          <br /> and every season sees us gathering around the drawing board at
          seaside to develop
          <br /> the exciting patterns, prints and styles you can see in our
          current collections.
          <br /> We look to places, color, animals for our inspiration.
        </BlockDonlineshopforuniq>
      </MediaQuery>

      <MediaQuery query="(min-width: 768px) and (max-width: 768px)">
        <BlockDonlineshopforuniq>
          Online shop for unique, stylish lifestyle clothing.
          <br /> We are passionate about eco fashion, and every season sees us
          gathering around
          <br /> the drawing board at seaside to develop the exciting patterns,
          <br /> prints and styles you can see in our current collections.
          <br /> We look to places, color, animals for our inspiration.
        </BlockDonlineshopforuniq>
      </MediaQuery>
      <MediaQuery query="(min-width: 640px) and (max-width: 640px)">
        <BlockDonlineshopforuniq>
          Online shop for unique, stylish lifestyle clothing.
          <br /> We are passionate about eco fashion, and every season sees us
          gathering around
          <br /> the drawing board at seaside to develop the exciting patterns,
          <br /> prints and styles you can see in our current collections.
          <br /> We look to places, color, animals for our inspiration.
        </BlockDonlineshopforuniq>
      </MediaQuery>
      <MediaQuery query="(min-width: 1440px) and (max-width: 1440px)">
        <BlockDmoreinfo>
          MORE INFO <BlockDmoreflech> &nbsp; &#62; </BlockDmoreflech>
        </BlockDmoreinfo>
      </MediaQuery>
      <MediaQuery query="(min-width: 640px) and (max-width: 768px)">
        <BlockDmoreinfo>
          <ButtonV> More</ButtonV>
        </BlockDmoreinfo>
      </MediaQuery>
    </BlockDback>
  );
}

export default ContentDdiv;
