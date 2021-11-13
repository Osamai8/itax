import React, { useState, useEffect } from "react";
import RestApi from "../../services/api";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import userImage from "../../images/user.png";
import { toast } from "react-toastify";
const schema = Yup.object().shape({
    email: Yup.string()
      .email("Email must be a valid email ")
      .required("Email is required"),
    // first_name: Yup.string().required("First name is required"),
    agree: Yup.boolean().oneOf([true]),
  
    //   last_name: Yup.string().required("Last name is required"),
  
    phone: Yup.string()
      .required("Phone is required")
      .matches("^[0-9]{10}$", "Phone number is not valid"),
    password: Yup.string()
      .required("Password is required")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Must Contain 8 Characters, One Alphabat, One Number and one special case Character"
      ),
    passwordConfirmation: Yup.string()
      .when("password", (password, schema) => {
        if (password) return schema.required("Confirm Password is required");
      })
      .oneOf([Yup.ref("password")], "Passwords must match"),
  });

function PartnerRegister() {
  const [registerType, setRegisterType] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
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
          autoClose: 10000,
        });
        reset();
        //if get token after registration
        // props.dispatch({
        //   type: "LOGIN",
        //   payload: res.data.data,
        // });
        // history.push(`/login`);
      }
      if (res.data.error) {
        let { error } = res.data;
        //  console.log(err)
        // setResponseError(err);
        error.email &&
          toast.error(error.email[0], {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 10000,
          });
        error.password &&
          toast.error(error.password[0], {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 10000,
          });
        res.data.message &&
          toast.error(res.data.message, {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 10000,
          });

        // alert(res.data.message);
      } else {
        // alert(res.data.message);
        // setResponseError({});
      }
    });
  };
  console.log(errors);
  return (
    <div className="col-md-4 partner_form">
      <h3>Register for working with us</h3>
      <form
        onSubmit={handleSubmit(onSubmitHandle)}
        id="sky-form"
        method="POST"
        className="sky-form"
        action="https://itaxdoctor.idossapp.com/index.php/Itax/user_login"
        novalidate="novalidate"
      >
        <fieldset>
          <section>
            <div className="row">
              <div className="col col-12">
                <label className="input">
                  <select
                              onChange={(e) =>
                                setValue("register_as", e.target.value)
                              }
                              id="register"
                              {...register("register_as")}
                              // {...register("register_as")}
                              class="form-control selectpicker customer_down_arrow"
                              data-style="btn-white"
                              style={{ width: "95.6%" }}
                            >
                              <option value="Individual">Individual</option>
                              <option value="Company">Company</option>
                              <option value="Partner">Partner</option>
                            </select>
                </label>
              </div>
            </div>
          </section>
          <section>
            <div className="row">
              <div className="col col-12">
                <label className="input">
                  <i
                    className="icon-append fa fa-envelope-o"
                    // style={styles.top}
                  ></i>
                   <input
                            type="hidden"
                            {...register("is_service_provider")}
                            value="yes"
                          />
                  <input
                    type="email"
                    style={errors["email"] && styles.error}
                     {...register("email")}
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
            <div className="row">
              <div className="col col-12">
                <label className="input">
                  <i
                    className="icon-append fa fa-user-o"
                    // style={styles.top}
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
            <div className="row">
              <div className="col col-12">
                <label className="input">
                  <i
                    className="icon-append fa fa-user-o"
                    // style={styles.top}
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
            <div className="row">
              <div className="col col-12">
                <label className="input">
                  <i
                    className="icon-append fa fa-user-o"
                    // style={styles.top}
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
            <div className="row">
              <div className="col col-12">
                <label className="input">
                  <i
                    className="icon-append fa fa-mobile"
                    // style={styles.top}
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
            <div className="row">
              <div className="col col-12">
                <label className="input">
                  <i
                    className="icon-append fa fa-lock"
                    // style={styles.top}
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
            <div className="row">
              <div className="col col-12">
                <label className="input">
                  <i
                    className="icon-append fa fa-lock"
                    // style={styles.top}
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

        <div className="area_expertise expt">
          <h4>Area of expertise</h4>
          <div className="chkbox-group">
            <input type="checkbox" name="agree" />
            <a href="#">Business Startup Services</a>
          </div>
          <div className="chkbox-group">
            <input type="checkbox" name="agree" />
            <a href="#">Corporate Advisory</a>
          </div>
          <div className="chkbox-group">
            <input type="checkbox" name="agree" />
            <a href="#">Income tax Advisory </a>
          </div>
          <div className="chkbox-group">
            <input type="checkbox" name="agree" />
            <a href="#">Financial Funding and Debt Mgmt.</a>
          </div>
          <div className="chkbox-group">
            <input type="checkbox" name="agree" />
            <a href="#">Outsourcing Services</a>
          </div>
          <div className="chkbox-group">
            <input type="checkbox" name="agree" />
            <a href="#">International Taxation</a>
          </div>
          <div className="chkbox-group">
            <input type="checkbox" name="agree" />
            <a href="#">FEMA and FERA Advisory</a>
          </div>
          <div className="chkbox-group">
            <input type="checkbox" name="agree" />
            <a href="#">Foreign Company Setup in India</a>
          </div>
        </div>
        <div className="chkbox-group">
          <input type="checkbox" name="agree" />
          <span>I have read and agree to all the </span>
          <a href="#">Term & Condition</a>
        </div>
        <div className="sign-btn">
          <button type="submit" name="sign_in" className="button col">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default PartnerRegister;
