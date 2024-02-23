import React, { Component } from "react";
import ItemCard from "./itemCard";

export default class ListProductItem extends Component {
  renderListShoe() {
    let { dataShoeList } = this.props;
    console.log(
      "😢 ~ ListProductItem ~ renderListShoe ~ dataShoeList",
      dataShoeList
    );

    let contentCardShoe = dataShoeList.map((shoe, index) => {
      return (
        <div key={index} className="col-4">
          <ItemCard dataShoe={shoe} />
        </div>
      );
    });
    return contentCardShoe;
  }
  render() {
    return <div className="row">{this.renderListShoe()}</div>;
  }
}
