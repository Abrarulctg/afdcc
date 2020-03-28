import React from 'react';
import { CardDeck, Card, Container } from 'react-bootstrap';
import img1 from './image/delivery.png';
import img2 from './image/auto-responder.png';
import img3 from './image/home-delivery.png';

const WhyChoose = () => {
    return (
        <div>
            <h1>Why you Choose us</h1>
            <div>
            <Container>
                <CardDeck>
                    <Card>
                        <Card.Img variant="top" src={img1} />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                            </Card.Text>
                        </Card.Body>
                        
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={img2} />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This card has supporting text below as a natural lead-in to additional content.{' '}
                            </Card.Text>
                        </Card.Body>
                        
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={img3} />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This card has even longer content than the first to
                                show that equal height action.
                                </Card.Text>
                        </Card.Body>
                        
                    </Card>
                </CardDeck>
            </Container>
            </div>

        </div>
    );
};

export default WhyChoose;