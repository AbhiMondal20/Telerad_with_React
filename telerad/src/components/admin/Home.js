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
                <div className="col-xl-6">
                  <div className="card">
                    <div className="card-body pb-0">
                      <div className="float-end d-none d-md-inline-block">
                        <div className="dropdown card-header-dropdown">
                          <a
                            className="text-reset dropdown-btn"
                            href="#"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <span className="text-muted">
                              Report
                              <i className="mdi mdi-chevron-down ms-1"></i>
                            </span>
                          </a>
                          <div className="dropdown-menu dropdown-menu-end">
                            <a className="dropdown-item" href="#">
                              Export
                            </a>
                            <a className="dropdown-item" href="#">
                              Import
                            </a>
                            <a className="dropdown-item" href="#">
                              Download Report
                            </a>
                          </div>
                        </div>
                      </div>
                      <h4 className="card-title mb-4">Email Sent</h4>

                      <div className="text-center pt-3">
                        <div className="row">
                          <div className="col-sm-4 mb-3 mb-sm-0">
                            <div className="d-inline-flex">
                              <h5 className="me-2">25,117</h5>
                              <div className="text-success font-size-12">
                                <i className="mdi mdi-menu-up font-size-14">
                                  {" "}
                                </i>
                                2.2 %
                              </div>
                            </div>
                            <p className="text-muted text-truncate mb-0">
                              Marketplace
                            </p>
                          </div>
                          <div className="col-sm-4 mb-3 mb-sm-0">
                            <div className="d-inline-flex">
                              <h5 className="me-2">$34,856</h5>
                              <div className="text-success font-size-12">
                                <i className="mdi mdi-menu-up font-size-14">
                                  {" "}
                                </i>
                                1.2 %
                              </div>
                            </div>
                            <p className="text-muted text-truncate mb-0">
                              Last Week
                            </p>
                          </div>
                          <div className="col-sm-4">
                            <div className="d-inline-flex">
                              <h5 className="me-2">$18,225</h5>
                              <div className="text-success font-size-12">
                                <i className="mdi mdi-menu-up font-size-14">
                                  {" "}
                                </i>
                                1.7 %
                              </div>
                            </div>
                            <p className="text-muted text-truncate mb-0">
                              Last Month
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-body py-0 px-2">
                      <div
                        id="area_chart"
                        className="apex-charts"
                        dir="ltr"
                      ></div>
                    </div>
                  </div>
                </div>

                <div className="col-xl-6">
                  <div className="card">
                    <div className="card-body pb-0">
                      <div className="float-end d-none d-md-inline-block">
                        <div className="dropdown">
                          <a
                            className="text-reset"
                            href="#"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <span className="text-muted">
                              This Years
                              <i className="mdi mdi-chevron-down ms-1"></i>
                            </span>
                          </a>
                          <div className="dropdown-menu dropdown-menu-end">
                            <a className="dropdown-item" href="#">
                              Today
                            </a>
                            <a className="dropdown-item" href="#">
                              Last Week
                            </a>
                            <a className="dropdown-item" href="#">
                              Last Month
                            </a>
                            <a className="dropdown-item" href="#">
                              This Year
                            </a>
                          </div>
                        </div>
                      </div>
                      <h4 className="card-title mb-4">Revenue</h4>

                      <div className="text-center pt-3">
                        <div className="row">
                          <div className="col-sm-4 mb-3 mb-sm-0">
                            <div>
                              <h5>17,493</h5>
                              <p className="text-muted text-truncate mb-0">
                                Marketplace
                              </p>
                            </div>
                          </div>
                          <div className="col-sm-4 mb-3 mb-sm-0">
                            <div>
                              <h5>$44,960</h5>
                              <p className="text-muted text-truncate mb-0">
                                Last Week
                              </p>
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div>
                              <h5>$29,142</h5>
                              <p className="text-muted text-truncate mb-0">
                                Last Month
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-body py-0 px-2">
                      <div
                        id="column_line_chart"
                        className="apex-charts"
                        dir="ltr"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-8">
                  <div className="card">
                    <div className="card-body">
                      <div className="dropdown float-end">
                        <a
                          href="#"
                          className="dropdown-toggle arrow-none card-drop"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="mdi mdi-dots-vertical"></i>
                        </a>
                        <div className="dropdown-menu dropdown-menu-end">
                          <a
                            href="javascript:void(0);"
                            className="dropdown-item"
                          >
                            Sales Report
                          </a>

                          <a
                            href="javascript:void(0);"
                            className="dropdown-item"
                          >
                            Export Report
                          </a>

                          <a
                            href="javascript:void(0);"
                            className="dropdown-item"
                          >
                            Profit
                          </a>

                          <a
                            href="javascript:void(0);"
                            className="dropdown-item"
                          >
                            Action
                          </a>
                        </div>
                      </div>

                      <h4 className="card-title mb-4">Latest Transactions</h4>

                      <div className="table-responsive">
                        <table className="table table-centered mb-0 align-middle table-hover table-nowrap">
                          <thead className="table-light">
                            <tr>
                              <th>Name</th>
                              <th>Position</th>
                              <th>Status</th>
                              <th>Age</th>
                              <th>Start date</th>
                              <th>Salary</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <h6 className="mb-0">Charles Casey</h6>
                              </td>
                              <td>Web Developer</td>
                              <td>
                                <div className="font-size-13">
                                  <i className="ri-checkbox-blank-circle-fill font-size-10 text-success align-middle me-2"></i>
                                  Active
                                </div>
                              </td>
                              <td>23</td>
                              <td>04 Apr, 2021</td>
                              <td>$42,450</td>
                            </tr>

                            <tr>
                              <td>
                                <h6 className="mb-0">Alex Adams</h6>
                              </td>
                              <td>Python Developer</td>
                              <td>
                                <div className="font-size-13">
                                  <i className="ri-checkbox-blank-circle-fill font-size-10 text-warning align-middle me-2"></i>
                                  Deactive
                                </div>
                              </td>
                              <td>28</td>
                              <td>01 Aug, 2021</td>
                              <td>$25,060</td>
                            </tr>

                            <tr>
                              <td>
                                <h6 className="mb-0">Prezy Kelsey</h6>
                              </td>
                              <td>Senior Javascript Developer</td>
                              <td>
                                <div className="font-size-13">
                                  <i className="ri-checkbox-blank-circle-fill font-size-10 text-success align-middle me-2"></i>
                                  Active
                                </div>
                              </td>
                              <td>35</td>
                              <td>15 Jun, 2021</td>
                              <td>$59,350</td>
                            </tr>

                            <tr>
                              <td>
                                <h6 className="mb-0">Ruhi Fancher</h6>
                              </td>
                              <td>React Developer</td>
                              <td>
                                <div className="font-size-13">
                                  <i className="ri-checkbox-blank-circle-fill font-size-10 text-success align-middle me-2"></i>
                                  Active
                                </div>
                              </td>
                              <td>25</td>
                              <td>01 March, 2021</td>
                              <td>$23,700</td>
                            </tr>

                            <tr>
                              <td>
                                <h6 className="mb-0">Juliet Pineda</h6>
                              </td>
                              <td>Senior Web Designer</td>
                              <td>
                                <div className="font-size-13">
                                  <i className="ri-checkbox-blank-circle-fill font-size-10 text-success align-middle me-2"></i>
                                  Active
                                </div>
                              </td>
                              <td>38</td>
                              <td>01 Jan, 2021</td>
                              <td>$69,185</td>
                            </tr>

                            <tr>
                              <td>
                                <h6 className="mb-0">Den Simpson</h6>
                              </td>
                              <td>Web Designer</td>
                              <td>
                                <div className="font-size-13">
                                  <i className="ri-checkbox-blank-circle-fill font-size-10 text-warning align-middle me-2"></i>
                                  Deactive
                                </div>
                              </td>
                              <td>21</td>
                              <td>01 Sep, 2021</td>
                              <td>$37,845</td>
                            </tr>

                            <tr>
                              <td>
                                <h6 className="mb-0">Mahek Torres</h6>
                              </td>
                              <td>Senior Laravel Developer</td>
                              <td>
                                <div className="font-size-13">
                                  <i className="ri-checkbox-blank-circle-fill font-size-10 text-success align-middle me-2"></i>
                                  Active
                                </div>
                              </td>
                              <td>32</td>
                              <td>20 May, 2021</td>
                              <td>$55,100</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xl-4">
                  <div className="card">
                    <div className="card-body">
                      <div className="float-end">
                        <select className="form-select shadow-none form-select-sm">
                          <option>Apr</option>
                          <option value="1">Mar</option>
                          <option value="2">Feb</option>
                          <option value="3">Jan</option>
                        </select>
                      </div>
                      <h4 className="card-title mb-4">Monthly Earnings</h4>

                      <div className="row">
                        <div className="col-4">
                          <div className="text-center mt-4">
                            <h5>3475</h5>
                            <p className="mb-2 text-truncate">Market Place</p>
                          </div>
                        </div>

                        <div className="col-4">
                          <div className="text-center mt-4">
                            <h5>458</h5>
                            <p className="mb-2 text-truncate">Last Week</p>
                          </div>
                        </div>

                        <div className="col-4">
                          <div className="text-center mt-4">
                            <h5>9062</h5>
                            <p className="mb-2 text-truncate">Last Month</p>
                          </div>
                        </div>
                      </div>

                      <div className="mt-4">
                        <div id="donut-chart" className="apex-charts"></div>
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
