import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../Common/header";
import NewsLetter from "../../Components/home/subscribeNewsletter";
import RestApi from "../../services/api";
import userImage from "../../images/user.png";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import Modal from "../../Components/modal/modalRoot";
import { toast } from "react-toastify";
const schema = yup.object().shape({
  email: yup
    .string()
    .email("Email must be a valid email")
    .required("Email is required"),
  password: yup.string().required("Password is required"),
});

function Login(props) {
  const history = useHistory();
  const [showRegisterModal, setShowRegisterModal] = useState({
    status: false,
    message: "",
  });
  const [placeHolder, setPlaceHolder] = useState({});
  useEffect(()=> {
    let params = props.activeForm == "partners" ? 'business-partner-login' : 'customer-login'
    RestApi.placeholder(params).then((res)=> {
      console.log("placeholder login: ",res)
      setPlaceHolder(res.data.data)
    })
  },[])

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmitHandle = (data) => {
    let { email, password } = data;
    RestApi.login(data).then((response) => {
      console.log("reponse", response);

      if (response.data.error) {
        reset({ email: email, password: "" });
        let { error } = response.data;
        console.log("error: ", error);
      } else {
        // alert(response.data.message);
        if (response.data.status == false) {
          reset({ email: email, password: "" });
          if (response.data.status_code == 300) {
            setShowRegisterModal({
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
          } else {
            toast.error(response.data.message);
          }
        }
        if (response.data.access_token && response.data.status == true) {
          reset({ email: "", password: "" });
          toast.success(response.data.message, {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 2000,
          });
          handleResponse(response);
          // RestApi.defaultToken(response.data.access_token);
          // let res = response.data;
          // let data = {
          //   name: res.data.first_name,
          //   email: res.data.email,
          //   phone: res.data.phone,
          //   last_name: res.data.last_name,
          //   middle_name: res.data.middle_name,
          //   photo: res.data.photo,
          //   isCustomer: res.data.is_customer,
          //   isServiceProvider: res.data.is_service_provider,
          //   _token: res.access_token,
          // };
          // props.dispatch({
          //   type: "LOGIN",
          //   payload: data,
          // });
          // // setMessage("Login SuccessFull");

          // setTimeout(() => {
          //   if (
          //     response.data.data.is_customer == "yes" &&
          //     response.data.data.is_service_provider == "yes"
          //   ) {
          //     props.activeForm == "customer"
          //       ? history.push(`/customer/dashboard`)
          //       : history.push(`/partner/dashboard`);
          //   } else if (response.data.data.is_customer == "yes") {
          //     history.push(`/customer/dashboard`);
          //   } else if (response.data.data.is_service_provider == "yes") {
          //     history.push(`/partner/dashboard`);
          //   }
          // }, 2000);
        }
      }
    });
  };

  const handleResponse = (response) => {
    console.log(response);
    RestApi.defaultToken(response.data.access_token);
    let res = response.data;
    let data = {
      name: res.data.first_name,
      email: res.data.email,
      phone: res.data.phone,
      last_name: res.data.last_name,
      middle_name: res.data.middle_name,
      photo: res.data.photo,
      isCustomer: res.data.is_customer,
      isServiceProvider: res.data.is_service_provider,
      _token: res.access_token,
    };
    props.dispatch({
      type: "LOGIN",
      payload: data,
    },
    {
      type: "DASHBOARD",
      payload:"customer"
    });
    // setMessage("Login SuccessFull");

    setTimeout(() => {
      history.push(`/customer/dashboard`);
    }, 2000);
  };
  const responseFacebook = (res) => {
    // handleShowMessageClick()
    console.log(res);
    console.log("data", res);
    if (res.userID) {
      let data = {
        login_type: "facebook",
        profile_id: res.userID,
        first_name: res.name,
        is_customer: props.activeForm == "customer" ? "yes" : "no",
        is_service_provider: props.activeForm == "partner" ? "yes" : "no",
      };
      RestApi.socialLogin(data)
        .then((backRes) => {
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
            setShowRegisterModal({
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
        })
        .catch(function (error) {
          console.log("Show error notification!");
          return Promise.reject(error);
        });
    } else {
      // alert("something went wrong");
    }
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
      RestApi.socialLogin(data).then((res) => {
        console.log("socialLogin: ", res);
        if (res.data.access_token && res.data.status == true) {
          let data = {
            name: res.data.data.first_name,
            email: res.data.data.email,
            phone: res.data.data.phone,
            last_name: res.data.data.last_name,
            middle_name: res.data.data.middle_name,
            photo: res.data.data.photo,
            isCustomer: res.data.data.is_customer,
            isServiceProvider: res.data.data.is_service_provider,
            _token: res.data.access_token,
          };
          props.dispatch({
            type: "LOGIN",
            payload: data,
          });
          if (
            res.data.data.is_customer == "yes" &&
            res.data.data.is_service_provider == "yes"
          ) {
            props.activeForm == "customer"
              ? history.push(`/customer/dashboard`)
              : history.push(`/partner/dashboard`);
          } else if (res.data.data.is_customer == "yes") {
            history.push(`/customer/dashboard`);
          } else if (res.data.data.is_service_provider == "yes") {
            history.push(`/partner/dashboard`);
          }
        }
        if (res.data.status == false && res.data.status_code == 300) {
          // props.dispatch({
          //   type: "LOGIN",
          //   payload: backRes.data.data,
          // });
          setShowRegisterModal({
            status: true,
            message: res.data.message,
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

  const handleCloseRegisterModal = () => {
    console.log("close");
    setShowRegisterModal({ status: false });
    let { data } = showRegisterModal;
    if (data.is_customer == "yes") {
      data.is_customer = "no";
      data.is_service_provider = "yes";
      history.push(`/customer/dashboard`);
    } else if (data.is_service_provider == "yes") {
      data.is_customer = "yes";
      data.is_service_provider = "no";
    }
    RestApi.login(data).then((response) => {
      if (response.data.access_token && response.data.status == true) {
        reset({ email: "", password: "" });
        toast.success(response.data.message, {
          position: toast.POSITION.CENTER,
          autoClose: 2000,
        });
        RestApi.defaultToken(response.data.access_token);
        let res = response.data;
        let data = {
          name: res.data.first_name,
          email: res.data.email,
          phone: res.data.phone,
          last_name: res.data.last_name,
          middle_name: res.data.middle_name,
          photo: res.data.photo,
          isCustomer: res.data.is_customer,
          isServiceProvider: res.data.is_service_provider,
          _token: res.access_token,
        };
        props.dispatch({
          type: "LOGIN",
          payload: data,
        });

        setTimeout(() => {
          // if (
          //   response.data.data.is_customer == "yes" &&
          //   response.data.data.is_service_provider == "yes"
          // ) {
          //   props.activeForm == "customer"
          //     ? history.push(`/customer/dashboard`)
          //     : history.push(`/partner/dashboard`);
          // } else if (response.data.data.is_customer == "yes") {
          //   history.push(`/customer/dashboard`);
          // } else if (response.data.data.is_service_provider == "yes") {
          //   history.push(`/partner/dashboard`);
          // }
        }, 2000);
      }
    });
  };
  const changeUser = (r) => {
    let data = showRegisterModal.data;
    if (r == true) {
      let data = showRegisterModal.data;
      data.is_customer = "yes";
      data.is_service_provider = "yes";
      RestApi.login(data).then((res) => {
        if (res.data.access_token && res.data.status == true) {
          toast.success(res.data.message, {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 2000,
          });
          handleResponse(res);
          setShowRegisterModal({ status: false, message: "", data: {} });
          console.log(res);
        }
      });
    } else {
      if (data.is_customer == "yes") {
        data.is_customer = "no";
        data.is_service_provider = "yes";
      } else if (data.is_service_provider == "yes") {
        data.is_customer = "yes";
        data.is_service_provider = "no";
      }
      RestApi.login(data).then((res) => {
        if (res.data.access_token && res.data.status == true) {
          toast.success(res.data.message, {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 2000,
          });
          handleResponse(res);
          setShowRegisterModal({ status: false, message: "", data: {} });
          console.log(res);
        }
      });
    }
  };
  const changeForm = (form) => {
    props.setActiveForm(form);
  };
  const handleCloseModal = () => {
    // setShowMessageModal({ status: false, message: "" });
  };

  console.log("showregister", showRegisterModal);

  const styles = {
    top: {
      top: "6px",
    },
    error: {
      borderColor: "#bf1f24",
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
                          appId="4879441725418635"
                          callback={responseFacebook}
                          render={(renderProps) => (
                            <div
                              onClick={renderProps.onClick}
                              style={{ cursor: "pointer" }}
                              class="facebook-box"
                            >
                              <a>
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
                          {/* {errors["email"] && (
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
                          )} */}
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
                                      style={errors["email"] && styles.error}
                                      {...register("email")}
                                      type="text"
                                      placeholder="Email"
                                      name="email"
                                      autocomplete="off"
                                    />
                                    {errors["email"] && (
                                      <span style={{ color: "#bf1f24" }}>
                                        {errors["email"].message}
                                      </span>
                                    )}
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
                                      style={errors["password"] && styles.error}
                                      {...register("password")}
                                      type="password"
                                      name="password"
                                      placeholder="Password"
                                    />
                                    {errors["password"] && (
                                      <span style={{ color: "#bf1f24" }}>
                                        {errors["password"].message}
                                      </span>
                                    )}
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
      <Modal
        isOpen={showRegisterModal.status}
        title="Confirm"
        body={
          <div className="col">
            {showRegisterModal.message}
            <div>
              <button
                style={{ marginRight: "20px" }}
                onClick={() => changeUser(true)}
              >
                Yes
              </button>
              <button
                onClick={() => changeUser(false)}
                className="button save-btn"
              >
                {" "}
                No{" "}
              </button>
            </div>
          </div>
        }
      />
      <NewsLetter />
    </div>
  );
}

export default connect((state, props) => {
  console.log("state", state);
  return {
    isLogged: state.isLogged && state.isLogged,
    userDetails: state.userDetails && state.userDetails,
    // dashboard: state?.dashboard
  };
})(Login);
