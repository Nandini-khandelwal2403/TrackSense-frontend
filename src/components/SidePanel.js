import React, { useState } from 'react'
import { Card, Col , Button } from 'reactstrap'
import ShowForm from './ShowForm';
import './SidePanel.css'

function getDate() {
    const today = new Date();
    const options = { month: 'long', day: 'numeric'};
    const formattedDate = today.toLocaleDateString('en-US', options);
    return formattedDate;
}

function SidePanel() {
    const [ showForm, setShowForm] = useState(false);

    
  return (
    <Col id="sidePanel" xs="3">
        <Card className='date'>
            <span>{getDate()}</span>
        </Card>
        <div className='addExpense'>
            <Button color="info" className='expenseForm' 
                onClick={() => {
                    setShowForm(true)
                }}
        >
                Add Expense
            </Button>
        </div>
        {showForm && <ShowForm closeModal={setShowForm}/>}
    </Col>
  )
}

export default SidePanel