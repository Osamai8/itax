import React, { Component } from "react";
import Footer from "../../Common/footer"
import Header from "../../Common/header";
import NewsLetter from '../../Components/home/newsletter'
export default class partnerWithUs extends Component {
  render() {
    const styles = {
      top: {
        top: "6px",
      },
      display: {
        display: "none",
        color: "red",
      },
    };
    return (
      <div>
        <Header />
        <div class="breadcrumbpane">
          <div class="container">
            <h1 class="pull-left">PARTNER WITH US</h1>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-md-8">
              <p class="para">
                The partners and the team members of Axion Advisory Services are
                having a large experience in various professional fields. Some
                of the sectors in which the partners and other team members are
                having exposure are given as under:
              </p>
              <ul class="partnerwithus">
                <li>
                  <i class="fa fa-angle-double-right"></i>Aviation Industry
                </li>
                <li>
                  <i class="fa fa-angle-double-right"></i>Atomic Energy
                </li>
                <li>
                  <i class="fa fa-angle-double-right"></i>Banking Sector
                </li>
                <li>
                  <i class="fa fa-angle-double-right"></i>Charitable
                  Institutions
                </li>
                <li>
                  <i class="fa fa-angle-double-right"></i>Communication Sector
                </li>
                <li>
                  <i class="fa fa-angle-double-right"></i>Consultancy Support
                </li>
                <li>
                  <i class="fa fa-angle-double-right"></i>Consumer Durables
                </li>
                <li>
                  <i class="fa fa-angle-double-right"></i>Education and Welfare
                  Sector
                </li>
                <li>
                  <i class="fa fa-angle-double-right"></i>Event Management
                </li>
                <li>
                  <i class="fa fa-angle-double-right"></i>Food Processing
                </li>
                <li>
                  <i class="fa fa-angle-double-right"></i>Foreign Companies
                  having offices in India
                </li>
                <li>
                  <i class="fa fa-angle-double-right"></i>Manufacturing Sector
                </li>
                <li>
                  <i class="fa fa-angle-double-right"></i>Media
                </li>
                <li>
                  <i class="fa fa-angle-double-right"></i>Print Management
                </li>
                <li>
                  <i class="fa fa-angle-double-right"></i>Real Estate and
                  Construction
                </li>
                <li>
                  <i class="fa fa-angle-double-right"></i>Service Sector
                </li>
                <li>
                  <i class="fa fa-angle-double-right"></i>Software and
                  Information Technology
                </li>
                <li>
                  <i class="fa fa-angle-double-right"></i>Trading
                </li>
              </ul>
              <p>
                In Banking Sector, the partners are having a rich experience for
                more than a decade in stock audit, concurrent audit, system
                audit, revenue audit, statutory audit, credit audit, factoring
                debtors audit etc. of various public sector and private banks.
              </p>
              <p>
                We are also under the process of building a portal under the
                name 'iTAXdoctor.com' which will provide varied services through
                a portal all over India.
              </p>
              <p>
                We are the authorised member of the Income tax Department for
                filing of income tax returns on behalf of our clients.
              </p>
            </div>

            <div class="col-md-4 partner_form">
              <h3>Register for working with us</h3>
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
                      <div class="col col-12">
                        <label class="input">
                          <i
                            class="icon-append fa fa-envelope-o"
                            style={styles.top}
                          ></i>
                          <input
                            type="email"
                            placeholder="Email"
                            name="email"
                            autocomplete="off"
                          />
                        </label>
                      </div>
                    </div>
                  </section>
                  <section>
                    <div class="row">
                      <div class="col col-12">
                        <label class="input">
                          <i
                            class="icon-append fa fa-user-o"
                            style={styles.top}
                          ></i>
                          <input
                            type="textl"
                            placeholder="First Name"
                            name="name"
                            autocomplete="off"
                          />
                        </label>
                      </div>
                    </div>
                  </section>
                  <section>
                    <div class="row">
                      <div class="col col-12">
                        <label class="input">
                          <i
                            class="icon-append fa fa-user-o"
                            style={styles.top}
                          ></i>
                          <input
                            type="textl"
                            placeholder="Middle Name"
                            name="name"
                            autocomplete="off"
                          />
                        </label>
                      </div>
                    </div>
                  </section>
                  <section>
                    <div class="row">
                      <div class="col col-12">
                        <label class="input">
                          <i
                            class="icon-append fa fa-user-o"
                            style={styles.top}
                          ></i>
                          <input
                            type="textl"
                            placeholder="Last Name"
                            name="name"
                            autocomplete="off"
                          />
                        </label>
                      </div>
                    </div>
                  </section>
                  <section>
                    <div class="row">
                      <div class="col col-12">
                        <label class="input">
                          <i
                            class="icon-append fa fa-mobile"
                            style={styles.top}
                          ></i>
                          <input
                            type="textl"
                            placeholder="Mobile"
                            name="name"
                            autocomplete="off"
                          />
                        </label>
                      </div>
                    </div>
                  </section>
                  <section>
                    <div class="row">
                      <div class="col col-12">
                        <label class="input">
                          <i
                            class="icon-append fa fa-lock"
                            style={styles.top}
                          ></i>
                          <input
                            type="password"
                            name="password"
                            placeholder="Password"
                          />
                        </label>
                      </div>
                    </div>
                  </section>
                  <section>
                    <div class="row">
                      <div class="col col-12">
                        <label class="input">
                          <i
                            class="icon-append fa fa-lock"
                            style={styles.top}
                          ></i>
                          <input
                            type="password"
                            name="password"
                            placeholder="Confirm Password"
                          />
                        </label>
                      </div>
                    </div>
                  </section>
                </fieldset>
              </form>
              <div class="area_expertise expt">
                <h4>Area of expertise</h4>
                <div class="chkbox-group">
                  <input type="checkbox" name="agree" />
                  <a href="#">Business Startup Services</a>
                </div>
                <div class="chkbox-group">
                  <input type="checkbox" name="agree" />
                  <a href="#">Corporate Advisory</a>
                </div>
                <div class="chkbox-group">
                  <input type="checkbox" name="agree" />
                  <a href="#">Income tax Advisory </a>
                </div>
                <div class="chkbox-group">
                  <input type="checkbox" name="agree" />
                  <a href="#">Financial Funding and Debt Mgmt.</a>
                </div>
                <div class="chkbox-group">
                  <input type="checkbox" name="agree" />
                  <a href="#">Outsourcing Services</a>
                </div>
                <div class="chkbox-group">
                  <input type="checkbox" name="agree" />
                  <a href="#">International Taxation</a>
                </div>
                <div class="chkbox-group">
                  <input type="checkbox" name="agree" />
                  <a href="#">FEMA and FERA Advisory</a>
                </div>
                <div class="chkbox-group">
                  <input type="checkbox" name="agree" />
                  <a href="#">Foreign Company Setup in India</a>
                </div>
              </div>
              <div class="chkbox-group">
                <input type="checkbox" name="agree" />
                <span>I have read and agree to all the </span>
                <a href="#">Term & Condition</a>
              </div>
              <div class="sign-btn">
                <button type="submit" name="sign_in" class="button col">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>

       <NewsLetter/>
        <Footer />
      </div>
    );
  }
}
