import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { all } from 'redux-saga/effects';
import {myWebSaga, myWebReducer} from './modules/myWeb';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

const sagaMiddleware = createSagaMiddleware();

//순서 중요함 . saga running전에 mount시키기. 
function configureStore() {
  const store = createStore(
    myWebReducer, 
    composeWithDevTools(applyMiddleware(sagaMiddleware, logger)))
    sagaMiddleware.run(myWebSaga);
    return { store} ;
}

const { store } = configureStore();

ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  </Provider>,
  document.getElementById('root')
);
