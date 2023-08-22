import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div>
      <header id="page-topbar">
        <div className="navbar-header">
          <div className="d-flex">
            <div className="navbar-brand-box">
              <Link to="/users" className="logo logo-dark">
                <span className="logo-sm">
                  <img
                    src="assets/images/logo-sm.png"
                    alt="logo-sm"
                    height="22"
                  />
                </span>
                <span className="logo-lg">
                  <img
                    src="assets/images/logo-dark.png"
                    alt="logo-dark"
                    height="20"
                  />
                </span>
              </Link>

              <Link to="/users" className="logo logo-light">
                <span className="logo-sm">
                  <img
                    src="assets/images/logo-sm.png"
                    alt="logo-sm-light"
                    height="22"
                  />
                </span>
                <span className="logo-lg">
                  <img
                    src="assets/images/logo-light.png"
                    alt="logo-light"
                    height="20"
                  />
                </span>
              </Link>
            </div>

            <button
              type="button"
              className="btn btn-sm px-3 font-size-24 header-item waves-effect"
              id="vertical-menu-btn"
            >
              <i className="ri-menu-2-line align-middle"></i>
            </button>
          </div>

          <div className="d-flex">
            <div className="dropdown d-inline-block d-lg-none ms-2">
              <button
                type="button"
                className="btn header-item noti-icon waves-effect"
                id="page-header-search-dropdown"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="ri-search-line"></i>
              </button>
              <div
                className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
                aria-labelledby="page-header-search-dropdown"
              ></div>
            </div>

            <div className="dropdown d-none d-lg-inline-block ms-1">
              <button
                type="button"
                className="btn header-item noti-icon waves-effect"
                data-toggle="fullscreen"
              >
                <i className="ri-fullscreen-line"></i>
              </button>
            </div>
            <div className="dropdown d-inline-block user-dropdown">
              <button
                type="button"
                className="btn header-item waves-effect"
                id="page-header-user-dropdown"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img
                  className="rounded-circle header-profile-user"
                  src="assets/images/users/avatar-1.jpg"
                  alt="Header Avatar"
                />
                <span className="d-none d-xl-inline-block ms-1">Julia</span>
                <i className="mdi mdi-chevron-down d-none d-xl-inline-block"></i>
              </button>
              <div className="dropdown-menu dropdown-menu-end">
                <Link className="dropdown-item" to="#">
                  <i className="ri-user-line align-middle me-1"></i> Profile
                </Link>
                <Link className="dropdown-item" to="#">
                  <i className="ri-wallet-2-line align-middle me-1"></i> My
                  Wallet
                </Link>
                <Link className="dropdown-item d-block" to="#">
                  <span className="badge bg-success float-end mt-1">11</span>
                  <i className="ri-settings-2-line align-middle me-1"></i>{" "}
                  Settings
                </Link>
                <Link className="dropdown-item" to="#">
                  <i className="ri-lock-unlock-line align-middle me-1"></i> Lock
                  screen
                </Link>
                <div className="dropdown-divider"></div>
                <Link className="dropdown-item text-danger" to="#">
                  <i className="ri-shut-down-line align-middle me-1 text-danger"></i>{" "}
                  Logout
                </Link>
              </div>
            </div>

            <div className="dropdown d-inline-block">
              <button
                type="button"
                className="btn header-item noti-icon right-bar-toggle waves-effect"
              >
                <i className="ri-settings-2-line"></i>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="vertical-menu">
        <div data-simplebar className="h-100">
          <div id="sidebar-menu">
            <ul className="metismenu list-unstyled" id="side-menu">
              <li className="menu-title">Menu</li>

              <li>
                <Link to="/users" className="waves-effect">
                  <i className="ri-dashboard-line"></i>
                  <span className="badge rounded-pill bg-success float-end">
                    3
                  </span>
                  <span>Dashboard</span>
                </Link>
              </li>

              <li>
                <Link to="calendar" className=" waves-effect">
                  <i className="ri-calendar-2-line"></i>
                  <span>Calendar</span>
                </Link>
              </li>

              <li>
                <Link to="#" className="has-arrow waves-effect">
                  <i className="ri-mail-send-line"></i>
                  <span>Patient</span>
                </Link>
                <ul className="sub-menu" aria-expanded="false">
                  <li>
                    <Link to="email-inbox">Ct Patient</Link>
                  </li>
                  <li>
                    <Link to="/pet-ct">Pet-ct Patient</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
