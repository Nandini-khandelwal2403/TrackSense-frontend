import React from 'react';
import { Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import './MainList.css';

function MainList() {

  const [expenses, setExpenses] = React.useState([]);

  React.useEffect(() => {
    fetch('http://localhost:8080/getexpenses')
      .then(response => response.json())
      .then(data => setExpenses(data));
  }, []);

  return (
    <Row>
        <Row className="transaction-group-date">
            <ListGroup flush className=''>
            <ListGroupItem
                href="#"
                tag="a"
            >
                <Row xs="4" className='heading'>
                    <Col className="datablock ">
                    Sl. No.
                    </Col>
                    <Col className="datablock ">
                    Description
                    </Col>
                    <Col className="datablock ">
                    Cost
                    </Col>
                    <Col className="datablock ">
                    Tags
                    </Col>
                </Row>
            </ListGroupItem>
            {expenses.map((expense, index) => (
              <ListGroupItem
                  href="#"
                  tag="a"
                  key={index}
              >
                  <Row xs="4">
                      <Col className="datablock ">
                      {expense.slNo}
                      </Col>
                      <Col className="datablock ">
                      {expense.description}
                      </Col>
                      <Col className="datablock ">
                      {expense.cost}
                      </Col>
                      <Col className="datablock ">
                      {expense.tags}
                      </Col>
                  </Row>
              </ListGroupItem>
            ))}
            </ListGroup>
        </Row>
    </Row>
    );
    

}

export default MainList;