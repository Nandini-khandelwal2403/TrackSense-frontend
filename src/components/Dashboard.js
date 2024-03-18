import React from 'react'
import { Col, Container, Row, CardGroup, Card, CardImg, CardBody } from 'reactstrap'
import './Dashboard.css'
import { CardTitle } from 'reactstrap';
import { CardSubtitle } from 'reactstrap';
import { CardText } from 'reactstrap';
import { Button } from 'reactstrap';

import MainPanel from './MainPanel';


function Dashboard() {
  return (
    <div>
        <Container fluid>
            <Row>
                <Col id="sidePanel" className='bg-light' xs="3"></Col>
                <MainPanel />
            </Row>
        </Container>
    </div>
  );
}

export default Dashboard