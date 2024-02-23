import React, { Component } from "react";

export default class ProductCard extends Component {
  reder() {
    let { dataProduct, desc } = this.props;
    return (
      <div className="card">
        <img src={dataProduct.img} className="card-img-top" alt="Title" />
        <div className="card-body">
          <h4 className="card-title">{dataProduct.name}</h4>
          <p className="card-text">{dataProduct.age}</p>
          {desc}
        </div>
      </div>
    );
  }
}
