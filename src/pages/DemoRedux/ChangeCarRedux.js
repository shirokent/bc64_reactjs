import React, { Component } from "react";
import { connect } from "react-redux";
import { changeCarAction } from "../../redux/reducers/imgReducer";

class ChangeCarRedux extends Component {
  handleChangeCar = (img) => {
    // console.log("😢 ~ img", img);
    let { dispatch } = this.props;

    // const action = {
    //   type: "HANDLE_CHANGE_CAR",
    //   payload: img,
    // };

    const action = changeCarAction(img);
    dispatch(action);
  };
  render() {
    let { img } = this.props;
    return (
      <div className="container">
        <div className="d-flex">
          <div className="w-50">
            <img src={img.imgCar} alt="" width={500} />
          </div>
          <div className="w-50">
            <button
              onClick={() => {
                this.handleChangeCar("./img/products/red-car.jpg");
              }}
              className="btn btn-danger"
            >
              Red
            </button>
            <button
              onClick={() => {
                this.handleChangeCar("./img/products/black-car.jpg");
              }}
              className="btn btn-dark"
            >
              Black
            </button>
            <button
              onClick={() => {
                this.handleChangeCar("./img/products/silver-car.jpg");
              }}
              className="btn btn-light"
            >
              Silver
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    img: state.img,
  };
};

const ComponentWithRedux = connect(mapStateToProps)(ChangeCarRedux);

export default ComponentWithRedux;
