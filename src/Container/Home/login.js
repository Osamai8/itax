import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../Common/footer";
import Header from "../../Common/header";
import NewsLetter from "../../Components/home/newsletter";
import RestApi from "../../services/api";
import userImage from "../../images/user.png";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import Modal from "../../Components/registerModal";
const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required().min(3),
});

function Login(props) {
  const history = useHistory();
  const [responseError, setResponseError] = useState({});
  const [showModal, setShowModal] = useState({ status: false, message: "" });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmitHandle = (data) => {
    console.log(data);

    let { email, password } = data;
    RestApi.login(data).then((response) => {
      console.log("reponse", response);
      if (response.data.error) {
        let { error } = response.data;
        setResponseError(error);
      } else {
        // alert(response.data.message);
        if (response.data.status == false && response.data.status_code == 300) {
          setShowModal({
            status: true,
            message: response.data.message,
            data: {
              email: email,
              password: password,
              is_customer: props.activeForm == "cutsomer" ? "yes" : "no",
              is_service_provider:
                props.activeForm == "partners" ? "yes" : "no",
            },
            type: "login",
          }); 
        }
        if (response.data.access_token && response.data.status == true) {
          if (
            response.data.data.is_customer == "yes" &&
            response.data.data.is_service_provider == "yes"
          ) {
            props.activeForm == "customer"
              ? history.push(`/customer/dashboard`)
              : history.push(`/partner/dashboard`);
          } else if (response.data.data.is_customer == "yes") {
            history.push(`/customer/dashboard`);
          } else if (response.data.data.is_service_provider == "yes") {
            history.push(`/partner/dashboard`);
          }
        }
        setResponseError({});
      }
    });
  };

  const responseFacebook = (res) => {
    // handleShowMessageClick()
    // console.log(res);
    // console.log("data", res);
    // if (res.userID) {
    //   let data = {
    //     login_type: "facebook",
    //     profile_id: res.userID,
    //     first_name: res.name,
    //     is_customer: props.activeForm == "customer" ? "yes" : "no",
    //     is_service_provider: props.activeForm == "partner" ? "yes" : "no",
    //   };
    //   RestApi.socialLogin(data).then((backRes) => {
    //     console.log("itaax res: ", backRes);
    //     if (backRes.data.status == true) {
    //       alert("login successfull");
    //     }
    //   });
    // } else {
    //   // alert("something went wrong");
    // }
  };
  const responseGoogle = (res) => {
    console.log("data", res);
    if (res.googleId) {
      let data = {
        email: res.profileObj.email,
        login_type: "google",
        profile_id: res.googleId,
        first_name: res.profileObj.givenName,
        last_name: res.profileObj.familyName,
        is_customer: props.activeForm == "customer" ? "yes" : "no",
        is_service_provider: props.activeForm == "partners" ? "yes" : "no",
      };
      RestApi.socialLogin(data).then((backRes) => {
        console.log("socialLogin: ", backRes);
        if (backRes.data.access_token && backRes.data.status == true) {
          props.dispatch({
            type: "LOGIN",
            payload: backRes.data.data,
          });
          if (
            backRes.data.data.is_customer == "yes" &&
            backRes.data.data.is_service_provider == "yes"
          ) {
            props.activeForm == "customer"
              ? history.push(`/customer/dashboard`)
              : history.push(`/partner/dashboard`);
          } else if (backRes.data.data.is_customer == "yes") {
            history.push(`/customer/dashboard`);
          } else if (backRes.data.data.is_service_provider == "yes") {
            history.push(`/partner/dashboard`);
          }
        }
        if (backRes.data.status == false && backRes.data.status_code == 300) {
          // props.dispatch({
          //   type: "LOGIN",
          //   payload: backRes.data.data,
          // });
          setShowModal({
            status: true,
            message: backRes.data.message,
            data: {
              email: res.profileObj.email,
              login_type: "google",
              profile_id: res.googleId,
              first_name: res.profileObj.givenName,
              last_name: res.profileObj.familyName,
            },
            type: "socialLogin",
          });

          // RestApi.socialLogin(data).then((res) => {
          //   console.log(res);
          // });
        }
      });
    } else {
      // alert("something went wrong");
    }
  };
  const styles = {
    top: {
      top: "6px",
    },
  };

  const handleCloseModal = () => {
    console.log("close");
    setShowModal({ status: false });
    let { is_customer, is_service_provider } = showModal.data;
    if (is_customer == "yes") {
      history.push(`/customer/dashboard`);
    } else if (is_service_provider == "yes") {
      history.push(`/partner/dashboard`);
    }
  };
  const changeUsertype = () => {
    let data = showModal.data;
    data.is_customer = "yes";
    data.is_service_provider = "yes";
    if (showModal.type == "login") {
      RestApi.login(data).then((res) => {
        console.log(res);
        setShowModal({ status: false, message: "", data: {} });
        console.log(res);
      });
    } else {
      RestApi.socialLogin(data).then((res) => {
        console.log(res);
        setShowModal({ status: false, message: "", data: {} });
      });
    }
  };
  const changeForm = (form) => {
    props.setActiveForm(form);
  };
  console.log(props)
  return (
    <div>
      {showModal.status && (
        <Modal accept={changeUsertype} onClose={handleCloseModal}>
          {showModal.message}
        </Modal>
      )}
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
                        onClick={() => changeForm("customer")}
                        class={`${
                          props.activeForm == "customer" ? "active" : ""
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
                        onClick={() => changeForm("partners")}
                        class={`${
                          props.activeForm == "partners" ? "active" : ""
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
                        <FacebookLogin
                          appId="3512122968824136"
                          autoLoad
                          callback={() => responseFacebook}
                          render={(renderProps) => (
                            <div
                              style={{ cursor: "pointer" }}
                              class="facebook-box"
                            >
                              <a onClick={renderProps.onClick}>
                                <div class="box-icon">
                                  <i class="fa fa-facebook"></i>
                                </div>
                                <div class="fb-box-txt">
                                  Log in with Facebook
                                </div>
                              </a>
                            </div>
                          )}
                        />

                        <GoogleLogin
                          clientId="686619883448-ltju3kbh1o2nmko9tco4h319b5ji7pgp.apps.googleusercontent.com"
                          buttonText="Login"
                          onSuccess={responseGoogle}
                          onFailure={responseGoogle}
                          cookiePolicy={"single_host_origin"}
                          render={(renderProps) => (
                            <div
                              onClick={renderProps.onClick}
                              class="google-box"
                            >
                              <a style={{ cursor: "pointer" }}>
                                <div class="box-icon">
                                  <i class="fa fa-google"></i>
                                </div>
                                <div class="gp-box-txt">Log in with Google</div>
                              </a>
                            </div>
                          )}
                        ></GoogleLogin>
                        <div class="or-box">
                          <span>OR</span>
                        </div>
                        <form
                          onSubmit={handleSubmit(onSubmitHandle)}
                          id="sky-form"
                          method="POST"
                          class="sky-form"
                        >
                          {errors["email"] && (
                            <p className="alert-danger alert">
                              {" "}
                              {errors["email"]?.message}
                            </p>
                          )}
                          {errors["password"] && (
                            <p className="alert-danger alert">
                              {" "}
                              {errors["password"]?.message}
                            </p>
                          )}
                          <fieldset>
                            <section>
                              <div class="row">
                                <br />
                                <input
                                  {...register("is_customer")}
                                  type="hidden"
                                  name="is_customer"
                                  autocomplete="off"
                                  value={
                                    props.activeForm == "customer"
                                      ? "yes"
                                      : "no"
                                  }
                                />
                                <input
                                  {...register("is_servive_provider")}
                                  type="hidden"
                                  name="is_customer"
                                  autocomplete="off"
                                  value={
                                    props.activeForm == "partners"
                                      ? "yes"
                                      : "no"
                                  }
                                />
                                <div class="col col-12">
                                  <label class="input">
                                    <i
                                      class="icon-append fa fa-envelope-o"
                                      style={styles.top}
                                    ></i>
                                    <input
                                      {...register("email")}
                                      type="text"
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
                                      class="icon-append fa fa-lock"
                                      style={styles.top}
                                    ></i>
                                    <input
                                      {...register("password")}
                                      type="password"
                                      name="password"
                                      placeholder="Password"
                                    />
                                  </label>
                                </div>
                              </div>
                            </section>
                          </fieldset>

                          <div class="form-group clearfix">
                            <div class="chkbox-group pull-left">
                              <input type="checkbox" name="remember" />
                              <label> Remember me</label>
                            </div>
                            <div class="pull-right">
                              <a href="#" class="forgot-pw">
                                Forgot password?
                              </a>
                            </div>
                            <div class="text-center">
                              <button
                                style={{ width: "312px" }}
                                type="submit"
                                name="sign_in"
                                class="button sign_in col"
                              >
                                Ok, Sign in !
                              </button>
                            </div>
                          </div>
                        </form>
                        <div class="login-footer clearfix">
                          <p class="pull-left">Don't have any account?</p>
                          <Link to="/register" class="btn btn-login pull-right">
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
                  <i class="fa fa-circle"></i>Enjoy more service after upgrading
                  your packages
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

export default connect((state, props) => {
  console.log("state", state);
  return {
    isLogged: state?.address,
    userDetails: state?.userDetails,
  };
})(Login);
