import React from 'react';
import Decoration from "../assets/Decoration.svg";
import Icon1 from "../assets/Icon-1.svg";
import Icon2 from "../assets/Icon-2.svg";
import Icon3 from "../assets/Icon-3.svg";
import Icon4 from "../assets/Icon-4.svg";
import {Link} from "react-router-dom";

const HomeSimpleSteps = () => {
    return (
        <div className="homeSimpleStepsBox" id="HomeSimpleSteps">
            <div className="homeSimpleStepsBox_Title">
                Wystarczą 4 proste kroki
            </div>
            <img src={Decoration}
                 alt="Decoration sign"/>
            <div className="homeSimpleStepsBox_Content">
                <div className="homeSimpleStepsBox_Content-Choose">
                    <img src={Icon1}
                         alt="Icon one"/>
                    <div className="homeSimpleStepsBox_Content-Choose_Title">Wybierz rzeczy</div>
                    <div className="homeSimpleStepsBox_Content-Choose_Text">ubrania, zabawki, sprzęt i inne</div>
                </div>
                <div className="homeSimpleStepsBox_Content-Pack">
                    <img src={Icon2}
                         alt="Icon two"/>
                    <div className="homeSimpleStepsBox_Content-Pack_Title">Spakuj je</div>
                    <div className="homeSimpleStepsBox_Content-Pack_Text">skorzystaj z worków na śmieci</div>
                </div>
                <div className="homeSimpleStepsBox_Content-Who">
                    <img src={Icon3}
                         alt="Icon three"/>
                    <div className="homeSimpleStepsBox_Content-Who_Title">Zdecyduj komu chcesz pomóc</div>
                    <div className="homeSimpleStepsBox_Content-Who_Text">wybierz zaufane miejsce</div>
                </div>
                <div className="homeSimpleStepsBox_Content-Order">
                    <img src={Icon4}
                         alt="Icon four"/>
                    <div className="homeSimpleStepsBox_Content-Order_Title">Zamów kuriera</div>
                    <div className="homeSimpleStepsBox_Content-Order_Text">kurier przyjedzie w dogodnym terminie</div>
                </div>
            </div>

            <div className="homeSimpleStepsBox_Btn">
                <Link className="Link-btn"
                      to="/logowanie">
                        <p>ODDAJ</p>
                        <p>RZECZY</p>
                </Link>
            </div>
        </div>
    );
};

export default HomeSimpleSteps;