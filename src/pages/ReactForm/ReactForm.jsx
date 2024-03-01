import React, { Component } from "react";
import ProductForm from "./ProductForm";

export default class ReactForm extends Component {
  state = {
    arrProduct: [
      {
        id: 1,
        tenSp: "iphone",
        img: "https://picsum.photos/id/1/200/200",
        price: 5000,
        // quantitty: 1,
      },
      {
        id: 2,
        tenSp: "Samsung",
        img: "https://picsum.photos/id/2/200/200",
        price: 7000,
        // quantitty: 1,
      },
    ],
    productEdit: {
      id: 1,
      tenSp: "iphone",
      img: "https://picsum.photos/id/1/200/200",
      price: 5000,
    },
  };

  handleAddProduct = (proClick) => {
    // console.log("😢 ~ ReactForm ~ proClick", proClick);
    // let newPro = { ...proClick, quantitty: 1 };
    let arrUpdate = [...this.state.arrProduct];
    arrUpdate.push(proClick);
    this.setState({
      arrProduct: arrUpdate,
    });
    // Check xem product đó có tồn tại chưa, nếu tồn tại thì tăng số lượng, chưa thì thêm vào giỏ hàng
    // let proCheck = arrUpdate.find((item) => {
    //   item.id === proClick.id;
    // });
    // if (proCheck) {
    //   proCheck.quantitty += 1;
    // } else {
    //   arrUpdate.push(proCheck);
    // }
  };

  handleDeleteProduct = (idProduct) => {
    console.log(idProduct);
    let newArrPro = this.state.arrProduct.filter(
      (item) => item.id != idProduct
    );
    this.setState({ arrProduct: newArrPro });
  };

  handleEditProduct = (proClick) => {
    this.setState({ productEdit: proClick });
  };

  render() {
    return (
      <div>
        <h3>Bài tập react form</h3>

        <ProductForm
          handleAddProduct={this.handleAddProduct}
          productEdit={this.state.productEdit}
        />

        <table className="table container mt-4">
          <thead>
            <tr className="table-dark">
              <th>id</th>
              <th>name</th>
              <th>Image</th>
              <th>Price</th>
              {/* <th>Quantity</th> */}
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.arrProduct.map((phone) => {
              return (
                <tr>
                  <td>{phone.id}</td>
                  <td>{phone.tenSp}</td>
                  <td>
                    <img src={phone.img} height={50} alt="" />
                  </td>
                  <td>{phone.price}</td>
                  {/* <td>{phones.quantitty}</td> */}
                  <td>
                    <button
                      onClick={() => {
                        this.handleEditProduct(phone);
                      }}
                      className="btn btn-primary"
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-success"
                      onClick={() => {
                        this.handleDeleteProduct(phone.id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
