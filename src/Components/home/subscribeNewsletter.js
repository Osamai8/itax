import React, { useEffect } from "react";
import newsletterImage from '../../images/newsletter-text.png'
import RestApi from "../../services/api";
function Newsletter() {
  useEffect(()=> {
   
  },[])
  return (
    <section class="newslettersubscription_pane">
      <div class="container">
        <div class="newsletter-section">
          <div class="newslettersection-left">
            <img src={newsletterImage} />
          </div>
          <div class="newslettersection-subcribeform">
            <p>
              Enter Your Name and Email Address To Receive All Tax And Finance
              Related News From Our Website
              <br />* Don't Worry You'll Not be Spammed
            </p>
            <div class="row">
              <div>
                {/* <!--<form method="post">--> */}
                <div class="col-md-4">
                  <input
                    type="text"
                    name="firstname"
                    id="firstname"
                    class="form-control inputpane"
                    placeholder="Enter Your Name"
                  />
                  <span
                    id="error"
                    class="error"
                    style={{ display: "none", color: "red" }}
                  >
                    Enter User Name
                  </span>
                </div>
                <div class="col-md-4">
                  <input
                    type="text"
                    name="emailaddress"
                    id="emailaddress"
                    class="form-control inputpane"
                    placeholder="Enter Your Email Address"
                  />
                  <span
                    id="err"
                    class="error"
                    style={{ display: "none", color: "red" }}
                  >
                    Enter email address
                  </span>
                </div>
                <div class="col-md-4">
                  <button
                    class="button newsletter no-pip"
                    name="newsletter"
                    id="newsletter"
                  >
                    Subscribe Newsletter
                    <span>
                      <i class="fa fa-envelope-o"></i>
                    </span>
                  </button>
                </div>
                {/* <!--</form>--> */}
              </div>
            </div>
          </div>
          <div class="clearfix"></div>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
