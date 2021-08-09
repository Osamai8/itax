import React from "react";
import OurTeam from "../../Components/home/ourTeam";
import Header from "../../Common/header";
import Footer from "../../Common/footer";
import NewsLetter from "../../Components/home/newsletter";
import aboutImage from "../../images/about/about.png";
import teamWorkImage from "../../images/about/teamwork.jpg";
function index() {
  return (
    <React.Fragment>
      {" "}
      <Header />
      <div id="home-page">
        <div class="breadcrumbpane">
          <div class="container">
            <h1 class="pull-left">About Us</h1>
          </div>
        </div>
        {/* <!-- start: about section --> */}
        <section>
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <div class="section-title text-center">
                  <h2>PROFILE OF AXION ADVISORY SERVICES</h2>
                </div>
                {/* <!-- /.section-title --> */}
              </div>
            </div>

            <div class="about-info">
              <div class="row">
                <div class="col-md-7">
                  {/* <!-- <h2>learn about</h2> --> */}
                  <p>
                    Axion Advisory Services LLP is having a team of eminent
                    Chartered Accountants / Financial Advisors / Management
                    Advisors / Tax Consultants / Banking Advisors. Our panel
                    have specialised skills in the respective fields to offer
                    appropriate financial solutions and consultancy.
                  </p>
                  <p>
                    Our Team is committed to offer value addition and maximise
                    the benefits to the clients with maintaining the highest
                    ethical and professional standards. The firm is dedicated to
                    meet the challenges and demands of fast changing modern
                    financial world to its clients.
                  </p>
                  <p>
                    We operate in a fully automated environment with modern
                    infrastructure in order to perform / provide wide ranging
                    multidisciplinary services. Our major services include
                    accounting, assurance, financial advisory, tax consultancy,
                    compliances under various laws, KPO services, outsourcing
                    requirement of any business enterprises, risk management,
                    valuation of business, fund raising, restructuring, mergers
                    and acquisitions, international taxation advisory, forensic
                    advisory, due diligence, start up management advisory,
                    foreign investment, transfer pricing and many more services.
                  </p>
                </div>

                <div class="col-md-5">
                  <img
                    src={aboutImage}
                    alt="about img"
                    class="img-responsive center-block"
                    style={{ width: "100%", height: "285px" }}
                  />
                </div>
              </div>
            </div>
            {/* <!-- /.about-info --> */}
          </div>
        </section>
        {/* <!-- end: about section-->
<!-- start: 6-T section --> */}
        <section class="dark-gray-bg">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <div class="section-title text-center">
                  <h2>
                    aaThe USP of Axion Advisory Services LLP is its{" "}
                    <strong>‘6-T’</strong> concept which stands up separate from
                    others:
                  </h2>
                  <p></p>
                </div>
              </div>

              <div class="col-md-6">
                <div class="about-service">
                  <div class="row">
                    <div class="col-md-12">
                      <h2>TEAM WORK</h2>
                      <p>
                        <img
                          src={teamWorkImage}
                          alt="TEAM WORK"
                          class="img-responsive"
                        />{" "}
                        We are a team of well professionally qualified persons
                        having vast experience in distinctive financial and
                        legal services. The total experience of our team for
                        more than 40 years is enough to show you our strength.
                        We work as a team as we believe in the concept of{" "}
                        <em>
                          <strong>‘One plus One Makes Eleven’</strong>
                        </em>
                        .<br />
                        <br />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="about-service">
                  <div class="row">
                    <div class="col-md-12">
                      <h2>TECHNOLOGY ORIENTED</h2>
                      <p>
                        <img
                          src={teamWorkImage}
                          alt="TEAM WORK"
                          class="img-responsive"
                        />{" "}
                        The Technology has changed the way we used to look the
                        world earlier. Technology is playing an important role
                        in our day to day life as well in the field of Financial
                        and Legal Services. All the statutory bodies are
                        becoming automated and therefore, it is necessary to be
                        in line with such technological development. In order to
                        provide such technological advantage we are working in a
                        fully technology oriented environment and providing our
                        services.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            
              <div class="col-md-6">
                <div class="about-service">
                  <div class="row">
                    <div class="col-md-12">
                      <h2>TIME BOUND COMMITMENT</h2>
                      <p>
                        <img
                          src={teamWorkImage}
                          alt="TEAM WORK"
                          class="img-responsive"
                        />{" "}
                        Time is money. Every work done within a due time leads
                        to monetary benefit. We believe in timely fulfilment of
                        work commitment. This reduces the cost and results
                        efficient use of resources. Time bound completion of
                        work shows the commitment and dedication towards the
                        work. We provide our services to clients with such Time
                        Bound Commitment..
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="about-service">
                  <div class="row">
                    <div class="col-md-12">
                      <h2>TOTAL SECURITY</h2>
                      <p>
                        <img
                          src={teamWorkImage}
                          alt="TEAM WORK"
                          class="img-responsive"
                        />{" "}
                        Security of Data is a major concern to us. One’s
                        financial and legal matters are highly sensitive and we
                        as our professional ethics are committed for such
                        security of information. <br />
                        <b />
                        <br />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            
              <div class="col-md-6">
                <div class="about-service">
                  <div class="row">
                    <div class="col-md-12">
                      <h2>TOTAL FINANCIAL AND LEGAL SERVICES UNDER ONE ROOF</h2>
                      <p>
                        <img
                          src={teamWorkImage}
                          alt="TEAM WORK"
                          class="img-responsive"
                        />{" "}
                        Due to the complexity of various financial and legal
                        matters, it is necessary that a person who is handling
                        one particular service of a client should also be aware
                        of the impact of the other financial and legal services
                        on that particular service. We provide total services to
                        our clients under one roof to avoid any communication
                        gap between various service providers in respect of
                        various services. We provide services as a One Stop
                        Financial and Legal Solution Shop to our clients.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="about-service">
                  <div class="row">
                    <div class="col-md-12">
                      <h2>TAILOR MADE SOLUTIONS</h2>
                      <p>
                        <img
                          src={teamWorkImage}
                          alt="TEAM WORK"
                          class="img-responsive"
                        />{" "}
                        One cannot wear a shirt which is not made for him. It
                        may be either loose or may be tight. Similar is the
                        situation for financial and legal services. Services
                        which are suited to one may not be applicable to others.
                        The objects of various persons may differ. We understand
                        the financial and legal needs of our clients and provide
                        them ‘Tailor Made Solutions’ which are best suited to
                        our clients as per their needs and requirements.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </section>
        {/* <!-- end: 6-T section --> */}

        {/* <!-- start: team section --> */}
        <OurTeam />
        <NewsLetter />
      </div>{" "}
      <Footer />
    </React.Fragment>
  );
}

export default index;
