import React, { Component } from 'react';
import pic1 from '../img/eric-barbeau-56714.jpg';
import pic2 from '../img/francisco-moreno-110533.jpg';
import pic3 from '../img/kelly-sikkema-287520.jpg';

class DisplayComponent extends Component {
    render() {
        return (
            <div className="responsive grid">
                <div className="col column_1_of_3 display">
                    <img src={pic1} alt=""/>
                    <h3>head</h3>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                    <a href="/">Link</a>
                </div>
                <div className="col column_1_of_3 display" >
                    <img src={pic2} alt=""/>
                    <h3>head</h3>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                    <a href="/">Link</a>
                </div>
                <div className="col column_1_of_3 display">
                    <img src={pic3} alt=""/>
                    <h3>head</h3>
                    <p>In est elit, pretium ac facilisis sed, mattis quis eros. Sed congue vehicula hendrerit. Nunc feugiat ultrices erat, quis luctus nibh sollicitudin ut. Etiam varius nunc mattis libero eleifend, quis sodales libero varius. Pellentesque nec neque sollicitudin, consequat ipsum vel, cursus enim. Mauris mattis risus non dolor sollicitudin, at cursus enim faucibus. Etiam varius diam dui, eget convallis mauris consequat vel. Integer sollicitudin dolor et metus faucibus, at ornare odio rhoncus. Curabitur faucibus sem dolor, venenatis sodales orci iaculis eu. Pellentesque sit amet mauris vitae dolor dictum imperdiet ac at ligula.</p>
                    <a href="/">Link</a>
                </div>
            </div>
        );
    }
}

export default DisplayComponent;
