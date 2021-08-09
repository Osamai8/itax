import React, { Component } from "react";

import UserHeader from "../../Common/userHeader";
import SideBar from "../../Common/customerSideBar";

export default class viewService extends Component {
  render() {
      const styles = {
        additionalDoc : {
            borderRadius: '5px',
            backgroundColor: '#f2f2f2',
            padding: '20px'
          }
      }
    return (
      <div>
        <UserHeader />
        <SideBar />
        <div style={{ marginLeft: "254px", marginTop: "43px" }}>
          <div class="w3-container">
            <h3>Service Request Detail review by service provider</h3>
            <div class="row">
              <form
                class="form-horizontal"
                role="form"
                method="post"
                action="#"
              >
                <div class="col-md-12 mt-10">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label class="col-md-5 control-label ">
                        Service Request No.
                      </label>
                      <div class="col-md-7">
                        <input
                          type="text"
                          name="service_req_no"
                          class="form-control input-hide mandatory"
                          readonly=""
                          placeholder="Service Request No."
                          value="S002"
                          required=""
                          autocomplete="off"
                        />
                      </div>
                    </div>
                    <div class="form-group">
                      <label class="col-md-5 control-label addrheight">
                        Customer
                      </label>
                      <div class="col-md-7">
                        <input
                          type="text"
                          name="customer"
                          class="form-control m-b-3 input-hide mandatory"
                          readonly=""
                          placeholder="Customer"
                          value="Dinesh Agarwal"
                          autocomplete="off"
                        />
                      </div>
                    </div>
                    <div class="form-group">
                      <label class="col-md-5 control-label ">
                        Service Category
                      </label>
                      <div class="col-md-7">
                        <input
                          type="text"
                          name="service_category"
                          class="form-control input-hide mandatory"
                          readonly=""
                          placeholder="Service Category"
                          value="BUSINESS STARTUP SERVICES"
                          autocomplete="off"
                        />
                      </div>
                    </div>
                    <div class="form-group">
                      <label class="col-md-5 control-label">Service Name</label>
                      <div class="col-md-7">
                        <input
                          type="text"
                          name="service_name"
                          class="form-control input-hide mandatory"
                          readonly=""
                          placeholder="Service Name"
                          value="FORMATION OF BUSINESS ENTITY"
                          autocomplete="false"
                        />
                      </div>
                    </div>
                    <div class="form-group">
                      <label class="col-md-5 control-label">
                        Workflow Stage
                      </label>
                      <div class="col-md-7">
                        <select
                          class="form-control selectpicker bs-select-hidden"
                          readonly=""
                          data-style="btn-white"
                          name="workflow_stage"
                        >
                          <option value="0" selected="">
                            Service Provider
                          </option>
                          <option value="1">Customer</option>
                          <option value="2">Assignee</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div class="col-md-6">
                    <div class="form-group">
                      <label class="col-md-5 control-label">Service Date</label>
                      <div class="col-md-7">
                        <div class="input-group">
                          <input
                            type="text"
                            class="form-control input-hide mandatory"
                            name="service_date"
                            value="07.07.2021"
                            readonly=""
                            autocomplete="false"
                          />
                          {/* <!-- <span class="input-group-addon bg-info b-0 text-white"><i class="fa fa-calendar"></i></span> --> */}
                        </div>
                      </div>
                    </div>
                    <div class="form-group">
                      <label class="col-md-5 control-label">Status</label>
                      <div class="col-md-7">
                        <select
                          class="form-control selectpicker bs-select-hidden"
                          readonly=""
                          data-style="btn-white"
                          name="service_status"
                        >
                          <option value="0" selected="">
                            New
                          </option>
                          <option value="1">In progress</option>
                          <option value="2">User input required</option>
                          <option value="3">Completed</option>
                        </select>
                      </div>
                    </div>
                    <div class="form-group">
                      <label class="col-md-5 control-label">Assigned to</label>
                      <div class="col-md-7">
                        <input
                          type="text"
                          class="form-control input-hide"
                          readonly=""
                          value="Service provider Name"
                          autocomplete="false"
                        />
                      </div>
                    </div>
                    <div class="form-group">
                      <label class="col-md-5 control-label">
                        Assigned Date
                      </label>
                      <div class="col-md-7">
                        <div class="input-group">
                          <input
                            type="text"
                            class="form-control input-hide mandatory"
                            name="assigned_date"
                            value="08.07.2021"
                            readonly=""
                            autocomplete="false"
                          />
                          {/* <!-- <span class="input-group-addon bg-info b-0 text-white"><i class="fa fa-calendar"></i></span> --> */}
                        </div>
                      </div>
                    </div>
                    <div class="form-group">
                      <label class="col-md-5 control-label">
                        Target Completion Date
                      </label>
                      <div class="col-md-7">
                        <div class="input-group">
                          <input
                            type="text"
                            class="form-control input-hide mandatory"
                            name="target_comp_date"
                            value="07.07.2021"
                            readonly=""
                            autocomplete="false"
                          />
                          {/* <!-- <span class="input-group-addon bg-info b-0 text-white"><i class="fa fa-calendar"></i></span> --> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-group">
                      <label
                        class="col-md-2 control-label"
                        style="width: 20.8%;height: 105px;"
                      >
                        Brief Description
                      </label>
                      <div class="col-md-10" style="width: 79.2%;">
                        <textarea
                          name="brief_desc"
                          class="form-control input-hide"
                          readonly=""
                          rows="5"
                          placeholder="Remarks"
                        >
                          Description Entered by the user
                        </textarea>
                      </div>
                    </div>
                  </div>
                </div>
              </form>

              <div class="col-md-12">
                <div class="col-md-12 form-group">
                  {/* <!-- <div class="text-danger" data-toggle="modal" data-target="#myModal" style="cursor: pointer;"><b>Add Additional Documents</b></div>
  <button class="accordion-rev">Documents Submitted </button> -->
  <!-- <button type="button" class="btn btn-success btn-lg" data-toggle="modal" data-target="#myModal" style="margin-bottom: 5px;">Add Additional Documents</button> -->
  <!-- <div class="panel">
    <table class="w3-table w3-striped w3-bordered w3-border w3-hoverable w3-white table-responsive">
    <tbody>
    <tr>
      <th width="30%">Documents Type</th>
      <th width="20%">Date</th>
      <th width="30%">Uploaded Documents</th>
      <th width="30%">Previous Uploaded Document</th>
    </tr>
    <tr>
      <td>Adhar Card *</td>
      <td>xx-xx-xxxx</td>
      <td>Uploaded Doc.</td>
      <td>Previous Doc.</td>
    </tr>
    <tr>
      <td>PAN Card *</td>
      <td>xx-xx-xxxx</td>
      <td>Uploaded Doc.</td>
      <td>Previous Doc.</td>
    </tr>
    <tr>
      <td>Bank Statement</td>
      <td>xx-xx-xxxx</td>
      <td>Uploaded Doc.</td>
      <td>Previous Doc.</td>
    </tr>
    <tr>
      <td>Additional Documents</td>
      <td>xx-xx-xxxx</td>
      <td>Uploaded Doc.</td>
      <td>Previous Doc.</td>
    </tr>
  </tbody>
  </table>
  <p style="color: red;">[Note: (*) for Mandatory Field]</p>
  </div> --> */}
                  <div class="servicelist mb-10">
                    <ul class="nav nav-tabs">
                      <li class="active">
                        <a data-toggle="tab" href="#servicetab1">
                          Templates
                        </a>
                      </li>
                      <li>
                        <a data-toggle="tab" href="#servicetab2">
                          Documents Submitted
                        </a>
                      </li>
                      <li>
                        <a data-toggle="tab" href="#servicetab3">
                          Statutary Payments
                        </a>
                      </li>
                    </ul>
                    <div class="tab-content">
                      <div id="servicetab1" class="tab-pane fade in active">
                        <table class="w3-table w3-striped w3-bordered w3-border w3-hoverable w3-white table-responsive">
                          <tr>
                            <th width="10%">Sr.No.</th>
                            <th width="40%">
                              Template Name{" "}
                              <div
                                class="text-danger"
                                data-toggle="modal"
                                data-target="#myModal"
                                style="cursor: pointer;float: right;"
                              >
                                <b>
                                  Add Additional Documents{" "}
                                  <i class="fa fa-plus" aria-hidden="true"></i>
                                </b>
                              </div>
                            </th>
                            <th width="40%">Documents attached</th>
                            <th width="10%">Upload</th>
                          </tr>
                          <tr>
                            <td>1</td>
                            <td>xxxxx</td>
                            <td>xxxxx</td>
                            <td>xxxxx</td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>xxxxx</td>
                            <td>xxxxx</td>
                            <td>xxxxx</td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>xxxxx</td>
                            <td>xxxxx</td>
                            <td>xxxxx</td>
                          </tr>
                          <tr>
                            <td>4</td>
                            <td>xxxxx</td>
                            <td>xxxxx</td>
                            <td>xxxxx</td>
                          </tr>
                          <tr>
                            <td>5</td>
                            <td>xxxxx</td>
                            <td>xxxxx</td>
                            <td>xxxxx</td>
                          </tr>
                        </table>
                      </div>
                      <div id="servicetab2" class="tab-pane fade">
                        <table class="w3-table w3-striped w3-bordered w3-border w3-hoverable w3-white table-responsive">
                          <tr>
                            <th width="10%">Sr.No.</th>
                            <th width="40%">Documents Name</th>
                            <th width="40%">Documents Required</th>
                            <th width="10%">Format</th>
                          </tr>
                          <tr>
                            <td>1</td>
                            <td>xxxxx</td>
                            <td>xxxxx</td>
                            <td>xxxxx</td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>xxxxx</td>
                            <td>xxxxx</td>
                            <td>xxxxx</td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>xxxxx</td>
                            <td>xxxxx</td>
                            <td>xxxxx</td>
                          </tr>
                          <tr>
                            <td>4</td>
                            <td>xxxxx</td>
                            <td>xxxxx</td>
                            <td>xxxxx</td>
                          </tr>
                          <tr>
                            <td>5</td>
                            <td>xxxxx</td>
                            <td>xxxxx</td>
                            <td>xxxxx</td>
                          </tr>
                        </table>
                      </div>
                      <div id="servicetab3" class="tab-pane fade">
                        <table class="w3-table w3-striped w3-bordered w3-border w3-hoverable w3-white table-responsive">
                          <tr>
                            <th>Sr.No.</th>
                            <th width="20%">Details relating to challan</th>
                            <th width="10%">Challan No.</th>
                            <th width="10%">Amount Paid</th>
                            <th width="15%">Date of payment</th>
                            <th width="15%">Nature of payment</th>
                            <th width="10%">Upload challan</th>
                            <th width="10%">Who uploaded</th>
                            <th width="10%">Status</th>
                          </tr>
                          <tr>
                            <td>1</td>
                            <td>xxxxx</td>
                            <td>xxxxx</td>
                            <td>xxxxx</td>
                            <td>xxxxx</td>
                            <td>xxxxx</td>
                            <td>xxxxx</td>
                            <td>xxxxx</td>
                            <td>xxxxx</td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>xxxxx</td>
                            <td>xxxxx</td>
                            <td>xxxxx</td>
                            <td>xxxxx</td>
                            <td>xxxxx</td>
                            <td>xxxxx</td>
                            <td>xxxxx</td>
                            <td>xxxxx</td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>xxxxx</td>
                            <td>xxxxx</td>
                            <td>xxxxx</td>
                            <td>xxxxx</td>
                            <td>xxxxx</td>
                            <td>xxxxx</td>
                            <td>xxxxx</td>
                            <td>xxxxx</td>
                          </tr>
                          <tr>
                            <td>4</td>
                            <td>xxxxx</td>
                            <td>xxxxx</td>
                            <td>xxxxx</td>
                            <td>xxxxx</td>
                            <td>xxxxx</td>
                            <td>xxxxx</td>
                            <td>xxxxx</td>
                            <td>xxxxx</td>
                          </tr>
                          <tr>
                            <td>5</td>
                            <td>xxxxx</td>
                            <td>xxxxx</td>
                            <td>xxxxx</td>
                            <td>xxxxx</td>
                            <td>xxxxx</td>
                            <td>xxxxx</td>
                            <td>xxxxx</td>
                            <td>xxxxx</td>
                          </tr>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div class="form-horizontal">
                    <div class="form-group">
                      <label
                        class="col-md-2 control-label"
                        style="width: 20.8%;height: 105px;"
                      >
                        <b>Assignee Comment</b> <br /> Name <br /> Date <br />{" "}
                        <a href="#">+ View Previous Comments</a>
                      </label>
                      <div class="col-md-10" style="width: 79.2%;">
                        <textarea
                          name="service_comment"
                          class="form-control"
                          readonly=""
                          rows="5"
                          placeholder="Display assigniee comment"
                        ></textarea>
                      </div>
                    </div>
                    <div class="form-group">
                      <label
                        class="col-md-2 control-label"
                        style="width: 20.8%;height: 105px;"
                      >
                        Customer Comment
                      </label>
                      <div class="col-md-10" style="width: 79.2%;">
                        <textarea
                          name="service_comment"
                          class="form-control"
                          rows="5"
                          placeholder=""
                        ></textarea>
                      </div>
                    </div>
                    <div class="form-group text-center mt-10">
                      <button type="submit" class="button" style="margin: 0;">
                        Accept
                      </button>
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <button
                        type="submit"
                        class="button save-btn"
                        style="margin: 0;"
                      >
                        Save
                      </button>
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <button type="submit" class="button" style="margin: 0;">
                        Reject
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr />
          </div>

          {/* <!-- Modal --> */}
          <div class="modal fade" id="myModal" role="dialog">
            <div class="modal-dialog modal-lg">
              <div class="modal-content">
                <div class="modal-header w3-dark-green">
                  <button type="button" class="close" data-dismiss="modal">
                    &times;
                  </button>
                  <h4 class="modal-title text-center">
                    Upload Additional Document
                  </h4>
                </div>
                <div class="modal-body">
                  <div style={additionalDoc}>
                    <form
                      class="form-horizontal"
                      role="form"
                      method="post"
                      action="#"
                    >
                      <div class="form-group">
                        <label class="col-md-4 control-label">
                          Document Type
                        </label>
                        <div class="col-md-8">
                          <select
                            class="form-control selectpicker bs-select-hidden"
                            data-style="btn-white"
                            name="doc_type"
                          >
                            <option value="0" selected="">
                              Adhar
                            </option>
                            <option value="1">PAN</option>
                            <option value="2">Addtional</option>
                          </select>
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="col-md-4 control-label">Document</label>
                        <div class="col-md-8">
                          <input
                            type="text"
                            name="doc"
                            class="form-control mandatory"
                            placeholder="Document"
                            value=""
                          />
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="col-md-4 control-label">Note</label>
                        <div class="col-md-8">
                          <input
                            type="text"
                            name="customer"
                            class="form-control mandatory"
                            placeholder="Note"
                            value=""
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
