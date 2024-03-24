import React from 'react';
import { Container, Row } from 'reactstrap';
import './Dashboard.css';
import SidePanel from './SidePanel';

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

export default Dashboard;