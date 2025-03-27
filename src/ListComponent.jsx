import React from 'react';
import "./listComponent.css";
import "./main.css";

const ListComponent = (props) => {
  console.log(props.data);
  return (
    <div id="card" className="container">
      <ul>
        
      <p>List component that accepts an array of text to display as an unordered list.</p>
      {props.data.map((item, index) => (
        <li key={index}>
          {item.title}
        </li>
      ))}
      </ul>
    </div>
  );
}

export default ListComponent;