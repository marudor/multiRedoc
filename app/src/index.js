import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import RedocPage from './RedocPage/RedocPage';
import SelectApiPage from './SelectApiPage/SelectApiPage';

ReactDOM.render(
  <Router basename={window._env_.BASE_NAME}>
    <div>
      <Route exact path="/" component={SelectApiPage} />
      <Route path="/:api" component={RedocPage} />
    </div>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
