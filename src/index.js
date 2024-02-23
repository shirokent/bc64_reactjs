import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import ExShoeStore from "./components/Props/ExShoeStore/ExShoeStore";
import ChangeColor from "./components/StateDemoComponent/ChangeColor";
import ChangeCar from "./components/StateDemoComponent/ChangeCar";
import clsx from "clsx";
import HomeTemplate from "./template/HomeTemplate";
import AuthTemplate from "./template/AuthTemplate";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/login";
import Admin from "./pages/auth/Admin";
import { Navigate } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
// jsx : => html được viết trong file js (nền js) được gọi là jsx
// 2 loại function component , class component
root.render(
  <BrowserRouter>
    {/* Những thẻ nào để ngoài Routes thì luôn luôn được load lên */}
    {/* Thẻ Navlink (của react router dom) để di chuyển giữa các trang trong react */}
    {/* isActive sẽ trả về true khi router đó đang active, ngược lại sẽ trả về false */}
    <NavLink
      style={(props) => {
        if (props.isActive) {
          return {
            textDecoration: "none",
          };
        }
      }}
      to="/shoe-store"
    >
      Bài tập shoe store
    </NavLink>
    <NavLink
      className={(props) => {
        if (props.isActive) {
          return "text-warning mx-2 ";
        } else {
          return "text-danger mx-2";
        }
      }}
      to="/bt-change-color"
    >
      Bài tập đổi màu
    </NavLink>
    <NavLink
      className={(props) => {
        if (props.isActive) {
          return "text-warning";
        } else {
          return "text-danger";
        }
      }}
      to="/bt-change-car"
    >
      Bài tập đổi xe
    </NavLink>

    {/* clsx cho phép viết class qua dạng (A,B,C)
    <NavLink
      className={clsx((props) => {
        if (props.isActive) {
          return 'text-warning';
        } else {
          return 'text-danger';
        }
      }, ' mx-2')}
      to=""
    >
      Trang chủ
    </NavLink> */}

    <Routes>
      {/* localhost:3000/shoe-store */}

      {/* Home template */}
      <Route path="" element={<HomeTemplate />}>
        <Route index element={<div>Trang chủ</div>}></Route>
        <Route path="/shoe-store" element={<ExShoeStore />}></Route>
        <Route path="bt-change-color" element={<ChangeColor />}></Route>
        <Route path="bt-change-car" element={<ChangeCar />}></Route>
      </Route>

      {/* AuthTemplate */}
      <Route path="auth" element={<AuthTemplate />}>
        <Route path="login" element={<Login />}></Route>
        <Route path="register" element={<Register />}></Route>
      </Route>

      {/* path: (*) là tất cả những đường dẫn ko tồn tại trong đây */}
      <Route path="admin" element={<Admin />}></Route>
      <Route path="*" element={<Navigate />}></Route>
    </Routes>
  </BrowserRouter>
);
