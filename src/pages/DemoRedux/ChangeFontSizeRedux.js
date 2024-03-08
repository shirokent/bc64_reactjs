import React, { Component } from "react";
import { connect } from "react-redux";
import { changeFontSizeAction } from "../../redux/reducers/fsizeReducer";

export class ChangeFontSizeRedux extends Component {
  render() {
    let { fsize, dispatch } = this.props;
    return (
      <div className="container">
        <h3
          style={{
            fontSize: `${fsize.size}px`,
          }}
        >
          lorem
        </h3>
        <button
          onClick={() => {
            // const action = {
            //   type: "CHANGE_FSIZE_ACTION",
            //   payload: 4,
            // };
            const action = changeFontSizeAction(1);
            dispatch(action);
          }}
          className="btn btn-success"
        >
          Plus font size{""}
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // State của redux
  return {
    fsize: state.fsize,
  };
};

const ComponentWithRedux = connect(mapStateToProps)(ChangeFontSizeRedux);

export default ComponentWithRedux;
