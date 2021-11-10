import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import RestApi from "../../services/api";
import { toast } from "react-toastify";
import { setLocale } from 'yup';

setLocale({
  mixed: {
    notType: '${path} is required',
  }
})

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Email must be a valid email")
    .required("Email is required"),
  first_name: yup.string().required("First Name is required"),
  // middle_name: yup.string().required("Name is required"),
  // last_name: yup.string().required("Name is required"),
  position: yup.string().required("Position is required"),
  phone: yup.string()
  .required("Phone is required")
  .matches("^[0-9]{10}$", "Phone number is not valid"),
  gender: yup.string().required("Gender is required"),
  qualifications: yup.string().required("Qualification is required"),
  location: yup.string().required("Location is required"),
  total_experience: yup.string().required("Experiance is required"),
  // attachment: yup.mixed().required('A file is required'),
  attachment:  yup.mixed().required('File is required'),
});

export default function CareerFormModal () {
  const [message, setMessage] = useState("");
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
    RestApi.careerForm(data).then((res) => {
      console.log(res);
      if (res.data.message) {
        toast.success(res.data.message, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 5000,
        });
        setMessage(res.data.message);
      }
    });
  };
  console.log("errors", errors);

  const styles = {
    error: {
      borderColor: "#bf1f24",
    },
  };
  console.log("form");

  return (
    <div className="border">
      <form
        onSubmit={handleSubmit(onSubmitHandle)}
        id="sky-form"
        method="POST"
        className="sky-form"
        // action="https://itaxdoctor.idossapp.com/index.php/Itax/user_login"
        novalidate="novalidate"
      >
        <fieldset>
          <section>
            <div className="row">
              <div className="col col-10 carrer_oppr">
                <h3 className="job-summary" style={{ marginLeft: "15px" }}>
                  Position : Financial Analyst
                </h3>
              </div>
            </div>
          </section>
          <section>
            <div className="row">
              <div className="center-align-content">
                <div className="col-md-11 carrer-gap">
                  <label className="input">
                    <i className="icon-append fa fa-envelope-o"></i>
                    <input
                      type="email"
                      placeholder="Email"
                      name="email"
                      autocomplete="off"
                       style={errors["email"] && styles.error}
                        {...register("email")}
                    />
                  </label>
                  <label className="input">
                    <i className="icon-append fa fa-user-o"></i>
                    <input
                      type="textl"
                      placeholder="First Name"
                      name="name"
                      autocomplete="off"
                       style={errors["first_name"] && styles.error}
                        {...register("first_name")}
                    />
                  </label>
                  <label className="input">
                    <i className="icon-append fa fa-user-o"></i>
                    <input
                      type="textl"
                      placeholder="Middle Name"
                      name="name"
                      autocomplete="off"
                       style={errors["middle_name"] && styles.error}
                        {...register("middle_name")}
                    />
                  </label>
                  <label className="input">
                    <i className="icon-append fa fa-user-o"></i>
                    <input
                      type="textl"
                      placeholder="Last Name"
                      name="name"
                      autocomplete="off"
                       style={errors["last_name"] && styles.error}
                        {...register("last_name")}
                    />
                  </label>
                  <label className="input">
                    <i className="icon-append fa fa-mobile"></i>
                    <input
                      type="textl"
                      placeholder="Mobile"
                      name="name"
                      autocomplete="off"
                       style={errors["phone"] && styles.error}
                        {...register("phone")}
                    />
                  </label>

                  <div className="row">
                    <div
                      className="col-md-6"
                      style={{ width: "46%", marginLeft: "6px" }}
                    >
                      <label className="input">
                        <i className="icon-append fa fa-user-o"></i>
                        <input
                          type="textl"
                          placeholder="Gender"
                          name="name"
                          autocomplete="off"
                           style={errors["gender"] && styles.error}
                        {...register("gender")}
                        />
                      </label>
                      <label className="input">
                        <i className="icon-append fa fa-graduation-cap"></i>
                        <input
                          type="textl"
                          placeholder="Qualification"
                          name="name"
                          autocomplete="off"
                           style={errors["qualifications"] && styles.error}
                        {...register("qualifications")}
                        />
                      </label>
                    </div>
                    <div className="col-md-6" style={{ width: "46%" }}>
                      <label className="input">
                        <i className="icon-append fa fa-map-marker"></i>
                        <input
                          type="textl"
                          placeholder="Location"
                          name="name"
                          autocomplete="off"
                           style={errors["location"] && styles.error}
                        {...register("location")}
                        />
                      </label>
                      <label className="input">
                        <i className="icon-append fa fa-briefcase"></i>
                        <input
                          type="textl"
                          placeholder="Year of Experience"
                          name="name"
                          autocomplete="off"
                           style={errors["total_experience"] && styles.error}
                        {...register("total_experience")}
                        />
                      </label>
                    </div>
                  </div>
                  <label className="input">
                    Attach Your CV
                    <span style={{ color: "red" }}>
                      * (Only .doc /.docx / .pdf file allowed. Size: Max 2 MB)
                    </span>
                    <input type="file" name="fileToUpload" id="fileToUpload" />
                  </label>
                </div>
              </div>
            </div>
          </section>
        </fieldset>
     
      <div className="form-group text-center mt-10">
        <center><button type="submit" className="button" style={{ margin: "0" }}>
          SUBMIT
        </button></center>
        &nbsp;&nbsp;&nbsp;&nbsp;
      </div>
      </form>
    </div>
  );
}


export const CareerPageForm = () => {
  const [message, setMessage] = useState("");
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
    RestApi.careerForm(data).then((res) => {
      console.log(res);
      if (res.data.status) {
        toast.success(res.data.message, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 5000,
        });
        setMessage(res.data.message);
      }
      else {
        if (res.data.error) {
          let { error } = res.data;
          //  console.log(err)
          // setResponseError(err);
          error.attachment && toast.error(error.attachment[0]);
          error.qualifications && toast.error(error.qualifications[0]);
          res.data.message && toast.error(res.data.message);
  
          // alert(res.data.message);
        } 
      }
    });
  };
  console.log("abcd", errors);

  const styles = {
    error: {
      borderColor: "#bf1f24",
    },
  };
  return (
    <div className="blog_right_sidebar">
      <aside className="single_sidebar_widget">
        <h3 style={{ textAlign: "center", marginTop: "inherit" }}>
          CAREER OPPORTUNITIES
        </h3>
        <form
          onSubmit={handleSubmit(onSubmitHandle)}
          id="sky-form"
          method="POST"
          className="sky-form"
        >
          <fieldset>
            <section>
              <div className="row">
                <div className="center-align-content">
                  <div className="col-md-11 carrer-gap">
                    <label className="input">
                      <i
                        className="icon-append fa fa-user-md"
                        // style={{ top: "6px" }}
                      ></i>
                      <input
                        type="text"
                        placeholder="Position" 
                        style={errors["position"] && styles.error}
                        {...register("position")}
                        autocomplete="off"
                      />
                      {errors["position"] && (
                                <span style={{ color: "#bf1f24" }}>
                                  {errors["position"].message}
                                </span>
                              )}
                    </label>
                    <label className="input">
                      <i
                        className="icon-append fa fa-envelope-o"
                        // style={{ top: "6px" }}
                      ></i>
                      <input
                        type="email"
                        placeholder="Email"
                        name="email"
                         style={errors["email"] && styles.error}
                        {...register("email")}
                        autocomplete="off"
                      />
                      {errors["email"] && (
                                <span style={{ color: "#bf1f24" }}>
                                  {errors["email"].message}
                                </span>
                              )}
                    </label>
                    <label className="input">
                      <i
                        className="icon-append fa fa-user-o"
                        // style={{ top: "6px" }}
                      ></i>
                      <input
                        type="textl"
                        placeholder="First Name"
                        name="name"
                         style={errors["first_name"] && styles.error}
                        {...register("first_name")}
                        autocomplete="off"
                      />
                      {errors["first_name"] && (
                                <span style={{ color: "#bf1f24" }}>
                                  {errors["first_name"].message}
                                </span>
                              )}
                    </label>
                    <label className="input">
                      <i
                        className="icon-append fa fa-user-o"
                        // style={{ top: "6px" }}
                      ></i>
                      <input
                        type="textl"
                        placeholder="Middle Name"
                        name="name"
                         style={errors["middle_name"] && styles.error}
                        {...register("middle_name")}
                        autocomplete="off"
                      />
                      {errors["middle_name"] && (
                                <span style={{ color: "#bf1f24" }}>
                                  {errors["middle_name"].message}
                                </span>
                              )}
                    </label>
                    <label className="input">
                      <i
                        className="icon-append fa fa-user-o"
                        // style={{ top: "6px" }}
                      ></i>
                      <input
                        type="textl"
                        placeholder="Last Name"
                        name="name"
                         style={errors["last_name"] && styles.error}
                        {...register("last_name")}
                        autocomplete="off"
                      />
                      {errors["last_name"] && (
                                <span style={{ color: "#bf1f24" }}>
                                  {errors["email"].message}
                                </span>
                              )}
                    </label>
                    <label className="input">
                      <i
                        className="icon-append fa fa-mobile"
                        // style={{ top: "6px" }}
                      ></i>
                      <input
                        type="textl"
                        placeholder="Mobile"
                        name="name"
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
                    <label className="input">
                      <i
                        className="icon-append fa fa-user-o"
                        // style={{ top: "6px" }}
                      ></i>
                      <input
                        type="textl"
                        placeholder="Gender"
                        name="name"
                         style={errors["gender"] && styles.error}
                        {...register("gender")}
                        autocomplete="off"
                      />
                      {errors["gender"] && (
                                <span style={{ color: "#bf1f24" }}>
                                  {errors["gender"].message}
                                </span>
                              )}
                    </label>
                    <label className="input">
                      <i
                        className="icon-append fa fa-graduation-cap"
                        // style={{ top: "6px" }}
                      ></i>
                      <input
                        type="textl"
                        placeholder="Qualification"
                        name="name"
                         style={errors["qualifications"] && styles.error}
                        {...register("qualifications")}
                        autocomplete="off"
                      />
                      {errors["qualifications"] && (
                                <span style={{ color: "#bf1f24" }}>
                                  {errors["qualifications"].message}
                                </span>
                              )}
                    </label>
                    <label className="input">
                      <i
                        className="icon-append fa fa-map-marker"
                        // style={{ top: "6px" }}
                      ></i>
                      <input
                        type="textl"
                        placeholder="Location"
                        name="name"
                         style={errors["location"] && styles.error}
                        {...register("location")}
                        autocomplete="off"
                      />
                      {errors["location"] && (
                                <span style={{ color: "#bf1f24" }}>
                                  {errors["location"].message}
                                </span>
                              )}
                    </label>
                    <label className="input">
                      <i
                        className="icon-append fa fa-briefcase"
                        // style={{ top: "6px" }}
                      ></i>
                      <input
                        type="textl"
                        placeholder="Year of Experience"
                        name="name"
                        style={errors["total_experience"] && styles.error}
                        {...register("total_experience")}
                        autocomplete="off"
                      />
                      {errors["total_experience"] && (
                                <span style={{ color: "#bf1f24" }}>
                                  {errors["total_experience"].message}
                                </span>
                              )}
                    </label>
                    <label className="input">
                      Attach Your CV
                      <span style={{ color: "red" }}>
                        * (Only .doc /.docx / .pdf file allowed. Size: Max 2 MB)
                      </span>
                      <input
                        type="file"
                        name="fileToUpload"
                        id="fileToUpload"
                        style={errors["attachment"] && styles.error}
                        {...register("attachment")}
                      />
                       {errors["attachment"] && (
                                <span style={{ color: "#bf1f24" }}>
                                  {errors["attachment"].message}
                                </span>
                              )}
                    </label>
                  </div>
                </div>
              </div>
            </section>
          </fieldset>
      
        <div className="form-group text-center mt-10">
        <center>  <button type="submit" className="button" style={{ margin: "0" }}>
            SUBMIT
          </button></center>
          &nbsp;&nbsp;&nbsp;&nbsp;
        </div>
          </form>
      </aside>
    </div>
  );
};
