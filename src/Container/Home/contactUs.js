import React, { Component } from "react";
import { connect } from "react-redux";
import Footer from "../../Common/footer";
import Header from "../../Common/header";
import NewsLetter from "../../Components/home/subscribeNewsletter";

function ContactUs(props) {
  return (
    <div>
      <Header />
      <div className="breadcrumbpane">
        <div className="container">
          <h1 className="pull-left"> Contact Us</h1>
        </div>
      </div>

      <section className="internalcontent">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-title text-center">
                <p>
                  Feel free to talk to our online representative at any time you
                  please using our Live Chat system on our website or one of the
                  below instant messaging programs.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="contactinfo" style={{ boxShadow: "none" }}>
                <h3>Contact info</h3>
                {props.contactDetails?.content && (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: props.contactDetails.content,
                    }}
                  />
                )}
                {/* <div className="contactinfopane clearfix">
                    <div className="leftcontactpane">
                      <i className="fa fa-home" aria-hidden="true"></i> Head Office:
                    </div>
                    <div className="rightcontactpane adr">
                    {props.contactDetails.}
                    </div>
                  </div>
                  <div className="contactinfopane clearfix">
                    <div className="leftcontactpane">
                      <i className="fa fa-home" aria-hidden="true"></i> Mumbai
                      Office:
                    </div>
                    <div className="rightcontactpane adr">
                      A-203, Keval Tower, Opp. SNDT Girls College, B J Patel
                      Marg, Malad West, Mumbai- 400 064
                    </div>
                  </div>
                  <div className="contactinfopane clearfix">
                    <div className="leftcontactpane">
                      <i className="fa fa-home" aria-hidden="true"></i> Singapore
                      Office:
                    </div>
                    <div className="rightcontactpane adr">
                      A-203, Keval Tower, Opp. SNDT Girls College, B J Patel
                      Marg, Malad West, Mumbai- 400 064
                    </div>
                  </div>
                  <div className="contactinfopane clearfix">
                    <div className="leftcontactpane">
                      <i className="fa fa-globe" aria-hidden="true"></i> Website:
                    </div>
                    <div className="rightcontactpane">
                      &nbsp; https://itaxdoctor.co.in
                    </div>
                  </div>
                  <div className="contactinfopane clearfix">
                    <div className="leftcontactpane">
                      <i className="fa fa-phone" aria-hidden="true"></i> Call Us:
                    </div>
                    <div className="rightcontactpane">
                      &nbsp; +91 9870201645 / +91 9987655194
                    </div>
                  </div>
                  <div className="contactinfopane clearfix">
                    <div className="leftcontactpane">
                      <i className="fa fa-envelope" aria-hidden="true"></i> Email:
                    </div>
                    <div className="rightcontactpane">
                      &nbsp; info@itaxdoctor.co.in
                    </div>
                  </div> */}
              </div>
              {/* <!-- <hr>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.8595725040977!2d72.82809960000003!3d18.937608900000008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d1de1c3f1dc9%3A0x88328bf32b9dcd66!2sSNDT+Women's+University!5e0!3m2!1sen!2sin!4v1443429933230" width="100%" height="250" frameborder="0" style="border:0" allowfullscreen=""></iframe> --> */}
            </div>
            <div class="col-md-6">
              <div class="contactinfo-placeholder">
                <h3>Contact Form</h3>
                <form id="sky-form" class="sky-form" method="POST" action="#">
                  <fieldset>
                    <input type="hidden" name="id" />
                    <div class="row">
                      <section class="col col-md-6">
                        <label class="input">
                          <p>Name</p>
                          <i style={{top:'18px'}}class="icon-append fa fa-user"></i>
                          <input type="text" name="name" />
                        </label>
                      </section>
                      <section class="col col-md-6">
                        <label class="input">
                          <p>Email</p>

                          <i style={{top:'18px'}}class="icon-append fa fa-envelope"></i>
                          <input type="text" name="email" />
                        </label>
                      </section>
                    </div>
                    <div class="row">
                      <section class="col col-md-12">
                        <label class="input">
                          <p>Mobile</p>
                          <i style={{top:'18px'}}class="icon-append fa fa-phone"></i>
                          <input type="text" name="mobile" />
                        </label>
                      </section>
                    </div>
                    <div class="row">
                      <section class="col col-md-12">
                        <label class="input">
                          <p>Subject</p>
                          <i style={{top:'18px'}}class="icon-append fa fa-tag"></i>
                          <input type="text" name="subject" />
                        </label>
                      </section>
                    </div>
                    <div class="row">
                      <section class="col col-md-12">
                        <label class="textarea">
                          <p>Message</p>
                          <i style={{top:'18px'}}class="icon-append fa fa-comment"></i>
                          <textarea name="info" rows="5"></textarea>
                        </label>
                      </section>
                    </div>
                    <div class="row" style={{textAlign: '-webkit-center'}}>
                      <button class="button col" type="submit">
                        Submit
                      </button>
                    </div>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <NewsLetter />
      <Footer />
    </div>
  );
}
export default connect((state, props) => {
  return {
    contactDetails: state.contactDetails,
  };
})(ContactUs);
