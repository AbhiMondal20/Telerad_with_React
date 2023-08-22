import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6">
              <script>document.write(new Date().getFullYear())</script> ©
              Upcube.
            </div>
            <div className="col-sm-6">
              <div className="text-sm-end d-none d-sm-block">
                Created <i className="mdi mdi-heart text-danger"></i> by
                AbhiTechbot
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="right-bar">
        <div data-simplebar className="h-100">
          <div className="rightbar-title d-flex align-items-center px-3 py-4">
            <h5 className="m-0 me-2">Settings</h5>

            <Link to="#" className="right-bar-toggle ms-auto">
              <i className="mdi mdi-close noti-icon"></i>
            </Link>
          </div>

          <hr cl ssName="mt-0" />
          <h6 className="text-center mb-0">Choose Layouts</h6>

          <div className="p-4">
            <div className="mb-2">
              <img
                src="assets/images/layouts/layout-1.jpg"
                className="img-fluid img-thumbnail"
                alt="layout-1"
              />
            </div>

            <div className="form-check form-switch mb-3">
              <input
                className="form-check-input theme-choice"
                type="checkbox"
                id="light-mode-switch"
              />
              <label className="form-check-label" htmlFor="light-mode-switch">
                Light Mode
              </label>
            </div>

            <div className="mb-2">
              <img
                src="assets/images/layouts/layout-2.jpg"
                className="img-fluid img-thumbnail"
                alt="layout-2"
              />
            </div>
            <div className="form-check form-switch mb-3">
              <input
                className="form-check-input theme-choice"
                type="checkbox"
                id="dark-mode-switch"
              />
              <label className="form-check-label" htmlFor="dark-mode-switch">
                Dark Mode
              </label>
            </div>

            <div className="mb-2">
              <img
                src="assets/images/layouts/layout-3.jpg"
                className="img-fluid img-thumbnail"
                alt="layout-3"
              />
            </div>
            <div className="form-check form-switch mb-5">
              <input
                className="form-check-input theme-choice"
                type="checkbox"
                id="rtl-mode-switch"
              />
              <label className="form-check-label" htmlFor="rtl-mode-switch">
                RTL Mode
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
