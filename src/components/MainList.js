import React from 'react';
import { Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import './MainList.css';

function MainList() {
  return (
    <Row>
        <Row className="transaction-group-date">
            <ListGroup flush className=''>
            <ListGroupItem
                href="#"
                tag="a"
            >
                <Row xs="4" className='heading'>
                    <Col className="datablock ">
                    Sl. No.
                    </Col>
                    <Col className="datablock ">
                    Description
                    </Col>
                    <Col className="datablock ">
                    Cost
                    </Col>
                    <Col className="datablock ">
                    Tags
                    </Col>
                </Row>
            </ListGroupItem>
            <ListGroupItem
                href="#"
                tag="a"
            >
                <Row xs="4">
                    <Col className="datablock ">
                    Column
                    </Col>
                    <Col className="datablock ">
                    Column
                    </Col>
                    <Col className="datablock ">
                    Column
                    </Col>
                    <Col className="datablock ">
                    Column
                    </Col>
                </Row>
            </ListGroupItem>
            <ListGroupItem
                href="#"
                tag="a"
            >
                <Row xs="4">
                    <Col className="datablock ">
                    Column
                    </Col>
                    <Col className="datablock ">
                    Column
                    </Col>
                    <Col className="datablock ">
                    Column
                    </Col>
                    <Col className="datablock ">
                    Column
                    </Col>
                </Row>
            </ListGroupItem>
            <ListGroupItem
                href="#"
                tag="a"
            >
                <Row xs="4">
                    <Col className="datablock ">
                    Column
                    </Col>
                    <Col className="datablock ">
                    Column
                    </Col>
                    <Col className="datablock ">
                    Column
                    </Col>
                    <Col className="datablock ">
                    Column
                    </Col>
                </Row>
            </ListGroupItem>
            <ListGroupItem
                href="#"
                tag="a"
            >
                <Row xs="4">
                    <Col className="datablock ">
                    Column
                    </Col>
                    <Col className="datablock ">
                    Column
                    </Col>
                    <Col className="datablock ">
                    Column
                    </Col>
                    <Col className="datablock ">
                    Column
                    </Col>
                </Row>
            </ListGroupItem>
            </ListGroup>
        </Row>
    </Row>
  );
}

export default MainList;