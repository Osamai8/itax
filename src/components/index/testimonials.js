import React from "react";
import testimonialsImage from "../../images/clients/testimonial-img.png";
function testimonials() {
  return (
    <section class="clienttestimonialspane" id="clients">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="section-title text-center">
              <h2>
                Client <span>Testimonials</span>
              </h2>
              <p>
                We provide a variety of services to our clients which make us a
                one stop financial solution under one roof for our clients. The
                range of services which are provided by us are as under:{" "}
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="testimonials-v4">
            <div class="testimonials-v4-in">
              "The New School offers more than 135 undergraduate and graduate
              degrees, minors, certificates, and continuing education programs.
              Use the filters below to find the program that's right for you."
            </div>
            <img src={testimonialsImage} />
            <span class="testimonials-author">
              Ajayraj
              <br />
              <em>
                2015-11-01
                <br />
              </em>
            </span>
          </div>
        </div>

        <div class="col-md-4">
          <div class="testimonials-v4">
            <div class="testimonials-v4-in">
              "New contact us page. latest information. New contact us page.
              latest information. New contact us page. latest information. New
              contact us page. latest information."
            </div>
            <img src={testimonialsImage} />
            <span class="testimonials-author">
              Ajayraj
              <br />
              <em>
                2015-11-25
                <br />
              </em>
            </span>
          </div>
        </div>

        <div class="col-md-4">
          <div class="testimonials-v4">
            <div class="testimonials-v4-in">
              "Garima Gupta, B.Com, FCA, is a member of Institute of Chartered
              Accountants of India (ICAI) since 2003..."
            </div>
            <img src={testimonialsImage} />
            <span class="testimonials-author">
              GARIMA GUPTA <br />
              <em>
                2015-10-23
                <br />
              </em>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default testimonials;
