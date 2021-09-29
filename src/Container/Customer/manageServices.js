import React, { Component } from "react";
import SideBar from "../../Common/customerSideBar";
import UserHeader from "../../Common/userHeader";
import { Link } from "react-router-dom";
export default class manageServices extends Component {
  constructor(props){
    super(props)
    this.state = {
      activeService : 'open'}
    }

  changeService(service) {
    this.setState({
      activeService: service
    })
  }

  render() {
    return (
      <div>
        <SideBar userDetails={this.props.userDetails} />
        <div style={{ marginLeft: "254px"}}>
          <div class="w3-container servicelist" style={{ height: "490px" }}>
            <h3>Service Lists</h3>

            <ul class="nav nav-tabs">
              <li class={this.state.activeService == 'Open'? "active" : ''}>
                <a data-toggle="tab" onClick={() => this.changeService('Open')}>
                  Open Service Request
                </a>
              </li>
              <li class={this.state.activeService == 'Close'? "active": ''}>
                <a data-toggle="tab" onClick={() => this.changeService('Close')} >
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
                    <td>{this.state.activeService}</td>
                    <td>
                      <Link to="view" class="button w3-button w3-dark-grey">
                        View
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>xxxxx</td>
                    <td>xxxxx</td>
                    <td>xxxxx</td>
                    <td>xxxxx</td>
                    <td>xxxxx</td>
                    <td>{this.state.activeService}</td>
                    <td>
                     <Link to="view" class="button w3-button w3-dark-grey">
                        View
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>xxxxx</td>
                    <td>xxxxx</td>
                    <td>xxxxx</td>
                    <td>xxxxx</td>
                    <td>xxxxx</td>
                    <td>{this.state.activeService}</td>
                    <td>
                     <Link to="view" class="button w3-button w3-dark-grey">
                        View
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>xxxxx</td>
                    <td>xxxxx</td>
                    <td>xxxxx</td>
                    <td>xxxxx</td>
                    <td>xxxxx</td>
                    <td>{this.state.activeService}</td>
                    <td>
                     <Link to="view" class="button w3-button w3-dark-grey">
                        View
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>xxxxx</td>
                    <td>xxxxx</td>
                    <td>xxxxx</td>
                    <td>xxxxx</td>
                    <td>xxxxx</td>
                    <td>{this.state.activeService}</td>
                    <td>
                     <Link to="view" class="button w3-button w3-dark-grey">
                        View
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>xxxxx</td>
                    <td>xxxxx</td>
                    <td>xxxxx</td>
                    <td>xxxxx</td>
                    <td>xxxxx</td>
                    <td>{this.state.activeService}</td>
                    <td>
                     <Link to="view" class="button w3-button w3-dark-grey">
                        View
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>xxxxx</td>
                    <td>xxxxx</td>
                    <td>xxxxx</td>
                    <td>xxxxx</td>
                    <td>xxxxx</td>
                    <td>{this.state.activeService}</td>
                    <td>
                     <Link to="view" class="button w3-button w3-dark-grey">
                        View
                      </Link>
                    </td>
                  </tr>
                </table>
              </div>
              
            </div>
          </div>
          <hr></hr>
        </div>
        <footer class="w3-container w3-padding-16 w3-grey">
            <p>
              <strong>Copyright</strong>&nbsp; © 2021 All Rights Reserved.
            </p>
          </footer>
      </div>
    );
  }
}
