import React from 'react';
import Background from "../assets/3 Columns Background.png";
// import Background from "../assets/Background-Form.jpg";


const HomeThreeColumns = () => {
    return (
        <div className="homeThreeColumnsBox" style={{backgroundImage:`url(${Background})`}}>
            <div className="homeThreeColumnsBox_Column">
                <div className="homeThreeColumnsBox__Number">10</div>
                <div className="homeThreeColumnsBox__Title">ODDANYCH WORKÓW</div>
                <div className="homeThreeColumnsBox__Text">Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</div>
            </div>
            <div className="homeThreeColumnsBox_Column">
                <div className="homeThreeColumnsBox__Number">5</div>
                <div className="homeThreeColumnsBox__Title">WSPARTYCH ORGANIZACJI</div>
                <div className="homeThreeColumnsBox__Text">Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</div>
            </div>
            <div className="homeThreeColumnsBox_Column">
                <div className="homeThreeColumnsBox__Number">7</div>
                <div className="homeThreeColumnsBox__Title">ZORGANIZOWANY ZBIÓREK</div>
                <div className="homeThreeColumnsBox__Text">Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</div>
            </div>
        </div>
    );
};

export default HomeThreeColumns;