import React, { Component } from "react";
import Footer from "../../Common/footer";
import RestApi from "../../services/api";
import Common from "../../Common/common";
import Newsletter from "../../Components/home/subscribeNewsletter";
import { Link } from "react-router-dom";
import ModalRoot from "../../Components/modal/modalRoot";

export default class CaseLaw extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      data: [],
      previewContent: "",
      previewHeading:""
    };
  }

  componentDidMount() {
    this.fetchData();
  }
  fetchData() {
    RestApi.caseLaw().then((res) => {
      console.log(" case law: ", res);
      //   let grouped = Common.groupBy(['Service_category_id'])(res.data.data);
      if (res.data.status && res.data.data) {
        this.setState({ data: res.data.data });
      }
    });
  }
  handleClick(previewContent,previewHeading) {
    this.setState({
      previewContent,
      previewHeading,
      isOpen: true,
    });
  }

  render() {
    console.log("state", this.state);
    let { data } = this.state;
    console.log(data);
    return (
      <div>
        <div className="breadcrumbpane">
          <div className="container">
            <h1 className="pull-left">Case law</h1>
          </div>
        </div>
        <section>
          <div className="container">
            <div className="row">
              <div class="col-md-12">
                <div class="current-opening">
                  <table class="table form-border text-center">
                    <tbody>
                      <tr class="job-summary">
                        <td width="6%" class="cal-right-wht cal-header">
                          Sr. No.
                        </td>
                        <td width="11%" class="cal-right-wht">
                          Law
                        </td>
                        <td width="9%" class="cal-right-wht">
                          Section
                        </td>
                        <td width="18%" class="cal-right-wht">
                          Case Name
                        </td>
                        <td width="10%" class="cal-right-wht">
                          Case Number
                        </td>
                        <td width="8%" class="cal-right-wht">
                          Order Date
                        </td>
                        <td width="16%" class="cal-right-wht">
                          Citation
                        </td>
                        <td width="8%">Judgement</td>
                      </tr>
                      {data.length > 0 &&
                        data.map((each, key) => {
                          return (
                            <tr>
                              <td>{++key}</td>
                              <th class="cal-border case-text">
                                {each.under_law}
                              </th>
                              <th class="cal-border case-text">
                                {each.under_section}
                              </th>
                              <th class="cal-border case-text">
                                {each.case_name}
                              </th>
                              <th class="cal-border case-text">
                                {each.case_number}
                              </th>
                              <th class="cal-border case-text">
                                {each.date_of_order}
                              </th>
                              <th class="cal-border case-text">
                                {each.citation != null ? each.citation : "NA"}
                              </th>
                              <td>
                                {each.judgement != null && (
                                  <a
                                    target="_blank"
                                    href="http://staging.itaxdoctor.com/uploads/2015/151020014301_upload.txt"
                                    download=""
                                  >
                                    <img
                                      src="https://itaxdoctor.idossapp.com/assets/front_end/images/pdf-icon.png"
                                      style={{ width: "22%" }}
                                    />
                                  </a>
                                )}
                                {each.gist != null && each.gist.length > 0 && (
                                  <Link
                                    onClick={() => this.handleClick(each.gist,each.case_name)}
                                    className="case-law-view"
                                  >
                                    {" "}
                                    View
                                  </Link>
                                )}
                              </td>
                            </tr>
                          );
                        })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Newsletter />
        <Footer />
        {this.state.isOpen && (
          <ModalRoot
            title={this.state.previewHeading}
            close={() => this.setState({ isOpen: false })}
            isOpen={this.state.isOpen}
            body={
              <div
                dangerouslySetInnerHTML={{
                  __html: this.state.previewContent,
                }}
              />
            }
          />
        )}
      </div>
    );
  }
}
