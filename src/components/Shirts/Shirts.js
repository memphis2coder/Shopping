import React from 'react'
import {Row, Col, Card, Button} from 'react-bootstrap';

// images
import shirt1 from '../../images/shirts/shirt_1.webp';
import shirt2 from '../../images/shirts/shirt_2.webp';
import shirt3 from '../../images/shirts/shirt_3.webp';

// components


export default function Shirts() {
    // array
    const shirtInfo = [
        {image: shirt1, title: "lime", text: "T-shirt", price: "$9.99"},
        {image: shirt2, title: "orange", text: "T-shirt", price: "$9.99"},
        {image: shirt3, title: "blue", text: "T-shirt", price: "$9.99"}
    ];

    // function to show cards
    const renderCard = (card, index) => {
        return (    
            <Col lg={true}>
                <Card style={{ width: '18rem', margin:'auto'}} key={index}>
                    <Card.Img variant="top" src={card.image} />
                        <Card.Body>
                            <Card.Title>{card.title}</Card.Title>
                                <Card.Text>
                                    {card.text}
                                    <br/>
                                    {card.price}
                                </Card.Text>
                            <Button variant="primary">add to cart</Button>
                    </Card.Body>
                </Card>
            </Col>
        )
    };

    return (
        <div>
            <section id="shirts-main">
                    <div className="container text-center py-5">
                        {/* Title */}
                        <h1>shirts</h1>
                        {/*Row section*/}
                            <Row className="py-5">
                                {shirtInfo.map((renderCard))}
                            </Row>
                    </div>
            </section>
        </div>
    )
};


