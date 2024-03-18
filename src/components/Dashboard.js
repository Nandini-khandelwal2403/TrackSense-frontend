import React from 'react'
import { Col, Container, Row, CardGroup, Card, CardImg, CardBody } from 'reactstrap'
import './Dashboard.css'
import SidePanel from './SidePanel';
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
                <SidePanel />
                <MainPanel />
            </Row>
        </Container>
    </div>
  );
}

export default Dashboard