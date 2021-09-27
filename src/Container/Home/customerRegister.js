import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../Common/footer";
import Header from "../../Common/header";
import NewsLetter from "../../Components/home/subscribeNewsletter";
import RestApi from "../../services/api";
import userImage from "../../images/user.png";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Modal from "../../Components/registerModal";
import { connect } from "react-redux"; 
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
const schema = Yup.object().shape({
  email: Yup.string().email("Email must be a valid email ").required("Email is required"),
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
function CustomerRegister(props) {
  
  
  const history = useHistory();
  const [responseError, setResponseError] = useState({});
  const [placeHolder, setPlaceHolder] = useState({});

  useEffect(()=> {
    RestApi.placeholder('customer-register').then((res)=> {
      console.log("placeHolder: customer-register: ",res)
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
    console.log(data);
   
    RestApi.register(data).then((res) => {
      console.log("resss", res);
      if (res.data.status == true) {
        toast.success(res.data.message, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 2000,
        });
        reset({...data,password:"",confirmPassword:""});
        // props.dispatch({
        //   type: "LOGIN",
        //   payload: res.data.data,
        // });
       
        history.push(`/login`)
      }
      if (res.data.error) {
        let { error } = res.data;
        //  console.log(err)
        // setResponseError(err);
        error.email &&   toast.error(error.email[0]);
        error.password && toast.error(error.password[0]);
        res.data.message && toast.error(res.data.message);
       
        // alert(res.data.message);
      } else {
        // alert(res.data.message);
        // setResponseError({});
      }
    });
  };

  const styles = {
    top: {
      top: "6px",
    },
    error: {
      borderColor: '#bf1f24',
      
    }
  };
  console.log(responseError)
 if(responseError.length > 0) {
  setTimeout(()=> { 
    setResponseError({})
  },5000)
 }
 
  return (
    <div>
      <Header />
      <div id="home-page">
        <div class="breadcrumbpane">
          <div class="container">
            <h1 class="pull-left"> Customer Register</h1>
          </div>
        </div>

        <div class="container">
          <div class="login_register_box clearfix">
            <div class="sign-in-panel">
              <h4>Create your Account</h4>
              <div class="login-content">
               
                <div class="login-details align-content-center">
                  <form
                    onSubmit={handleSubmit(onSubmitHandle)}
                    id="sky-form"
                    method="POST"
                    class="sky-form"
                  >
                     
                    <fieldset>
                      <section><br/>
                      {
                    //  responseError.length >0 && responseError.map((each)=> { 
                    //  return  each.error.map((error) => {
                    //     return <p className="alert alert-danger">{error}</p>
                    //    })
                       
                    //  })
                  }
                        <div class="row">
                          <div class="col col-10">
                            <label class="input">
                              <i
                                class="icon-append fa fa-envelope-o"
                                style={styles.top}
                              ></i>
                              {/* {errors["email"] && (
                                <>
                                  <br />
                                  <p className="alert-danger alert">
                                    {" "}
                                    {errors["email"]?.message}
                                  </p>
                                </>
                              )} */}
                              <input
                                type="hidden"
                                {...register("is_customer")}
                                value="yes"
                                autocomplete="off"
                              />
                              <input
                              style={errors["email"] && styles.error}
                                type="email"
                                placeholder="Email"
                                {...register("email")}
                                autocomplete="off"
                              />
                                {errors["email"] && <span style={{color:'#bf1f24'}}>{errors["email"].message}</span>}
                            </label>
                          </div>
                        </div>
                      </section>
                      <section>
                        <div class="row">
                          <div class="col col-10">
                            <label class="input">
                              {/* {errors["first_name"] && (
                                <>
                                  <br />
                                  <p className="alert-danger alert">
                                    {" "}
                                    {errors["first_name"]?.message}
                                  </p>
                                </>
                              )} */}
                              <i
                                class="icon-append fa fa-user-o"
                                style={styles.top}
                              ></i>
                              <input
                               style={errors["first_name"] && styles.error}
                                type="text"
                                placeholder="First Name"
                                {...register("first_name")}
                                autocomplete="off"
                              />
                                {errors["first_name"] && <span style={{color:'#bf1f24'}}>{errors["first_name"].message}</span>}
                            </label>
                          </div>
                        </div>
                      </section>
                      <section>
                        <div class="row">
                          <div class="col col-10">
                            <label class="input">
                              <i
                                class="icon-append fa fa-user-o"
                                style={styles.top}
                              ></i>

                              <input
                                type="textl"
                                placeholder="Middle Name"
                                name="middle_name"
                                {...register("middle_name")}
                                autocomplete="off"
                              />
                            </label>
                          </div>
                        </div>
                      </section>
                      <section>
                        <div class="row">
                          <div class="col col-10">
                            <label class="input">
                              <i
                                class="icon-append fa fa-user-o"
                                style={styles.top}
                              ></i>
                              {/* {errors["last_name"] && (
                                <>
                                  <br />
                                  <p className="alert-danger alert">
                                    {" "}
                                    {errors["last_name"]?.message}
                                  </p>
                                </>
                              )} */}
                              <input
                                type="text"
                                
                                placeholder="Last Name"
                                {...register("last_name")}
                                name="name"
                                autocomplete="off"
                              />
                            </label>
                          </div>
                        </div>
                      </section>
                      <section>
                        <div class="row">
                          <div class="col col-10">
                            <label class="input">
                              <i
                                class="icon-append fa fa-mobile"
                                style={styles.top}
                              ></i>
                              {/* {errors["phone"] && (
                                <>
                                  <br />
                                  <p className="alert-danger alert">
                                    {" "}
                                    {errors["phone"]?.message}
                                  </p>
                                </>
                              )} */}
                              <input
                              style={errors["phone"] && styles.error}
                                type="text"
                                placeholder="Mobile"
                                {...register("phone")}
                                autocomplete="off"
                              />
                                {errors["phone"] && <span style={{color:'#bf1f24'}}>{errors["phone"].message}</span>}
                            </label>
                          </div>
                        </div>
                      </section>
                      <section>
                        <div class="row">
                          <div class="col col-10">
                            <label class="input">
                              <i
                                class="icon-append fa fa-lock"
                                style={styles.top}
                              ></i>
                              {/* {errors["password"] && (
                                <>
                                  <br />
                                  <p className="alert-danger alert">
                                    {" "}
                                    {errors["password"]?.message}
                                  </p>
                                </>
                              )} */}
                              <input
                              style={errors["password"] && styles.error}
                                type="password"
                                {...register("password")}
                                name="password"
                                placeholder="Password"
                              />
                               {errors["password"] && <span style={{color:'#bf1f24'}}>{errors["password"].message}</span>}
                            </label>
                          </div>
                        </div>
                      </section>
                      <section>
                        <div class="row">
                          <div class="col col-10">
                            <label class="input">
                              <i
                                class="icon-append fa fa-lock"
                                style={styles.top}
                              ></i>
                              {/* {errors["confirmPassword"] && (
                                <>
                                  <br />
                                  <p className="alert-danger alert">
                                    {" "}
                                    {errors["confirmPassword"]?.message}
                                  </p>
                                </>
                              )} */}
                              <input
                              style={errors["confirmPassword"] && styles.error}
                                type="password"
                                {...register("confirmPassword")}
                                name="confirmPassword"
                                placeholder="Confirm Password"
                              />
                                {errors["confirmPassword"] && <span style={{color:'#bf1f24'}}>{errors["confirmPassword"].message}</span>}
                            </label>
                          </div>
                        </div>
                      </section>
                      <div class="chkbox-group">
                        <input type="checkbox" name="agree" required="Agree before continue"/>
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
                    <p class="pull-left cust_log">Already have an account?</p>
                    <Link
                      to="/login"
                      class="btn btn-login pull-right cust_login"
                    >
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
              <img src={userImage}/>
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
    </div>
  );
}

export default connect(function (state, props) {
  return {
    isLogged: state?.isLogged,
    userDetails: state?.userDetails,
  };
})(CustomerRegister);
