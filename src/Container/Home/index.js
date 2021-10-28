import React, { Component } from "react";
import Slider from "../../Components/home/slider";
import Services from "../../Components/home/services";
import videoLogo from "../../images/video.png";
import blogImage from "../../images/blog-home.png";
import Testimonials from "../../Components/home/testimonials";
import Newsletter from "../../Components/home/subscribeNewsletter";
// import Calender from "../../Components/home/calender";
import RestApi from "../../services/api";
import { Link } from "react-router-dom";
import Footer from "../../Common/footer";
import Marquee from 'react-easy-marquee'
import {Events, Calender, DownloadForm} from "../../Components/home/features";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bannerData: [],
      featuredVideo: {},
      blogs: [],
      services:[],
      search:''
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
  changeYear(year){
    this.setState({
      year:year
    })
  }
  handleServices(services){
    console.log("servicess in index",services)
    this.setState({services})
  }
  handleSearch = (e)=>{
    this.setState({
      search:e.target.value
    })
  }
  render() {
    let { featuredVideo, bannerData } = this.state;
    return (
      <>
        <div id="home-page">
          <header id="header" className="header-wrapper home-parallax home-fade">
            <div className="header-wrapper-inner introdata">
              <div className="intro intro1">
                <h1>What are you looking for?</h1>
                <p>
                  Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                  used in laying out print, graphic or web designs.
                </p>
                <form id="sky-form" method="POST" class="sky-form" action="https://itaxdoctor.idossapp.com/index.php/Itax/user_login" novalidate="novalidate">
        <fieldset>
          <section>
            <div class="row">
              <div class="col col-12">
                <label class="input">
                  <a href="service_search_result.php" title="Search"> <Link to={`/search/${this.state.search}`}><i class="search-result sr-rslt icon-append fa fa-search"></i></Link></a>
                  <input type="text" onChange={this.handleSearch} placeholder="Search..." name="search" autocomplete="on"/>
                </label>
              </div>
            </div>
          </section> 
        </fieldset>
    </form>
              </div>
              <div className="intro intro2">
                <h1>Schedule A video Call</h1>
                <p>
                  Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                  used in laying out print, graphic or web designs.
                </p>
                <a href="#" className="btn button">
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
          {this.state.blogs.length > 0 && <div className="blog_area">
            <div className="container">
              <div className="marquetext marquee">
                <img src={blogImage} className="blog-home-img"/>
                <ul>
                 
                  <marquee
                  behavior="scroll"
                  onMouseOver="stop()"
                  onMouseOut="start()"
                  > 
                    {this.state.blogs.map((each,i) => {
                      return ( 
                        <Link key={i} to={`blog-details/${each.id}`}>
                          <li>
                            <a >{each.heading}</a>
                          </li>
                        </Link> 
                      );
                    })}

                    {/* <li>
                      <a href="p">Companies Filing of documents</a>
                    </li> */}
                  </marquee>
                </ul>
              </div>
            </div>
          </div>}
          <Services setService={(service)=> this.handleServices(service)} />
          <section
            className="our_department_area"
            // style={{ backgroundColor: "#f3f3f3!important" }}
          >
            <div className="container">
              <div className="row">
                {/* Calender */}

                <Calender />

                {/* Calender */}
                <div className="col-xl-3 col-md-6 col-lg-3">
                  <div className="single_department other-act">
                    <div className="department_content">
                      <h3>FEATURED VIDEO</h3>
                      {featuredVideo.video_link != "" ? (
                        <div className="embed-responsive embed-responsive-16by9 topbtmmargin">
                          <iframe
                            id="ytplayer"
                            width="640"
                            height="360"
                            src={`https://www.youtube.com/embed/${featuredVideo.video_link}`}
                            frameBorder="0"
                            allowfullscreen=""
                            alt={featuredVideo.video_heading}
                          ></iframe>
                        </div>
                      ) : (
                        <div className='no-video'
                        >
                          {" "}
                          No Video Available{" "}
                        </div>
                      )}
                      <p>{featuredVideo.description}</p>
                    </div>
                  </div>
                </div>
               {/* events */}
               <Events/>
                 {/* downloadForm */}
               <DownloadForm/>
              </div>
            </div>
          </section>

          <Testimonials />
          {/* <!---------------------------Newsletter Section----------------------------> */}
          <Newsletter />
          <Footer />
        </div>
      </>
    );
  }
}
