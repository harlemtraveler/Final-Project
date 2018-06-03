import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';
import Header from './partials/Header';
import ComputerIcon from '../img/computer.png';
import ProfilePicture from '../img/profile_picture.png';
import ProductTable from './ProductTable';
import PageTemplate from './partials/PageTemplate';

class Products extends Component {
  render() {
    return (
      <div>
        <PageTemplate />
        <ProductTable
          products={this.props.products}
        />
      </div>
    );
  }
}

export default Products;
