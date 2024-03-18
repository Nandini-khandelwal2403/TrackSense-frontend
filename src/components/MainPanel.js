import React from "react";
import { Col, Container, Row, CardGroup, Card, CardBody } from "reactstrap";
import "./MainPanel.css";
import { CardTitle } from "reactstrap";
import { CardSubtitle } from "reactstrap";
import { CardText } from "reactstrap";
import { Button } from "reactstrap";

function MainPanel() {
    return (
        <Col id="mainPanel" className="bg-light" xs="9">
        <Row className="jumbo-title">Your Expenses</Row>
        <Row>
            <CardGroup className="jumbo-cards">
            <Card>
                <CardBody>
                <CardTitle tag="h4">Today's Expenses</CardTitle>
                <CardTitle tag="h1" className="card-expense">
                    ₹1,380
                </CardTitle>
                </CardBody>
            </Card>
            <Card>
                <CardBody>
                <CardTitle tag="h4">Weekly Expenses</CardTitle>
                <CardTitle tag="h1" className="card-expense">
                    ₹14,350
                </CardTitle>
                </CardBody>
            </Card>
            <Card>
                <CardBody>
                <CardTitle tag="h4">Monthly Expenses</CardTitle>
                <CardTitle tag="h1" className="card-expense">
                    ₹54,000
                </CardTitle>
                </CardBody>
            </Card>
            </CardGroup>
        </Row>
        </Col>
    );
}

export default MainPanel;