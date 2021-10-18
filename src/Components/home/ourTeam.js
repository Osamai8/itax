import React from "react";
function ourTeam(props) {
  return (
    <section className="light-skyblue-bg">
      <div className="expert_doctors_area doctor_page">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-title text-center">
                <h2>{props.teams.heading}</h2>
                <p></p>
              </div>
              {/* <!-- /.section-title --> */}
            </div>
          </div>
          <div className="row">
            {props.teams.data &&
              props.teams.data.map((each, key) => {
                return (
                  <div className="col-md-4 col-lg-4" key={key}>
                    <div className="single_expert">
                      <div className="expert_thumb">
                        <img src={each.image} alt="team" />
                      </div>
                      <div className="experts_name text-center">
                        <h3>{`${each.first_name} ${each.last_name}`}</h3>
                        <span>{each.team_qualification}</span>
                        <p>{each.description}</p>
                      </div>
                      <div className="social-links">
                        <ul className="team-social">
                          {each.facebook && (
                            <li>
                              <a
                                href={each.facebook}
                                className="facebook"
                                target="_blank"
                              >
                                <i className="fa fa-facebook"></i>
                              </a>
                            </li>
                          )}

                          {each.twitter &&(<li>
                            <a
                              href={each.twitter}
                              className="twitter"
                              target="_blank"
                            >
                              <i className="fa fa-twitter"></i>
                            </a>
                          </li>)}
                         {each.instagram &&( <li>
                            <a
                              href={each.instagram}
                              className="instagram"
                              target="_blank"
                            >
                              <i className="fa fa-instagram"></i>
                            </a>
                          </li>)}
                         {each.linkedin &&( <li>
                            <a
                              href={each.linkedin }
                              className="linkedin"
                              target="_blank"
                            >
                              <i className="fa fa-linkedin"></i>
                            </a>
                          </li>)}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            {/* <div className="col-md-4 col-lg-4">
              <div className="single_expert">
                <div className="expert_thumb">
                  <img src={teamImage} alt="team" />
                </div>
                <div className="experts_name text-center">
                  <h3>GAURAV BANSAL</h3>
                  <span>B.COM, FCA, DISA</span>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
                <div className="social-links">
                  <ul className="team-social">
                    <li>
                      <a
                        href="https://www.facebook.com/"
                        className="facebook"
                        target="_blank"
                      >
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twitter.com/"
                        className="twitter"
                        target="_blank"
                      >
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="http://instagram.com/"
                        className="instagram"
                        target="_blank"
                      >
                        <i className="fa fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/profile/"
                        className="linkedin"
                        target="_blank"
                      >
                        <i className="fa fa-linkedin"></i>
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
