import React, { useEffect } from "react";
import Slider from "../../Components/home/slider";
import Services from "../../Components/home/services";
import videoLogo from "../../images/video.png";
import blogImage from "../../images/blog.png";
import Testimonials from "../../Components/home/testimonials";
import NewsLetter from "../../Components/home/newsletter";
import Images from "../../images/index.js";
import Header from "../../Common/header";
import Footer from "../../Common/footer";
import RestApi from "../../services/api";
function Index() {
  useEffect(() => {
      RestApi.homePage()
      .then((res) => {
        console.log(res)
      })
  }, [])
  return (
    <>
      <Header />
      <div id="home-page">
        <header id="header" class="header-wrapper home-parallax home-fade">
          <div class="header-wrapper-inner introdata">
            <div class="intro intro1">
              <h1>What are you looking for?</h1>
              <p>
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                used in laying out print, graphic or web designs.
              </p>
              <form class="example" action="action_page.php">
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
          <Slider />
        </header>
        {/* <!-- /Header --> */}
        <div class="blog_area">
          <div class="container">
            <div class="marquetext marquee">
              <img src={blogImage} />
              <ul>
                <marquee
                  behavior="scroll"
                  onmouseover="stop()"
                  onmouseout="start()"
                >
                  <li>
                    <a href="blog.php">Refund without Adjustment</a>
                  </li>
                  <li>
                    <a href="blog.php">Income tax information</a>
                  </li>
                  <li>
                    <a href="blog.php">SEZ developers seek exemption</a>
                  </li>
                  <li>
                    <a href="blog.php">Companies Filing of documents</a>
                  </li>
                  <li>
                    <a href="blog.php">Irdai on policies in electronic form</a>
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
              <Calender />
              <div class="col-xl-3 col-md-6 col-lg-3">
                <div class="single_department other-act">
                  <div class="department_content">
                    <h3>FEATURED VIDEO</h3>
                    <div class="embed-responsive embed-responsive-16by9 topbtmmargin">
                      <iframe
                        id="ytplayer"
                        width="640"
                        height="360"
                        src="https://www.youtube.com/embed/Dsu88o8ISMw"
                        frameborder="0"
                        allowfullscreen=""
                      ></iframe>
                    </div>
                    <p>
                      Lorem ipsum, or lipsum as it is sometimes known, is dummy
                      text used in laying out print, graphic or web designs.
                    </p>
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
                          onmouseover="stop()"
                          onmouseout="start()"
                        >
                          <ul>
                            <li>
                              <a href="events.php">
                                {" "}
                                Lorem ipsum, or lipsum as it is sometimes known,
                                is dummy text used in laying out print,
                                graphic...
                              </a>
                            </li>
                            <li>
                              <a href="events.php">
                                {" "}
                                Lorem ipsum, or lipsum as it is sometimes known,
                                is dummy text used in laying out print,
                                graphic...
                              </a>
                            </li>
                            <li>
                              <a href="events.php">
                                {" "}
                                Lorem ipsum, or lipsum as it is sometimes known,
                                is dummy text used in laying out print,
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
                          <a href="download_form.php">
                            <li>
                              <i class="fa fa-buysellads"></i>Form
                            </li>
                          </a>
                          <a href="faq.php">
                            <li>
                              <i class="fa fa-question-circle"></i>FAQ
                            </li>
                          </a>
                          <a href="newsletters.php">
                            <li>
                              <i class="fa fa-envelope"></i>Newsletter
                            </li>
                          </a>
                          <a href="show_videos.php">
                            <li>
                              <i class="fa fa-file-video-o"></i>Videos
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

      <Footer />
    </>
  );
}

export default Index;

const Calender = () => {
  return (
    <div class="col-xl-3 col-md-6 col-lg-3">
      <div class="single_department other-act">
        <div class="department_content">
          <h3>Calendar</h3>
          <div class="circle">
            <h2>2021</h2>
            <a href="calendar_schedule.php">
              <img
                class="jan"
                title="January"
                data-toggle="tooltip"
                id="jan"
                src={Images.jan}
              />
            </a>
            <a href="#">
              <img
                class="feb"
                title="February"
                data-toggle="tooltip"
                id="feb"
                src={Images.feb}
              />
            </a>
            <a href="#">
              <img
                class="mar"
                title="March"
                data-toggle="tooltip"
                id="mar"
                src={Images.march}
              />
            </a>
            <a href="#">
              <img
                class="apr"
                title="April"
                data-toggle="tooltip"
                id="apr"
                src={Images.april}
              />
            </a>
            <a href="#">
              <img
                class="may"
                title="May"
                data-toggle="tooltip"
                id="may"
                src={Images.may}
              />
            </a>
            <a href="#">
              <img
                class="june"
                title="June"
                data-toggle="tooltip"
                id="june"
                src={Images.june}
              />
            </a>
            <a href="#">
              <img
                class="july"
                title="July"
                data-toggle="tooltip"
                id="july"
                src={Images.july}
              />
            </a>
            <a href="#">
              <img
                class="aug"
                title="August"
                data-toggle="tooltip"
                id="aug"
                src={Images.august}
              />
            </a>
            <a href="#">
              <img
                class="sept"
                title="September"
                data-toggle="tooltip"
                id="sept"
                src={Images.sept}
              />
            </a>
            <a href="#">
              <img
                class="oct"
                title="October"
                data-toggle="tooltip"
                id="oct"
                src={Images.oct}
              />
            </a>
            <a href="#">
              <img
                class="nov"
                title="November"
                data-toggle="tooltip"
                id="nov"
                src={Images.nov}
              />
            </a>
            <a href="#">
              <img
                class="dec"
                title="December"
                data-toggle="tooltip"
                id="dec"
                src={Images.dec}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
