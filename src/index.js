import React from "react";
import ReactDOM from "react-dom/client";
import { Card } from "./component/Card";
import { AlertComponent } from "./component/AlertComponent";
import HomeLayout from "./component/HomeLayout/HomeLayout";

const root = ReactDOM.createRoot(document.getElementById("root"));
// jsx: => html được viết trong file js (nền js) được gọi là jsx
root.render(
  <div>
    {/* <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card /> */}

    {/* <AlertComponent /> */}
    <HomeLayout />
  </div>
);

// Có 2 loại component: function component, class component
