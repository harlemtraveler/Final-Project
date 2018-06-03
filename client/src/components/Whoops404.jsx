import React, { Component } from 'react';
import { HashRouter, Route, Switch, Link } from 'react-router-dom';

const Whoops404 = ({ location }) =>
  <div classsName="whoops-404">
    <h1>Resource not found at '{location.pathname}'</h1>
    <h1 className="fourOfour">404</h1>
  </div>

export default Whoops404;
