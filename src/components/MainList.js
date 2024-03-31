import React, { useEffect } from 'react';

import { Row, Col, ListGroup, ListGroupItem, Button } from 'reactstrap';
import './MainList.css';

function MainList({listData}) {

    const [expenses, setExpenses] = React.useState(listData);

    useEffect(() => {
        const sortedListData = [...listData].sort((a, b) => new Date(b.date) - new Date(a.date));
        setExpenses(sortedListData);
        
        // setExpenses(listData);

    }, [listData]);

    // expenses.sort((a, b) => new Date(b.date) - new Date(a.date));
    // const [reload, setReload] = React.useState(false);

    // const sortByTag = () => {
    //     var temp = expenses;
    //     temp.sort((a, b) => {
    //         if (a.tag < b.tag) {
    //         return -1;
    //         }
    //         if (a.tag > b.tag) {
    //         return 1;
    //         }
    //         return 0;
    //     });
    //     console.log(temp);
    //     setExpenses(temp);
    // }
    const sortByDate = () => {
        const sortedExpenses = [...expenses].sort((a, b) => new Date(b.date) - new Date(a.date));
        setExpenses(sortedExpenses);
        setSortOrder(null); // reset the sort order
    }
    const sortByTag = () => {
        // Define an order for the tags
        const tagOrder = ['Red', 'Yellow', 'Green'];
        console.log(expenses);
      
        // Create a new sorted array
        const sortedExpenses = [...expenses].sort((a, b) => {
          // Compare the tagOrder indices of the two tags
          const orderA = tagOrder.indexOf(a.tag);
          const orderB = tagOrder.indexOf(b.tag);
      
          if (orderA !== orderB) {
            // If the tags are different, sort by the order defined in tagOrder
            return orderA - orderB;
          }
      
          // If the tags are the same (and you want to sort by another attribute within the same tag group),
          // you can add additional comparisons here. For example, to sort by date within each tag group:
          // return new Date(b.date) - new Date(a.date);
      
          // Or if there's no need to sort within the groups, just return 0
          return 0;
        });
      
        // Update the state with the new sorted array
        console.log(sortedExpenses);
        setExpenses(sortedExpenses);
        setSortOrder(null); // reset the sort order
    }
    
    const [sortOrder, setSortOrder] = React.useState(null); // true for ascending, false for descending

    const sortByCost = () => {
        if (sortOrder === null) {
            setSortOrder(true); // default to ascending order
        }
        const sortedExpenses = [...expenses].sort((a, b) => sortOrder ? a.cost - b.cost : b.cost - a.cost);
        setExpenses(sortedExpenses);
        setSortOrder(!sortOrder); // toggle the sort order for the next click
    }
    
        
    
  
    

    return (
    <Row>
        <Row className="transaction-group-date ">
            <ListGroup flush className=''>
                <ListGroupItem
                    href="#"
                    tag="a"
                >
                    <Row xs="4" className='heading'>
                        <Col className="datablock " onClick={sortByDate}>
                        Date
                        </Col>
                        <Col className="datablock ">
                        Description
                        </Col>
                        <Col className="datablock " onClick={sortByCost}>
                        Cost {sortOrder !== null && (sortOrder ? <span>&uarr;</span> : <span>&darr;</span>)}
                        </Col>
                        <Col className="datablock " onClick={sortByTag}>
                        Tags
                        </Col>
                    </Row>
                </ListGroupItem>
            </ListGroup>
            <div className="transaction-group-date scrollable" style={{paddingLeft: 0}}>
                {/* For Webkit browsers (Chrome, Safari) */}
                {/* <style>
                    {`.scrollable::-webkit-scrollbar {display: none;}`}
                </style> */}
                
                <ListGroup flush className=''>
                {expenses && expenses.map((expense, index) => (
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
                            {
                                expense.tag === 'Red' ? <Button color="danger" size="sm" className='tag red'>{expense.tag}</Button>:
                                expense.tag === 'Yellow' ? <Button color="warning" size="sm" className='tag yellow'>{expense.tag}</Button>:
                                <Button color="success" size="sm" className='tag green'>{expense.tag}</Button>
                            
                            }
                            
                            </Col>
                        </Row>
                    </ListGroupItem>
                ))}
                </ListGroup>
            </div>
        </Row>
    </Row>
    );
    

}

export default MainList;