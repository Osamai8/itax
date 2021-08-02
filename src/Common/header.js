import React from "react";
import logo from '../images/logo.png'
function Header() {
  return (
    //  site-navigation start
    <nav id="mainNavigation" class="navbar navbar-fixed-top" role="navigation">
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

          {/*  navbar logo  */}
          <div class="navbar-brand">
            <span class="sr-only"></span>
            <a href="index.php">
              <img
                src={logo}
                class="img-responsive center-block logo"
                alt="logo"
              />
            </a>
          </div>
        </div>
        {/*  /.navbar-header  */}

        {/*  nav links  */}
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
              <a href="user_login.php" class="btn button">
                <i class="fa fa-user" aria-hidden="true"></i> Login
              </a>
            </li>
            {/* <li><a href="#" class="btn btn-success"><i class="fa fa-file-text" aria-hidden="true"></i> Register</a></li> */}
          </ul>
          <ul class="nav navbar-nav navbar-right text-uppercase">
            <li class="active">
              <a href="index.php">home</a>
            </li>
            <li>
              <a href="about-us.php">about us</a>
            </li>
            <li>
              <a href="services.php">Services</a>
            </li>
            <li>
              <a href="partner_with_us.php">Partners With Us</a>
            </li>
            {/* <li class="dropdown" id="consultancy_tab">
              <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                {" "}
                Services
                <span class="caret"></span>
              </a>
              <ul class="dropdown-menu">
                <li class="dropdown-submenu">
                  <a href="#">Service 1</a>
                  <a href="#">Service 2</a>
                  <a href="#">Service 3</a>
                  <a href="#">Service 4</a>
                </li>
              </ul>
            </li> */}
            <li>
              <a href="blog.php">Blog</a>
            </li>
            <li>
              <a href="career_with_us.php">Career</a>
            </li>
            <li>
              <a href="contact-us.php">contact Us</a>
            </li>
          </ul>
        </div>
        {/*  nav links  */}
      </div>
      {/*  /.container  */}
    </nav>
  );
}

export default Header;
