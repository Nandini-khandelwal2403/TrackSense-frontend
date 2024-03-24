import React from "react";
import { Col, Container, Row, CardGroup, Card, CardBody } from "reactstrap";
import "./MainPanel.css";
import { CardTitle } from "reactstrap";
import { CardSubtitle } from "reactstrap";
import { CardText } from "reactstrap";
import { Button } from "reactstrap";
import MainList from "./mainlist";
import JumboCard from "./JumboCard";

function MainPanel() {
    return (
        <Col id="mainPanel" className="bg-light" xs="9">
        <Row className="jumbo-title">Your Expenses</Row>
        <JumboCard />
        <Row className="transaction-list-title jumbo-title">Transactions</Row>
        <MainList />
        </Col>
    );
}

export default MainPanel;