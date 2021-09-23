import React from "react";
import teamImage from "../../images/team/team1.jpg";
function ourTeam(props) {
  return (
    <section class="light-skyblue-bg">
      <div class="expert_doctors_area doctor_page">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="section-title text-center">
                <h2>Our Team</h2>
                <p></p>
              </div>
              {/* <!-- /.section-title --> */}
            </div>
          </div>
          <div class="row">
            {props.teams.map((each, key) => {
              return (
                <div class="col-md-4 col-lg-4">
                  <div class="single_expert">
                    <div class="expert_thumb">
                      <img src={each.image} alt="team" />
                    </div>
                    <div class="experts_name text-center">
                      <h3>{`${each.first_name} ${each.last_name}`}</h3>
                      <span>{each.team_qualification}</span>
                      <p>
                       {each.description}
                      </p>
                    </div>
                    <div class="social-links">
                      <ul class="team-social">
                        <li>
                          <a
                            href="https://www.facebook.com/"
                            class="facebook"
                            target="_blank"
                          >
                            <i class="fa fa-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://twitter.com/"
                            class="twitter"
                            target="_blank"
                          >
                            <i class="fa fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="http://instagram.com/"
                            class="instagram"
                            target="_blank"
                          >
                            <i class="fa fa-instagram"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.linkedin.com/profile/"
                            class="linkedin"
                            target="_blank"
                          >
                            <i class="fa fa-linkedin"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
            {/* <div class="col-md-4 col-lg-4">
              <div class="single_expert">
                <div class="expert_thumb">
                  <img src={teamImage} alt="team" />
                </div>
                <div class="experts_name text-center">
                  <h3>GAURAV BANSAL</h3>
                  <span>B.COM, FCA, DISA</span>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
                <div class="social-links">
                  <ul class="team-social">
                    <li>
                      <a
                        href="https://www.facebook.com/"
                        class="facebook"
                        target="_blank"
                      >
                        <i class="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twitter.com/"
                        class="twitter"
                        target="_blank"
                      >
                        <i class="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="http://instagram.com/"
                        class="instagram"
                        target="_blank"
                      >
                        <i class="fa fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/profile/"
                        class="linkedin"
                        target="_blank"
                      >
                        <i class="fa fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ourTeam;
