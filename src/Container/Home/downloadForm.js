import React, { Component } from "react";
import Footer from "../../Common/footer";
import RestApi from "../../services/api";

export default class downloadForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholder: {},
      data : []
    };
  }

  componentDidMount() {
    this.fetchData();
    this.placeHolderAPI();
  }

  placeHolderAPI() {
    RestApi.placeholder("download-forms").then((res) => {
      console.log("placeHolder: downloadFOrm: ", res);
      this.setState({ placeholder: res.data.data });
    });
  }
  fetchData(){
    RestApi.downloadForm().then((res) => {
      console.log(" downloadFOrm: ", res);
      if(res.data.status) {
        this.setState({ data: res.data.data });

      }
    });
  }
  render() {
    return (
      <div>
        <div className="breadcrumbpane">
          <div className="container">
            <h1 className="pull-left">Download Forms</h1>
          </div>
        </div>
        <section>
          <div className="container">
            <div className="row">
              <div className="col-md-12 section-title">
                <div className="form-group alignitem-horizontal-center clearfix">
                  <div className="pull-left">
                    <span>SELECT SERVICES</span>
                  </div>
                  <div className="pull-right col-md-5">
                    <select
                      id="myselect1"
                      className="form-control selectpicker bs-select-hidden"
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
            <div className="row">
              <div className="col-md-8">
                <table className="table form-border text-center">
                  <tbody>
                    <tr className="job-summary">
                      <td width="10%" className="cal-right-wht cal-header">
                        Sr. No.
                      </td>
                      <td className="cal-right-wht">Form Name</td>
                      <td width="20%" className="text-center">
                        Download
                      </td>
                    </tr>
                   { this.state.data.map((each,key)=> {
                   return <tr ket={key}>
                      <td>{key + 1}</td>
                      <th scope="row" className="cal-border cal-header">
                       {each.form_name}
                      </th>
                      <td>
                        <ul>
                          {each.document_doc &&<li>
                            <a target="_blank"
                            title="title"
                              href={each.document_doc}
                              download=""
                            >
                              <img src="https://itaxdoctor.idossapp.com/assets/front_end/images/ms-world-icon.png" />
                            </a>
                          </li>}
                          {each.document_pdf &&<li>
                            <a
                            target="_blank"
                              href={each.document_pdf}
                              download=""
                            >
                              <img src="https://itaxdoctor.idossapp.com/assets/front_end/images/pdf-icon.png" />
                            </a>
                          </li>}
                          
                         { each.document_excel &&<li> <a
                         target="_blank"
                              href={each.document_excel}
                              download=""
                            >
                              <img src="https://itaxdoctor.idossapp.com/assets/front_end/images/excel-icon.png" />
                            </a>
                          </li>}
                        </ul>
                      </td>
                    </tr>
                   }) }
                   
                  </tbody>
                </table>
              </div>
              {this.state.placeholder?.image && <div className="col-md-4">
                <div className="blog_right_sidebar text-justify">
                  <aside className="single_sidebar_widget">
                    <img
                      src={this.state.placeholder.image}
                      style={{ width: "100%" }}
                    />
                    {this.state.placeholder?.header && <h4 className="place_title">{this.state.placeholder.header}</h4>}
                    <div
                      dangerouslySetInnerHTML={{
                        __html: this.state.placeholder.description,
                      }}
                    />
                  </aside>
                </div>
              </div>}
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}
