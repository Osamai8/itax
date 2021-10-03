import React, { Component } from "react";
import Slider from "../../Components/home/slider";
import Services from "../../Components/home/services";
import videoLogo from "../../images/video.png";
import blogImage from "../../images/blog.png";
import Testimonials from "../../Components/home/testimonials";
import NewsLetter from "../../Components/home/subscribeNewsletter";
import Calender from "../../Components/home/calender";
import RestApi from "../../services/api";
import { Link } from "react-router-dom";
import Footer from "../../Common/footer";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bannerData: [],
      featuredVideo: {},
      blogs: [],
    };
  }
  componentDidMount() {
    this.fetchbanner();
  }
  componentDidUpdate() {}
  fetchbanner = () => {
    console.log("index");
    RestApi.homePage().then((res) => {
      let video = { video_link: "", description: "", video_heading: "" };
      console.log("response", res.data);
      let { data } = res.data;
      if (data.featured_video != null && data.featured_video.video_link) {
        video.video_link = data.featured_video.video_link.slice(
          data.featured_video.video_link.lastIndexOf("=") + 1,
          data.featured_video.video_link.length
        );
        video.description = data.featured_video.description;
        video.video_heading = data.featured_video.video_heading;
      }
      // console.log("aaaaaa", data.featured_video.video_link);
      this.setState({
        bannerData: data.banners,
        featuredVideo: video,
        blogs: data.blogs,
      });
    });
  };
  render() {
    let { featuredVideo, bannerData } = this.state;
    return (
      <>
        <div id="home-page">
          <header id="header" class="header-wrapper home-parallax home-fade">
            <div class="header-wrapper-inner introdata">
              <div class="intro intro1">
                <h1>What are you looking for?</h1>
                <p>
                  Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                  used in laying out print, graphic or web designs.
                </p>
                <form class="example" action="#">
                  <input
                    type="text"
                    placeholder="Service Search..."
                    name="search"
                  />
                </form>
              </div>
              <div class="intro intro2">
                <h1>Schedule A video Call</h1>
                <p>
                  Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                  used in laying out print, graphic or web designs.
                </p>
                <a href="#" class="btn button">
                  {" "}
                  Schedule A video Call
                </a>
                <br />
                <img src={videoLogo} alt="Schedule A video Call" />
              </div>
            </div>
            <Slider bannerData={bannerData} />
          </header>
          {/* <!-- /Header --> */}
          <div class="blog_area">
            <div class="container">
              <div class="marquetext marquee">
                <img src={blogImage} />
                <ul>
                  <marquee
                    behavior="scroll"
                    // onmouseover="stop()"
                    // onmouseout="start()"
                  >
                    {this.state.blogs.map((each) => {
                      return (
                        <>
                          <li>
                            <a href="p">{each.heading}</a>
                          </li>{" "}
                        </>
                      );
                    })}
                 
                    
                  </marquee>
                </ul>
              </div>
            </div>
          </div>
          <Services />
          <section
            class="our_department_area"
            style={{ backgroundColor: "#f3f3f3!important" }}
          >
            <div class="container">
              <div class="row">
                {/* Calender */}

                <Calender />

                {/* Calender */}
                <div class="col-xl-3 col-md-6 col-lg-3">
                  <div class="single_department other-act">
                    <div class="department_content">
                      <h3>FEATURED VIDEO</h3>
                      {featuredVideo.video_link != "" ? (
                        <div class="embed-responsive embed-responsive-16by9 topbtmmargin">
                          <iframe
                            id="ytplayer"
                            width="640"
                            height="360"
                            src={`https://www.youtube.com/embed/${featuredVideo.video_link}`}
                            frameborder="0"
                            allowfullscreen=""
                            alt={featuredVideo.video_heading}
                          ></iframe>
                        </div>
                      ) : (
                        <div
                          style={{ textAlign: "center", marginTop: "100px" }}
                        >
                          {" "}
                          No Video Available{" "}
                        </div>
                      )}
                      <p>{featuredVideo.description}</p>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-md-6 col-lg-3">
                  <div class="single_department other-act">
                    <div class="department_content">
                      <h3>Events</h3>
                      <p>
                        <div class="events">
                          <marquee
                            behavior="scroll"
                            direction="up"
                            scrolldelay="200"
                            // onmouseover="stop()"
                            // onmouseout="start()"
                          >
                            <ul>
                              <li>
                                <a href="#">
                                  {" "}
                                  Lorem ipsum, or lipsum as it is sometimes
                                  known, is dummy text used in laying out print,
                                  graphic...
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  {" "}
                                  Lorem ipsum, or lipsum as it is sometimes
                                  known, is dummy text used in laying out print,
                                  graphic...
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  {" "}
                                  Lorem ipsum, or lipsum as it is sometimes
                                  known, is dummy text used in laying out print,
                                  graphic...
                                </a>
                              </li>
                            </ul>
                          </marquee>
                        </div>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-md-6 col-lg-3">
                  <div class="single_department other-act">
                    <div class="department_content">
                      <h3>Downloads</h3>
                      <p>
                        <div class="downloadform">
                          <ul>
                            <a href="#">
                              <Link to="/download_form">
                                {" "}
                                <li>
                                  {" "}
                                  <i class="fa fa-buysellads"></i>Form{" "}
                                </li>
                              </Link>
                            </a>
                            <a href="#">
                              <li>
                                <i class="fa fa-question-circle"></i>FAQ
                              </li>
                            </a>
                            <a href="#">
                              {" "}
                              <Link to="/newsletters">
                                <li>
                                  <i class="fa fa-envelope"></i>Newsletter
                                </li>
                              </Link>
                            </a>
                            <a href="#">
                              <Link to="/videos">
                                {" "}
                                <li>
                                  <i class="fa fa-file-video-o"></i>Videos
                                </li>
                              </Link>
                            </a>
                          </ul>
                        </div>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <Testimonials />
          {/* <!---------------------------Newsletter Section----------------------------> */}
          <NewsLetter />
          <Footer />
        </div>
      </>
    );
  }
}
