import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../Common/footer";
import Header from "../../Common/header";
import NewsLetter from "../../Components/home/newsletter";
import RestApi from "../../services/api";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import userImage from '../../images/user.png'

const schema = Yup.object().shape({
  email: Yup.string().email().required(),
  first_name: Yup.string().required("First name is required"),
  //   last_name: Yup.string().required("Last name is required"),
    
phone: Yup.string().required('Phone is required').matches("^[0-9]{10}$", 'Phone number is not valid'),
  password: Yup
  .string()
  .required('Password is required')
  .matches(
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
    "Must Contain 8 Characters, One Alphabat, One Number and one special case Character"
  ),
  confirmPassword: Yup.string()
      .when('password', (password, schema) => {
        if (password) return schema.required('Confirm Password is required');
      })
      .oneOf([Yup.ref('password')], 'Passwords must match')
});
function PartnerRegister() {
  const [responseError, setResponseError] = useState({});
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });


  const onSubmitHandle = (data) => {
    console.log(data);
    RestApi.register(data)
      .then((res) => {
        console.log("resss",res) 
        if (res.data.error) {
            let { error } = res.data;
            setResponseError(error);
            alert(res.data.message)
          } else {
            alert(res.data.message);
            setResponseError({});
          }
        
      })
  };
  console.log(errors)
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
                                {...register("is_partner")}
                                value="yes"
                                autocomplete="off"
                              />
                            <label class="input">
                              <i
                                class="icon-append fa fa-envelope-o"
                                style={{top:'6px'}}
                              ></i>
                              {errors["email"] && (
                                <>
                                  <br />
                                  <p className="alert-danger alert">
                                    {" "}
                                    {errors["email"]?.message}
                                  </p>
                                </>
                              )}
                              <input
                                type="email"
                                required
                                placeholder="Email"
                                {...register("email")}
                                
                                autocomplete="off"
                              /> 
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
                                {...register("phone")}
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
                              required
                              {...register("first_name")}
                                type="text"
                                placeholder="First Name" 
                                autocomplete="off"
                              />
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
                              {...register("middleName")}
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
                              required
                              {...register("password")}
                                type="password" 
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
                        <input type="checkbox" name="agree" />
                        <span>I have read and agree to all the </span>
                        <a href="#">Term & Condition</a>
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
            <div class="Register_benefits">
              <h4>Member / Registered User Benefits...</h4>
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
        <NewsLetter />
      </div>
  )
}

export default PartnerRegister
