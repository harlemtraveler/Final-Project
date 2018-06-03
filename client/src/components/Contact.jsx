import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import PageTemplate from './partials/PageTemplate';

export default function Contact(props) {
  return (
    <div>
      <PageTemplate />
      <h1>Contact Page</h1>
    </div>
  );
}
