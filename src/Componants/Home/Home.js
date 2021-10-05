import React from 'react';
import Crasol from '../../images/bg4.jpeg';
import { Row } from 'react-bootstrap';
import useServices from '../../hooks/useServices';
import Service from '../Service/Service';
import MainBanner from '../MainBanner/MainBanner';
import './Home.css'

const Home = () => {
    const [services] = useServices();
    console.log(services);
    return (
        <div className="servicess">
            <div style={{backgroundImage: `url(${Crasol})` }}>
                <MainBanner></MainBanner>
            </div>
            <div className="packegs">
                <h3>Top List By Students</h3>
                <Row xs={1} md={2} lg={4} className="g-4">
                    {
                        services.map(service => {
                            if(service.id >= 5 && service.id <= 8) {
                                return <Service key={service.id} service={service}></Service>
                            } else {
                                return "";
                            }
                        })
                    }
                </Row>
            </div>
            <div className="enroll">
                <div className="content">
                    <h1>Next Batch Total Enroll Students</h1>
                    <div>
                        <span>2</span>
                        <span>5</span>
                        <span>9</span>
                        <span>1</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;