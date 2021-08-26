import React, { Component } from "react";
import {Link } from 'react-router-dom'
export default class partnerSideBar extends Component {
  render() {
    return (
      <div>
        <nav
          class="w3-sidebar w3-collapse w3-dark-green"
          style={{zIndex:'3',width:"260px"}}
          id="mySidebar"
        >
          <br />
          <div class="w3-container w3-row">
            <div class="w3-col w3-large s12 w3-bar">
              <Link to="/dashboard">
                <b>
                  <i class="fa fa-dashboard"></i> My Dashboard
                </b>
              </Link>
            </div>
          </div>
          <hr />
          <div class="w3-bar-block w3-medium">
            <a
              href="#"
              class="w3-bar-item w3-button w3-padding-16 w3-hide-large w3-dark-grey w3-hover-black"
              onclick="w3_close()"
              title="close menu"
            >
              <i class="fa fa-remove fa-fw"></i>  Close Menu
            </a>
            <a
              href="#"
              class="w3-bar-item w3-button w3-padding w3-yellow"
            >
              <i class="fa fa-users fa-fw"></i>  My Profile
            </a>
            <a
              onclick="myFunc1()"
              href="javascript:void(0)"
              class="w3-bar-item w3-button w3-padding w3-block w3-left-align"
              id="myService"
            >
              <i class="fa fa-eye fa-fw"></i>  Sevices{" "}
              <i class="fa fa-caret-down"></i>
            </a>
            <div
              id="demoDrop1"
              class="w3-bar-block w3-hide w3-padding-large w3-small"
            >
              <a href="#" class="w3-bar-item w3-button">
                <i class="fa fa-caret-right"></i> Manage Sevices
              </a>
              <a href="#" class="w3-bar-item w3-button">
                <i class="fa fa-caret-right"></i> Closed Sevices
              </a>
            </div>
            <a
              onclick="myFunc2()"
              href="javascript:void(0)"
              class="w3-bar-item w3-button w3-padding w3-block w3-left-align"
              id="myMeeting"
            >
              <i class="fa fa-eye fa-fw"></i>  Meetings{" "}
              <i class="fa fa-caret-down"></i>
            </a>
            <div
              id="demoDrop2"
              class="w3-bar-block w3-hide w3-padding-large w3-small"
            >
              <a href="#" class="w3-bar-item w3-button">
                <i class="fa fa-caret-right"></i> New Meetings
              </a>
              <a href="#" class="w3-bar-item w3-button">
                <i class="fa fa-caret-right"></i> Meeting Schedule
              </a>
            </div>
            <a
              onclick="myFunc3()"
              href="javascript:void(0)"
              class="w3-bar-item w3-button w3-padding w3-block w3-left-align"
              id="myMgmt"
            >
              <i class="fa fa-eye fa-fw"></i>  Management{" "}
              <i class="fa fa-caret-down"></i>
            </a>
            <div
              id="demoDrop3"
              class="w3-bar-block w3-hide w3-padding-large w3-small"
            >
              <a href="#" class="w3-bar-item w3-button">
                <i class="fa fa-caret-right"></i> Invoice
              </a>
              <a href="#" class="w3-bar-item w3-button">
                <i class="fa fa-caret-right"></i> T & C | N D A
              </a>
            </div>
            <a
              onclick="myFunc4()"
              href="javascript:void(0)"
              class="w3-bar-item w3-button w3-padding w3-block w3-left-align"
              id="myReport"
            >
              <i class="fa fa-eye fa-fw"></i>  Report{" "}
              <i class="fa fa-caret-down"></i>
            </a>
            <div
              id="demoDrop4"
              class="w3-bar-block w3-hide w3-padding-large w3-small"
            >
              <a href="#" class="w3-bar-item w3-button">
                <i class="fa fa-caret-right"></i> Ledger
              </a>
            </div>
            <a
              onclick="myFunc5()"
              href="javascript:void(0)"
              class="w3-bar-item w3-button w3-padding w3-block w3-left-align"
              id="myBlog"
            >
              <i class="fa fa-eye fa-fw"></i>  Blogs{" "}
              <i class="fa fa-caret-down"></i>
            </a>
            <div
              id="demoDrop5"
              class="w3-bar-block w3-hide w3-padding-large w3-small"
            >
              <a href="#" class="w3-bar-item w3-button">
                <i class="fa fa-caret-right"></i> New Blogs
              </a>
              <a href="#" class="w3-bar-item w3-button">
                <i class="fa fa-caret-right"></i> Manage Blogs
              </a>
              <a href="#" class="w3-bar-item w3-button">
                <i class="fa fa-caret-right"></i> Published Blogs
              </a>
            </div>
            <a href="#" class="w3-bar-item w3-button w3-padding">
              <i class="fa fa-bank fa-fw"></i>  Referal
            </a>
            <br />
            <br />
          </div>
        </nav>

        {/* <!-- Overlay effect when opening sidebar on small screens --> */}
        <div
          class="w3-overlay w3-hide-large w3-animate-opacity"
          onclick="w3_close()"
          style={{cursor:"pointer"}}
          title="close side menu"
          id="myOverlay"
        ></div>

        {/* <!-- !PAGE CONTENT! --> */}
        <div class="w3-main" style={{marginLeft:"260px",marginTop:"43px"}}>
          {/* <!-- Header --> */}
          <header class="w3-container w3-xlarge w3-dark-green w3-padding">
            <p class="w3-left">
              <img
                src="assets/img/avatar2.png"
                class="w3-circle w3-margin-right"
                style={{width:"46px"}}
              />
            </p>
            <p class="w3-left w3-medium">
              <span>
                <strong>Priya</strong>, Service Provider
              </span>
              <br />
              <span class="w3-small">Friday 09th july 2021</span>
            </p>
            <p class="w3-right w3-large mt-10">
              <a href="#" class="notification">
                <i class="fa fa-calendar w3-margin-right"></i>
                <span class="badge">1</span>
              </a>
              <a href="#" class="notification">
                <i class="fa fa-envelope w3-margin-right"></i>
                <span class="badge">2</span>
              </a>
              <a href="#" class="notification">
                <i class="fa fa-bell w3-margin-right"></i>
                <span class="badge">3</span>
              </a>
            </p>
          </header>
        </div>
      </div>
    );
  }
}
