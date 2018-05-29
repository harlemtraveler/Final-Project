import React, { Component } from 'react';
import './App.css';

class Product extends Component {
  render() {
    return (
      <div>
        <figure>
          <div>
            <img src="#" />
          </div>
          <figcaption>
            <div>
              <a><i className="larger caret up icon" /></a>
            </div>
            <h2>Title</h2>
            <h3>author</h3>
            <h4>post date</h4>
            <p>
              This is my description of my script for sell!
            </p>
          </figcaption>
        </figure>
      </div>
    )
  }
}

export default Product;
