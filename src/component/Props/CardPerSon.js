import React, { Component } from "react";

export default class CardPerSon extends Component {
  reder() {
    return (
      <div className="card">
        <img className="card-img-top" src={img} alt="Title" />
        <div className="card-body">
          <h4 className="card-title">{ten}</h4>
          <p className="card-text">{age}</p>
        </div>
      </div>
    );
  }
}
