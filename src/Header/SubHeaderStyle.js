import styled from 'styled-components';


export const Subheadtt = styled.div`
  margin: 0px;
  min-height: 93px;
  min-width: 100%;
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  align-content: center;
  justify-content: center;
  @media screen and (min-width: 200px) and (max-width: 950px) {
    flex-direction: column;
  }

`;

export const SubImg = styled.img`
    width: 63.9px;
    margin-left: 25px;
    margin-top: -10px;
  @media screen and (min-width: 200px) and (max-width: 1025px) {
  }

`;

export const SubContainer = styled.div`
float: right;

`;

export const SuBclassButton = styled.div`
background-color: #dedede;

`;

export const SuBdiv2 = styled.div`
display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  min-width: 200px;
  margin-left: 15px;
  @media screen and (min-width: 200px) and (max-width: 950px) {
    flex-direction: column;
  }

`;

export const SuBdiv1 = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  align-content: center;
  justify-content: flex-end;
  margin-left: auto;
  margin-right: 65px;
  @media screen and (min-width: 200px) and (max-width: 950px) {
    flex-direction: column;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
  }

`;

export const SuBlive = styled.div`
  height: 22px;
  color: #1e2226;
  font-family: "Open Sans";
  font-size: 16px;
  font-style: italic;
  font-weight: 700;
  line-height: 22px;
 border-bottom: 2px solid black;
     margin-right: 3px;
    margin-top: -5px;

`;

export const SuBecofriendly = styled.div`
  height: 19px;
  width: 137px;
  color: #1e2226;
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 2px;
  line-height: 19px;
    margin-left: 57px;
            margin-right: 31px;
  @media screen and (min-width: 200px) and (max-width: 950px) {
    margin-left: 0px;
  }

`;

export const SuBrouge = styled.span`

  color: #4caf50;
`;

export const SuBsearch = styled.img`
 height: 38px;
  width: 38px;
     margin-right: -36px;
    margin-top: -10px;
`;

export const SubDiv = styled.div `
height: 19px;	width: 70px;	color: #1E2226;	font-family: "Montserrat";	font-size: 16px;	letter-spacing: 0.4px;	line-height: 19px;
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  font-weight: 600;
    margin-left: 36px;
    margin-top: -8px;
  &::after {
     content: "⌵";
    
  font: 17px "Consolas", monospace;
  color: #1366da;

  right: -0px;
     margin-left: 11px;
  }
`

export const SubDiv2 = styled.div`
height: 19px;	width: 70px;	color: #1E2226;	font-family: "Montserrat";	font-size: 16px;	letter-spacing: 0.4px;	line-height: 19px;
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  font-weight: 600;
  margin-left: 62px;
    margin-top: -7px;
  &::after {
     content: "⌵";
    
  font: 17px "Consolas", monospace;
  color: #1366da;

  right: -0px;
     margin-left: 11px;
  }
`

export const SubDiv3 = styled.div`
height: 19px;	width: 70px;	color: #1E2226;	font-family: "Montserrat";	font-size: 16px;	letter-spacing: 0.4px;	line-height: 19px;
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  font-weight: 600;
 margin-left: 28px;
    margin-top: -7px;
  &::after {
     content: "⌵";
    
  font: 17px "Consolas", monospace;
  color: #1366da;

  right: -0px;
     margin-left: 11px;
  }
`

export const SubDiv4 = styled.div`
height: 19px;	width: 70px;	color: #1E2226;	font-family: "Montserrat";	font-size: 16px;	letter-spacing: 0.4px;	line-height: 19px;
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  font-weight: 600;
margin-left: 34px;
    margin-top: -7px;
  &::after {
     content: "⌵";
    
  font: 17px "Consolas", monospace;
  color: #1366da;

  right: -0px;
     margin-left: 11px;
  }
`

export const SuBselectdiv = styled.div`
  position: relative;
  /*Don't really need this just for demo styling*/

  float: left;
  min-width: 10px;
  margin-left: 10px;
  select::-ms-expand {
  display: none;
}
&:after {
  content: ">";
  font: 17px "Consolas", monospace;
  color: #1366da;
  -webkit-transform: rotate(90deg);
  -moz-transform: rotate(90deg);
  -ms-transform: rotate(90deg);
  transform: rotate(90deg);
  right: -0px;

  /*Adjust for position however you want*/

  top: 18px;
  padding: 0 0 2px;
  border-bottom: 0px solid #999;
  /*left line */

  position: absolute;
  pointer-events: none;
}
select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  /* Add some styling */
  display: block;
  width: 100%;
  max-width: 320px;
  height: 50px;
  float: right;
  margin: 5px 0px;
  padding: 0px 24px;
  line-height: 1.75;
  background-color: #ffffff;
  background-image: none;
  border: 0px solid #ffffff;
  -ms-word-break: normal;
  word-break: normal;
  color: #1e2226;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 17px;
}

&:hover {
  background-color: #ffffff !important;
}

`;





export const DivMoD = styled.div`
margin-left:9px;
}

`;

export const DivMoDB = styled.div`
margin-left:2px;
}

`;
export const DivMoDC = styled.div`
margin-left:4px;
}

`;

export const DivMoDMA = styled.div`
margin-left:4px;
}

`;
export const DivMoDMB = styled.div`
margin-left:6px;
}

`;