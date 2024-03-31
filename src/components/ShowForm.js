import React, {useState} from 'react'
import { Button } from 'reactstrap'
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import axios from 'axios'
import './ShowForm.css'

function ShowForm({modal, toggle, setList}) {
    const today = new Date();
    const date = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
    const [selectedOption, setSelectedOption] = useState('');
    function handleChange(event) {
        setSelectedOption(event.target.value);
    }

    function handleModalSubmit(){
        const desc = document.getElementById("item").value
        const cost = document.getElementById("cost").value
        const date = document.getElementById("date").value
        const tag = selectedOption;
        const obj = {'desc': desc, 'cost': cost, 'date' : Date.parse(date), tag}
        console.log(obj)

        fetch('/addexpense', {
            method: 'POST',
            headers: {
                'Accept': '/',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': "GET, POST, PUT, DELETE"
            },
            body: JSON.stringify({'desc': desc, 'cost': cost, 'date' : Date.parse(date), tag})
        }).then(response => {
            // console.log(response);
            return response.json();
        }).then(data => {
            console.log(data);
            setList();
        });
        toggle();
    }
    
  return (
    <div>
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Add expense</ModalHeader>
            <ModalBody >
                <div className='modalBody' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <input type="text" id='item' placeholder='Description (eg. lunch, cab, rent)' className='formInput' />
                    <br />
                    <input type="number" id='cost' placeholder='Cost (eg. 143.50)' className='formInput' />
                    <br />
                    <input type="date" name="date" id="date" defaultValue={date} />
                    <div className='radioModal'>
                        <span className='radioModal-tag'>Tags : </span>
                        <Button color="danger" size="sm" value="Red" onClick={handleChange} active={selectedOption === 'Red'} outline={selectedOption !== 'Red'} className='radioModal-tag'>Red</Button>
                        <Button color="warning" size="sm" value="Yellow" onClick={handleChange} active={selectedOption === 'Yellow'} outline={selectedOption !== 'Yellow'} className='radioModal-tag'>Yellow</Button>
                        <Button color="success" size="sm" value="Green" onClick={handleChange} active={selectedOption === 'Green'} outline={selectedOption !== 'Green'} className='radioModal-tag'>Green</Button>
                    </div>
                </div>
            
            </ModalBody>
            <ModalFooter>
                <Button className='submitButton' onClick={handleModalSubmit}>
                    Submit
                </Button>{' '}
            </ModalFooter>
        </Modal>
        
    </div>
  )
}

export default ShowForm