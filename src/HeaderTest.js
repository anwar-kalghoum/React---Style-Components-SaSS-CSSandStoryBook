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
import PropTypes from 'prop-types'; 
function HeaderTest(props) {
  return (
    <div>
      <Header>
        <a href="#home">
          <MenuGre>
            <option value="USA">{props.Country}</option>
          </MenuGre>
        </a>
        <a href="x">
          <DivMoD>{props.Menu1}</DivMoD>
        </a>
        <a href="d">
          <DivMoDB>{props.Menu2}</DivMoDB>
        </a>
        <a href="d">
          <DivMoDC>{props.Menu3}</DivMoDC>
        </a>
        <a href="d">
          <DivMoDD>{props.Menu4}</DivMoDD>
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
                <div> $ {props.Price}</div>
              </MenuBlockimg>
            </a>
          </DivMoDIMG>
        </HeaderMenu>
      </Header>
    </div>
  );
}
HeaderTest.propTypes = {
    Country: PropTypes.string,
    Menu1: PropTypes.string,
    Menu2: PropTypes.string,
    Menu3: PropTypes.string,
    Menu4: PropTypes.string,
    Price: PropTypes.string,
  }

export default HeaderTest;
