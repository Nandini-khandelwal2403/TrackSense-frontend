import React from 'react'
import { Row, CardGroup, Card, CardBody, CardTitle } from 'reactstrap'

function JumboCard() {
  return (
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
  )
}

export default JumboCard