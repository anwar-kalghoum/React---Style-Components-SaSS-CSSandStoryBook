import React from "react";
import MediaQuery from "react-responsive";

import { BlockBimg, BlockBimgtishort, BlockBimgb1, BlockBimgsunwashedshadesof, BlockBimgblurredback, BlockBimgthesoftsuncollect, BlockBimgbutton, BlockBimgbl, BlockBimgblurredback1, BlockBimgblol, BlockBimgblurredback2, BlockBimgwomen2, BlockBimgwomen, BlockBimgb2, BlockBsale, BlockBsalediv, BlockBlightcabardine, BlockB10000, BlockB7000, BlockBcercle3, BlockBcercle, BlockBcercle2, BlockBimgb3, BlockBimgoval4, BlockBimgdive, BlockBimgwiththespringsum, BlockBbackp, BlockBfill5, BlockBfreedeliveryworldw, BlockBmoreinfo, BlockBfill4, ContentBmobileStyle } from './ContentBdivStyle'

function ContentBmobile() {
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
          
            
   <MediaQuery query="(min-width: 768px) and (max-width: 768px)">
              <BlockBimgblurredback1>
                <BlockBimgblol>
                  <BlockBimgwomen2>SHOP</BlockBimgwomen2>
                  <BlockBimgwomen> WOMEN</BlockBimgwomen>
                </BlockBimgblol>
              </BlockBimgblurredback1>
      </MediaQuery>

            <MediaQuery query="(min-width: 640px) and (max-width: 640px)">
              <BlockBimgblurredback1>
               
              </BlockBimgblurredback1>
            </MediaQuery>

            <BlockBimgblurredback2>
              <BlockBimgblol>
                <BlockBimgwomen2>SHOP</BlockBimgwomen2>
                <BlockBimgwomen> MEN</BlockBimgwomen>
              </BlockBimgblol>
            </BlockBimgblurredback2>
          </BlockBimgbl>
        </BlockBimgb1>

        <BlockBimgb2>
        
        </BlockBimgb2>

        <BlockBimgb3>
      
      
        </BlockBimgb3>
      </BlockBimg>
      <BlockBbackp>
        <BlockBfill5
          src="https://uploads.codesandbox.io/uploads/user/27849c50-097b-4336-bd17-9bdf58adc822/tjVt-Fill%205.svg"

        />
        <BlockBfreedeliveryworldw>
          FREE DELIVERY WORLDWIDE
          <BlockBmoreinfo>
            MORE INFO
          
          </BlockBmoreinfo>
        </BlockBfreedeliveryworldw>

        <BlockBfill4
          src="https://uploads.codesandbox.io/uploads/user/27849c50-097b-4336-bd17-9bdf58adc822/FOWD-Fill%204.svg"
        />
      </BlockBbackp>
    </div>
  );
}

export default ContentBmobile;
