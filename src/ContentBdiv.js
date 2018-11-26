import React from "react";

import {
  BlockBimg,
  BlockBimgb1,
  BlockBimgsunwashedshadesof,
  BlockBimgblurredback,
  BlockBimgthesoftsuncollect,
  BlockBimgbutton,
  BlockBimgbl,
  BlockBimgblurredback1,
  BlockBimgblurredback2,
  BlockBimgb2,
  BlockBimgb3,
  BlockBbackp,
  BlockBfreedeliveryworldw,
  BlockBmoreinfo
} from "./ContentBdivStyle";

function ContentBdiv() {
  return (
    <div>
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat:100,100i,200,200i,300,300i,400,400i,500,600,600i,700,700i,800,800i,900,900i"
        rel="stylesheet"
      />
      <BlockBimg>
        <BlockBimgb1>
          <BlockBimgblurredback>
            <BlockBimgsunwashedshadesof>
              SUNWASHED SHADES OF SUMMER
            </BlockBimgsunwashedshadesof>
            <BlockBimgthesoftsuncollect>
              THE SOFT SUN COLLECTION ESSENTIALS
            </BlockBimgthesoftsuncollect>
            <BlockBimgbutton>VIEW THE SELECTION</BlockBimgbutton>
          </BlockBimgblurredback>

          <BlockBimgbl>
            <BlockBimgblurredback1 />
            <BlockBimgblurredback2 />
          </BlockBimgbl>
        </BlockBimgb1>

        <BlockBimgb2 />

        <BlockBimgb3 />
      </BlockBimg>
      <BlockBbackp>
        <BlockBfreedeliveryworldw>
          FREE DELIVERY WORLDWIDE
          <BlockBmoreinfo>MORE INFO</BlockBmoreinfo>
        </BlockBfreedeliveryworldw>
      </BlockBbackp>
    </div>
  );
}

export default ContentBdiv;
