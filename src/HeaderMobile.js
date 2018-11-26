import React from "react";
import "./HeaderMobile.scss";
import SubHeaderMobile from "./SubHeaderMobile";

class HeaderMobile extends React.Component {
  render() {
    return (
      <div>
        <div className="HeaderMobile__block">
          <div className="HeaderMobile__block1">
            <div className="HeaderMobile__part1"> &#9776; </div>

            <div>
              <img
                alt=""
                className="HeaderMobile__part2"
                src="https://uploads.codesandbox.io/uploads/user/27849c50-097b-4336-bd17-9bdf58adc822/nUrk-serach.PNG"
              />
            </div>
          </div>

          <div className="HeaderMobile__block2 ">
            {" "}
            <img
              alt=""
              className="HeaderMobile__part3"
              src="https://uploads.codesandbox.io/uploads/user/27849c50-097b-4336-bd17-9bdf58adc822/BwCb-Dink%20logo.svg"
            />
          </div>

          <div className="HeaderMobile__block3 ">
            {" "}
            <img
              alt=""
              className="HeaderMobile__part4"
              src="https://uploads.codesandbox.io/uploads/user/27849c50-097b-4336-bd17-9bdf58adc822/OV69-user.svg"
            />
          </div>
          <div className="">
            {" "}
            <img
              alt=""
              className="HeaderMobile__part5"
              src="https://uploads.codesandbox.io/uploads/user/27849c50-097b-4336-bd17-9bdf58adc822/kr63-Fill.svg"
            />
          </div>
        </div>
        <div>
          <SubHeaderMobile />
        </div>
      </div>
    );
  }
}
export default HeaderMobile;
