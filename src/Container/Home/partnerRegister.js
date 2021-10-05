import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../../Common/footer";
import Header from "../../Common/header";
import NewsLetter from "../../Components/home/subscribeNewsletter";
import RestApi from "../../services/api";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import userImage from '../../images/user.png'
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

const schema = Yup.object().shape({
  email: Yup.string()
    .email("Email must be a valid email ")
    .required("Email is required"),
  first_name: Yup.string().required("First name is required"),
  agree: Yup.boolean().oneOf([true]),

  //   last_name: Yup.string().required("Last name is required"),
    
phone: Yup.string().required('Phone is required').matches("^[0-9]{10}$", 'Phone number is not valid'),
  password: Yup
  .string()
  .required('Password is required')
  .matches(
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
    "Must Contain 8 Characters, One Alphabat, One Number and one special case Character"
  ),
  passwordConfirmation: Yup.string()
      .when('password', (password, schema) => {
        if (password) return schema.required('Confirm Password is required');
      })
      .oneOf([Yup.ref('password')], 'Passwords must match')
});
function PartnerRegister() {
  const history = useHistory();
  const [responseError, setResponseError] = useState({});
  const [placeHolder, setPlaceHolder] = useState({});

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(()=> {
    RestApi.placeholder('business-partner-register').then((res)=> {
      console.log("placeHolder: business-partner-register: ",res)
      setPlaceHolder(res.data.data)
    })
  },[])

  const onSubmitHandle = (data) => {
    console.log(data);
    RestApi.register(data).then((res) => {
      console.log("resss", res);
      if (res.data.status == true) {
        toast.success(res.data.message, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 2000,
        });
        reset()
        //if get token after registration
        // props.dispatch({
        //   type: "LOGIN",
        //   payload: res.data.data,
        // });
        history.push(`/login`);
      }
      if (res.data.error) {
        let { error } = res.data;
        //  console.log(err)
        // setResponseError(err);
        error.email && toast.error(error.email[0]);
        error.password && toast.error(error.password[0]);
        res.data.message && toast.error(res.data.message);

        // alert(res.data.message);
      } else {
        // alert(res.data.message);
        // setResponseError({});
      }
    });
  };
  console.log(errors)
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
                    onSubmit={handleSubmit(onSubmitHandle)}
                  >
                    <fieldset>
                      <section>
                        <div class="row">
                          <div class="col-md-6">
                          <input
                                type="hidden" 
                                {...register("is_service_provider")}
                                value="yes"
                                autocomplete="off"
                              />
                            <label class="input">
                              <i
                                class="icon-append fa fa-envelope-o"
                                style={{top:'6px'}}
                              ></i>
                              <input
                                type="email"
                                style={errors["email"] && styles.error}
                                placeholder="Email"
                                {...register("email")}
                                autocomplete="off"
                              /> 
                                {errors["email"] && (
                                <span style={{ color: "#bf1f24" }}>
                                  {errors["email"].message}
                                </span>
                              )}
                            </label>
                          
                          </div>
                          <div class="col-md-6">
                            <label class="input">
                              <i
                                class="icon-append fa fa-mobile"
                                style={{top:'6px'}}
                              ></i>
                              <input
                                type="text"
                                placeholder="Mobile"
                                style={errors["phone"] && styles.error}
                                {...register("phone")}
                                autocomplete="off"
                              /> 
                              {errors["phone"] && (
                                <span style={{ color: "#bf1f24" }}>
                                  {errors["phone"].message}
                                </span>
                              )}
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
                                style={{top:'6px'}}
                              ></i>
                              <input
                              {...register("first_name")}
                                type="text"
                                style={errors["first_name"] && styles.error}
                                placeholder="First Name" 
                                autocomplete="off"
                              />
                              {errors["first_name"] && (
                                <span style={{ color: "#bf1f24" }}>
                                  {errors["first_name"].message}
                                </span>
                              )}
                            </label>
                          </div>
                          <div class="col-md-6">
                            <label class="input">
                              <i
                                class="icon-append fa fa-map-marker"
                                style={{top:'6px'}}
                              ></i>
                              <input
                               {...register("address")}
                                type="text"
                                placeholder="Address" 
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
                                style={{top:'6px'}}
                              ></i>
                              <input
                              {...register("middle_name")}
                                type="text"
                                placeholder="Middle Name" 
                                autocomplete="off"
                              />
                            </label>
                          </div>
                          <div class="col-md-6">
                            <label class="input">
                              <i
                                class="icon-append fa fa-lock"
                                style={{top:'6px'}}
                              ></i>
                              <input
                              
                              {...register("password")}
                              style={errors["password"] && styles.error}
                                type="password" 
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
                      <section>
                        <div class="row">
                          <div class="col-md-6">
                            <label class="input">
                              <i
                                class="icon-append fa fa-user-o"
                                style={{top:'6px'}}
                              ></i>
                              <input 
                                type="text"
                                {...register("last_name")}
                                placeholder="Last Name" 
                                autocomplete="off"
                              />
                            </label>
                          </div>
                          <div class="col-md-6">
                            <label class="input">
                              <i
                                class="icon-append fa fa-lock"
                                style={{top:'6px'}}
                              ></i>
                              <input
                              {...register("passwordConfirmation")}
                                type="password" 
                                style={errors["passwordConfirmation"] && styles.error}
                                placeholder="Confirm Password"
                              /> 
                              {errors["passwordConfirmation"] && (
                                <span style={{ color: "#bf1f24" }}>
                                  {errors["passwordConfirmation"].message}
                                </span>
                              )}
                            </label>
                           
                          </div>
                        </div>
                      </section>

                      <div class="area_expertise clearfix">
                        <h4>Area of expertise</h4>
                        <div class="expertise_left">
                          <div class="chkbox-group">
                            <input type="checkbox" name="agree"  />
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
                        <input {...register("agree")} type="checkbox" name="agree" />
                        <span  style={errors["agree"] && { color: "#bf1f24" }} >I have read and agree to all the </span>
                        <a  style={errors["agree"] && { color: "#bf1f24" }} href="#">Term & Condition</a>
                      </div>
                    </fieldset>
                    <div class="sign-btn">
                    <button type="submit" name="sign_in" class="button col">
                      Create Account
                    </button>
                  </div>
                  </form>
                 
                  <div class="login-footer clearfix">
                    <p class="pull-left part_log">Already have an account?</p>
                    <Link to="/login" class="btn btn-login pull-right part_login">
                      Log in
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {placeHolder?.image && placeHolder?.description &&<div class="Register_benefits">
              {/* {placeHolder.header} */}
              {/* <h4>Member / Registered User Benefits...</h4>
              <h5>
                New User? <span>"Register to Become a Member"</span>
              </h5>
              <p>
                <strong>Registered User Benefits...</strong>
              </p> */}
              <img src={placeHolder?.image} />
              <div
                      dangerouslySetInnerHTML={{
                        __html: placeHolder?.description,
                      }}
                    />
            </div>}
          </div>
        </div>
        <NewsLetter />
        <Footer/>
      </div>
  )
}

export default PartnerRegister
