import React from "react";

import {
  Header,
  HeaderMenu,
  MenuBlockimg,
  HeaderImage,
  HeaderImageT,
  MenuGre,
  DivMoD,
  DivMoDB,
  DivMoDC,
  DivMoDD,
  DivMoDIM,
  DivMoDIMG
} from "./HeaderStyle";

function HeaderComp() {
  return (
    <div>
      <Header>
        <a href="#home">
          <MenuGre>
            <option value="USA">USA</option>
          </MenuGre>
        </a>
        <a href="x">
          <DivMoD>DAILY DEALS</DivMoD>
        </a>
        <a href="d">
          <DivMoDB>GIFT CARDS</DivMoDB>
        </a>
        <a href="d">
          <DivMoDC>SELL</DivMoDC>
        </a>
        <a href="d">
          <DivMoDD>HELP & CONTACT</DivMoDD>
        </a>
        <HeaderMenu>
          <DivMoDIM>
            <a href="d">
              <MenuBlockimg>
                <HeaderImage src="https://uploads.codesandbox.io/uploads/user/27849c50-097b-4336-bd17-9bdf58adc822/OV69-user.svg" />

                <div>LOGIN </div>
              </MenuBlockimg>
            </a>
          </DivMoDIM>
          <DivMoDIMG>
            <a href="d">
              <MenuBlockimg>
                <HeaderImageT src="https://uploads.codesandbox.io/uploads/user/27849c50-097b-4336-bd17-9bdf58adc822/kr63-Fill.svg" />
                <div> $ 1.023</div>
              </MenuBlockimg>
            </a>
          </DivMoDIMG>
        </HeaderMenu>
      </Header>
    </div>
  );
}

export default HeaderComp;
