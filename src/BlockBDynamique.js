import React from "react";
import PropTypes from 'prop-types'; 
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

} from "./BlockBStyle";

function BlockBDynamique(props) {
  return (
    <div>
      <BlockBimg>
        <BlockBimgb1>
          <BlockBimgblurredback>
            <BlockBimgsunwashedshadesof>
             {props.text1}
            </BlockBimgsunwashedshadesof>
            <BlockBimgthesoftsuncollect>
            {props.text2}
            </BlockBimgthesoftsuncollect>
            <BlockBimgbutton> {props.text3}</BlockBimgbutton>
          </BlockBimgblurredback>

          <BlockBimgbl>
            <BlockBimgblurredback1>
              <BlockBimgblol>
                <BlockBimgwomen2> {props.text4}</BlockBimgwomen2>
                <BlockBimgwomen> {props.text5}</BlockBimgwomen>
              </BlockBimgblol>
            </BlockBimgblurredback1>
            <BlockBimgblurredback2>
              <BlockBimgblol>
                <BlockBimgwomen2> {props.text6}</BlockBimgwomen2>
                <BlockBimgwomen>  {props.text7}</BlockBimgwomen>
              </BlockBimgblol>
            </BlockBimgblurredback2>
          </BlockBimgbl>
        </BlockBimgb1>

        <BlockBimgb2>
          <div>
            <BlockBsale>
              <BlockBsalediv>-  {props.text8}</BlockBsalediv>{" "}
            </BlockBsale>
            <BlockBimgtishort src="https://uploads.codesandbox.io/uploads/user/27849c50-097b-4336-bd17-9bdf58adc822/H3AM-Bitmap%20(10).png" />
            <BlockBlightcabardine> {props.text9}</BlockBlightcabardine>
            <BlockB10000 />
            <BlockB7000>$  {props.text10}</BlockB7000>
            <BlockBcercle3>
              <BlockBcercle />
              <BlockBcercle2 />
              <BlockBcercle2 />
            </BlockBcercle3>
          </div>
        </BlockBimgb2>

        <BlockBimgb3>
          <BlockBimgoval4 src="https://uploads.codesandbox.io/uploads/user/27849c50-097b-4336-bd17-9bdf58adc822/T2sO-Oval%204.svg" />
          <BlockBimgdive> {props.text11}</BlockBimgdive>
          <BlockBimgwiththespringsum>
             {props.text12}
          </BlockBimgwiththespringsum>
        </BlockBimgb3>
      </BlockBimg>

  
    </div>
  );
}
BlockBDynamique.propTypes = {
    text1: PropTypes.string,
    text2: PropTypes.string,
    text3: PropTypes.string,
    text4: PropTypes.string,
    text5: PropTypes.string,
    text6: PropTypes.string,
    text7: PropTypes.string,
    text8: PropTypes.string,
    text9: PropTypes.string,
    text10: PropTypes.string,
  }
export default BlockBDynamique;
