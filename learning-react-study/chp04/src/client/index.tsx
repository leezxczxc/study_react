import * as React from 'react'
import * as ReactDOM from 'react-dom'

import * as serviceWorker from './serviceWorker'

import EventPractice from 'components/EventPractice_4.3'

ReactDOM.render(
  <EventPractice />
  , document.getElementById('root')
);

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