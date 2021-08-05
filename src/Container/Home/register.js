import React, { Component } from "react";
import Footer from "../../Common/footer";
import Header from "../../Common/header";
import NewsLetter from "../../Components/home/newsletter";

export default class register extends Component {
  render() {
    return (
      <div>
        <Header />
        <div class="breadcrumbpane">
          <div class="container">
            <h1 class="pull-left"> Partner Register</h1>
          </div>
        </div>

        {/* <!---partner_reg----> */}
        <div class="container">
          <div class="login_register_box clearfix">
            <div class="sign-in-panel">
              <h4>Create your Account</h4>
              <div class="login-content">
                <div class="partner_reg">
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
                          <div class="col-md-6">
                            <label class="input">
                              <i
                                class="icon-append fa fa-envelope-o"
                                style="top:6px;"
                              ></i>
                              <input
                                type="email"
                                placeholder="Email"
                                name="email"
                                autocomplete="off"
                              />
                            </label>
                          </div>
                          <div class="col-md-6">
                            <label class="input">
                              <i
                                class="icon-append fa fa-mobile"
                                style="top:6px;"
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
                          <div class="col-md-6">
                            <label class="input">
                              <i
                                class="icon-append fa fa-user-o"
                                style="top:6px;"
                              ></i>
                              <input
                                type="textl"
                                placeholder="First Name"
                                name="name"
                                autocomplete="off"
                              />
                            </label>
                          </div>
                          <div class="col-md-6">
                            <label class="input">
                              <i
                                class="icon-append fa fa-map-marker"
                                style="top:6px;"
                              ></i>
                              <input
                                type="textl"
                                placeholder="Address"
                                name="name"
                                autocomplete="off"
                              />
                            </label>
                          </div>
                        </div>
                      </section>
                      <section>
                        <div class="row">
                          <div class="col-md-6">
                            <label class="input">
                              <i
                                class="icon-append fa fa-user-o"
                                style="top:6px;"
                              ></i>
                              <input
                                type="textl"
                                placeholder="Middle Name"
                                name="name"
                                autocomplete="off"
                              />
                            </label>
                          </div>
                          <div class="col-md-6">
                            <label class="input">
                              <i
                                class="icon-append fa fa-lock"
                                style="top:6px;"
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
                          <div class="col-md-6">
                            <label class="input">
                              <i
                                class="icon-append fa fa-user-o"
                                style="top:6px;"
                              ></i>
                              <input
                                type="textl"
                                placeholder="Last Name"
                                name="name"
                                autocomplete="off"
                              />
                            </label>
                          </div>
                          <div class="col-md-6">
                            <label class="input">
                              <i
                                class="icon-append fa fa-lock"
                                style="top:6px;"
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

                      <div class="area_expertise clearfix">
                        <h4>Area of expertise</h4>
                        <div class="expertise_left">
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
                        </div>
                        <div class="expertise_right">
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
                      </div>

                      <div class="chkbox-group">
                        <input type="checkbox" name="agree" />
                        <span>I have read and agree to all the </span>
                        <a href="#">Term & Condition</a>
                      </div>
                    </fieldset>
                  </form>
                  <div class="sign-btn">
                    <button type="submit" name="sign_in" class="button col">
                      Create Account
                    </button>
                  </div>
                  <div class="login-footer clearfix">
                    <p class="pull-left part_log">Already have an account?</p>
                    <a href="#" class="btn btn-login pull-right part_login">
                      Log in
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="Register_benefits">
              <h4>Member / Registered User Benefits...</h4>
              <h5>
                New User? <span>"Register to Become a Member"</span>
              </h5>
              <p>
                <strong>Registered User Benefits...</strong>
              </p>
              <img src="image/user.png" />
              <ul>
                <li>
                  <i class="fa fa-circle"></i>File Free ITR online
                </li>
                <li>
                  <i class="fa fa-circle"></i>Get an Expert Assistances
                </li>
                <li>
                  <i class="fa fa-circle"></i>Auto Extract of TDS Data
                </li>
                <li>
                  <i class="fa fa-circle"></i>Processing Status of ITR Return
                </li>
                <li>
                  <i class="fa fa-circle"></i>Enjoy more service after upgrading
                  your packages
                </li>
              </ul>
            </div>
          </div>
        </div>
        <NewsLetter />
        <Footer />
      </div>
    );
  }
}
