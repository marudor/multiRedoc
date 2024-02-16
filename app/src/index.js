import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import RedocPage from './RedocPage/RedocPage';
import SelectApiPage from './SelectApiPage/SelectApiPage';

const root = createRoot(document.getElementById('root'));

root.render(
  <Router basename={window._env_.BASE_NAME}>
    <div>
      <Routes>
        <Route exact path="/" Component={SelectApiPage} />
        <Route path="/:api" Component={RedocPage} />
      </Routes>
    </div>
  </Router>,
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
