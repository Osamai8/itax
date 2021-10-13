import React, { Component } from "react";
import Header from "../../Common/header";
import Footer from "../../Common/footer";
import serviceImage from "../../images/service/s1.jpg";
import moneyBagIcon from "../../images/service/money-bag-icon.png";
import NewsLetter from "../../Components/home/subscribeNewsletter";
import RestApi from "../../services/api";

export default class Service extends Component {
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
    RestApi.service().then((res) => {
      console.log("servicePage: ", res);
      if (res.data.status) {
        this.setState({
          data: res.data.data,
        });
      }
    });
  }
  render() {
    const { data } = this.state;
    return (
      <>
        <div id="home-page">
          <div class="breadcrumbpane">
            <div class="container">
              <h1 class="pull-left">Explore Our Services</h1>
            </div>
          </div>
          {/* <!-- start: service section --> */}
          <section>
            <div class="our_department_area">
              <div class="container">
                <div class="row">
                  {data.length > 0 &&
                    data.map((each, key) => {
                      return (
                        <div class="col-xl-3 col-md-6 col-lg-3">
                          <div class="single_department">
                            <div class="department_thumb">
                              <img src={each.image} alt="" />
                            </div>
                            <div class="department_content">
                              <div class="iconimagetitle">
                                {/* <!-- <i class="fa fa-usd" aria-hidden="true"></i> -->  */}
                                <img src={moneyBagIcon} />
                                <h3>
                                  <a href="#">
                                    {" "}
                                    &nbsp;&nbsp;{each.category_name}
                                  </a>
                                </h3>
                                <p>
                                  {each.description.length > 74
                                    ? each.description.slice(0, 75) + "..."
                                    : each.description}
                                </p>
                                <a href="#" class="readmore">
                                  Read More...
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  {/* <div class="col-xl-3 col-md-6 col-lg-3">
                    <div class="single_department">
                      <div class="department_thumb">
                        <img src={serviceImage} alt="" />
                      </div>
                      <div class="department_content">
                        <div class="iconimagetitle">
                          <img src={moneyBagIcon} />
                          <h3>
                            <a href="#"> &nbsp;&nbsp;Corporate Advisory</a>
                          </h3>
                          <p>
                            Under corporate advisory we provide the following
                            services to our esteemed...
                          </p>
                          <a href="#" class="readmore">
                            Read More...
                          </a>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </section>
          {/* <!-- end: service section--> */}
          <NewsLetter />
          <Footer />
        </div>
      </>
    );
  }
}
