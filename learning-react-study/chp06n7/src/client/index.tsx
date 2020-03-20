import React from "react";
import ReactDOM from "react-dom";

import * as serviceWorker from "./serviceWorker";

import IterationSample from "components/IterationSample";
import App from 'components/App'

ReactDOM.render(<App />, document.getElementById("root"));



/* import App from 'components/sample/App';
ReactDOM.render(
  <App name="tester" />
  , document.getElementById('root')
); */

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

// serviceWorker.unregister();
serviceWorker.register();
