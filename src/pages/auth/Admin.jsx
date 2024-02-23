import React, { Component } from "react";
import { Navigate } from "react-router-dom";

export default class Admin extends Component {
  render() {
    const isAdminin = true;
    if (!isAdminin) {
      return <Navigate to={"/"} />;
    }
    return <div>Đây là trang Admin</div>;
  }
}
