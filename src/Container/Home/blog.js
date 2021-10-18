import React, { Component } from "react";
import Footer from "../../Common/footer";
import Header from "../../Common/header";
import blogImage from "../../images/blog/blog1.png";
import NewsLetter from "../../Components/home/subscribeNewsletter";
import RestApi from "../../services/api";
import { Link } from "react-router-dom";

export default class blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      currenPage: 1,
      nextPage: 1,
      prevPage: 1,
      totalPages: 1,
    };
  }
  componentDidMount() {
    this.fetchData();
  }
  fetchData() {
    RestApi.blogs().then((res) => {
      console.log("blog", res);
      if (res.data.status) {
        let nextPage = res.data.data.next_page_url?.slice(
          res.data.data.next_page_url.lastIndexOf("=") + 1,
          res.data.data.next_page_url.length
        );
        let prevPage = res.data.data.prev_page_url?.slice(
          res.data.data.prev_page_url.lastIndexOf("=") + 1,
          res.data.data.prev_page_url.length
        );
        this.setState({
          data: res.data.data.data,
          totalPages: res.data.data.last_page,
          nextPage,
          prevPage,
        });
      }
    });
  }
  changePage(currenPage) {
    console.log(currenPage)
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
            className={
              this.state.currenPage == i ? "page-item active" : "page-item"
            }
          >
            <a className="page-link">{i}</a>
          </li>
        </>
      );
    }
    return renderData;
  }
  render() {
    console.log("blog", this.state);
    const styles = {
      display: {
        display: "none",
        color: "red",
      },
    };
    return (
      <div>
        <Header />
        <div className="breadcrumbpane">
          <div className="container">
            <h1 className="pull-left">Blog</h1>
          </div>
        </div>
        {/* <!-- start: blog section --> */}
        <section className="blog_area section-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="blog_left_sidebar">
                  {this.state.data.length > 0 &&
                    this.state.data.map((each, key) => {
                      return (
                        <>
                          <div className="media post_item">
                            <div className="col-md-3">
                              <img
                                src={each.blog_image}
                                alt="blog"
                                className="post-img"
                              />
                            </div>
                            <div className="col-md-9">
                              <div className="media-body">
                                <a href="#">
                                  <h3>s{each.heading}</h3>
                                </a>
                                <strong>{each.published_date}</strong>
                                <div
                      dangerouslySetInnerHTML={{
                        __html: each.short_description
                      }}
                    /> 
                                
                               <Link to={`/blog-details/${each.id}`}>
                               <a
                                  className="readmore"
                                  data-toggle="modal"
                                  data-target="#blogModal"
                                >
                                  Read More...
                                </a>
                               </Link>
                              </div>
                            </div>
                          </div>
                          <hr />
                        </>
                      );
                    })}

                  {/*  <div className="media post_item">
                    <div className="col-md-3">
                      <img src={blogImage} alt="blog" className="post-img" />
                    </div>
                    <div className="col-md-9">
                      <div className="media-body">
                        <a href="#">
                          <h3>Corporate Advisory</h3>
                        </a>
                        <strong>January 12, 2021</strong>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat.
                        </p>
                        <a
                          href="#"
                          className="readmore"
                          data-toggle="modal"
                          data-target="#blogModal"
                        >
                          Read More...
                        </a>
                      </div>
                    </div>
                  </div>
                   
                  <hr />*/}
                  <nav className="blog-pagination">
                    <ul className="pagination">
                    <li className="page-item">
                      <a
                        onClick={() =>
                          this.state.currenPage != 1 &&
                          this.changePage(this.state.prevPage)
                        }
                        className={this.state.currenPage != 1  ? "page-link preview" : "page-link preview disabled-pagi"}
                        aria-label="Previous"
                      >
                        <i className="fa fa-angle-double-left"></i> Prev.
                      </a>
                    </li>
                    {this.pageNumbers()}
                    <li className="page-item">
                      <a
                        onClick={() =>
                          this.state.currenPage < this.state.totalPages &&
                          this.changePage(this.state.nextPage)
                        }
                        disabled
                        className={this.state.currenPage < this.state.totalPages ? "page-link next" : "page-link next disabled-pagi"}
                        aria-label="Next"
                      >
                        Next <i className="fa fa-angle-double-right"></i>
                      </a>
                    </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="blog_right_sidebar">
                  <aside className="single_sidebar_widget search_widget">
                    <form action="#">
                      <div className="form-group">
                        <div className="input-group " style={{ display: "" }}>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Search Keyword"
                            onfocus="this.placeholder = ''"
                            onblur="this.placeholder = 'Search Keyword'"
                          />
                          <div className="input-group-append">
                            <button className="btn" type="button">
                              <i className="fa fa-search"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                      <button
                        className="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn"
                        type="submit"
                      >
                        Search
                      </button>
                    </form>
                  </aside>
                  <aside className="single_sidebar_widget post_category_widget">
                    <h4 className="widget_title">Blog By Category</h4>
                    <ul className="list cat-list">
                      <li>
                        <a href="#" className="d-flex">
                          <p>Business Startup Services</p>
                          <p>(37)</p>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="d-flex">
                          <p>Corporate Advisory</p>
                          <p>(10)</p>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="d-flex">
                          <p>Financial Funding and Debt Mgmt.</p>
                          <p>(03)</p>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="d-flex">
                          <p>Outsourcing Services</p>
                          <p>(11)</p>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="d-flex">
                          <p>Foreign Company Setup in India</p>
                          <p>(21)</p>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="d-flex">
                          <p>Income tax Advisory</p>
                          <p>(09)</p>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="d-flex">
                          <p>International Taxation</p>
                          <p>(05)</p>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="d-flex">
                          <p>FEMA and FERA Advisory</p>
                          <p>(12)</p>
                        </a>
                      </li>
                    </ul>
                  </aside>
                  <aside className="single_sidebar_widget post_category_widget">
                    <h4 className="widget_title">Months / Archive</h4>
                    <ul className="list cat-list">
                      <li>
                        <a href="#" className="d-flex">
                          <p>May 2021</p>
                          <p>(37)</p>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="d-flex">
                          <p>April 2021</p>
                          <p>(10)</p>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="d-flex">
                          <p>March 2021</p>
                          <p>(03)</p>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="d-flex">
                          <p>June 2021</p>
                          <p>(11)</p>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="d-flex">
                          <p>January 2021</p>
                          <p>(21)</p>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="d-flex">
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
        </section>
        {/* <!-- end: blog section -->

<!-- Modal --> */}
        <div className="modal fade" id="blogModal" role="dialog">
          <div className="modal-dialog" style={{ width: "480px" }}>
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">
                  &times;
                </button>
                <h4 className="modal-title">Blog</h4>
              </div>
              <div className="modal-body">
                <p>
                  Enter your name and email address to get access of blog
                  section.
                  <br />* Don't Worry You'll Not be Spammed
                </p>
                <div className="row center" style={{ width: "360px" }}>
                  <form method="post">
                    <div className="col-md-12">
                      <input
                        type="text"
                        name="firstname"
                        id="firstname"
                        className="form-control inputpane"
                        placeholder="Enter Your Name"
                      />
                      <span id="error" className="error" 
                      // style={styles.display}
                      >
                        Enter User Name
                      </span>
                    </div>
                    <div className="col-md-12">
                      <input
                        type="text"
                        name="emailaddress"
                        id="emailaddress"
                        className="form-control inputpane"
                        placeholder="Enter Your Email Address"
                      />
                      <span id="err" className="error" 
                      // style={styles.display}
                      >
                        Enter email address
                      </span>
                    </div>
                    <div className="text-center">
                      <a
                        href="#"
                        className="button newsletter no-pip"
                        name=""
                        id=""
                      >
                        Submit
                        <span>
                          <i className="fa fa-envelope-o"></i>
                        </span>
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <NewsLetter />
        <Footer />
      </div>
    );
  }
}
