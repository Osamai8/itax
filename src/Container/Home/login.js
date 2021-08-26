import React, { Component } from "react";
import { Link } from "react-router-dom";
import Footer from "../../Common/footer";
import Header from "../../Common/header";
import NewsLetter from "../../Components/home/newsletter";
import RestApi from "../../services/api";
import userImage from "../../images/user.png";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login";
export default class login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeForm: "customer",
      email: "",
      password: "",
      error: [],
    };
  }
  onFormSubmit() {
    let { email, password } = this.state;
    RestApi.login({ email, password }).then((response) => {
      console.log("reponse", response);
      if (response.data.error) {
        let { error } = response.data;
        this.setState({ error: error });
      } else {
        alert("status: ", response.data.message);
        this.setState({ error: [] });
      }
    });
  }

  responseFacebook = (data) => {
    console.log(data);
  };
  responseGoogle = (res) => {
    console.log("data", res);
    if (res.googleId) {
      let data = {
        email: res.profileObj.email,
        login_type: "google",
        profile_id: res.googleId,
        first_name: res.profileObj.givenName,
        last_name: res.profileObj.familyName,
        is_customer: this.state.activeForm == "customer" ? "yes" : "no",
        is_service_provider: this.state.activeForm == "partner" ? "yes" : "no",
        phone: "1231231231",
      };
      RestApi.socialLogin(data).then((backRes) => {
        console.log("itaax res: ", backRes);
        if (backRes.data.status == true) {
          alert("login successfull");
        }
      });
    } else {
      // alert("something went wrong");
    }
  };

  handleInputChange(e) {
    const value = e.target.value;
    const name = e.target.name;

    this.setState({
      [name]: value,
    });
  }

  changeForm(type) {
    this.setState({
      activeForm: type,
    });
  }
  render() {
    // console.log("state", this.state);
    const styles = {
      top: {
        top: "6px",
      },
    };
    return (
      <div>
        <Header />
        <div class="breadcrumbpane">
          <div class="container">
            <h1 class="pull-left"> Login</h1>
          </div>
        </div>

        <section>
          <div class="container">
            <div class="login_register_box clearfix">
              <div class="sign-in-panel">
                <h4>Sign-in to your Account</h4>
                <div class="login-content clearfix">
                  <img
                    class="pull-left"
                    src="https://itaxdoctor.idossapp.com/assets/front_end/images/lock.png"
                  />

                  <div class="login-details pull-right">
                    <div>
                      {/* <!-- Nav tabs --> */}
                      <ul class="nav nav-tabs" role="tablist">
                        <li
                          role="presentation"
                          onClick={() => this.changeForm("customer")}
                          class={`${
                            this.state.activeForm == "customer" ? "active" : ""
                          }`}
                        >
                          <a
                            // href="#customer"
                            aria-controls="home"
                            role="tab"
                            data-toggle="tab"
                          >
                            Customer
                          </a>
                        </li>
                        <li
                          role="presentation"
                          onClick={() => this.changeForm("partners")}
                          class={`${
                            this.state.activeForm == "partners" ? "active" : ""
                          }`}
                        >
                          <a
                            // href="#partners"
                            aria-controls="profile"
                            role="tab"
                            data-toggle="tab"
                          >
                            Business Partner
                          </a>
                        </li>
                      </ul>
                      {/* <!-- Tab panes --> */}
                      <div class="tab-content">
                        <div
                          role="tabpanel"
                          class="tab-pane active"
                          id="customer"
                        >
                          {/* <div class="facebook-box">
                                <a href=''>
                                  <div class="box-icon">
                                    <i class="fa fa-facebook"></i>
                                  </div>
                                  <div class="fb-box-txt">
                                    Log in with Facebook
                                  </div>
                                </a>
                              </div> */}
                          {/* <FacebookLogin
                            appId="3512122968824136"
                            autoLoad
                            callback={this.responseFacebook}
                            render={(renderProps) => (
                              
                            )}
                          /> */}
                          <div class="facebook-box">
                                <a  >
                                  <div class="box-icon">
                                    <i class="fa fa-facebook"></i>
                                  </div>
                                  <div class="fb-box-txt">
                                    Log in with Facebook
                                  </div>
                                </a>
                              </div>
                          <GoogleLogin
                            clientId="686619883448-ltju3kbh1o2nmko9tco4h319b5ji7pgp.apps.googleusercontent.com"
                            buttonText="Login"
                            onSuccess={this.responseGoogle}
                            onFailure={this.responseGoogle}
                            cookiePolicy={"single_host_origin"}
                            render={(renderProps) => (
                              <div
                                onClick={renderProps.onClick}
                                class="google-box"
                              >
                                <a style={{cursor:'pointer'}}>
                                  <div class="box-icon">
                                    <i class="fa fa-google"></i>
                                  </div>
                                  <div class="gp-box-txt">
                                    Log in with Google
                                  </div>
                                </a>
                              </div>
                            )}
                          ></GoogleLogin>
                          <div class="or-box">
                            <span>OR</span>
                          </div>
                          <form id="sky-form" method="POST" class="sky-form">
                            <fieldset>
                              <section>
                                <div class="row">
                                  <ul>
                                    {this.state.error &&
                                      this.state.error["email"]?.map((each) => {
                                        return (
                                          <div
                                            style={{ listStyleType: "none" }}
                                            className="m-2 alert-danger"
                                          >
                                            {each}
                                          </div>
                                        );
                                      })}
                                    {this.state.error &&
                                      this.state.error["password"]?.map(
                                        (each) => {
                                          return (
                                            <div
                                              style={{ listStyleType: "none" }}
                                              className="m-2 alert-danger"
                                            >
                                              {each}
                                            </div>
                                          );
                                        }
                                      )}
                                  </ul>
                                  <br />
                                  <div class="col col-12">
                                    <label class="input">
                                      <i
                                        class="icon-append fa fa-envelope-o"
                                        style={styles.top}
                                      ></i>
                                      <input
                                        onChange={(e) =>
                                          this.handleInputChange(e)
                                        }
                                        type="email"
                                        placeholder="Email"
                                        name="email"
                                        autocomplete="off"
                                      />
                                      {}
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
                                        onChange={(e) =>
                                          this.handleInputChange(e)
                                        }
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                      />
                                    </label>
                                  </div>
                                </div>
                              </section>
                            </fieldset>
                          </form>
                          <div class="form-group clearfix">
                            <div class="chkbox-group pull-left">
                              <input type="checkbox" name="remember" />
                              <label>Remember me</label>
                            </div>
                            <div class="pull-right">
                              <a href="#" class="forgot-pw">
                                Forgot password?
                              </a>
                            </div>
                            <div class="text-center">
                              <a
                                onClick={() => this.onFormSubmit()}
                                type="submit"
                                name="sign_in"
                                class="button sign_in col"
                              >
                                Ok, Sign in !
                              </a>
                            </div>
                          </div>
                          <div class="login-footer clearfix">
                            <p class="pull-left">Don't have any account?</p>
                            <Link
                              to="/register"
                              class="btn btn-login pull-right"
                            >
                              Create Account
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="Register_benefits">
                <h4>Creat an Account</h4>
                <h5>
                  New User? <span>"Register to Become a Member"</span>
                </h5>
                <p>
                  <strong>Registered User Benefits...</strong>
                </p>
                <img src={userImage} />
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
                    <i class="fa fa-circle"></i>Enjoy more service after
                    upgrading your packages
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <NewsLetter />
        <Footer />
      </div>
    );
  }
}
