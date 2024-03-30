import React from "react";
import { Col, Row } from "reactstrap";
import "./MainPanel.css";
import MainList from "./mainlist";
import JumboCard from "./JumboCard";

function MainPanel({expenses}) {
    return (
        <Col id="mainPanel" className="bg-light" xs="9">
        <Row className="jumbo-title">Your Expenses</Row>
        <JumboCard />
        <Row className="transaction-list-title jumbo-title">Transactions</Row>
        <MainList expenses={expenses}/>
        </Col>
    );
}

export default MainPanel;