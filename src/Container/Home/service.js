import React from "react";
import Header from "../../Common/header";
import Footer from "../../Common/footer";
import serviceImage from '../../images/service/s1.jpg'
import moneyBagIcon from '../../images/service/money-bag-icon.png'
import NewsLetter from "../../Components/home/newsletter";
function index() {
    console.log("asdsd")
  return (
    <>
      <Header />
      <div id="home-page">
        <div class="breadcrumbpane">
          <div class="container">
            <h1 class="pull-left">Explore Our Services</h1>
            {/* <!-- <ul class="pull-right breadcrumb">
   <li><a href="#">Home</a><span><i class="fa fa-caret-right"></i></span></li>
   <li><a href="#">Services</a><span><i class="fa fa-caret-right"></i></span></li>
   <li class="active">Corporate Advisory</li>
  </ul> --> */}
          </div>
        </div>
        {/* <!-- start: service section --> */}
        <section>
          <div class="our_department_area">
            <div class="container">
              <div class="row">
                <div class="col-xl-3 col-md-6 col-lg-3">
                  <div class="single_department">
                    <div class="department_thumb">
                      <img src={serviceImage} alt="" />
                    </div>
                    <div class="department_content">
                      <div class="iconimagetitle">
                        {/* <!-- <i class="fa fa-usd" aria-hidden="true"></i> -->  */}
                        <img src={moneyBagIcon} />
                        <h3>
                          <a href="service-detail.php">
                            {" "}
                            &nbsp;&nbsp;Business Startup Services
                          </a>
                        </h3>
                        <p>
                          Every business start-up requires a wide variety of
                          financial solutions...
                        </p>
                        <a href="service-detail.php" class="readmore">
                          Read More...
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-md-6 col-lg-3">
                  <div class="single_department">
                    <div class="department_thumb">
                      <img src={serviceImage} alt="" />
                    </div>
                    <div class="department_content">
                      <div class="iconimagetitle">
                        <img src={moneyBagIcon} />
                        <h3>
                          <a href="service-detail.php">
                            {" "}
                            &nbsp;&nbsp;Corporate Advisory
                          </a>
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
                </div>
                <div class="col-xl-3 col-md-6 col-lg-3">
                  <div class="single_department">
                    <div class="department_thumb">
                      <img src={serviceImage} alt="" />
                    </div>
                    <div class="department_content">
                      <div class="iconimagetitle">
                        <img src={moneyBagIcon} />
                        <h3>
                          <a href="service-detail.php">
                            {" "}
                            &nbsp;&nbsp;Financial Funding and Debt Mgmt.
                          </a>
                        </h3>
                        <p>
                          Every concern requires funds whether it is owned
                          capital or borrowed capital...
                        </p>
                        <a href="#" class="readmore">
                          Read More...
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-md-6 col-lg-3">
                  <div class="single_department">
                    <div class="department_thumb">
                      <img src={serviceImage} alt="" />
                    </div>
                    <div class="department_content">
                      <div class="iconimagetitle">
                        <img src={moneyBagIcon} />
                        <h3>
                          <a href="service-detail.php">
                            {" "}
                            &nbsp;&nbsp;Outsourcing Services
                          </a>
                        </h3>
                        <p>
                          Outsourcing of services is the need of the hour for
                          benefits such as cost...
                        </p>
                        <a href="#" class="readmore">
                          Read More...
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-md-6 col-lg-3">
                  <div class="single_department">
                    <div class="department_thumb">
                      <img src={serviceImage} alt="" />
                    </div>
                    <div class="department_content">
                      <div class="iconimagetitle">
                        <img src={moneyBagIcon} />
                        <h3>
                          <a href="service-detail.php">
                            {" "}
                            &nbsp;&nbsp;Foreign Company Setup in India
                          </a>
                        </h3>
                        <p>
                          Due to globalisation of Business and India becoming
                          very fast a most...{" "}
                        </p>
                        <a href="#" class="readmore">
                          Read More...
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-md-6 col-lg-3">
                  <div class="single_department">
                    <div class="department_thumb">
                      <img src={serviceImage} alt="" />
                    </div>
                    <div class="department_content">
                      <div class="iconimagetitle">
                        <img src={moneyBagIcon} />
                        <h3>
                          <a href="service-detail.php">
                            {" "}
                            &nbsp;&nbsp;Income tax Advisory
                          </a>
                        </h3>
                        <p>
                          Income tax advisory covers the following services to
                          all assessee’s...
                        </p>
                        <a href="#" class="readmore">
                          Read More...
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-md-6 col-lg-3">
                  <div class="single_department">
                    <div class="department_thumb">
                      <img src={serviceImage} alt="" />
                    </div>
                    <div class="department_content">
                      <div class="iconimagetitle">
                        <img src={moneyBagIcon} />
                        <h3>
                          <a href="service-detail.php">
                            {" "}
                            &nbsp;&nbsp;International Taxation
                          </a>
                        </h3>
                        <p>
                          We have a special wing which is looking after the
                          international taxation of...{" "}
                        </p>
                        <a href="#" class="readmore">
                          Read More...
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-md-6 col-lg-3">
                  <div class="single_department">
                    <div class="department_thumb">
                      <img src={serviceImage} alt="" />
                    </div>
                    <div class="department_content">
                      <div class="iconimagetitle">
                        <img src={moneyBagIcon} />
                        <h3>
                          <a href="service-detail.php">
                            {" "}
                            &nbsp;&nbsp;FEMA and FERA Advisory
                          </a>
                        </h3>
                        <p>
                          The provisions of FEMA and FERA are very strict and
                          penalty provisions are...
                        </p>
                        <a href="#" class="readmore">
                          Read More...
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- end: service section--> */}
        <NewsLetter/>

      </div>
        <Footer />
    </>
  );
}

export default index;
