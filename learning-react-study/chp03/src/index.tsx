import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import MyComponents from './components/MyComponents'
import Counter from './components/Counter'
import Say from './components/Say'

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <div>
        <MyComponents name='test' />
        <Counter />
        <Say />
    </div>, document.getElementById('root')

);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
