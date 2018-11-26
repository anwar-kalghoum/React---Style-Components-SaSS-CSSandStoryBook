/* eslint-disable no-unused-vars */
import React from "react";

import {
  BlockCrectangle19,
  BlockCback3,
  BlockCback4,
  BlockCback5,
  BlockCbackv3,
  BlockCbackv4,
  Mot20,
  DivM1,
  DivM2,
  Mot1,
  Mot2,
  Mot3,
  Mot5,
  Mot6,
  Mot7,
  Mot8,
  Mot9,
  Mot10,
  Mot11,
  Mot12,
  Mot13,
  Mot14,
  Mot15,
  BlockClongslevetshira,
  BlockCsale2,
  BlockCsalediv,
  BlockCsale,
  BlockCdailydeals,
  BlockCfeatureddiv,
  Featured,
  Jeans,
  Pants,
  Shorts,
  Tops,
  Outerwear,
  Accessories,
  Collaborations,
  BlockCcontFlex,
  BlockCback,
  BlockCbitmap1,
  BlockClongslevetshir,
  BlockCblack,
  BlockCblueLib,
  BlockCbitmap2,
  BlockCdisp,
  BlockCbitmap3,
  BlockClongslevetsh,
  BlockCfagh,
  BlockCbitmap4,
  BlockCbitmap5,
  BlockCblackt,
  BlockCbitmap6,
  BlockCbitmap7,
  BlockCbitmap8,
  Moredeals,
  BlockBdivTwo,
  BlockCecofriendly,
  BlockCseeallt,
  BlockCbacktwo,
  BlockCbitmap9,
  BlockCbitmap10,
  BlockCbitmap11,
  BlockCbitmap12,
  BlockCcercle3,
  BlockCcercle,
  BlockCcercle2
} from "./ContentCdivStyle";

function ContentCdiv() {
  return (
    <div>
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat:100,100i,200,200i,300,300i,400,400i,500,600,600i,700,700i,800,800i,900,900i"
        rel="stylesheet"
      />
      <BlockCrectangle19>
        <BlockCdailydeals>DAILY DEALS</BlockCdailydeals>
        <div>
          <BlockCfeatureddiv>
            <Featured>FEATURED</Featured>
            <Jeans>JEANS</Jeans>
            <Pants>PANTS</Pants>
            <Shorts>SHORTS</Shorts>
            <Tops>TOPS</Tops>
            <Outerwear>OUTERWEAR</Outerwear> <br />
            <Accessories>ACCESSORIES</Accessories>
            <Collaborations>COLLABORATIONS</Collaborations>
          </BlockCfeatureddiv>
        </div>
        <BlockCrectangle19>
          <BlockCcontFlex>
            {/*1*/}
            <BlockCback>
              <BlockCbitmap1 src="https://uploads.codesandbox.io/uploads/user/27849c50-097b-4336-bd17-9bdf58adc822/oIrY-Bitmap%20(5).png" />
              <BlockClongslevetshir>
                <Mot1>55 LONG SLEVE T-SHIRT</Mot1>
              </BlockClongslevetshir>
              <BlockCblack>Black</BlockCblack>
              <BlockCblueLib>$ 50.00</BlockCblueLib>
            </BlockCback>
            {/*2*/}

            {/*3*/}
            <BlockCbackv3>
              <BlockCdisp>
                <BlockCsale>
                  <BlockCsalediv>- 30%</BlockCsalediv>{" "}
                </BlockCsale>
                <BlockCbitmap3 src="https://uploads.codesandbox.io/uploads/user/27849c50-097b-4336-bd17-9bdf58adc822/TkeR-Bitmap%20(14).png" />
              </BlockCdisp>

              <BlockClongslevetsh>
                <Mot5>ED-55 RELAXED TAPERED</Mot5>
              </BlockClongslevetsh>
              <BlockCblack>
                <Mot6>CS Compact Blue - Sonic Mid Used</Mot6>
              </BlockCblack>
              <BlockCfagh />
              <BlockCblueLib>
                <Mot7>$ 90.00</Mot7>
              </BlockCblueLib>
            </BlockCbackv3>
          </BlockCcontFlex>

          <Moredeals> MORE DEALS ></Moredeals>
        </BlockCrectangle19>
      </BlockCrectangle19>

      <BlockBdivTwo>
        {/*b1*/}
        <BlockCecofriendly> ECO FRIENDLY</BlockCecofriendly>
        <BlockCseeallt> SEE ALL</BlockCseeallt>
        <BlockCcontFlex>
          {/*b2*/}
          <BlockCback3>
            <BlockCbitmap10 src="https://uploads.codesandbox.io/uploads/user/27849c50-097b-4336-bd17-9bdf58adc822/d9z5-Bitmap%20(17).png" />
            <DivM2>
              <BlockClongslevetshir>
                CLASSIC COLLEGE HOODED ZIP SWEAT
              </BlockClongslevetshir>
              <BlockCblack>Navy</BlockCblack>
              <BlockCblueLib>$ 130.00</BlockCblueLib>
            </DivM2>
          </BlockCback3>
          {/*b3*/}

          {/*b4*/}
        </BlockCcontFlex>
        <BlockCcercle3>
          <BlockCcercle />
          <BlockCcercle2 />
          <BlockCcercle2 />
        </BlockCcercle3>
      </BlockBdivTwo>
    </div>
  );
}

export default ContentCdiv;
