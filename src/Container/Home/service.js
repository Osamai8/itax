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
      console.log("servicePage: ", res.data.data);
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
          <div className="breadcrumbpane">
            <div className="container">
              <h1 className="pull-left">Explore Our Services</h1>
            </div>
          </div>
          {/* <!-- start: service section --> */}
          <section>
            <div className="our_department_area">
              <div className="container">
                <div className="row">
                  {data.length > 0 &&
                    data.map((each, key) => {
                      return (
                        <div className="col-xl-3 col-md-6 col-lg-3">
                          <div className="single_department">
                            <div className="department_thumb">
                              <img src={each.category_image} alt="" />
                            </div>
                            <div className="department_content">
                              <div className="iconimagetitle">
                                {/* <!-- <i className="fa fa-usd" aria-hidden="true"></i> -->  */}
                                <img src={moneyBagIcon} />
                                <h3>
                                  <a href="#">
                                    {" "}
                                    &nbsp;&nbsp;{each.category_name}
                                  </a>
                                </h3>
                                <p>
                                  {each.service_description.length > 74
                                    ? each.service_description.slice(0, 70)+"..."
                                    : each.service_description}
                                </p>
                                <a href="#" className="readmore">
                                  Read More...
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  {/* <div className="col-xl-3 col-md-6 col-lg-3">
                    <div className="single_department">
                      <div className="department_thumb">
                        <img src={serviceImage} alt="" />
                      </div>
                      <div className="department_content">
                        <div className="iconimagetitle">
                          <img src={moneyBagIcon} />
                          <h3>
                            <a href="#"> &nbsp;&nbsp;Corporate Advisory</a>
                          </h3>
                          <p>
                            Under corporate advisory we provide the following
                            services to our esteemed...
                          </p>
                          <a href="#" className="readmore">
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
