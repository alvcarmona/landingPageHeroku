import React, {Component} from 'react';
import pic5 from '../img/eric-barbeau-56714.jpg';

class FormComponent extends Component {
    render() {
        return (
            <div className="responsive grid section">
                <div className="col column_1_of_2 contactForm">
                    <div className="contactFormChild">
                        <h1>Need a helping hand?</h1>
                        <h1  className="secondaryTextColor">We are all ears</h1>
                    </div>
                    <form>
                        <fieldset>
                        <label>
                            Name
                            <input type="text" name="name"/>
                        </label>
                            </fieldset>
                        <fieldset>
                        <label>
                            Email
                            <input type="email" name="email"/>
                        </label>
                        </fieldset>
                        <fieldset>
                        <label>
                            Go ahead. We're all ears.
                            <input className="bigtextbox" type="text" name="comment"/>
                        </label>
                        </fieldset>

                        <fieldset>
                            <button>Submit</button>
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
