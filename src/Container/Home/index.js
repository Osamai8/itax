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
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bannerData: [],
      featuredVideo: {},
    };
  }
  componentDidMount() {
    if(this.state.bannerData.length > 0 ) {
      
    }
    else {
      this.fetchbanner();
    }
    const titleElement = document.getElementById("root");
    titleElement.scrollIntoView({ behavior: "smooth" });
    
  }
  componentDidUpdate() {

  }
  fetchbanner = () => {
    console.log("index");
    RestApi.homePage().then((res) => {
      console.log("response", res.data);
      let {data} = res.data
      data.featured_video.video_link =
        data.featured_video.video_link.slice(
          data.featured_video.video_link.lastIndexOf("=") + 1,
          data.featured_video.video_link.length
        );
      console.log("aaaaaa", data.featured_video.video_link);
      this.setState({
        bannerData: data.banners,
        featuredVideo: data.featured_video,
      });
    });
  };
  render() {
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
            <Slider bannerData={this.state.bannerData} />
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
                    <li>
                      <a href="p">Refund without Adjustment</a>
                    </li>
                    <li>
                      <a href="p">Income tax information</a>
                    </li>
                    <li>
                      <a href="p">SEZ developers seek exemption</a>
                    </li>
                    <li>
                      <a href="p">Companies Filing of documents</a>
                    </li>
                    <li>
                      <a href="p">Irdai on policies in electronic form</a>
                    </li>
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
                      <div class="embed-responsive embed-responsive-16by9 topbtmmargin">
                        <iframe
                          id="ytplayer"
                          width="640"
                          height="360"
                          src={`https://www.youtube.com/embed/${this.state.featuredVideo.video_link}`}
                          frameborder="0"
                          allowfullscreen=""
                          alt={this.state.featuredVideo.video_heading}
                        ></iframe>
                      </div>
                      <p>{this.state.featuredVideo.video_heading}</p>
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
                              <li>
                              <Link to="/download_form">  <i class="fa fa-buysellads"></i>Form </Link>

                                
                              </li>
                            </a>
                            <a href="#">
                              <li>
                                <i class="fa fa-question-circle"></i>FAQ
                              </li>
                            </a>
                            <a href="#">
                              <li>
                              <Link to="/newsletters">  <i class="fa fa-envelope"></i>Newsletter </Link>
                              </li>
                            </a>
                            <a href="#">
                              <li>
                                <Link to="/videos"><i class="fa fa-file-video-o"></i>Videos</Link>
                              </li>
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
        </div>
      </>
    );
  }
}
