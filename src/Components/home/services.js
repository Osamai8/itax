import React, { useEffect, useState } from "react";
import serviceImage from "../../images/service/s1.jpg";
import moneyBagIcon from "../../images/service/money-bag-icon.png";
import RestApi from "../../services/api";
import { Link } from "react-router-dom";

export default function Services() {
  const [data, setDate] = useState([]);

  useEffect(() => {
    RestApi.homeService().then((res) => {
      console.log("service", res);
      if (res.data.status) {
        setDate(res.data.data);
      }
    });
  }, []);
  console.log(data);
  return (
    <section>
      <div className="our_department_area">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-title text-center">
                <h2>
                  Explore Our <span>Services</span>
                </h2>
                <p>
                  We provide a variety of services to our clients which make us
                  a one stop financial solution under one roof for our clients.
                  The range of services which are provided by us are as under:{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            {data.length > 0 &&
              data.map((each) => {
                return (
                  <div className="col-xl-3 col-md-6 col-lg-3">
                    <div className="single_department">
                      <div className="department_thumb">
                        <img src={each.image} alt="" />
                      </div>
                      <div className="department_content">
                        <div className="iconimagetitle">
                          {/* <!-- <i className="fa fa-usd" aria-hidden="true"></i> -->  */}
                          <img src={moneyBagIcon} />
                          <h3>
                            <a href="#"> &nbsp;&nbsp;{each.category_name}</a>
                          </h3>
                          <p>
                            {each.description.length > 74
                              ? each.description.slice(0, 130) + "..."
                              : each.description}
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
                      Under corporate advisory we provide the following services
                      to our esteemed...
                    </p>
                    <a href="#" className="readmore">
                      Read More...
                    </a>
                  </div>
                </div>
              </div>
            </div> */}
           
          </div>
          <Link to="/services" className="viewall-services">
            View All Services...
          </Link>
        </div>
      </div>
    </section>
  );
}
