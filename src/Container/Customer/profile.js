import React, { Component } from "react";
import UserHeader from "../../Common/userHeader";
import SideBar from "../../Common/customerSideBar";

export default class profile extends Component {
  render() {
    return (
      <div> 
        <div style={{ marginLeft: "254px", marginTop: "43px" }}>
          <div class="w3-container servicelist" style={{height: '530px'}}>
            <h3>
              My Profile
              <div class="progress">
                <div
                  class="progress-bar"
                  role="progressbar"
                  aria-valuenow="60"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{width:"60%"}}
                >
                  60%
                </div>
              </div>
            </h3>
            <ul class="nav nav-tabs">
              <li class="active">
                <a data-toggle="tab" href="#profile" class="text-center">
                  <i class="fa fa-user" aria-hidden="true"></i>
                  <br /> Persional Detail
                </a>
              </li>
              <li>
                <a data-toggle="tab" href="#profile1" class="text-center">
                  <i class="fa fa-hashtag" aria-hidden="true"></i>
                  <br /> Documents
                </a>
              </li>
              <li>
                <a data-toggle="tab" href="#profile2" class="text-center">
                  <i class="fa fa-lock" aria-hidden="true"></i>
                  <br /> Security
                </a>
              </li>
            </ul>

            <div class="tab-content">
              <div id="profile" class="tab-pane fade in active">
                <div class="row">
                  <form
                    class="form-horizontal"
                    role="form"
                    method="post"
                    action="#"
                    enctype="multipart/form-data"
                  >
                    <div class="col-md-12">
                      <div class="form-group">
                        <label class="col-md-2 control-label">Email Id</label>
                        <div class="col-md-10">
                          <input
                            type="text"
                            name=""
                            class="form-control"
                            readonly=""
                            placeholder="Email Id"
                            value=""
                          />
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="col-md-2 control-label">First Name</label>
                        <div class="col-md-2">
                          <input
                            type="text"
                            name=""
                            class="form-control"
                            placeholder="First Name"
                            value=""
                            required=""
                          />
                        </div>
                        <label class="col-md-2 control-label">
                          Middle Name
                        </label>
                        <div class="col-md-2">
                          <input
                            type="text"
                            name=""
                            class="form-control"
                            placeholder="Middle Name"
                            value=""
                            required=""
                          />
                        </div>
                        <label class="col-md-2 control-label">Last Name</label>
                        <div class="col-md-2">
                          <input
                            type="text"
                            name=""
                            class="form-control"
                            placeholder="Last Name"
                            value=""
                            required=""
                          />
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="col-md-2 control-label">Address</label>
                        <div class="col-md-10">
                          <input
                            type="text"
                            name=""
                            class="form-control"
                            placeholder="Address"
                            value=""
                            required=""
                          />
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="col-md-2 control-label">City</label>
                        <div class="col-md-4">
                          <input
                            type="text"
                            name=""
                            class="form-control"
                            placeholder="City"
                            value=""
                            required=""
                          />
                        </div>
                        <label class="col-md-2 control-label">Pin Code</label>
                        <div class="col-md-4">
                          <input
                            type="text"
                            name=""
                            class="form-control"
                            placeholder="Pin Code"
                            value=""
                            required=""
                          />
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="col-md-2 control-label">Mobile</label>
                        <div class="col-md-4">
                          <input
                            type="text"
                            name=""
                            class="form-control"
                            placeholder="Mobile"
                            value=""
                            required=""
                          />
                        </div>
                        <label class="col-md-2 control-label">
                          Upload Photo
                        </label>
                        <div class="col-md-4">
                          <input
                            type="file"
                            accept="image/*"
                            name="image"
                            id="file"
                            onchange="loadFile(event)"
                            style={{float: 'left'}}
                          />
                          <p>
                            <img
                              id="output"
                              width="150"
                              style={{marginLeft: '-80px'}}
                            />
                          </p>
                        </div>
                      </div>
                      <div class="form-group text-center mt-10">
                        <button
                          type="submit"
                          class="button save-btn"
                          style={{margin: '0'}}
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div id="profile1" class="tab-pane fade">
                <div class="row">
                  <form
                    class="form-horizontal"
                    role="form"
                    method="post"
                    action="#"
                  >
                    <div class="col-md-12">
                      <div class="form-group">
                        <label class="col-md-2 control-label">
                          Adhar Card No.
                        </label>
                        <div class="col-md-4">
                          <input
                            type="text"
                            name=""
                            class="form-control"
                            placeholder="Adhar Card No."
                            value=""
                            required=""
                          />
                        </div>
                        <div class="col-md-4">
                          <input
                            type="file"
                            accept="image/*"
                            name="adhar_card"
                            id="file"
                            onchange="loadFile(event)"
                            style={{float: 'left'}}
                          />
                          <p>
                            <img
                              id="output"
                              width="150"
                              style={{marginLeft: '-80px'}}
                            />
                          </p>
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="col-md-2 control-label">
                          PAN Card No.
                        </label>
                        <div class="col-md-4">
                          <input
                            type="text"
                            name=""
                            class="form-control"
                            placeholder="PAN Card No."
                            value=""
                            required=""
                          />
                        </div>
                        <div class="col-md-4">
                          <input
                            type="file"
                            accept="image/*"
                            name="pan_card"
                            id="file"
                            onchange="loadFile(event)"
                            style={{float: 'left'}}
                          />
                          <p>
                            <img
                              id="output"
                              width="150"
                              style={{marginLeft: '-80px'}}
                            />
                          </p>
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="col-md-2 control-label">
                          Company Registration No.
                        </label>
                        <div class="col-md-4">
                          <input
                            type="text"
                            name=""
                            class="form-control"
                            placeholder="Company Registration No."
                            value=""
                            required=""
                          />
                        </div>
                        <div class="col-md-4">
                          <input
                            type="file"
                            accept="image/*"
                            name="comp_reg"
                            id="file"
                            onchange="loadFile(event)"
                            style={{float: 'left'}}
                          />
                          <p>
                            <img
                              id="output"
                              width="150"
                              style={{marginLeft: '-80px'}}
                            />
                          </p>
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="col-md-2 control-label">GST No.</label>
                        <div class="col-md-4">
                          <input
                            type="text"
                            name=""
                            class="form-control"
                            placeholder="GST No."
                            value=""
                            required=""
                          />
                        </div>
                        <div class="col-md-4">
                          <input
                            type="file"
                            accept="image/*"
                            name="gst_bill"
                            id="file"
                            onchange="loadFile(event)"
                            style={{float: 'left'}}
                          />
                          <p>
                            <img
                              id="output"
                              width="150"
                              style={{marginLeft: '-80px'}}
                            />
                          </p>
                        </div>
                      </div>
                      <div class="form-group text-center mt-10">
                        <button
                          type="submit"
                          class="button save-btn"
                          style={{margin: '0'}}
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div id="profile2" class="tab-pane fade center">
                <div class="row">
                  <form
                    class="form-horizontal"
                    role="form"
                    method="post"
                    action="#"
                  >
                    <div class="col-md-12">
                      <div class="form-group">
                        <label class="col-md-4 control-label">Email</label>
                        <div class="col-md-8">
                          <input
                            type="text"
                            name=""
                            class="form-control"
                            placeholder="Email"
                            readonly=""
                            value=""
                            required=""
                          />
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="col-md-4 control-label">
                          Old Password
                        </label>
                        <div class="col-md-8">
                          <input
                            type="text"
                            name=""
                            class="form-control"
                            placeholder="Old Password"
                            value=""
                            required=""
                          />
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="col-md-4 control-label">
                          New Password
                        </label>
                        <div class="col-md-8">
                          <input
                            type="text"
                            name=""
                            class="form-control"
                            placeholder="New Password"
                            value=""
                            required=""
                          />
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="col-md-4 control-label">
                          Re-enter new Password
                        </label>
                        <div class="col-md-8">
                          <input
                            type="text"
                            name=""
                            class="form-control"
                            placeholder="Re-enter Password"
                            value=""
                            required=""
                          />
                        </div>
                      </div>
                      <div class="form-group text-center mt-10">
                        <button
                          type="submit"
                          class="button save-btn"
                          style={{margin: '0'}}
                        >
                          Update
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <hr />
        </div>
      </div>
    );
  }
}
