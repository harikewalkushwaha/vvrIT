import React from "react";
// import AirbonLogo from "../assets/svg/Home Page/pattern.svg";
import styled from "styled-components";
import ReactLogoArrow from "../assets/svg/Home Page/pattern.svg";

const MyTop = styled.div`
  background: #002e5b;
`;

export default function CommonTopBar(props) {
  return (
    <MyTop>
      <div className="" style={{ height: "85px" }} />

      <div className="tc-l about-banner-hg align-centerdiv ">
        <div className="hero-content  center w-100 ">
          <div className="pattern-bg1 align-centerdiv ">
            {/* <img
              src={ReactLogoArrow}
              fill="#1238dc"
              className="absolute mt5 left-0 mw-100"
            /> */}

            {/* <AirbonLogo className="absolute mt5 left-0 mw-100" /> */}
          </div>
          <div className="he-max-w center ">
            <h1 className="f2 f1-l fw2 white semibold-font tc mt0 mt50 lh-title ">
              {props.page}
            </h1>
          </div>
        </div>
      </div>
    </MyTop>
  );
}
