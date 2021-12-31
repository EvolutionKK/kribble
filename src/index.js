import React from "react";
import App from "../src/App";
import { Provider } from "react-redux";
import store from "../src/redux/store";
import ReactDOM from "react-dom";

ReactDOM.render(
  <Provider store={store}>
    <App />,
  </Provider>,
  document.getElementById('root')
);
