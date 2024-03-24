import React from 'react'
import { Button } from 'reactstrap'
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import './ShowForm.css'

function ShowForm({modal, toggle}) {
    const today = new Date();
    const date = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
  return (
    <div>
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Add expense</ModalHeader>
            <ModalBody >
            {/* <Form>
                <FormGroup>
                    <Label for="item">
                    Description
                    </Label>
                    <Input
                    id="item"
                    name="item"
                    placeholder="eg. Groceries, Lunch, Cab"
                    type='text'
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="cost">
                    Cost
                    </Label>
                    <Input
                    id="cost"
                    name="cost"
                    placeholder="eg. 143.50"
                    type="number"
                    />
                </FormGroup>
                
            </Form> */}
            
                <div className='modalBody' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <input type="text" id='item' placeholder='Description (eg. lunch, cab, rent)' className='formInput' />
                    <br />
                    <input type="number" id='cost' placeholder='Cost (eg. 143.50)' className='formInput' />
                    <br />
                    

                    <input type="date" name="date" id="date" defaultValue={date} />
                </div>
            
            
            </ModalBody>
            <ModalFooter>
                <Button className='submitButton' onClick={toggle}>
                    Submit
                </Button>{' '}
            </ModalFooter>
        </Modal>
        
    </div>
  )
}

export default ShowForm