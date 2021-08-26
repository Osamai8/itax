import React from "react";
import accuredImage from "../images/accurecode.jpg"
function Footer() {
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
                      <a href="#">About Us</a>
                    </li>
                    <li>
                      <a href="#">Services</a>
                    </li>
                    <li>
                      <a href="#">Partners With Us</a>
                    </li>
                    <li>
                      <a href="#">Blog</a>
                    </li>
                    <li>
                      <a href="#">Career</a>
                    </li>
                    <li>
                      <a href="#">Contact Us</a>
                    </li>
                    <li>
                      <a href="#">Terms and Conditions</a>
                    </li>
                    <li>
                      <a href="#">Privacy Policy</a>
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
