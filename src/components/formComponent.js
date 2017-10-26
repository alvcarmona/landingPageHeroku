import React, {Component} from 'react';
import pic5 from '../img/eric-barbeau-56714.jpg';

class FormComponent extends Component {
    render() {
        return (
            <div className="responsive grid">
                <div className="col column_1_of_2 contactForm">
                    <div className="contactFormChild">
                        <h1>Its not a charity</h1>
                        <h1>Bueno is about helping good people do good things</h1>
                    </div>
                    <form className="contactFormChild">
                        <label>
                            Name
                            <input type="text" name="name"/>
                        </label>
                        <label>
                            Email
                            <input type="email" name="email"/>
                        </label>
                        <label>
                            Go ahead. We're all ears.
                            <input type="text" name="comment"/>
                        </label>
                        <input type="submit" value="Submit"/>
                    </form>
                </div>
                <div className="col column_1_of_2">
                    <img src={pic5} alt=""/>
                </div>
            </div>
        );
    }
}

export default FormComponent;
