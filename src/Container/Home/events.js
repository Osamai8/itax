import React, { Component } from "react";
import RestApi from "../../services/api";

export default class events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    this.fetchData();
  }
  fetchData() {
    RestApi.events().then((response) => {
      console.log("events", response);
      if (response.data.status) {
        this.setState({
          data: response.data.data,
        });
      }
    });
  }
  render() {
    return (
      <>
        <section>
          <div class="breadcrumbpane">
            <div class="container">
              <h1 class="pull-left">Events</h1>
            </div>
          </div>
          <div class="container">
            <div class="row">
              <div class="divider bg-light">
                <div class="container">
                  <div class="col-lg-8">
                    <div class="section-title text-center">
                      <h2 class="mt-0">Upcoming Events</h2>
                    </div>
                    <div class="events-new">
                      {this.state.data.map((each)=> {
                       return   <>
                            <div
                          class="card card-1"
                          onmouseover="_card_more1()"
                          onmouseout="_card_less1()"
                        >
                          <div class="card-img" style={{backgroundImage:''}}></div>
                          <div class="card-text">
                            <h3 class="card-title bold-700">
                              Pandemic Discount
                            </h3>
                            <p
                              class="card-subtitle regular-400"
                              id="card-subtitle-1"
                            >
                              12 July, 2021 till 22 July, 2021
                            </p>
                            <a
                              href="#"
                              class="card-button click"
                              data-toggle="modal"
                              data-target="#eventModal"
                            >
                              More Info
                            </a>
                          </div>
                        </div>
                          </>
                      })
                        
                      }

                      {/* <div
                        class="card card-2"
                        onmouseover="_card_more2()"
                        onmouseout="_card_less2()"
                      >
                        <div class="card-img card-img-2"></div>
                        <div class="card-text">
                          <h3 class="card-title bold-700">Annual Meeting</h3>
                          <p
                            class="card-subtitle regular-400"
                            id="card-subtitle-2"
                          >
                            Sat, 27 July, 2021
                          </p>
                          <a
                            href="#"
                            class="card-button click"
                            data-toggle="modal"
                            data-target="#eventModal"
                          >
                            More Info
                          </a>
                        </div>
                      </div> */}
                      
                    </div>

                    <div class="section-title text-center">
                      <h2 class="mt-0">Related Events</h2>
                    </div>
                    <div class="events-new">
                      <div
                        class="card card-1"
                        onmouseover="_card_more1()"
                        onmouseout="_card_less1()"
                      >
                        <div class="card-img card-img-1"></div>
                        <div class="card-text">
                          <h3 class="card-title bold-700">Pandemic Discount</h3>
                          <p
                            class="card-subtitle regular-400"
                            id="card-subtitle-1"
                          >
                            12 July, 2021 till 22 July, 2021
                          </p>
                          <a
                            href="#"
                            class="card-button click"
                            data-toggle="modal"
                            data-target="#eventModal"
                          >
                            More Info
                          </a>
                        </div>
                      </div>
                      <div
                        class="card card-2"
                        onmouseover="_card_more2()"
                        onmouseout="_card_less2()"
                      >
                        <div class="card-img card-img-2"></div>
                        <div class="card-text">
                          <h3 class="card-title bold-700">Annual Meeting</h3>
                          <p
                            class="card-subtitle regular-400"
                            id="card-subtitle-2"
                          >
                            Sat, 27 July, 2021
                          </p>
                          <a
                            href="#"
                            class="card-button click"
                            data-toggle="modal"
                            data-target="#eventModal"
                          >
                            More Info
                          </a>
                        </div>
                      </div>
                      <div
                        class="card card-3"
                        onmouseover="_card_more3()"
                        onmouseout="_card_less3()"
                      >
                        <div class="card-img card-img-3"></div>
                        <div class="card-text">
                          <h3 class="card-title bold-700">
                            Tour Space turns 11!
                          </h3>
                          <p
                            class="card-subtitle regular-400"
                            id="card-subtitle-3"
                          >
                            31 July, 2021 - Birthday
                          </p>
                          <a
                            href="#"
                            class="card-button click"
                            data-toggle="modal"
                            data-target="#eventModal"
                          >
                            More Info
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <div class="blog_right_sidebar">
                      <aside class="single_sidebar_widget search_widget">
                        <form action="event-detail.php">
                          <div class="form-group">
                            <div class="input-group">
                              <input
                                type="text"
                                class="form-control"
                                placeholder="Search Keyword"
                                onfocus="this.placeholder = ''"
                                onblur="this.placeholder = 'Search Keyword'"
                              />
                              <div class="input-group-append">
                                <button class="btn" type="button">
                                  <i class="fa fa-search"></i>
                                </button>
                              </div>
                            </div>
                          </div>
                          <button
                            class="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn"
                            type="submit"
                          >
                            Search
                          </button>
                        </form>
                      </aside>
                      <aside class="single_sidebar_widget post_category_widget">
                        <h4 class="widget_title">Events By Category</h4>
                        <ul class="list cat-list">
                          <li>
                            <a href="event-detail.php" class="d-flex">
                              <p>Business Startup Services</p>
                              <p>(37)</p>
                            </a>
                          </li>
                          <li>
                            <a href="event-detail.php" class="d-flex">
                              <p>Corporate Advisory</p>
                              <p>(10)</p>
                            </a>
                          </li>
                          <li>
                            <a href="event-detail.php" class="d-flex">
                              <p>Financial Funding and Debt Mgmt.</p>
                              <p>(03)</p>
                            </a>
                          </li>
                          <li>
                            <a href="event-detail.php" class="d-flex">
                              <p>Outsourcing Services</p>
                              <p>(11)</p>
                            </a>
                          </li>
                          <li>
                            <a href="event-detail.php" class="d-flex">
                              <p>Foreign Company Setup in India</p>
                              <p>(21)</p>
                            </a>
                          </li>
                          <li>
                            <a href="event-detail.php" class="d-flex">
                              <p>Income tax Advisory</p>
                              <p>(09)</p>
                            </a>
                          </li>
                          <li>
                            <a href="event-detail.php" class="d-flex">
                              <p>International Taxation</p>
                              <p>(05)</p>
                            </a>
                          </li>
                          <li>
                            <a href="event-detail.php" class="d-flex">
                              <p>FEMA and FERA Advisory</p>
                              <p>(12)</p>
                            </a>
                          </li>
                        </ul>
                      </aside>
                      <aside class="single_sidebar_widget post_category_widget">
                        <h4 class="widget_title">Months / Archive</h4>
                        <ul class="list cat-list">
                          <li>
                            <a href="#" class="d-flex">
                              <p>May 2021</p>
                              <p>(37)</p>
                            </a>
                          </li>
                          <li>
                            <a href="#" class="d-flex">
                              <p>April 2021</p>
                              <p>(10)</p>
                            </a>
                          </li>
                          <li>
                            <a href="#" class="d-flex">
                              <p>March 2021</p>
                              <p>(03)</p>
                            </a>
                          </li>
                          <li>
                            <a href="#" class="d-flex">
                              <p>June 2021</p>
                              <p>(11)</p>
                            </a>
                          </li>
                          <li>
                            <a href="#" class="d-flex">
                              <p>January 2021</p>
                              <p>(21)</p>
                            </a>
                          </li>
                          <li>
                            <a href="#" class="d-flex">
                              <p>February 2021</p>
                              <p>(09)</p>
                            </a>
                          </li>
                        </ul>
                      </aside>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Modal --> */}
        <div class="modal fade" id="eventModal" role="dialog">
          <div class="modal-dialog" style={{ width: "480px" }}>
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">
                  &times;
                </button>
                <h4 class="modal-title">Events</h4>
              </div>
              <div class="modal-body">
                <p>
                  Enter your name and email address to get access of event
                  section.
                  <br />* Don't Worry You'll Not be Spammed
                </p>
                <div class="row center" style={{ width: "360px" }}>
                  <form method="post">
                    <div class="col-md-12">
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
                    <div class="col-md-12">
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
                    <div class="text-center">
                      <a
                        href="event-detail.php"
                        class="button newsletter no-pip"
                        name=""
                        id=""
                      >
                        Submit
                        <span>
                          <i class="fa fa-envelope-o"></i>
                        </span>
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
