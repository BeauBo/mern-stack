import React from 'react'
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import uuid from 'uuid'

const ShoppingList = () => {
  const [items, setItems] = React.useState([
    { id: uuid.v4(), name: 'Egges'},
    { id: uuid.v4(), name: 'Milk'},
    { id: uuid.v4(), name: 'Steak'},
    { id: uuid.v4(), name: 'Water'},
  ])

  return (
    <Container>
      <Button
        color="dark"
        style={{ marginBottom: '2rem'}}
        onClick={() => {
          const name = prompt('Enter Item')
          if(name) {
            setItems([...items, {id: uuid.v4(), name}])
          }
        }}
      >
        Add Item
      </Button>
      <ListGroup>
        <TransitionGroup className="shopping-list">
          {items.map(({ id, name}) => (
            <CSSTransition key={id} timeout={500} classNames="fade">
              <ListGroupItem>
              <Button
                className="remove-btn"
                color="danger"
                size="sm"
                onClick={() => {
                  setItems(items.filter(item => item.id !== id))
                }}
              >
              &times;
              </Button>
              {name}
              </ListGroupItem>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </ListGroup>
    </Container>
  )
}

export default ShoppingList