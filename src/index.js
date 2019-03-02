import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import { Provider } from "react-redux";
import * as serviceWorker from './serviceWorker';
import ToDo from './components/ToDo';
import reducer from './reducers/reducer';

ReactDOM.render(
    <Provider store={createStore(reducer, [])}>
      <ToDo title="Список задач"/>
    </Provider>,
    document.getElementById('app')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
