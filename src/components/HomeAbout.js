import React from 'react';
import HomePeople from "../assets/People.jpg";
import Decoration from "../assets/Decoration.svg";
import Signature from "../assets/Signature.svg";

const HomeAbout = () => {
    return (
        <div className="homeAboutBox" id="HomeAbout">
            <div className="homeAboutBox_Content">
                <div className="homeAboutBox__Title">
                    O nas
                </div>
                <img src={Decoration} alt="Decoration sign"/>
                <div className="homeAboutBox__Text">
                    Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. <br/>
                    Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.
                </div>
                <img className="homeAboutBox__Signature" src={Signature} alt="Signature"/>
            < /div>
            <div className="homeAboutBox_Image"
                 style={{backgroundImage:`url(${HomePeople})`}}>
            < /div>

        </div>
    );
};

export default HomeAbout;