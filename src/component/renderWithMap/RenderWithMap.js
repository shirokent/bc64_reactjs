import React, { Component } from "react";

const dataPhone = [
  { id: 1, name: "iphone", price: 1000 },
  { id: 2, name: "samSung", price: 1200 },
  { id: 3, name: "Blackbery", price: 1300 },
];

export default class RenderWithMap extends Component {
  renderIphoneListLi() {
    let contentLiJsx = [];
    dataPhone.forEach((item, index) => {
      let liJsx = <li key={item.id}>{item.name}</li>;
      contentLiJsx.push(liJsx);
    });
    return contentLiJsx; // [li,li,li]
  }

  renderListWithMap() {
    let contentListJsx = dataPhone.map((item, index) => {
      return <li key={item.id}>{item.name}</li>;
    });
    return contentListJsx; // [li,li,li]
  }

  renderListPhone() {
    let contentTrJsx = dataPhone.map((item, index) => {
      return (
        <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.price}</td>
        </tr>
      );
    });
    return contentTrJsx;
  }

  renderPhoneCard() {
    let contentCardJsx = dataPhone.map(() => {
      return (
        <div key={item.id} className="col-4">
          <div className="card" style={{ width: "18rem" }}>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text">{item.price}</p>
              <button className="btn btn-success">Mua</button>
            </div>
          </div>
        </div>
      );
    });
    return contentCardJsx;
  }

  render() {
    // return [<div>RenderWithMap</div>, <div>Hello Cyber Soft</div>]
    return (
      <div className="container">
        <h3>render ul, li</h3>
        <ul>
          {/* {this.renderIphoneListLi()} */}
          {/* With map */}
          {this.renderListWithMap}
        </ul>

        <h3>Render phone list table</h3>
        <table>
          <thead>
            <tr>
              <td>STT</td>
              <td>Name</td>
              <td>Price</td>
            </tr>
          </thead>
          <tbody>{this.renderListPhone()}</tbody>

          <h3>Render Phone Card</h3>
          <div className="row">{this.renderPhoneCard()}</div>
        </table>
      </div>
    );
  }
}
