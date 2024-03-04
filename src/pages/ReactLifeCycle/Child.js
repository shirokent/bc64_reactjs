import React, { Component, PureComponent } from "react";
// PureComponent giống hết Component nhưng sẽ ko có shouldComponentUpdate
// Chỉ nhận thấy sự đổi của boolean, number, string, undefine, null
// Còn các value như [], {} thì phải clone ở Component cha ra [...], {...}

export default class Child extends PureComponent {
  constructor(props) {
    console.log("😢 constructor child");
    super(props);
    this.state = {};
  }

  static getDerivedStateFromProps(newProps, currentState) {
    console.log("😢 getDerivedStateFromProps child");
    return null;
  }

  //   shouldComponentUpdate(newProps, newState) {
  //     // newProps là props sau khi thay đổi trước khi render
  //     // newState là state sau khi thay đổi trước khi render
  //     console.log("shouldComponentUpdate child: ");

  //     // Can thiệp vào shouldComponentUpdate để biết là khi bấm nút tăng number thì ko render lại còn bấm like thì sẽ render lại
  //     if (newProps.like != this.props.like) {
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   }

  render() {
    console.log("render: child ");
    return (
      <div className="bg-dark text-white text-center">
        <p>{this.props.like}</p>
      </div>
    );
  }

  componentDidMount() {
    console.log("componentDidMout child: ");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate child: ");
  }

  componentWillUnmount() {
    console.log("😢 componentWillUnmount child: ");
  }
}
