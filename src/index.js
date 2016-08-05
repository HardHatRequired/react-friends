import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/app';

import "./styles.css"

document.addEventListener("DOMContentLoaded", () => {
  const reactNode = document.getElementById("react-node");
    if(reactNode) {
      ReactDOM.render(<App/>, reactNode)
    }
});

// ReactDOM.render(<App />, document.getElementById('app'));
