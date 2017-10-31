import React, {Component} from 'react';
import pic5 from '../img/eric-barbeau-56714.jpg';
import arrow from '../img/next.svg';

class FormComponent extends Component {
    render() {
        return (
            <div className="responsive grid section" id="contact">
                <div className="col column_1_of_2 contactForm">
                    <div className="contactFormChild">
                        <h1>Need a helping hand?</h1>
                        <h2  className="secondaryTextColor">We are all ears</h2>
                    </div>
                    <form action="#" >
                        <fieldset>
                            <input id="first" type="text" name="first" required/>
                                <label htmlFor="first">Name</label>
                                <div className="after"></div>
                        </fieldset>
                        <fieldset>
                            <input  type="email" name="email" required/>
                            <label htmlFor="first">Email</label>
                            <div className="after"></div>
                        </fieldset>
                        <fieldset>
                            <input id="last" type="text" name="last" required/>
                                <label htmlFor="last">Say something</label>
                                <div className="after"></div>
                        </fieldset>
                        <fieldset>
                            <button className="submitButton" type="submit">
                                <span className="icon-form"></span>
                                <span className="submit-text">Submit</span>
                            </button>
                        </fieldset>
                    </form>
                </div>
                <div className="col column_1_of_2">
                    <img src={pic5} className="lazyload" alt=""/>
                </div>
            </div>
        );
    }
}

export default FormComponent;
