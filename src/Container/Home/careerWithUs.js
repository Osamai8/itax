import React, { Component } from "react";
import Header from "../../Common/header";
import NewsLetter from "../../Components/home/subscribeNewsletter";
import sliderImage from "../../images/slider/slider1.jpg";
import RestApi from "../../services/api";
import ModalRoot from "../../Components/modal/modalRoot";
import CareerForm from "../../Components/home/careerForm";
import Footer from "../../Common/footer";

export default class career extends Component {
  constructor(props) {
    super(props);
    this.state = {
      positions: [],
      openModal: false,
      placeholder: {}
    };
  }

  componentDidMount() {
    this.fetchData();
    this.placeHolderAPI()
  }
  fetchData = () => {
    RestApi.careers().then((res) => {
      console.log("careers", res);
      let positions = res.data.data;
      this.setState({ positions });
    });
  };
  placeHolderAPI(){
    RestApi.placeholder('career').then((res)=> {
      console.log("placeHolder: career: ",res)
      this.setState({ placeholder: res.data.data })
    })
  }
  render() {
    console.log("this", this.state);
    return (
      <>
        <Header />
        <div>
          <div class="breadcrumbpane">
            <div class="container">
              <h1 class="pull-left">CAREER - JOIN US</h1>
            </div>
          </div>
          <div class="container">
            <div class="row">
              <div class="col-md-8">
                {this.state.positions.length > 0 &&
                  this.state.positions.map((each, key) => {
                   return <div class="current-opening">
                      <div class="border" key={key}>
                        <h3 class="job-summary">
                          Position :{each.position}
                        </h3>
                        <div
                dangerouslySetInnerHTML={{ __html: each.job_details }}
              />
              <div class="text-center">
                      <a
                        class="button newsletter no-pip"
                        data-toggle="modal"
                        data-target="#apply_modal"
                        onClick={()=>this.setState({openModal:true})}
                      >
                        Apply Now
                        <span>
                          <i class="fa fa-arrow-circle-right"></i>
                        </span>
                      </a>
                    </div>
                      </div>
                    </div>;
                  })}
                {/* <div class="current-opening">
                  <div class="border">
                    <h3 class="job-summary">Position : Finance Associate</h3>
                    <div class="jobs-location mt-10">
                      <h4>LOCATION&nbsp;: &nbsp;</h4>Mumbai
                    </div>
                    <div class="jobs-qualification">
                      <h4>QUALIFICATION&nbsp;: &nbsp;</h4>Bachelor’s degree in
                      commerece or ACA.
                    </div>
                    <div class="jobs-experience">
                      <h4>EXPERIENCE&nbsp;: &nbsp;</h4>2-3 Years
                    </div>
                    <div class="jobs-skills">
                      <h4>Job Description:</h4>
                      <br />
                      <li>
                        Good Communication, analytical skills and able to
                        comprehend and resolve complex queries and processes.
                      </li>
                      <li>
                        Identify and make suggestions for improvements when
                        problems and/or opportunities arise.
                      </li>
                      <li>
                        Prepares special audit and control reports by
                        collecting, analyzing, and summarizing operating
                        information and trends.
                      </li>
                      <li>
                        Ensure compliance to high international accounting
                        standards, company policies and protocol and contractual
                        requirements
                      </li>
                      <li>Follow risk management and compliance procedures</li>
                      <li>Good documentation &amp; communication skills.</li>
                      <li>Excellent teamwork</li>
                      <li>
                        Able to contribute and drive continuous process
                        improvements program.
                      </li>
                    </div>
                    <div class="text-center">
                      <a
                        class="button newsletter no-pip"
                        data-toggle="modal"
                        data-target="#apply_modal"
                        href="#"
                      >
                        Apply Now
                        <span>
                          <i class="fa fa-arrow-circle-right"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
               */}
              </div>
              <div class="col-md-4">
                <div class="blog_right_sidebar">
                  <aside class="single_sidebar_widget">
                    <img src={this.state.placeholder.image} style={{ width: "100%" }} />
                    <h4 class="place_title">{this.state.placeholder.header}</h4>
                    {" "}
                     <div
                      dangerouslySetInnerHTML={{
                        __html: this.state.placeholder.description,
                      }}
                    />
                  </aside>
                </div>
              </div>

              <div class="col-md-4">
                <div class="blog_right_sidebar">
                  <aside class="single_sidebar_widget">
                    <h3 style={{ textAlign: "center", marginTop: "inherit" }}>
                      CAREER OPPORTUNITIES
                    </h3>
                    <form
                      id="sky-form"
                      method="POST"
                      class="sky-form"
                      action="https://itaxdoctor.idossapp.com/index.php/Itax/user_login"
                      novalidate="novalidate"
                    >
                      <fieldset>
                        <section>
                          <div class="row">
                            <div class="center-align-content">
                              <div class="col-md-11 carrer-gap">
                                <label class="input">
                                  <i
                                    class="icon-append fa fa-user-md"
                                    style={{ top: "6px" }}
                                  ></i>
                                  <input
                                    type="text"
                                    placeholder="Position"
                                    name="email"
                                    autocomplete="off"
                                  />
                                </label>
                                <label class="input">
                                  <i
                                    class="icon-append fa fa-envelope-o"
                                    style={{ top: "6px" }}
                                  ></i>
                                  <input
                                    type="email"
                                    placeholder="Email"
                                    name="email"
                                    autocomplete="off"
                                  />
                                </label>
                                <label class="input">
                                  <i
                                    class="icon-append fa fa-user-o"
                                    style={{ top: "6px" }}
                                  ></i>
                                  <input
                                    type="textl"
                                    placeholder="First Name"
                                    name="name"
                                    autocomplete="off"
                                  />
                                </label>
                                <label class="input">
                                  <i
                                    class="icon-append fa fa-user-o"
                                    style={{ top: "6px" }}
                                  ></i>
                                  <input
                                    type="textl"
                                    placeholder="Middle Name"
                                    name="name"
                                    autocomplete="off"
                                  />
                                </label>
                                <label class="input">
                                  <i
                                    class="icon-append fa fa-user-o"
                                    style={{ top: "6px" }}
                                  ></i>
                                  <input
                                    type="textl"
                                    placeholder="Last Name"
                                    name="name"
                                    autocomplete="off"
                                  />
                                </label>
                                <label class="input">
                                  <i
                                    class="icon-append fa fa-mobile"
                                    style={{ top: "6px" }}
                                  ></i>
                                  <input
                                    type="textl"
                                    placeholder="Mobile"
                                    name="name"
                                    autocomplete="off"
                                  />
                                </label>
                                <label class="input">
                                  <i
                                    class="icon-append fa fa-user-o"
                                    style={{ top: "6px" }}
                                  ></i>
                                  <input
                                    type="textl"
                                    placeholder="Gender"
                                    name="name"
                                    autocomplete="off"
                                  />
                                </label>
                                <label class="input">
                                  <i
                                    class="icon-append fa fa-graduation-cap"
                                    style={{ top: "6px" }}
                                  ></i>
                                  <input
                                    type="textl"
                                    placeholder="Qualification"
                                    name="name"
                                    autocomplete="off"
                                  />
                                </label>
                                <label class="input">
                                  <i
                                    class="icon-append fa fa-map-marker"
                                    style={{ top: "6px" }}
                                  ></i>
                                  <input
                                    type="textl"
                                    placeholder="Location"
                                    name="name"
                                    autocomplete="off"
                                  />
                                </label>
                                <label class="input">
                                  <i
                                    class="icon-append fa fa-briefcase"
                                    style={{ top: "6px" }}
                                  ></i>
                                  <input
                                    type="textl"
                                    placeholder="Year of Experience"
                                    name="name"
                                    autocomplete="off"
                                  />
                                </label>
                                <label class="input">
                                  Attach Your CV
                                  <span style={{ color: "red" }}>
                                    * (Only .doc /.docx / .pdf file allowed.
                                    Size: Max 2 MB)
                                  </span>
                                  <input
                                    type="file"
                                    name="fileToUpload"
                                    id="fileToUpload"
                                  />
                                </label>
                              </div>
                            </div>
                          </div>
                        </section>
                      </fieldset>
                    </form>
                    <div class="form-group text-center mt-10">
                      <button
                        type="submit"
                        class="button"
                        style={{ margin: "0" }}
                      >
                        SUBMIT
                      </button>
                      &nbsp;&nbsp;&nbsp;&nbsp;
                    </div>
                  </aside>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* // <!---------------------------modal--------------------------------------------> */}
          <ModalRoot title={"CAREER OPPORTUNITIES"} isOpen={this.state.openModal} body={<CareerForm/>}/>
        <NewsLetter />
        <Footer/>
      </>
    );
  }
}
