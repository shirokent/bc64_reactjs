import React, { Component } from "react";

export default class ItemCard extends Component {
  render() {
    return (
      <div class="card">
        <img class="card-img-top" src="" alt="Title" />
        <div class="card-body">
          <h4 class="card-title">name</h4>
          <p class="card-text">Price</p>
          <button>Add Product</button>
        </div>
      </div>
    );
  }
}
