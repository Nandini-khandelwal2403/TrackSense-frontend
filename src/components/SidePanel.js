import React from 'react'
import { Card, Col } from 'reactstrap'
import './SidePanel.css'

function getDate() {
    const today = new Date();
    // const month = today.getMonth() + 1;
    // const year = today.getFullYear();
    // const date = today.getDate();
    const options = { month: 'long', day: 'numeric'};
    const formattedDate = today.toLocaleDateString('en-US', options);
    return formattedDate;
}

function SidePanel() {
  return (
    <Col id="sidePanel" xs="3">
        <Card className='date'>
            <span>{getDate()}</span>
        </Card>
    </Col>
  )
}

export default SidePanel