import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <div>
        <div className="bg-overlay"></div>
        <div className="wrapper-page">
          <div className="container-fluid p-0">
            <div className="card">
              <div className="card-body">
                <div className="text-center mt-4">
                  <div className="mb-3">
                    <Link to="index" className="auth-logo">
                      <img
                        src="assets/images/logo-dark.png"
                        height="30"
                        className="logo-dark mx-auto"
                        alt=""
                      />
                      <img
                        src="assets/images/logo-light.png"
                        height="30"
                        className="logo-light mx-auto"
                        alt=""
                      />
                    </Link>
                  </div>
                </div>

                <h4 className="text-muted text-center font-size-18">
                  <b>Sign In</b>
                </h4>

                <div className="p-3">
                  <form className="form-horizontal mt-3">
                    <div className="form-group mb-3 row">
                      <div className="col-12">
                        <input
                          className="form-control"
                          type="text"
                          required
                          placeholder="Username"
                        />
                      </div>
                    </div>

                    <div className="form-group mb-3 row">
                      <div className="col-12">
                        <input
                          className="form-control"
                          type="password"
                          required
                          placeholder="Password"
                        />
                      </div>
                    </div>

                    <div className="form-group mb-3 text-center row mt-3 pt-1">
                      <div className="col-12">
                        <Link to="users">
                          <button
                            className="btn btn-info w-100 waves-effect waves-light"
                            type="submit"
                          >
                            Log In
                          </button>
                        </Link>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
