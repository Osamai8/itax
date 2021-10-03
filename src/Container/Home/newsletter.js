import React, { Component } from "react";
import Footer from "../../Common/footer";
import RestApi from "../../services/api";

export default class newsletter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableOne: [],
      tableTwo: [],
      placeholder: {},
      currenPage: 1,
      nextPage: 1,
      prevPage: 1,
      totalPages: 1,
    };
  }
  componentDidMount() {
    this.fetchData();
    this.placeHolderAPI();
  }
  componentDidUpdate(prevProps, prevState) {
    // console.log("update",this.state.currenPage)
    if (prevState.currenPage != this.state.currenPage) {
      this.fetchData();
    }
  }
  fetchData() {
    RestApi.newsletters(this.state.currenPage).then((res) => {
      console.log("news", res);
      if (res.data.status) {
        let tableOne = [],
          tableTwo = [];
        res.data.data.data.map((each, i) => {
          let date = new Date(each.year, each.month - 1);
          let month = date.toLocaleString("en-us", {
            month: "short",
          });
          each = { ...each, month };
          if (i <= 6) {
            tableOne.push(each);
          } else {
            tableTwo.push(each);
          }
        });
        let nextPage = res.data.data.next_page_url?.slice(
          res.data.data.next_page_url.lastIndexOf("=") + 1,
          res.data.data.next_page_url.length
        );
        let prevPage = res.data.data.prev_page_url?.slice(
          res.data.data.prev_page_url.lastIndexOf("=") + 1,
          res.data.data.prev_page_url.length
        );

        this.setState({
          tableOne,
          tableTwo,
          totalPages: res.data.data.last_page,
          nextPage,
          prevPage,
        });
      }
    });
  }
  placeHolderAPI() {
    RestApi.placeholder("newsletters").then((res) => {
      console.log("placeHolder: new: ", res);
      if (res.data.status) {
        this.setState({ placeholder: res.data.data.data });
      }
    });
  }
  changePage(currenPage) {
    console.log(currenPage);
    if (currenPage != this.state.currenPage && !isNaN(currenPage)) {
      this.setState({ currenPage });
    }
  }
  pageNumbers() {
    let { totalPages } = this.state;
    let renderData = [];
    for (let i = 1; i <= totalPages; i++) {
      renderData.push(
        <>
          <li
            onClick={() => this.changePage(i)}
            class={
              this.state.currenPage == i ? "page-item active" : "page-item"
            }
          >
            <a class="page-link">{i}</a>
          </li>
        </>
      );
    }
    return renderData;
  }
  render() {
    console.log("state", this.state);
    let { tableOne, tableTwo } = this.state;
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
                    {/* table one  */}
                    <tr>
                      <td>{tableOne.length >= 1 && 1}</td>
                      <th scope="row" class="cal-left cal-header">
                        {`${tableOne[0]?.month ? tableOne[0]?.month : ""} ${
                          tableOne[0]?.year ? tableOne[0]?.year : ""
                        }`}
                      </th>
                      <td>
                        <ul>
                          <li>
                            {tableOne[0]?.file && (
                              <a
                                target="_blank"
                                href={tableOne[0]?.file && tableOne[0]?.file}
                                download=""
                              >
                                <img src="https://itaxdoctor.idossapp.com/assets/front_end/images/pdf-icon.png" />
                              </a>
                            )}
                          </li>
                        </ul>
                      </td>
                    </tr>

                    <tr>
                      <td>{tableOne.length >= 2 && 2}</td>
                      <th scope="row" class="cal-left cal-header">
                        {`${tableOne[1]?.month ? tableOne[1]?.month : ""} ${
                          tableOne[1]?.year ? tableOne[1]?.year : ""
                        }`}
                      </th>
                      <td>
                        <ul>
                          <li>
                            {tableOne[1]?.file && (
                              <a
                                target="_blank"
                                href={tableOne[1]?.file && tableOne[1]?.file}
                                download=""
                              >
                                <img src="https://itaxdoctor.idossapp.com/assets/front_end/images/pdf-icon.png" />
                              </a>
                            )}
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td>{tableOne.length >= 3 && 3}</td>
                      <th scope="row" class="cal-left cal-header">
                        {`${tableOne[2]?.month ? tableOne[2]?.month : ""} ${
                          tableOne[2]?.year ? tableOne[2]?.year : ""
                        }`}
                      </th>
                      <td>
                        <ul>
                          <li>
                            {tableOne[2]?.file && (
                              <a
                                target="_blank"
                                href={tableOne[2]?.file && tableOne[2]?.file}
                                download=""
                              >
                                <img src="https://itaxdoctor.idossapp.com/assets/front_end/images/pdf-icon.png" />
                              </a>
                            )}
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td>{tableOne.length >= 4 && 4}</td>
                      <th scope="row" class="cal-left cal-header">
                        {`${tableOne[3]?.month ? tableOne[3]?.month : ""} ${
                          tableOne[3]?.year ? tableOne[3]?.year : ""
                        }`}
                      </th>
                      <td>
                        <ul>
                          <li>
                            {tableOne[3]?.file && (
                              <a
                                target="_blank"
                                href={tableOne[3]?.file && tableOne[3]?.file}
                                download=""
                              >
                                <img src="https://itaxdoctor.idossapp.com/assets/front_end/images/pdf-icon.png" />
                              </a>
                            )}
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td>{tableOne.length >= 5 && 5}</td>
                      <th scope="row" class="cal-left cal-header">
                        {`${tableOne[4]?.month ? tableOne[4]?.month : ""} ${
                          tableOne[4]?.year ? tableOne[4]?.year : ""
                        }`}
                      </th>
                      <td>
                        <ul>
                          <li>
                            {tableOne[4]?.file && (
                              <a
                                target="_blank"
                                href={tableOne[4]?.file && tableOne[4]?.file}
                                download=""
                              >
                                <img src="https://itaxdoctor.idossapp.com/assets/front_end/images/pdf-icon.png" />
                              </a>
                            )}
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td>{tableOne.length >= 6 && 6}</td>
                      <th scope="row" class="cal-left cal-header">
                        {`${tableOne[5]?.month ? tableOne[5]?.month : ""} ${
                          tableOne[5]?.year ? tableOne[5]?.year : ""
                        }`}
                      </th>
                      <td>
                        <ul>
                          <li>
                            {tableOne[5]?.file && (
                              <a
                                target="_blank"
                                href={tableOne[5]?.file && tableOne[5]?.file}
                                download=""
                              >
                                <img src="https://itaxdoctor.idossapp.com/assets/front_end/images/pdf-icon.png" />
                              </a>
                            )}
                          </li>
                        </ul>
                      </td>
                    </tr>
                    {/* table one  */}
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
                    {/* table two start */}
                    <tr>
                      <td>{tableTwo.length >= 1 && 1}</td>
                      <th scope="row" class="cal-left cal-header">
                        {`${tableTwo[0]?.month ? tableTwo[0]?.month : ""} ${
                          tableTwo[0]?.year ? tableTwo[0]?.year : ""
                        }`}
                      </th>
                      <td>
                        <ul>
                          <li>
                            {tableTwo[0]?.file && (
                              <a
                                target="_blank"
                                href={tableTwo[0]?.file && tableTwo[0]?.file}
                                download=""
                              >
                                <img src="https://itaxdoctor.idossapp.com/assets/front_end/images/pdf-icon.png" />
                              </a>
                            )}
                          </li>
                        </ul>
                      </td>
                    </tr>

                    <tr>
                      <td>{tableTwo.length >= 2 && 2}</td>
                      <th scope="row" class="cal-left cal-header">
                        {`${tableTwo[1]?.month ? tableTwo[1]?.month : ""} ${
                          tableTwo[1]?.year ? tableTwo[1]?.year : ""
                        }`}
                      </th>
                      <td>
                        <ul>
                          <li>
                            {tableTwo[1]?.file && (
                              <a
                                target="_blank"
                                href={tableTwo[1]?.file && tableTwo[1]?.file}
                                download=""
                              >
                                <img src="https://itaxdoctor.idossapp.com/assets/front_end/images/pdf-icon.png" />
                              </a>
                            )}
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td>{tableTwo.length >= 3 && 3}</td>
                      <th scope="row" class="cal-left cal-header">
                        {`${tableTwo[2]?.month ? tableTwo[2]?.month : ""} ${
                          tableTwo[2]?.year ? tableTwo[2]?.year : ""
                        }`}
                      </th>
                      <td>
                        <ul>
                          <li>
                            {tableTwo[2]?.file && (
                              <a
                                target="_blank"
                                href={tableTwo[2]?.file && tableTwo[2]?.file}
                                download=""
                              >
                                <img src="https://itaxdoctor.idossapp.com/assets/front_end/images/pdf-icon.png" />
                              </a>
                            )}
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td>{tableTwo.length >= 4 && 4}</td>
                      <th scope="row" class="cal-left cal-header">
                        {`${tableTwo[3]?.month ? tableTwo[3]?.month : ""} ${
                          tableTwo[3]?.year ? tableTwo[3]?.year : ""
                        }`}
                      </th>
                      <td>
                        <ul>
                          <li>
                            {tableTwo[3]?.file && (
                              <a
                                target="_blank"
                                href={tableTwo[3]?.file && tableTwo[3]?.file}
                                download=""
                              >
                                <img src="https://itaxdoctor.idossapp.com/assets/front_end/images/pdf-icon.png" />
                              </a>
                            )}
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td>{tableTwo.length >= 5 && 5}</td>
                      <th scope="row" class="cal-left cal-header">
                        {`${tableTwo[4]?.month ? tableTwo[4]?.month : ""} ${
                          tableTwo[4]?.year ? tableTwo[4]?.year : ""
                        }`}
                      </th>
                      <td>
                        <ul>
                          <li>
                            {tableTwo[4]?.file && (
                              <a
                                target="_blank"
                                href={tableTwo[4]?.file && tableTwo[4]?.file}
                                download=""
                              >
                                <img src="https://itaxdoctor.idossapp.com/assets/front_end/images/pdf-icon.png" />
                              </a>
                            )}
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td>{tableTwo.length >= 6 && 6}</td>
                      <th scope="row" class="cal-left cal-header">
                        {`${tableTwo[5]?.month ? tableTwo[5]?.month : ""} ${
                          tableTwo[5]?.year ? tableTwo[5]?.year : ""
                        }`}
                      </th>
                      <td>
                        <ul>
                          <li>
                            {tableTwo[5]?.file && (
                              <a
                                target="_blank"
                                href={tableTwo[5]?.file && tableTwo[5]?.file}
                                download=""
                              >
                                <img src="https://itaxdoctor.idossapp.com/assets/front_end/images/pdf-icon.png" />
                              </a>
                            )}
                          </li>
                        </ul>
                      </td>
                    </tr>

                    {/* table two start */}
                  </tbody>
                </table>
              </div>

              {this.state.placeholder?.image &&
                this.state.placeholder?.description && (
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
                )}
              <div class="col-md-12">
                <nav class="blog-pagination">
                  <ul class="pagination">
                    <li class="page-item">
                      <a
                        onClick={() =>
                          this.state.currenPage != 1 &&
                          this.changePage(this.state.prevPage)
                        }
                        class="page-link preview"
                        aria-label="Previous"
                      >
                        <i class="fa fa-angle-double-left"></i> Prev.
                      </a>
                    </li>
                    {this.pageNumbers()}
                    <li class="page-item">
                      <a
                        onClick={() =>
                          this.state.currenPage < this.state.totalPages &&
                          this.changePage(this.state.nextPage)
                        }
                        disabled
                        class="page-link next"
                        aria-label="Next"
                      >
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
        <Footer />
      </div>
    );
  }
}
