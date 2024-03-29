import React from 'react';
import { Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import './MainList.css';

function MainList() {

  const [expenses, setExpenses] = React.useState([]);
  const [slNo, setSlNo] = React.useState(1);
  const [update, setUpdate] = React.useState(false);
  

React.useEffect(() => {
    // const abortController = new AbortController();
    // const signal = abortController.signal;

    fetch('/getexpenses')
        .then(response => {
            console.log(response);
            return response.json();
        })
        .then(data => {
            console.log(data);
            setExpenses(data);
            // setUpdate(!update);
        });

    
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
                      {new Date(expense.date).toLocaleDateString('en-US', { day: 'numeric', month: 'short' })}
                      </Col>
                      <Col className="datablock ">
                      {expense.desc}
                      </Col>
                      <Col className="datablock ">
                      {expense.cost}
                      </Col>
                      <Col className="datablock ">
                      {expense.tag}
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