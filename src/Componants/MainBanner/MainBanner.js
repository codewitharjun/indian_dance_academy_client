import React from 'react';
import madhuri from '../../images/madhuri_dixit_1.jpg';
import Prabhudeva from '../../images/Prabhudeva_5.jpg';
import Hrithik from '../../images/Hrithik_at_Rado_launch.jpg';
import Madonna from '../../images/Madonna_Rebel_Heart.jpg';
import  './MainBanner.css';

const MainBanner = () => {
    return (
        <div className="main-banner">
            <div className="quates">
                <h2>Dance is the hidden language of the soul.</h2>
                <h4>-MARTHIN GRAHAM</h4>
            </div>
            <div>
                <div className="star-img">
                    <img src={madhuri} alt=""/>
                    <img src={Prabhudeva} alt=""/>

                </div>
                <div className="star-img">
                    <img src={Hrithik} alt=""/>
                    <img src={Madonna} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default MainBanner;