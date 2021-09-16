import React from "react";
import logo from '../images/logo.png'
import {Link} from 'react-router-dom'
function Header(props) {
  console.log("header: ",props)
  
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
            <Link to='/'>
              <img
                src={logo}
                class="img-responsive center-block logo"
                alt="logo"
              />
            </Link>
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
                {props.socialIcons && props.socialIcons.facebook && 
                <li>
                  <a href={props.socialIcons.facebook} target="_new">
                    <i class="fa fa-facebook fb"></i>
                  </a>
                </li> }
                
               { props.socialIcons && props.socialIcons.twitter && <li>
                  <a href={props.socialIcons.twitter} target="_new">
                    <i class="fa fa-twitter twitt"></i>
                  </a>
                </li>}
                { props.socialIcons && props.socialIcons.linkedin && <li>
                  <a href={props.socialIcons.linkedin} target="_new">
                    <i class="fa fa-linkedin in"></i>
                  </a>
                </li>}
                {props.socialIcons &&  props.socialIcons.google_plus && <li>
                  <a href={props.socialIcons.google_plus} target="_new">
                    <i class="fa fa-google-plus plus"></i>
                  </a>
                </li>}
                { props.socialIcons && props.socialIcons.youtube && <li>
                  <a href={props.socialIcons.youtube} target="_new">
                    <i class="fa fa-youtube youtube"></i>
                  </a>
                </li>}
                {props.socialIcons && props.socialIcons.rss &&  <li>
                  <a href={props.socialIcons.rss} target="_new">
                    <i class="fa fa-rss blog"></i>
                  </a>
                </li>}
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
              <Link to="/user_login" class="btn button">
                <i class="fa fa-user" aria-hidden="true"></i> Login
              </Link>
            </li>
            {/* <li><a href="#" class="btn btn-success"><i class="fa fa-file-text" aria-hidden="true"></i> Register</a></li> */}
          </ul>
          <ul class="nav navbar-nav navbar-right text-uppercase">
            <li class="active">
              <Link to='/'>home</Link>
              {/* <a href="/"></a> */}
            </li>
            <li>
              <Link to="/about">about us</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/partner_with_us">Partners With Us</Link>
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
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/career_with_us">Career</Link>
            </li>
            <li>
              <Link to="/contact-us">contact Us</Link>
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
