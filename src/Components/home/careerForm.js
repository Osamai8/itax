import React from 'react'

function careerForm() {
    return (
                <div className="border">
                  <form
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
                            <h3
                              className="job-summary"
                              style={{ marginLeft: "15px" }}
                            >
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
                                <i
                                  className="icon-append fa fa-envelope-o"
                                  
                                ></i>
                                <input
                                  type="email"
                                  placeholder="Email"
                                  name="email"
                                  autocomplete="off"
                                />
                              </label>
                              <label className="input">
                                <i
                                  className="icon-append fa fa-user-o"
                                  
                                ></i>
                                <input
                                  type="textl"
                                  placeholder="First Name"
                                  name="name"
                                  autocomplete="off"
                                />
                              </label>
                              <label className="input">
                                <i
                                  className="icon-append fa fa-user-o"
                                  
                                ></i>
                                <input
                                  type="textl"
                                  placeholder="Middle Name"
                                  name="name"
                                  autocomplete="off"
                                />
                              </label>
                              <label className="input">
                                <i
                                  className="icon-append fa fa-user-o"
                                  
                                ></i>
                                <input
                                  type="textl"
                                  placeholder="Last Name"
                                  name="name"
                                  autocomplete="off"
                                />
                              </label>
                              <label className="input">
                                <i
                                  className="icon-append fa fa-mobile"
                                  
                                ></i>
                                <input
                                  type="textl"
                                  placeholder="Mobile"
                                  name="name"
                                  autocomplete="off"
                                />
                              </label>

                              <div className="row">
                              <div
                                className="col-md-6"
                                style={{ width: "46%", marginLeft: "6px" }}
                              >
                                <label className="input">
                                  <i
                                    className="icon-append fa fa-user-o"
                                    
                                  ></i>
                                  <input
                                    type="textl"
                                    placeholder="Gender"
                                    name="name"
                                    autocomplete="off"
                                  />
                                </label>
                                <label className="input">
                                  <i
                                    className="icon-append fa fa-graduation-cap"
                                    
                                  ></i>
                                  <input
                                    type="textl"
                                    placeholder="Qualification"
                                    name="name"
                                    autocomplete="off"
                                  />
                                </label>
                              </div>
                              <div className="col-md-6" 
                              style={{ width: "46%" }}
                              >
                                <label className="input">
                                  <i
                                    className="icon-append fa fa-map-marker"
                                    
                                  ></i>
                                  <input
                                    type="textl"
                                    placeholder="Location"
                                    name="name"
                                    autocomplete="off"
                                  />
                                </label>
                                <label className="input">
                                  <i
                                    className="icon-append fa fa-briefcase"
                                    
                                  ></i>
                                  <input
                                    type="textl"
                                    placeholder="Year of Experience"
                                    name="name"
                                    autocomplete="off"
                                  />
                                </label>
                              </div>
                                </div>
                              <label className="input">
                                Attach Your CV
                                <span style={{ color: "red" }}>
                                  * (Only .doc /.docx / .pdf file allowed. Size:
                                  Max 2 MB)
                                </span>
                                <input
                                  type="file"
                                  name="fileToUpload"
                                  id="fileToUpload"
                                />
                              </label>
                            </div>
                          </div>
                        </div>
                      </section>
                    </fieldset>
                  </form>
                  <div className="form-group text-center mt-10">
                    <button
                      type="submit"
                      className="button"
                      style={{ margin: "0" }}
                    >
                      SUBMIT
                    </button>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                  </div>
                </div>
    )
}

export default careerForm
