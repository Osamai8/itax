import React, { Component } from 'react'
import avatar2 from "../images/avatar2.png";
import { Link } from 'react-router-dom';

export default class sideBar extends Component {
    constructor (props) {
        super(props)
        this.state = {
            drawerSwitch : false
        } 
    }
    

    handleSidebar () {
        this.setState({
            drawerSwitch: !this.state.drawerSwitch
        })
    }

    render() {
        console.log(this.props)
       const styles = {
           sideBarMenu : {
            zIndex: "3", 
            width: "260px" ,
            display : this.state.drawerSwitch == true ? 'block':'none',
           }
       }
        return (
            <div>
                <nav
          class="w3-sidebar w3-collapse w3-dark-green"
          style={{ zIndex: "3", width: "260px" }}
          id="mySidebar"
        >
          <br />
          <div class="w3-container w3-row">
            <div class="w3-col w3-large s12 w3-bar">
              <Link to="/customer/dashboard">
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
              onclick={this.handleSidebar}
              title="close menu"
            >
              <i class="fa fa-remove fa-fw"></i>  Close Menu
            </a>
            <Link
              to="/customer/my-profile"
              class="w3-bar-item w3-button w3-padding w3-yellow"
            >
              <i class="fa fa-users fa-fw"></i>  My Profile
            </Link>
            <Link
              to="/customer/manage-services"
              class="w3-bar-item w3-button w3-padding"
            >
              <i class="fa fa-eye fa-fw"></i>  Sevice Request
            </Link>
            <Link to="#" class="w3-bar-item w3-button w3-padding">
              <i class="fa fa-eye fa-fw"></i>  Meating Schedule
            </Link>
            <Link to="#" class="w3-bar-item w3-button w3-padding">
              <i class="fa fa-eye fa-fw"></i>  Report
            </Link>
            
            <Link to="#" class="w3-bar-item w3-button w3-padding">
              <i class="fa fa-bank fa-fw"></i>  Referal
            </Link>
            <br />
            <br />
          </div>
        </nav>

        {/* <!-- Overlay effect when opening sidebar on small screens --> */}
        <div
          class="w3-overlay w3-hide-large w3-animate-opacity"
          onclick={this.handleSidebar}
          style={{ cursor: "pointer" }}
          title="close side menu"
          id="myOverlay"
        ></div>

        {/* <!-- !PAGE CONTENT! --> */}
        <div class="w3-main" style={{ marginLeft: "260px", marginTop: "43px" }}>
          {/* <!-- Header --> */}
          <header class="w3-container w3-xlarge w3-dark-green w3-padding">
            <p class="w3-left">
              <img
                src={avatar2 }
                class="w3-circle w3-margin-right"
                style={{ width: "46px" }}
              />
            </p>
            <p class="w3-left w3-medium">
              <span>
                <strong>{this.props.user && this.props.user.first_name}</strong>,
                 {this.props.user && this.props.user.is_customer == 'yes' ? ' Customer':''}
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
        )
    }
}
