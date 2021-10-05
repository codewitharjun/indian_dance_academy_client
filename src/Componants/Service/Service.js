import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import './Service.css';

const Service = (props) => {
    console.log(props.service);
    const {name, price, img} = props.service;
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>Name: {name}</Card.Title>
                    <Card.Text>New Batch Start at 2nd Jan 2022. </Card.Text>
                    <Card.Title>Price: ${price}</Card.Title>
                    <div className="price-details">
                        <Button variant="warning">Enroll Now</Button>
                        <Button variant="primary">View Details</Button>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;