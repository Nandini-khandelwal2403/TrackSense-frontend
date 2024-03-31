import React from 'react'
import { Row, CardGroup, Card, CardBody, CardTitle } from 'reactstrap'

function JumboCard({glanceData}) {
    const [glanceObj, setGlanceObj] = React.useState(glanceData);
    React.useEffect(() => {
        setGlanceObj(glanceData);
    });
  return (
    <Row>
        <CardGroup className="jumbo-cards">
        <Card>
            <CardBody>
            <CardTitle tag="h4">Today's Expenses</CardTitle>
            <CardTitle tag="h1" className="card-expense">
                ₹{glanceObj.daily}
            </CardTitle>
            </CardBody>
        </Card>
        <Card>
            <CardBody>
            <CardTitle tag="h4">Weekly Expenses</CardTitle>
            <CardTitle tag="h1" className="card-expense">
                ₹{glanceObj.weekly}
            </CardTitle>
            </CardBody>
        </Card>
        <Card>
            <CardBody>
            <CardTitle tag="h4">Monthly Expenses</CardTitle>
            <CardTitle tag="h1" className="card-expense">
                ₹{glanceObj.monthly}
            </CardTitle>
            </CardBody>
        </Card>
        </CardGroup>
    </Row>
  )
}

export default JumboCard