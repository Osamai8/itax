import React, { Component } from "react";
import RestApi from "../../services/api";

export default class newsletter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      placeholder:{}
    };
  }
  componentDidMount() {
    this.fetchData();
    this.placeHolderAPI()
  }
  fetchData() {
    RestApi.newsletters().then((res) => {
      console.log("news", res);
      this.setState({
        data: res.data.data,
      });
    });
  }
  placeHolderAPI(){
    RestApi.placeholder('newsletters').then((res)=> {
      console.log("placeHolder: new: ",res)
      this.setState({placeholder: res.data.data})
    })
  }
  render() {
    return (
      <div>
        <div class="breadcrumbpane">
          <div class="container">
            <h1 class="pull-left">Newsletter</h1>
          </div>
        </div>
        <section>
          <div class="container">
            <div class="row">
              <div class="col-md-4">
                <table class="table form-border text-center">
                  <tbody>
                    <tr class="job-summary">
                      <td width="20%" class="cal-right-wht cal-header">
                        Sr. No.
                      </td>
                      <td>Months</td>
                      <td width="15%" class="cal-header"></td>
                    </tr>
                    {this.state.data.map((each, key) => {
                      return (
                        <tr key={key}>
                          <td>{++key}</td>
                          <th scope="row" class="cal-left cal-header">
                            {each.heading}
                          </th>
                          <td>
                            <ul>
                              <li>
                                <a
                                  href={each.file}
                                  download=""
                                >
                                  <img src="https://itaxdoctor.idossapp.com/assets/front_end/images/pdf-icon.png" />
                                </a>
                              </li>
                            </ul>
                          </td>
                        </tr>
                      );
                    })}

                    {/* <tr>
                      <td>2</td>
                      <th scope="row" class="cal-left cal-header">
                        February 2021
                      </th>
                      <td>
                        <ul>
                          <li>
                            <a
                              href="http://staging.itaxdoctor.com/uploads/2015/151020014301_upload.txt"
                              download=""
                            >
                              <img src="https://itaxdoctor.idossapp.com/assets/front_end/images/pdf-icon.png" />
                            </a>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <th scope="row" class="cal-left cal-header">
                        March 2021
                      </th>
                      <td>
                        <ul>
                          <li>
                            <a
                              href="http://staging.itaxdoctor.com/uploads/2015/151020014301_upload.txt"
                              download=""
                            >
                              <img src="https://itaxdoctor.idossapp.com/assets/front_end/images/pdf-icon.png" />
                            </a>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <th scope="row" class="cal-left cal-header">
                        April 2021
                      </th>
                      <td>
                        <ul>
                          <li>
                            <a
                              href="http://staging.itaxdoctor.com/uploads/2015/151020014301_upload.txt"
                              download=""
                            >
                              <img src="https://itaxdoctor.idossapp.com/assets/front_end/images/pdf-icon.png" />
                            </a>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <th scope="row" class="cal-left cal-header">
                        May 2021
                      </th>
                      <td>
                        <ul>
                          <li>
                            <a
                              href="http://staging.itaxdoctor.com/uploads/2015/151020014301_upload.txt"
                              download=""
                            >
                              <img src="https://itaxdoctor.idossapp.com/assets/front_end/images/pdf-icon.png" />
                            </a>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <th scope="row" class="cal-left cal-header">
                        June 2021
                      </th>
                      <td>
                        <ul>
                          <li>
                            <a
                              href="http://staging.itaxdoctor.com/uploads/2015/151020014301_upload.txt"
                              download=""
                            >
                              <img src="https://itaxdoctor.idossapp.com/assets/front_end/images/pdf-icon.png" />
                            </a>
                          </li>
                        </ul>
                      </td>
                    </tr> */}
                  </tbody>
                </table>
              </div>
              <div class="col-md-4">
                <table class="table form-border text-center">
                  <tbody>
                    <tr class="job-summary">
                      <td width="20%" class="cal-right-wht cal-header">
                        Sr. No.
                      </td>
                      <td>Months</td>
                      <td width="15%" class="cal-header"></td>
                    </tr>
                    <tr>
                      <td>7</td>
                      <th scope="row" class="cal-left cal-header">
                        July 2021
                      </th>
                      <td>
                        <ul>
                          <li>
                            <a
                              href="http://staging.itaxdoctor.com/uploads/2015/151020014301_upload.txt"
                              download=""
                            >
                              <img src="https://itaxdoctor.idossapp.com/assets/front_end/images/pdf-icon.png" />
                            </a>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td>8</td>
                      <th scope="row" class="cal-left cal-header">
                        August 2021
                      </th>
                      <td>
                        <ul>
                          <li>
                            <a
                              href="http://staging.itaxdoctor.com/uploads/2015/151020014301_upload.txt"
                              download=""
                            >
                              <img src="https://itaxdoctor.idossapp.com/assets/front_end/images/pdf-icon.png" />
                            </a>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td>9</td>
                      <th scope="row" class="cal-left cal-header">
                        September 2021
                      </th>
                      <td>
                        <ul>
                          <li>
                            <a
                              href="http://staging.itaxdoctor.com/uploads/2015/151020014301_upload.txt"
                              download=""
                            >
                              <img src="https://itaxdoctor.idossapp.com/assets/front_end/images/pdf-icon.png" />
                            </a>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td>10</td>
                      <th scope="row" class="cal-left cal-header">
                        October 2021
                      </th>
                      <td>
                        <ul>
                          <li>
                            <a
                              href="http://staging.itaxdoctor.com/uploads/2015/151020014301_upload.txt"
                              download=""
                            >
                              <img src="https://itaxdoctor.idossapp.com/assets/front_end/images/pdf-icon.png" />
                            </a>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td>11</td>
                      <th scope="row" class="cal-left cal-header">
                        November 2021
                      </th>
                      <td>
                        <ul>
                          <li>
                            <a
                              href="http://staging.itaxdoctor.com/uploads/2015/151020014301_upload.txt"
                              download=""
                            >
                              <img src="https://itaxdoctor.idossapp.com/assets/front_end/images/pdf-icon.png" />
                            </a>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td>12</td>
                      <th scope="row" class="cal-left cal-header">
                        December 2021
                      </th>
                      <td>
                        <ul>
                          <li>
                            <a
                              href="http://staging.itaxdoctor.com/uploads/2015/151020014301_upload.txt"
                              download=""
                            >
                              <img src="https://itaxdoctor.idossapp.com/assets/front_end/images/pdf-icon.png" />
                            </a>
                          </li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
             
              <div class="col-md-4">
                <div class="blog_right_sidebar">
                  <aside class="single_sidebar_widget">
                    <img
                      src={this.state.placeholder.image}
                      style={{ width: "100%" }}
                    />
                     <div
                      dangerouslySetInnerHTML={{
                        __html: this.state.placeholder.description,
                      }}
                    />
                    {/* <h4 class="place_title">Newsletter Placeholder</h4>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s.
                    </p>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                    <ul class="list-disc">
                      <li>Lorem Ipsum is simply dummy text</li>
                      <li>Lorem Ipsum is simply dummy text</li>
                      <li>Lorem Ipsum is simply dummy text</li>
                    </ul> */}
                  </aside>
                </div>
              </div>
              <div class="col-md-12">
                <nav class="blog-pagination">
                  <ul class="pagination">
                    <li class="page-item">
                      <a
                        href="#"
                        class="page-link preview"
                        aria-label="Previous"
                      >
                        <i class="fa fa-angle-double-left"></i> Prev.
                      </a>
                    </li>
                    <li class="page-item active">
                      <a href="#" class="page-link">
                        1
                      </a>
                    </li>
                    <li class="page-item">
                      <a href="#" class="page-link">
                        2
                      </a>
                    </li>
                    <li class="page-item">
                      <a href="#" class="page-link next" aria-label="Next">
                        Next <i class="fa fa-angle-double-right"></i>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </section>
        {/* <!---------------------------Newsletter Section----------------------------> */}

        <section class="newslettersubscription_pane">
          <div class="container">
            <div class="newsletter-section">
              <div class="newslettersection-left">
                <img src="image/newsletter-text.png" />
              </div>
              <div class="newslettersection-subcribeform">
                <p>
                  Enter Your Name and Email Address To Receive All Tax And
                  Finance Related News From Our Website
                  <br />* Don't Worry You'll Not be Spammed
                </p>
                <div class="row">
                  <div>
                    {/* <!--<form method="post">--> */}
                    <div class="col-md-4">
                      <input
                        type="text"
                        name="firstname"
                        id="firstname"
                        class="form-control inputpane"
                        placeholder="Enter Your Name"
                      />
                      <span
                        id="error"
                        class="error"
                        style={{ display: "none", color: "red" }}
                      >
                        Enter User Name
                      </span>
                    </div>
                    <div class="col-md-4">
                      <input
                        type="text"
                        name="emailaddress"
                        id="emailaddress"
                        class="form-control inputpane"
                        placeholder="Enter Your Email Address"
                      />
                      <span
                        id="err"
                        class="error"
                        style={{ display: "none", color: "red" }}
                      >
                        Enter email address
                      </span>
                    </div>
                    <div class="col-md-4">
                      <button
                        class="button newsletter no-pip"
                        name="newsletter"
                        id="newsletter"
                      >
                        Subscribe Newsletter
                        <span>
                          <i class="fa fa-envelope-o"></i>
                        </span>
                      </button>
                    </div>
                    {/* <!--</form>--> */}
                  </div>
                </div>
              </div>
              <div class="clearfix"></div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
