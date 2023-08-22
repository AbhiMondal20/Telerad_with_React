import React from "react";
import Header from "./Header";
import Footer from "../Footer";

function Home() {
  return (
    <div>
      <div id="layout-wrapper">
        {/* Header */}
        <Header />
        <div className="main-content">
          <div className="page-content">
            <div className="container-fluid">
              <div className="row">
                <div className="col-xl-6 col-md-6">
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex">
                        <div className="flex-grow-1">
                          <p className="text-truncate font-size-14 mb-2">
                            Today Patient
                          </p>
                          <h4 className="mb-2">2022</h4>
                        </div>
                        <div className="avatar-sm">
                          <span className="avatar-title bg-light text-success rounded-3">
                            <i className="fas fa-user-plus font-size-24"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-md-6">
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex">
                        <div className="flex-grow-1">
                          <p className="text-truncate font-size-14 mb-2">
                            Today CT
                          </p>
                          <h4 className="mb-2">521</h4>
                        </div>
                        <div className="avatar-sm">
                          <span className="avatar-title bg-light text-success rounded-3">
                            <i className="fas fa-user-plus font-size-24"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-md-6">
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex">
                        <div className="flex-grow-1">
                          <p className="text-truncate font-size-14 mb-2">
                            Today PET-CT
                          </p>
                          <h4 className="mb-2">21015</h4>
                        </div>
                        <div className="avatar-sm">
                          <span className="avatar-title bg-light text-warning rounded-3">
                            <i className="fas fa-hourglass-start font-size-24"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-md-6">
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex">
                        <div className="flex-grow-1">
                          <p className="text-truncate font-size-14 mb-2">
                            Today CR
                          </p>
                          <h4 className="mb-2">202</h4>
                        </div>
                        <div className="avatar-sm">
                          <span className="avatar-title bg-light text-info rounded-3">
                            <i className="fas fa-check-double font-size-24"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Home;
