import React, { Component } from "react";
import avatar2 from "../images/avatar2.png";
import { Link } from "react-router-dom";

export default class sideBar extends Component {
  constructor(props) {
    console.log("props sidebar", props);
    super(props);
    this.state = {
      drawerSwitch: false,
    };
  }

  handleSidebar() {
    this.setState({
      drawerSwitch: !this.state.drawerSwitch,
    });
  }

  render() {
    let {userDetails} = this.props
    console.log(this.props);
    const styles = {
      sideBarMenu: {
        zIndex: "3",
        width: "260px",
        display: this.state.drawerSwitch == true ? "block" : "none",
      },
    };
    var dateObj = new Date();
    const month = dateObj.toLocaleString("default", { month: "long" });
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();
    console.log("sss", day, month, year);
    return (
      <div>
        <nav
          className="w3-sidebar w3-collapse w3-dark-green"
          style={{ zIndex: "3", width: "260px" }}
          id="mySidebar"
        >
          <br />
          <div className="w3-container w3-row">
            <div className="w3-col w3-large s12 w3-bar">
              <Link to="/customer/dashboard">
                <b>
                  <i className="fa fa-dashboard"></i> My Dashboard
                </b>
              </Link>
            </div>
          </div>
          <hr />
          <div className="w3-bar-block w3-medium">
            <a
              href="#"
              className="w3-bar-item w3-button w3-padding-16 w3-hide-large w3-dark-grey w3-hover-black"
              onclick={this.handleSidebar}
              title="close menu"
            >
              <i className="fa fa-remove fa-fw"></i>  Close Menu
            </a>
            <Link
              to="/customer/my-profile"
              className="w3-bar-item w3-button w3-padding w3-yellow"
            >
              <i className="fa fa-users fa-fw"></i>  My Profile
            </Link>
            <Link
              to="/customer/manage-services"
              className="w3-bar-item w3-button w3-padding"
            >
              <i className="fa fa-eye fa-fw"></i>  Sevice Request
            </Link>
            <Link to="#" className="w3-bar-item w3-button w3-padding">
              <i className="fa fa-eye fa-fw"></i>  Meating Schedule
            </Link>
            <Link to="#" className="w3-bar-item w3-button w3-padding">
              <i className="fa fa-eye fa-fw"></i>  Report
            </Link>

            <Link to="#" className="w3-bar-item w3-button w3-padding">
              <i className="fa fa-bank fa-fw"></i>  Referal
            </Link>
            <br />
            <br />
          </div>
        </nav>

        {/* <!-- Overlay effect when opening sidebar on small screens --> */}
        <div
          className="w3-overlay w3-hide-large w3-animate-opacity"
          onclick={this.handleSidebar}
          style={{ cursor: "pointer" }}
          title="close side menu"
          id="myOverlay"
        ></div>

        {/* <!-- !PAGE CONTENT! --> */}
        <div
          className="w3-main"
          style={{ marginLeft: "260px", marginTop: "92px" }}
        >
          {/* <!-- Header --> */}
          <header className="w3-container w3-xlarge w3-dark-green w3-padding">
            <p className="w3-left">
              <img
                src={avatar2}
                className="w3-circle w3-margin-right"
                style={{ width: "46px" }}
              />
            </p>
            <p className="w3-left w3-medium">
              <span>
                <strong>
                  {`${userDetails.name} ${userDetails.middle_name != null ? userDetails.middle_name : '' } ${userDetails.last_name != null ?userDetails.last_name : ''}`}
                </strong>
                {",  "}
                {userDetails.isServiceProvider == "yes" &&
                userDetails.isCustomer == "yes" ? (
                  (<select className="user-change-select">
                    {" "}
                    <option>Customer</option>
                    <option>Service Provider</option>{" "}
                  </select>)
                ) :  userDetails.isServiceProvider == "yes" ? "Service Provider" : "Customer"}
              </span>
              <br />
              <span className="w3-small">{`${day} ${month} ${year}`}</span>
            </p>
            <p className="w3-right w3-large mt-10">
              <a href="#" className="notification">
                <i className="fa fa-calendar w3-margin-right"></i>
                <span className="badge">1</span>
              </a>
              {/* <a href="#" className="notification">
                <i className="fa fa-envelope w3-margin-right"></i>
                <span className="badge">2</span>
              </a> */}
              <a href="#" className="notification">
                <i className="fa fa-bell w3-margin-right"></i>
                <span className="badge">3</span>
              </a>
            </p>
          </header>
        </div>
      </div>
    );
  }
}
