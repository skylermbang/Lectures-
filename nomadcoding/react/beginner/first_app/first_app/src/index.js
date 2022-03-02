import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import TodoApp from './todoApp'
import MovieApp from './movieApp'
import CoinTracker from './coinTrackerApp'
import Backoffice from './backofficeApp'
//import "./style.css"
ReactDOM.render(
  <React.StrictMode>
    <Backoffice />
  </React.StrictMode>,
  document.getElementById('root')
);
