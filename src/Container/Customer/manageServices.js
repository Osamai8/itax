import React, { Component } from "react";
import SideBar from "../../Common/customerSideBar";

import UserHeader from "../../Common/userHeader";
export default class manageServices extends Component {
  render() {
    return (
      <div>
        <UserHeader />
        <SideBar />
        <div style={{ marginLeft: "254px", marginTop: "43px" }}>
          <div class="w3-container servicelist" style={{ height: "490px" }}>
            <h3>Service Lists</h3>

            <ul class="nav nav-tabs">
              <li class="active">
                <a data-toggle="tab" href="#servicetab1">
                  Open Service Request
                </a>
              </li>
              <li>
                <a data-toggle="tab" href="#servicetab2">
                  Closed Service Request
                </a>
              </li>
            </ul>

            <div class="tab-content">
              <div id="servicetab1" class="tab-pane fade in active">
                <table class="w3-table w3-striped w3-bordered w3-border w3-hoverable w3-white table-responsive">
                  <tr>
                    <th>Sr.No.</th>
                    <th width="20%">Service Ticket No.</th>
                    <th width="20%">Date</th>
                    <th width="20%">Service Name</th>
                    <th width="20%">Customer Name</th>
                    <th width="20%">Comments</th>
                    <th width="10%">Status</th>
                    <th>Action</th>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>xxxxx</td>
                    <td>xxxxx</td>
                    <td>xxxxx</td>
                    <td>xxxxx</td>
                    <td>xxxxx</td>
                    <td>Open</td>
                    <td>
                      <a href="view.php" class="button w3-button w3-dark-grey">
                        View
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>xxxxx</td>
                    <td>xxxxx</td>
                    <td>xxxxx</td>
                    <td>xxxxx</td>
                    <td>xxxxx</td>
                    <td>Open</td>
                    <td>
                      <a href="view.php" class="button w3-button w3-dark-grey">
                        View
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>xxxxx</td>
                    <td>xxxxx</td>
                    <td>xxxxx</td>
                    <td>xxxxx</td>
                    <td>xxxxx</td>
                    <td>Open</td>
                    <td>
                      <a href="view.php" class="button w3-button w3-dark-grey">
                        View
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>xxxxx</td>
                    <td>xxxxx</td>
                    <td>xxxxx</td>
                    <td>xxxxx</td>
                    <td>xxxxx</td>
                    <td>Open</td>
                    <td>
                      <a href="view.php" class="button w3-button w3-dark-grey">
                        View
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>xxxxx</td>
                    <td>xxxxx</td>
                    <td>xxxxx</td>
                    <td>xxxxx</td>
                    <td>xxxxx</td>
                    <td>Open</td>
                    <td>
                      <a href="view.php" class="button w3-button w3-dark-grey">
                        View
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>xxxxx</td>
                    <td>xxxxx</td>
                    <td>xxxxx</td>
                    <td>xxxxx</td>
                    <td>xxxxx</td>
                    <td>Open</td>
                    <td>
                      <a href="view.php" class="button w3-button w3-dark-grey">
                        View
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>xxxxx</td>
                    <td>xxxxx</td>
                    <td>xxxxx</td>
                    <td>xxxxx</td>
                    <td>xxxxx</td>
                    <td>Open</td>
                    <td>
                      <a href="view.php" class="button w3-button w3-dark-grey">
                        View
                      </a>
                    </td>
                  </tr>
                </table>
              </div>
              <div id="servicetab2" class="tab-pane fade">
                <table class="w3-table w3-striped w3-bordered w3-border w3-hoverable w3-white table-responsive">
                  <tr>
                    <th>Sr.No.</th>
                    <th width="20%">Service Ticket No.</th>
                    <th width="20%">Date</th>
                    <th width="20%">Service Name</th>
                    <th width="20%">Customer Name</th>
                    <th width="20%">Comments</th>
                    <th width="10%">Status</th>
                    <th>Action</th>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>xxxxx</td>
                    <td>xxxxx</td>
                    <td>xxxxx</td>
                    <td>xxxxx</td>
                    <td>xxxxx</td>
                    <td>Close</td>
                    <td>
                      <a href="view.php" class="button w3-button w3-dark-grey">
                        View
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>xxxxx</td>
                    <td>xxxxx</td>
                    <td>xxxxx</td>
                    <td>xxxxx</td>
                    <td>xxxxx</td>
                    <td>Close</td>
                    <td>
                      <a href="view.php" class="button w3-button w3-dark-grey">
                        View
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>xxxxx</td>
                    <td>xxxxx</td>
                    <td>xxxxx</td>
                    <td>xxxxx</td>
                    <td>xxxxx</td>
                    <td>Close</td>
                    <td>
                      <a href="view.php" class="button w3-button w3-dark-grey">
                        View
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>xxxxx</td>
                    <td>xxxxx</td>
                    <td>xxxxx</td>
                    <td>xxxxx</td>
                    <td>xxxxx</td>
                    <td>Close</td>
                    <td>
                      <a href="view.php" class="button w3-button w3-dark-grey">
                        View
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>xxxxx</td>
                    <td>xxxxx</td>
                    <td>xxxxx</td>
                    <td>xxxxx</td>
                    <td>xxxxx</td>
                    <td>Close</td>
                    <td>
                      <a href="view.php" class="button w3-button w3-dark-grey">
                        View
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>xxxxx</td>
                    <td>xxxxx</td>
                    <td>xxxxx</td>
                    <td>xxxxx</td>
                    <td>xxxxx</td>
                    <td>Close</td>
                    <td>
                      <a href="view.php" class="button w3-button w3-dark-grey">
                        View
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>xxxxx</td>
                    <td>xxxxx</td>
                    <td>xxxxx</td>
                    <td>xxxxx</td>
                    <td>xxxxx</td>
                    <td>Close</td>
                    <td>
                      <a href="view.php" class="button w3-button w3-dark-grey">
                        View
                      </a>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
          <hr></hr>
        </div>
      </div>
    );
  }
}
