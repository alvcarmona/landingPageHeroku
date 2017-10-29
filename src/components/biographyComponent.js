import React, { Component } from 'react';
import pic4 from '../img/nathan-dumlao-314123.jpg';

class BiographyComponent extends Component {
    render() {
        return (
            <div className="responsive grid section">
                <div className="col column_1_of_2">
                    <img className="biopic lazyload" src={pic4} alt=""/>
                </div>
                <div className="col column_1_of_2 bottomContinent">
                    <div className="bottom">
                    <p>
                        <b>What is Lorem Ipsum?</b>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                    <p  className="secondaryTextColor ">

                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                        printer took a galley of type and scrambled it to make a type specimen book. It has survived not
                        only five centuries, but also the leap into electronic typesetting, remaining essentially
                        unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem
                        Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker
                        including versions of Lorem Ipsum.
                        </p>

                    </div>
                </div>
            </div>
        );
    }
}

export default BiographyComponent;
