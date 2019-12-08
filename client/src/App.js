import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Provider } from 'react-redux'
import { Container } from 'reactstrap'

import AppNavbar from './components/AppNavbar'
import ShoppingList from './components/ShoppingList'
import ItemModal from './components/ItemModal'
import './App.css';
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AppNavbar />
        <Container>
          <ItemModal />
          <ShoppingList />
        </Container>
      </div>
    </Provider>
  );
}

export default App;
