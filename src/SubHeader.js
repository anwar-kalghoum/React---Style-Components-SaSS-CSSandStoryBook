import React from "react";

import {
  Subheadtt,
  SuBdiv2,
  SubImg,
  SubDiv2,
  SubDiv,
  SubDiv3,
  SubDiv4,
  SuBdiv1,
  SuBlive,
  SuBecofriendly,
  SuBrouge,
  SuBsearch,
  DivMoD,
  DivMoDB,
  DivMoDC,
  DivMoDMA,
  DivMoDMB
} from './SubHeaderStyle';

function SubHeader() {
  return (
    <div>
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat:100,100i,200,200i,300,300i,400,400i,500,600,600i,700,700i,800,800i,900,900i"
        rel="stylesheet"
      />
      <link href="https://fonts.googleapis.com/css?family=Open+Sans:800i" rel="stylesheet" />
      <Subheadtt>
        <SuBdiv2>
          <SubImg
            src="https://uploads.codesandbox.io/uploads/user/27849c50-097b-4336-bd17-9bdf58adc822/BwCb-Dink%20logo.svg"
          />
          <DivMoD>

            <SubDiv>
              WOMEN
           </SubDiv>


          </DivMoD>
          <DivMoDB>
            <SubDiv2>
              MEN
  </SubDiv2>
          </DivMoDB>
          <DivMoDC>
            <SubDiv3>
              KIDS
  </SubDiv3>
          </DivMoDC>
          <SubDiv4>
            ACCESSORIES
  </SubDiv4>

        </SuBdiv2>

        <SuBdiv1>
          <div>
            <DivMoDMA>
              <SuBlive>LIVE FITTING ROOM</SuBlive>
            </DivMoDMA>
          </div>

          <DivMoDMB>
            <SuBecofriendly><span><SuBrouge>ECO</SuBrouge></span><span>FRIENDLY</span></SuBecofriendly>
          </DivMoDMB>

          <SuBsearch
            src="https://uploads.codesandbox.io/uploads/user/27849c50-097b-4336-bd17-9bdf58adc822/nUrk-serach.PNG"
          />
        </SuBdiv1>
      </Subheadtt>
    </div>
  );
}

export default SubHeader;
