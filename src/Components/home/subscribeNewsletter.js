import React, { useEffect, useState } from "react";
import newsletterImage from "../../images/newsletter-text.png";
import RestApi from "../../services/api";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Email must be a valid email")
    .required("Email is required"),
  name: yup.string().required("Name is required"),
});

function Newsletter() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });
  useEffect(() => {
    // lifecycle here
  }, []);

  const onSubmitHandle = (data) => {
    console.log(data);
    RestApi.subscribe(data).then((res) => {
      console.log("subs", res);

      if (res.data.message && res.data.status == false) {
        toast.error(res.data.message);
      }
      if (res.data.message && res.data.status) {
        reset()
        // console.log("subs", res.data.message);

        toast.success(res.data.message);
      }
    });
  };
  // console.log(errors)
  const styles = {
    top: {
      top: "6px",
    },
    error: {
      borderColor: "#bf1f24",
    },
  };
  return (
    <section class="newslettersubscription_pane">
      <div class="container">
        <div class="newsletter-section">
          <div class="newslettersection-left">
            <img src={newsletterImage} />
          </div>
          <div class="newslettersection-subcribeform">
            <p>
              Enter Your Name and Email Address To Receive All Tax And Finance
              Related News From Our Website
              <br />* Don't Worry You'll Not be Spammed
            </p>
            <div class="row">
              <div>
                <form onSubmit={handleSubmit(onSubmitHandle)}>
                  <div class="col-md-4">
                    <input
                      type="text"
                      style={errors["name"] && styles.error}
                      {...register("name")}
                      // name="firstname"
                      // onChange={(e) => setName(e.target.value)}
                      id="firstname"
                      class="form-control inputpane"
                      placeholder="Enter Your Name"
                    />
                    {errors["name"] && (
                      <span style={{ color: "#bf1f24" }}>
                        {errors["name"].message}
                      </span>
                    )}
                    <span
                      id="error"
                      class="error"
                      style={{ display: "none", color: "red" }}
                    >
                      Enter User Name
                    </span>
                  </div>
                  <div class="col-md-4">
                    <input
                      type="text"
                      style={errors["email"] && styles.error}
                      {...register("email")}
                      // name="emailaddress"
                      // onChange={(e) => setEmail(e.target.value)}
                      id="emailaddress"
                      class="form-control inputpane"
                      placeholder="Enter Your Email Address"
                    />
                    {errors["email"] && (
                      <span style={{ color: "#bf1f24" }}>
                        {errors["email"].message}
                      </span>
                    )}
                    <span
                      id="err"
                      class="error"
                      style={{ display: "none", color: "red" }}
                    >
                      Enter email address
                    </span>
                  </div>
                  <div class="col-md-4">
                    <button
                      class="button newsletter no-pip"
                      name="newsletter"
                      id="newsletter"
                    >
                      Subscribe Newsletter
                      <span>
                        <i class="fa fa-envelope-o"></i>
                      </span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div class="clearfix"></div>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
