import React, { Component } from "react";
import { Provider } from "react-redux";
import Home from './containers/Home'
import store from "./store";
import { initializeIcons } from '@uifabric/icons';
initializeIcons()

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    );
  }
}

export default App;
