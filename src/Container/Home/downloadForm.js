import React, { Component } from "react";
import Footer from "../../Common/footer";
import RestApi from "../../services/api";

export default class downloadForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholder: {},
    };
  }

  componentDidMount() {
    // this.fetchData();
    this.placeHolderAPI();
  }

  placeHolderAPI() {
    RestApi.placeholder("career").then((res) => {
      console.log("placeHolder: downloadFOrm: ", res);
      this.setState({ placeholder: res.data.data });
    });
  }
  render() {
    return (
      <div>
        <div class="breadcrumbpane">
          <div class="container">
            <h1 class="pull-left">Download Forms</h1>
          </div>
        </div>
        <section>
          <div class="container">
            <div class="row">
              <div class="col-md-12 section-title">
                <div class="form-group alignitem-horizontal-center clearfix">
                  <div class="pull-left">
                    <span>SELECT SERVICES</span>
                  </div>
                  <div class="pull-right col-md-5">
                    <select
                      id="myselect1"
                      class="form-control selectpicker bs-select-hidden"
                      readonly=""
                      data-style="btn-white"
                    >
                      <option>--Select Services--</option>
                      <option value="service tax forms" selected>
                        SERVICE TAX FORMS
                      </option>
                      <option value="legal document forms">
                        LEGAL DOCUMENT FORMS
                      </option>
                      <option value="vat forms">VAT FORMS</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-8">
                <table class="table form-border text-center">
                  <tbody>
                    <tr class="job-summary">
                      <td width="10%" class="cal-right-wht cal-header">
                        Sr. No.
                      </td>
                      <td class="cal-right-wht">Form Name</td>
                      <td width="20%" class="text-center">
                        Download
                      </td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <th scope="row" class="cal-border cal-header">
                        Service tax burden still with{" "}
                      </th>
                      <td>
                        <ul>
                          <li>
                            <a
                              href="http://staging.itaxdoctor.com/uploads/2015/151020014300_upload.txt"
                              download=""
                            >
                              <img src="https://itaxdoctor.idossapp.com/assets/front_end/images/ms-world-icon.png" />
                            </a>
                          </li>
                          <li>
                            <a
                              href="http://staging.itaxdoctor.com/uploads/2015/151020014301_upload.txt"
                              download=""
                            >
                              <img src="https://itaxdoctor.idossapp.com/assets/front_end/images/pdf-icon.png" />
                            </a>
                          </li>
                          <li>
                            <a
                              href="http://staging.itaxdoctor.com/uploads/2015/151020014301_data.txt"
                              download=""
                            >
                              <img src="https://itaxdoctor.idossapp.com/assets/front_end/images/excel-icon.png" />
                            </a>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <th scope="row" class="cal-border cal-header">
                        Vat Forms
                      </th>
                      <td>
                        <ul>
                          <li>
                            <a
                              href="http://staging.itaxdoctor.com/uploads/2015/151020014300_upload.txt"
                              download=""
                            >
                              <img src="https://itaxdoctor.idossapp.com/assets/front_end/images/ms-world-icon.png" />
                            </a>
                          </li>
                          <li>
                            <a
                              href="http://staging.itaxdoctor.com/uploads/2015/151020014301_upload.txt"
                              download=""
                            >
                              <img src="https://itaxdoctor.idossapp.com/assets/front_end/images/pdf-icon.png" />
                            </a>
                          </li>
                          <li>
                            <a
                              href="http://staging.itaxdoctor.com/uploads/2015/151020014301_data.txt"
                              download=""
                            >
                              <img src="https://itaxdoctor.idossapp.com/assets/front_end/images/excel-icon.png" />
                            </a>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <th scope="row" class="cal-border cal-header">
                        Form Validation
                      </th>
                      <td>
                        <ul>
                          <li>
                            <a
                              href="http://staging.itaxdoctor.com/uploads/2015/151020014300_upload.txt"
                              download=""
                            >
                              <img src="https://itaxdoctor.idossapp.com/assets/front_end/images/ms-world-icon.png" />
                            </a>
                          </li>
                          <li>
                            <a
                              href="http://staging.itaxdoctor.com/uploads/2015/151020014301_upload.txt"
                              download=""
                            >
                              <img src="https://itaxdoctor.idossapp.com/assets/front_end/images/pdf-icon.png" />
                            </a>
                          </li>
                          <li>
                            <a
                              href="http://staging.itaxdoctor.com/uploads/2015/151020014301_data.txt"
                              download=""
                            >
                              <img src="https://itaxdoctor.idossapp.com/assets/front_end/images/excel-icon.png" />
                            </a>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <th scope="row" class="cal-border cal-header">
                        Government Looking At Mid 2016
                      </th>
                      <td>
                        <ul>
                          <li>
                            <a
                              href="http://staging.itaxdoctor.com/uploads/2015/151020014300_upload.txt"
                              download=""
                            >
                              <img src="https://itaxdoctor.idossapp.com/assets/front_end/images/ms-world-icon.png" />
                            </a>
                          </li>
                          <li>
                            <a
                              href="http://staging.itaxdoctor.com/uploads/2015/151020014301_upload.txt"
                              download=""
                            >
                              <img src="https://itaxdoctor.idossapp.com/assets/front_end/images/pdf-icon.png" />
                            </a>
                          </li>
                          <li>
                            <a
                              href="http://staging.itaxdoctor.com/uploads/2015/151020014301_data.txt"
                              download=""
                            >
                              <img src="https://itaxdoctor.idossapp.com/assets/front_end/images/excel-icon.png" />
                            </a>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <th scope="row" style={{ borderLeft: "1px solid #ddd" }}>
                        Companies Filing Of Documents
                      </th>
                      <td style={{ borderLeft: "1px solid #ddd" }}>
                        <ul>
                          <li>
                            <a
                              href="http://staging.itaxdoctor.com/uploads/2015/151020014300_upload.txt"
                              download=""
                            >
                              <img src="https://itaxdoctor.idossapp.com/assets/front_end/images/ms-world-icon.png" />
                            </a>
                          </li>
                          <li>
                            <a
                              href="http://staging.itaxdoctor.com/uploads/2015/151020014301_upload.txt"
                              download=""
                            >
                              <img src="https://itaxdoctor.idossapp.com/assets/front_end/images/pdf-icon.png" />
                            </a>
                          </li>
                          <li>
                            <a
                              href="http://staging.itaxdoctor.com/uploads/2015/151020014301_data.txt"
                              download=""
                            >
                              <img src="https://itaxdoctor.idossapp.com/assets/front_end/images/excel-icon.png" />
                            </a>
                          </li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="col-md-4">
                <div class="blog_right_sidebar text-justify">
                  <aside class="single_sidebar_widget">
                    <img
                      src={this.state.placeholder.image}
                      style={{ width: "100%" }}
                    />
                    <h4 class="place_title">{this.state.placeholder.header}</h4>{" "}
                    <div
                      dangerouslySetInnerHTML={{
                        __html: this.state.placeholder.description,
                      }}
                    />
                  </aside>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}
