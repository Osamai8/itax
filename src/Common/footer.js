import React, { useEffect } from "react";
import accuredImage from "../images/accurecode.jpg"
import {Link} from 'react-router-dom'
function Footer() {
  useEffect(()=> {
    window.scrollTo(0, 0)
  },[])
  return (
    <div>
      <footer class="footer">
        <div class="footer_top">
          <div class="container">
            <div class="row">
              <div class="col-xl-4 col-md-6 col-lg-4">
                <div class="footer_widget">
                  <h3 class="footer_title">
                    Explore Our <span>Services</span>
                  </h3>
                  <ul>
                    <li>
                      <a href="#">Business Startup Services</a>
                    </li>
                    <li>
                      <a href="#">Corporate Advisory</a>
                    </li>
                    <li>
                      <a href="#">Financial Funding and Debt Management</a>
                    </li>
                    <li>
                      <a href="#">Outsourcing Services</a>
                    </li>
                    <li>
                      <a href="#">Foreign Company Setup in India</a>
                    </li>
                    <li>
                      <a href="#">Income tax Advisory</a>
                    </li>
                    <li>
                      <a href="#">Non Residents / International Taxation</a>
                    </li>
                    <li>
                      <a href="#">FEMA and FERA Advisory</a>
                    </li>
                    <li>
                      <a href="#">Investment / Financial Planning</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-xl-4 col-md-6 col-lg-4">
                <div class="footer_widget">
                  <h3 class="footer_title">
                    <br />
                  </h3>
                  <ul>
                    <li>
                      <a href="#">Due Diligence and Forensic Investigation</a>
                    </li>
                    <li>
                      <a href="#">Valuations</a>
                    </li>
                    <li>
                      <a href="#">Legal Advisory Services</a>
                    </li>
                    <li>
                      <a href="#">
                        Income tax return filing and other compliance
                      </a>
                    </li>
                    <li>
                      <a href="#">NGO and Trust – Formation and Consultancy</a>
                    </li>
                    <li>
                      <a href="#">Registration under Statutory Bodies</a>
                    </li>
                    <li>
                      <a href="#">
                        Return filing under Statutory Laws and Compliances
                      </a>
                    </li>
                    <li>
                      <a href="#">Small and Medium Enterprises</a>
                    </li>
                    <li>
                      <a href="#">Non Banking Financial Company</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-xl-2 col-md-6 col-lg-2">
                <div class="footer_widget">
                  <h3 class="footer_title">
                    Useful <span>Links</span>
                  </h3>
                  <ul>
                    <li>
                    <Link to="/about">About Us</Link>
                    </li>
                    <li>
                    <Link to="/services">Services</Link>
                    </li>
                    <li>
                    <Link to="/partner_with_us">Partners With Us</Link>
                    </li>
                    <li>
                    <Link to="/blog">Blog</Link>
                    </li>
                    <li>
                    <Link to="/career">Career</Link>
                    </li>
                    <li>
                       <Link to="/contact">Contact Us</Link>
                    </li>
                    <li>
                      <Link to="term_condition">Terms and Conditions</Link>
                    </li>
                    <li>
                      <Link to="privacy_policy">Privacy Policy</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-xl-2 col-md-6 col-lg-2">
                <div class="footer_widget">
                  <h3 class="footer_title">
                    <br />
                  </h3>
                  <div class="footer_logo text-right">
                    <a href="#">
                      <img src={accuredImage} alt="accurecode" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div class="footer-area-bottom">
        <div class="container">
          <div class="row">
            <div class="col-md-12 col-sm-12 col-xs-12">
              <div class="copyright text-center">
                <p>
                  <strong>Copyright</strong>&nbsp; © 2021 All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
