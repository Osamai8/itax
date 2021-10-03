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
        <div class="breadcrumbpane">
          <div class="container">
            <h1 class="pull-left">Blog</h1>
          </div>
        </div>
        {/* <!-- start: blog section --> */}
        <section class="blog_area section-padding">
          <div class="container">
            <div class="row">
              <div class="col-lg-8">
                <div class="blog_left_sidebar">
                  {this.state.data.length > 0 &&
                    this.state.data.map((each, key) => {
                      return (
                        <>
                          <div class="media post_item">
                            <div class="col-md-3">
                              <img
                                src={each.blog_image}
                                alt="blog"
                                class="post-img"
                              />
                            </div>
                            <div class="col-md-9">
                              <div class="media-body">
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
                                  class="readmore"
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

                  {/*  <div class="media post_item">
                    <div class="col-md-3">
                      <img src={blogImage} alt="blog" class="post-img" />
                    </div>
                    <div class="col-md-9">
                      <div class="media-body">
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
                          class="readmore"
                          data-toggle="modal"
                          data-target="#blogModal"
                        >
                          Read More...
                        </a>
                      </div>
                    </div>
                  </div>
                   
                  <hr />*/}
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
              <div class="col-lg-4">
                <div class="blog_right_sidebar">
                  <aside class="single_sidebar_widget search_widget">
                    <form action="#">
                      <div class="form-group">
                        <div class="input-group " style={{ display: "" }}>
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
                    <h4 class="widget_title">Blog By Category</h4>
                    <ul class="list cat-list">
                      <li>
                        <a href="#" class="d-flex">
                          <p>Business Startup Services</p>
                          <p>(37)</p>
                        </a>
                      </li>
                      <li>
                        <a href="#" class="d-flex">
                          <p>Corporate Advisory</p>
                          <p>(10)</p>
                        </a>
                      </li>
                      <li>
                        <a href="#" class="d-flex">
                          <p>Financial Funding and Debt Mgmt.</p>
                          <p>(03)</p>
                        </a>
                      </li>
                      <li>
                        <a href="#" class="d-flex">
                          <p>Outsourcing Services</p>
                          <p>(11)</p>
                        </a>
                      </li>
                      <li>
                        <a href="#" class="d-flex">
                          <p>Foreign Company Setup in India</p>
                          <p>(21)</p>
                        </a>
                      </li>
                      <li>
                        <a href="#" class="d-flex">
                          <p>Income tax Advisory</p>
                          <p>(09)</p>
                        </a>
                      </li>
                      <li>
                        <a href="#" class="d-flex">
                          <p>International Taxation</p>
                          <p>(05)</p>
                        </a>
                      </li>
                      <li>
                        <a href="#" class="d-flex">
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
        </section>
        {/* <!-- end: blog section -->

<!-- Modal --> */}
        <div class="modal fade" id="blogModal" role="dialog">
          <div class="modal-dialog" style={{ width: "480px" }}>
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">
                  &times;
                </button>
                <h4 class="modal-title">Blog</h4>
              </div>
              <div class="modal-body">
                <p>
                  Enter your name and email address to get access of blog
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
                      <span id="error" class="error" style={styles.display}>
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
                      <span id="err" class="error" style={styles.display}>
                        Enter email address
                      </span>
                    </div>
                    <div class="text-center">
                      <a
                        href="#"
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

        <NewsLetter />
        <Footer />
      </div>
    );
  }
}
