import React from "react";
import PropTypes from 'prop-types'; 
import "./BlockC.scss";

function Card(props) {
  return (
    <div>
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat:100,100i,200,200i,300,300i,400,400i,500,600,600i,700,700i,800,800i,900,900i"
        rel="stylesheet"
      />
      <div className="BlockC-rectangle-19">
      
        </div>
        <div className="BlockC-rectangle-19">
          <div className="BlockC-contFlex">
            {/*1*/}
            <div className="BlockC-back">
              <img
              alt=""
                src={props.imgsrc}
                className="BlockC-bitmap1"
              />
              <p className="BlockC-long-sleve-t-shir">{props.name}</p>
              <p className="BlockC-black">{props.Color}</p>
              <p className="BlockC-blueLib">{props.price}</p>
            </div>
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
Card.propTypes = {
  name: PropTypes.string,
  Color: PropTypes.string,
  price: PropTypes.string,
  imgsrc: PropTypes.string,

}
export default Card;
