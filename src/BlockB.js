import React from "react";

import {
  BlockBimg,
  BlockBimgtishort,
  BlockBimgb1,
  BlockBimgsunwashedshadesof,
  BlockBimgblurredback,
  BlockBimgthesoftsuncollect,
  BlockBimgbutton,
  BlockBimgbl,
  BlockBimgblurredback1,
  BlockBimgblol,
  BlockBimgblurredback2,
  BlockBimgwomen2,
  BlockBimgwomen,
  BlockBimgb2,
  BlockBsale,
  BlockBsalediv,
  BlockBlightcabardine,
  BlockB10000,
  BlockB7000,
  BlockBcercle3,
  BlockBcercle,
  BlockBcercle2,
  BlockBimgb3,
  BlockBimgoval4,
  BlockBimgdive,
  BlockBimgwiththespringsum,
  BlockBbackp,
  BlockBfill5,
  BlockBfreedeliveryworldw,
  BlockBmoreinfo,
  BlockBfill4,
  BlockBmoreflech
} from "./BlockBStyle";

function BlockB() {
  return (
    <div>
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
            <BlockBimgblurredback1>
              <BlockBimgblol>
                <BlockBimgwomen2>SHOP</BlockBimgwomen2>
                <BlockBimgwomen> WOMEN</BlockBimgwomen>
              </BlockBimgblol>
            </BlockBimgblurredback1>
            <BlockBimgblurredback2>
              <BlockBimgblol>
                <BlockBimgwomen2>SHOP</BlockBimgwomen2>
                <BlockBimgwomen> MEN</BlockBimgwomen>
              </BlockBimgblol>
            </BlockBimgblurredback2>
          </BlockBimgbl>
        </BlockBimgb1>

        <BlockBimgb2>
          <div>
            <BlockBsale>
              <BlockBsalediv>- 50%</BlockBsalediv>{" "}
            </BlockBsale>
            <BlockBimgtishort src="https://uploads.codesandbox.io/uploads/user/27849c50-097b-4336-bd17-9bdf58adc822/H3AM-Bitmap%20(10).png" />
            <BlockBlightcabardine>LIGHT CABARDINE SHIRT</BlockBlightcabardine>
            <BlockB10000 />
            <BlockB7000>$ 70.00</BlockB7000>
            <BlockBcercle3>
              <BlockBcercle />
              <BlockBcercle2 />
              <BlockBcercle2 />
            </BlockBcercle3>
          </div>
        </BlockBimgb2>

        <BlockBimgb3>
          <BlockBimgoval4 src="https://uploads.codesandbox.io/uploads/user/27849c50-097b-4336-bd17-9bdf58adc822/T2sO-Oval%204.svg" />
          <BlockBimgdive>DIVE INTO SUMMER</BlockBimgdive>
          <BlockBimgwiththespringsum>
            WITH THE SPRING/SUMMER 2016 COLLECTIO FOR KIDS
          </BlockBimgwiththespringsum>
        </BlockBimgb3>
      </BlockBimg>

      <BlockBbackp>
        <BlockBfill5 />
        <BlockBfreedeliveryworldw>
          FREE DELIVERY WORLDWIDE
          <BlockBmoreinfo>
            MORE INFO
            <BlockBmoreflech> &nbsp; </BlockBmoreflech>
          </BlockBmoreinfo>
        </BlockBfreedeliveryworldw>

        <BlockBfill4 />
      </BlockBbackp>
    </div>
  );
}

export default BlockB;
