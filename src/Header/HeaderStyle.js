import styled from 'styled-components';

export const Header = styled.div`
    min-height: 40px;
  min-width: 1440px;
  background-color: #f3f3f3;

  a {
  float: left;
  color: #b3b3b3;
  font-family: "Montserrat", sans-serif;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.8px;
  line-height: 15px;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  height: 1q3px;
  @media screen and (min-width: 200px) and (max-width: 1025px) {
    min-width: 100%;
  }
}
a:hover {
  background-color: #ddd;
  color: black;
}
a.active {
  color: #737373;
}

`;

export const HeaderMenu = styled.div`
  float: right;
  @media screen and (min-width: 200px) and (max-width: 1025px) {
    float: none;
  }
}

`;

export const HeaderButton = styled.div`
  background-color: #dedede;
  color: #b3b3b3;
  height: 40px;
  width: 180px;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 12px;
  letter-spacing: 0.8px;
  line-height: 15px;
`;

export const HeaderText = styled.div`
  height: 15px;
  width: 49px;
  color: #b3b3b3;
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 12px;
  letter-spacing: 0.8px;
  line-height: 15px;
`;

export const HeaderImage = styled.img`
 height: 13.42px;
  width: 13.19px;
  margin-right: 16px;
`;

export const HeaderImageT = styled.img`
 height: 13.42px;
  width: 13.19px;
  margin-right: 21px;
`;

export const MenuGre = styled.select`
  background-color: #f3f3f3;
  border: 0px;
  height: 14px;
  width: 100%;
  color: #737373;
  font-family: "Montserrat", sans-serif;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.8px;
  line-height: 15px;
  padding-left: 22px;
  margin-top: -1px;
  &:hover {
  background-color: #dddddd;
}

`;

export const GreenColor  = styled.div`
  height: 13px;
  width: 49px;
  color: #b3b3b3;
  font-family: "Montserrat", sans-serif;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.8px;
  line-height: 15px;
}

`;

export const Menutexttt = styled.div`
  height: 13px;
  width: 49px;
  color: #b3b3b3;
  font-family: "Montserrat", sans-serif;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.8px;
  line-height: 15px;
}

`;


export const MenuBlockimg = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
}

`;

export const DivMoD = styled.div`
margin-left:-5px;
}

`;

export const DivMoDB = styled.div`
margin-left:-8px;
}

`;


export const DivMoDC = styled.div`
margin-left:-5px;
}

`;
export const DivMoDD = styled.div`
margin-left:-6px;
}

`;

export const DivMoDIM = styled.div`
margin-left:-178px;
}

`;
export const DivMoDIMG = styled.div`
margin-right:31px;
}

`;



