import React, { Component } from "react";

export default class HeaderLayout extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Navbar
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  {/* clsx cho phép viết class qua dạng (A,B,C) */}
                  <NavLink
                    className={clsx((props) => {
                      if (props.isActive) {
                        return "activve";
                      } else {
                        return "";
                      }
                    }, " nav-link")}
                    to=""
                  >
                    Trang chủ
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={clsx((props) => {
                      if (props.isActive) {
                        return "activve";
                      } else {
                        return "";
                      }
                    }, " nav-link")}
                    to="./"
                  >
                    Shoe Store
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={clsx((props) => {
                      if (props.isActive) {
                        return "activve";
                      } else {
                        return "";
                      }
                    }, " nav-link")}
                    to="/bt-form"
                  >
                    Bài tập form
                  </NavLink>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" aria-disabled="true">
                    Disabled
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        ;
      </div>
    );
  }
}
