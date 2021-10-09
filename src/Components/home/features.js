import React, { useState, useEffect } from "react";
import RestApi from "../../services/api";
import Images from "../../images/index";
import { Link } from "react-router-dom";
import Marquee from "react-easy-marquee";
export function Calender(props) {
  const [year, setYear] = useState(new Date().getFullYear());
  console.log(year)
    return (
      <div class="col-xl-3 col-md-6 col-lg-3">
        <div class="single_department other-act">
          <div class="department_content">
            <h3>Calendar</h3>
            <div class="circle">
              <h2>
                <i
                  onClick={() => setYear(year - 1)}
                  class="fa fa-angle-left"
                />{" "}
                {year}{" "}
                <i style={{cursor:"pointer"}}
                  onClick={() => setYear(year + 1)}
                  class="fa fa-angle-right"
                />
              </h2>
              <Link to={`calendar/1/${year}`}>
                <img
                  class="jan"
                  title="January"
                  data-toggle="tooltip"
                  id="jan"
                  src={Images.jan}
                />
              </Link>
              <Link to={`calendar/2/${year}`}>
                <img
                  class="feb"
                  title="February"
                  data-toggle="tooltip"
                  id="feb"
                  src={Images.feb}
                />
              </Link>
              <Link to={`calendar/3/${year}`}>
                <img
                  class="mar"
                  title="March"
                  data-toggle="tooltip"
                  id="mar"
                  src={Images.march}
                />
              </Link>
              <Link to={`calendar/4/${year}`}>
                <img
                  class="apr"
                  title="April"
                  data-toggle="tooltip"
                  id="apr"
                  src={Images.april}
                />
              </Link>
              <Link to={`calendar/5/${year}`}>
                <img
                  class="may"
                  title="May"
                  data-toggle="tooltip"
                  id="may"
                  src={Images.may}
                />
              </Link>
              <Link to={`calendar/6/${year}`}>
                <img
                  class="june"
                  title="June"
                  data-toggle="tooltip"
                  id="june"
                  src={Images.june}
                />
              </Link>
              <Link to={`calendar/7/${year}`}>
                <img
                  class="july"
                  title="July"
                  data-toggle="tooltip"
                  id="july"
                  src={Images.july}
                />
              </Link>
              <Link to={`calendar/8/${year}`}>
                <img
                  class="aug"
                  title="August"
                  data-toggle="tooltip"
                  id="aug"
                  src={Images.august}
                />
              </Link>
              <Link to={`calendar/9/${year}`}>
                <img
                  class="sept"
                  title="September"
                  data-toggle="tooltip"
                  id="sept"
                  src={Images.sept}
                />
              </Link>
              <Link to={`calendar/10/${year}`}>
                <img
                  class="oct"
                  title="October"
                  data-toggle="tooltip"
                  id="oct"
                  src={Images.oct}
                />
              </Link>
              <Link to={`calendar/11/${year}`}>
                <img
                  class="nov"
                  title="November"
                  data-toggle="tooltip"
                  id="nov"
                  src={Images.nov}
                />
              </Link>
              <Link to={`calendar/12/${year}`}>
                <img
                  class="dec"
                  title="December"
                  data-toggle="tooltip"
                  id="dec"
                  src={Images.dec}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
export function Events() {
  const [data, setData] = useState({ upComing: [], previous: [] });
  useEffect(() => {
    RestApi.events().then((res) => {
      console.log("events: ", res);
      if (res.data.status) {
        setData({ upComing: res.data.data.upcoming, previous: res.data.data.previous });
      }
    });
  }, []);
  console.log("data",data)
  return (
    <div className="col-xl-3 col-md-6 col-lg-3">
      <div className="single_department other-act">
        <div className="department_content">
          <h3>Events</h3>
          <p>
            <div className="events">
              <marquee
              style={{height: '240px'}}
                behavior="scroll"
                direction="up"
                scrolldelay="200"
                onmouseover="stop()"
                onmouseout="start()"
              >
                { data.upComing?.length > 0 && <><h3>UPCOMING EVENTS</h3>
                <ul>
                  { data.upComing.map((each) => {
                    return (
                      <li>
                        <Link to={`event-details/${each.id}`}>
                          {" "}
                          <div
                      dangerouslySetInnerHTML={{
                        __html: each.description,
                      }}
                    />
                        </Link>
                      </li>
                    );
                  })}
                </ul></>}
                {data.previous?.length > 0 && <><h3>PREVIOUS EVENTS</h3>
                <ul>
                  { data.previous.map((each) => {
                    return (
                      <li>
                        <Link to={`event-details/${each.id}`}>
                        <div
                      dangerouslySetInnerHTML={{
                        __html: each.description,
                      }}
                    />
                        </Link>
                      </li>
                    );
                  })}
                </ul></>}
              </marquee>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
}

export function DownloadForm() {
    return (
        <div className="col-xl-3 col-md-6 col-lg-3">
                  <div className="single_department other-act">
                    <div className="department_content">
                      <h3>Downloads</h3>
                      <p>
                        <div className="downloadform">
                          <ul>
                            <a href="#">
                              <Link to="/download_form">
                                {" "}
                                <li>
                                  {" "}
                                  <i className="fa fa-buysellads"></i>Form{" "}
                                </li>
                              </Link>
                            </a>
                            <a href="#">
                              <li>
                                <i className="fa fa-question-circle"></i>FAQ
                              </li>
                            </a>
                            <a href="#">
                              {" "}
                              <Link to="/newsletters">
                                <li>
                                  <i className="fa fa-envelope"></i>Newsletter
                                </li>
                              </Link>
                            </a>
                            <a href="#">
                              <Link to="/videos">
                                {" "}
                                <li>
                                  <i className="fa fa-file-video-o"></i>Videos
                                </li>
                              </Link>
                            </a>
                          </ul>
                        </div>
                      </p>
                    </div>
                  </div>
                </div>
    )
}


// export default features