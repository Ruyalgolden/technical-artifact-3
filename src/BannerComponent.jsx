import React from 'react';
import "./bannerComponent.css";
import "./main.css"

function BannerComponent() {
    return (
        <div id="card" className="container">
            <div id="left" className="container">
                <p>
                    Card component that accepts an image and text to display in the card.Banner component that accepts the text to display in the banner</p>
                <input type="text" id="textValueBanner" placeholder='Text'></input>
                <input type="button" onClick={display} value="Display Card"></input>
            </div>
            <div id="rightBanner" className="container">

            </div>
        </div>
    );
}

function display() {

    document.getElementById("rightBanner").innerHTML = (`
        <div>
          <h1>${document.getElementById("textValueBanner").value}</h1>
          </div>
      `) + document.getElementById("rightBanner").innerHTML;
}

export default BannerComponent;