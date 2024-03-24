import React from 'react';
import { Row, Col, ListGroup, ListGroupItem } from 'reactstrap';

function MainList() {
  return (
    <Row>
        <ListGroup flush>
        <ListGroupItem
            href="#"
            tag="a"
        >
            <Row xs="4">
                <Col className="bg-light border">
                Column
                </Col>
                <Col className="bg-light border">
                Column
                </Col>
                <Col className="bg-light border">
                Column
                </Col>
                <Col className="bg-light border">
                Column
                </Col>
            </Row>
        </ListGroupItem>
        <ListGroupItem
            href="#"
            tag="a"
        >
            <Row xs="4">
                <Col className="bg-light border">
                Column
                </Col>
                <Col className="bg-light border">
                Column
                </Col>
                <Col className="bg-light border">
                Column
                </Col>
                <Col className="bg-light border">
                Column
                </Col>
            </Row>
        </ListGroupItem>
        <ListGroupItem
            href="#"
            tag="a"
        >
            <Row xs="4">
                <Col className="bg-light border">
                Column
                </Col>
                <Col className="bg-light border">
                Column
                </Col>
                <Col className="bg-light border">
                Column
                </Col>
                <Col className="bg-light border">
                Column
                </Col>
            </Row>
        </ListGroupItem>
        <ListGroupItem
            href="#"
            tag="a"
        >
            <Row xs="4">
                <Col className="bg-light border">
                Column
                </Col>
                <Col className="bg-light border">
                Column
                </Col>
                <Col className="bg-light border">
                Column
                </Col>
                <Col className="bg-light border">
                Column
                </Col>
            </Row>
        </ListGroupItem>
        <ListGroupItem
            href="#"
            tag="a"
        >
            <Row xs="4">
                <Col className="bg-light border">
                Column
                </Col>
                <Col className="bg-light border">
                Column
                </Col>
                <Col className="bg-light border">
                Column
                </Col>
                <Col className="bg-light border">
                Column
                </Col>
            </Row>
        </ListGroupItem>
        </ListGroup>
    </Row>
  );
}

export default MainList;