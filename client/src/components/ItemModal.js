import React from 'react'
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap'
import { useDispatch } from 'react-redux'

import { addItem } from '../actions/itemActions'

const ItemModal = () => {
  const [modal, setModal] = React.useState(false)
  const [name, setName] = React.useState('')

  const dispatch = useDispatch()

  const toggle = () => setModal(!modal)

  const onSubmit = (e) => {
    e.preventDefault()

    dispatch(addItem({ name }))

    toggle()
  }

  return (
    <div>
      <Button
        color="dark"
        style={{marginBottom: '2rem'}}
        onClick={toggle}
      >
        Add Item
      </Button>

      <Modal
        isOpen={modal}
        toggle={toggle}
      >
        <ModalHeader toggle={toggle}>Add to Shopping List</ModalHeader>
        <ModalBody>
          <Form onSubmit={onSubmit}>
            <FormGroup>
              <Label for="item">Item</Label>
              <Input
                type='text'
                name="name"
                id="item"
                placeholder="Add shopping item"
                onChange={(e) => setName(e.target.value)}
              />
              <Button
                color="dark"
                style={{ marginTop: '2rem'}}
                block
              >
                Add Item
              </Button>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  )
}

export default ItemModal