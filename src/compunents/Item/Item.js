import React from 'react';
import './Item.css';
import { Container, Card, CardDeck } from 'react-bootstrap';

const Item = (props) => {
    return (
        <div className="col-lg-4">
            <Container>
                <CardDeck className="cards">
                    <Card className="food-card" onClick={() => props.handleItem(props.item)}>
                        <Card.Img className="card-img" variant="top" src={props.item.image} />

                        <Card.Body>
                            <Card.Title>{props.item.title}</Card.Title>
                            <small>{props.item.phrase}</small>
                            <h5>
                                ${props.item.price}
                            </h5>
                        </Card.Body>

                    </Card>
                </CardDeck>
            </Container>

        </div>
    );
};

export default Item;