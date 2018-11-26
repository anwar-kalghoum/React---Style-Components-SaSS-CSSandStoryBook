import React from "react";
import PropTypes from 'prop-types'; 
import "./BlockC.scss";

function CardDiscount(props) {
  return (
    <div>
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat:100,100i,200,200i,300,300i,400,400i,500,600,600i,700,700i,800,800i,900,900i"
        rel="stylesheet"
      />
      <div className="BlockC-rectangle-19">
      
      <div className="BlockC-back3">
              <div className="BlockC-disp">
                <div className="blockC-sale">
                  <p className="blockC-sale-div">- {props.discount}</p>{" "}
                </div>
                <img
                  alt=""
                  src={props.imgsrc}
                  className="BlockC-bitmap3"
                />
              </div>
              <p className="BlockC-long-sleve-t-sh">{props.Name}</p>
              <p className="BlockC-black">{props.discription}</p>
              <p className="BlockC-fagh">$ {props.Montant1}</p>
              <p className="BlockC-blueLib">$ {props.Montant2}</p>
          
            {/*2*/}
          
        
            {/*3*/}
           
            {/*4*/}
        
            {/*5*/}
      
            {/*6*/}
         
            {/*7*/}
          
            {/*8*/}
         
          </div>
        
        </div>
     
     
    </div>
  );
}
CardDiscount.propTypes = {
    discount: PropTypes.string,
    Name: PropTypes.string,
    discription: PropTypes.string,
    Montant1: PropTypes.string,
    Montant2: PropTypes.string,
    imgsrc: PropTypes.string,
}
export default CardDiscount;
