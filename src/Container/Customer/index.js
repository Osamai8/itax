import React, { Component } from "react";

export default class index extends Component {
  render() {
    return (
      <div>
        <nav
          id="mainNavigation"
          class="navbar navbar-fixed-top hidden-xs"
          role="navigation"
        >
          <div class="container-fluid">
            <div class="navbar-header">
              <button
                type="button"
                class="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target="#main-nav-collapse"
                aria-expanded="false"
              >
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>

              {/* <!-- navbar logo --> */}
              <div class="navbar-brand">
                <span class="sr-only"></span>
                <a href="../index.php">
                  <img
                    src="assets\img\logo.png"
                    class="img-responsive center-block logo"
                    alt="logo"
                  />
                </a>
              </div>
            </div>
            {/* <!-- /.navbar-header --> */}

            {/* <!-- nav links --> */}
            <div
              class="collapse navbar-collapse main-nav-collapse"
              id="main-nav-collapse"
            >
              <ul class="cont-detail logreg hidden-xs">
                <div class="socialtop">
                  <ul>
                    <li>
                      <a href="http://www.facebook.com" target="_new">
                        <i class="fa fa-facebook fb"></i>
                      </a>
                    </li>
                    <li>
                      <a href="http://www.twitter.com" target="_new">
                        <i class="fa fa-twitter twitt"></i>
                      </a>
                    </li>
                    <li>
                      <a href="http://www.linkedin.com" target="_new">
                        <i class="fa fa-linkedin in"></i>
                      </a>
                    </li>
                    <li>
                      <a href="http://www.googleplus.com" target="_new">
                        <i class="fa fa-google-plus plus"></i>
                      </a>
                    </li>
                    <li>
                      <a href="http://www.youtube.com" target="_new">
                        <i class="fa fa-youtube youtube"></i>
                      </a>
                    </li>
                    <li>
                      <a href="http://www.rss.com" target="_new">
                        <i class="fa fa-rss blog"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <li>
                  <a href="mailto:cavinitmangal@gmail.com">
                    <i class="fa fa-envelope"></i> cavinitmangal@gmail.com
                  </a>
                </li>
                &nbsp;
                <li>
                  <a href="tel:+919870201645">
                    <i class="fa fa-phone"></i> +91 9870201645
                  </a>
                </li>
                <li>
                  <a href="#" class="btn button">
                    {" "}
                    My Dashboard
                  </a>
                </li>
              </ul>
              <ul class="nav navbar-nav navbar-right text-uppercase">
                <li class="active">
                  <a href="../index.php">home</a>
                </li>
                <li>
                  <a href="../about-us.php">about us</a>
                </li>
                <li>
                  <a href="../services.php">Services</a>
                </li>
                <li>
                  <a href="#">Partners With Us</a>
                </li>
                <li>
                  <a href="../blog.php">Blog</a>
                </li>
                <li>
                  <a href="#">Career</a>
                </li>
                <li>
                  <a href="../contact-us.php">contact Us</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div class="w3-bar w3-top w3-black w3-large" style="z-index:4">
          <button
            class="w3-bar-item w3-button w3-hide-large w3-hover-none w3-hover-text-light-grey"
            onclick="w3_open();"
          >
            <i class="fa fa-bars"></i>  Menu
          </button>
          <span class="w3-bar-item w3-right">
            <a href="index.php">
              <img
                src="assets\img\logo.png"
                class="img-responsive center-block"
                alt="logo"
                style="height: 28px;background: #fff;margin:0;"
              />
            </a>
          </span>
        </div>

        <nav
          class="w3-sidebar w3-collapse w3-dark-green"
          style="z-index:3;width:260px;"
          id="mySidebar"
        >
          <br />
          <div class="w3-container w3-row">
            <div class="w3-col w3-large s12 w3-bar">
              <a href="dashboard.php">
                <b>
                  <i class="fa fa-dashboard"></i> My Dashboard
                </b>
              </a>
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
              href="my-profile.php"
              class="w3-bar-item w3-button w3-padding w3-yellow"
            >
              <i class="fa fa-users fa-fw"></i>  My Profile
            </a>
            <a
              href="manage-services.php"
              class="w3-bar-item w3-button w3-padding"
            >
              <i class="fa fa-eye fa-fw"></i>  Sevice Request
            </a>
            <a href="#" class="w3-bar-item w3-button w3-padding">
              <i class="fa fa-eye fa-fw"></i>  Meating Schedule
            </a>
            <a href="#" class="w3-bar-item w3-button w3-padding">
              <i class="fa fa-eye fa-fw"></i>  Report
            </a>

            <a href="#" class="w3-bar-item w3-button w3-padding">
              <i class="fa fa-bank fa-fw"></i>  Referal
            </a>
            <br />
            <br />
          </div>
        </nav>

        <div
          class="w3-overlay w3-hide-large w3-animate-opacity"
          onclick="w3_close()"
          style="cursor:pointer"
          title="close side menu"
          id="myOverlay"
        ></div>

        <div class="w3-main" style="margin-left:260px;margin-top:43px;">
          <header class="w3-container w3-xlarge w3-dark-green w3-padding">
            <p class="w3-left">
              <img
                src="assets/img/avatar2.png"
                class="w3-circle w3-margin-right"
                style="width:46px"
              />
            </p>
            <p class="w3-left w3-medium">
              <span>
                <strong>Priya</strong>, Customer
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
