import React from 'react'
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { useSelector, useDispatch } from 'react-redux'

import { getItems, deleteItem } from '../actions/itemActions'

const ShoppingList = (props) => {

  const items = useSelector(state => state.item.items)
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(getItems())
  }, [dispatch])

  return (
    <Container>
      <ListGroup>
        <TransitionGroup className="shopping-list">
          {items.map(({ _id, name}) => (
            <CSSTransition key={_id} timeout={500} classNames="fade">
              <ListGroupItem>
              <Button
                className="remove-btn"
                color="danger"
                size="sm"
                onClick={() => dispatch(deleteItem(_id))}
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