import React, { Component } from 'react';

export default function ProductTable(props) {
  return (
    <table>
      <thead>
        <tr>
          <th>Product ID</th>
          <th>Product Name</th>
          <th>Platform</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {
          props.products.map(product => (
            <tr>
              <td>{product.product_id}</td>
              <td>{product.product_name}</td>
              <td>{product.platform}</td>
              <td>{product.product_price}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  );
}
