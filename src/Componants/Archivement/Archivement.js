import React from 'react';
import award from '../../images/winners-together-on-stage.jpg';
import students from '../../images/s1.png';
import './Archivement.css';

const Archivement = () => {
    return (
        <div  className="achivement">
            <div className="arards">
                <div  className="arards-img">
                    <img src={award} alt=""/>
                </div>
                <div className="arards-div">
                    <h2>Yuva Sangeet Ratna and Yuva Nritya Ratna Awards 2016</h2>
                    <p>
                        Two annual arts awards for talented young artistes engaged in the performance of Classical Indian music and dance in Britain.
                        Developed to recognise and inspire exceptional young talent in the UK, winners earn the title; Yuva Nritya Ratna, and Yuva Sangeet Ratna, respectively for dance and music, a prize of £2,000 to be spent on further training and career development, a trophy, citation and performance opportunities at mainstream UK venues.  A runner up will receive a citation of distinction and a prize of £500. 
                        Open to artists between the ages of 18 and 30,  the award will raise the profile of the winners, precipitate further training and performance opportunities, and offer individual mentoring and marketing support.
                        Winners will be selected through an open and exciting competition process. Judged by a distinguished international jury of leading dance and music practitioners, academics and creative professionals, the panel will remotely short-list applicants down to six musicians and six dancers, before judging live performances at Milapfest’s prestigious Indika festival in Liverpool. The panel will select a winner and runner-up from the shortlisted candidates, and announce it at the end of the evening.
                    </p>
                </div>
                <div className="other-arards">
                    <div>
                        <h3>Other Awards :</h3>
                        <h5>Sanatan Sangeet Sanskriti 2020.</h5>
                        <h5>Kalidas Samman 2017.</h5>
                        <h5>Sangeet Natak Akademi Award 2013.</h5>
                        <h5>Tagore Ratna and Tagore Puraskar2011.</h5>
                    </div>
                </div>
                <div className="arards-div">
                    <h2>Our Photo Gallery</h2>
                </div>
                <div  className="arards-img">
                    <img src={students} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Archivement;