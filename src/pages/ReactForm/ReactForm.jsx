import React, { Component } from "react";
import ProductForm from "./ProductForm";

export default class ReactForm extends Component {
  render() {
    return (
      <div>
        <h3>Bài tập react form</h3>

        <ProductForm />

        <table className="table">
          <thead>
            <th>id</th>
            <th>name</th>
            <th>Image</th>
            <th>Price</th>
            <th>Action</th>
          </thead>
        </table>
      </div>
    );
  }
}
