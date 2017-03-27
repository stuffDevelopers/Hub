import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Time from './components/Time';
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
ReactDOM.render(
  <Time/>,
  document.getElementById('time')
);
