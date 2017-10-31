import React, {Component} from 'react';
import pic from '../img/ryan-waring-367068.jpg';


class FrontpageComponent extends Component {
    render() {
        return (
            <div className="home" id="home">
                <h1>Title</h1>
                <h2 className="secondaryTextColor">Subtitle</h2>
                <img className="frontPic" src={pic} alt=""/>
            </div>
        );
    }
}

export default FrontpageComponent;
