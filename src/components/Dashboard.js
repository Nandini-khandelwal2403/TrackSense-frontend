import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import './Dashboard.css'

function Dashboard() {
  return (
    <div>
        <Container fluid>
            <Row>
                <Col id="sidePanel" className='bg-light' xs="3"></Col>
                <Col id="mainPanel" className='bg-light' xs="9"></Col>
            </Row>
        </Container>
    </div>
  )
}

export default Dashboard