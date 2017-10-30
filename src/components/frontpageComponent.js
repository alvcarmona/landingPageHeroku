import React, {Component} from 'react';
import pic from '../img/joshua-earle-183442.jpg';


class FrontpageComponent extends Component {
    render() {
        return (
            <div className="section" classID="home">
                <h1>Title</h1>
                <h2 className="secondaryTextColor">Subtitle</h2>
                <img className="frontPic" src={pic} alt=""/>
            </div>
        );
    }
}

export default FrontpageComponent;
