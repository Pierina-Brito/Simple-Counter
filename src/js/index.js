//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

// 


// include your styles into the webpack bundle
import "../styles/index.css";


function SimpleCounter(props) {
    return (<div className="bigCounter">
        <div className="calendar">
            <i className="fa fa-clock"></i>
        </div>
        <div className="Six">{props.digitSix % 10}</div>
        <div className="Five">{props.digitFive % 10}</div>
        <div className="Four">{props.digitFour % 10}</div>
        <div className="Three">{props.digitThree % 10}</div>
        <div className="Two">{props.digitTwo % 10}</div>
        <div className="One">{props.digitOne % 10}</div>
    </div>);

}

SimpleCounter.propTypes = {
    digitSix: PropTypes.number,
    digitFive: PropTypes.number,
    digitFour: PropTypes.number,
    digitThree: PropTypes.number,
    digitTwo: PropTypes.number,
    digitOne: PropTypes.number
};

let counter = 0;
setInterval(function(){
    let Six = Math.floor(counter/100000);
    let Five = Math.floor(counter/10000);
    let Four = Math.floor(counter/1000);
    let Three = Math.floor(counter/100);
    let Two = Math.floor(counter/10);
    let One = Math.floor(counter/1);    
    console.log(Four, Three, Two, One);
    
    //render your react application
    counter++;
    ReactDOM.render(
        <SimpleCounter digitOne={One} digitTwo={Two} digitThree={Three} digitFour={Four} digitFive={Five} digitSix={Six} />, 
        document.querySelector("#app")
    );
        
}, 1000);

