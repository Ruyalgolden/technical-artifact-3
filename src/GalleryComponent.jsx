import React from 'react';
import "./galleryComponent.css";
import "./main.css";

const GalleryComponent = (props) => {
    console.log(props.data);
    return (
        <div id="galleryCard" className="container">
            <p>List component that accepts an array of text to display as an unordered list.</p>
            <div id="output" className="container">
                {props.data.map((item, index) => (
                    <div key={index}>
                        <h1>
                            {item.title}
                        </h1>
                        <img src={item.image} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default GalleryComponent;