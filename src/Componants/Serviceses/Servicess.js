import React from 'react';
import { Row } from 'react-bootstrap';
import useServices from '../../hooks/useServices';
import Service from '../Service/Service';
import './Servicess.css';

const Servicess = () => {
    const [services] = useServices();
    console.log(services);
    return (
        <div className="servicess">
            <h1>Our Packagess: </h1>
            <Row xs={1} md={3} className="g-4">
                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }
            </Row>
        </div>
    );
};

export default Servicess;