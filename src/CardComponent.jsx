import React from 'react';
import "./cardComponent.css";
import "./main.css";

function CardComponent() {
  return (
    <div id="card" className="container">
      <div id="left" className="container">
        <p>
        Card component that accepts an image and text to display in the card.</p>
      <input type="text" id="textValue" placeholder='Title'></input>
        <input type="file" id="input"></input>
        <input type="button" onClick={printFiles} value="Display Card"></input>
      </div>
      <div id="right" className="container">

      </div>
    </div>
  );
}
function printFiles() {
  var reader = new FileReader();
  reader.onload = function (event) {
    document.getElementById("right").innerHTML = (`
      <div>
        <h1>${document.getElementById("textValue").value}</h1>
        <img src="${event.target.result}" />
        </div>
    `) + document.getElementById("right").innerHTML;
    // document.getElementById("image").setAttribute("src", event.target.result);
  };
  reader.readAsDataURL(document.querySelector("#input").files[0]);
}

export default CardComponent;