import Images from "../../images/index";
export default function Calender () {
    return (
      <div class="col-xl-3 col-md-6 col-lg-3">
        <div class="single_department other-act">
          <div class="department_content">
            <h3>Calendar</h3>
            <div class="circle">
              <h2>2021</h2>
              <a href="#">
                <img
                  class="jan"
                  title="January"
                  data-toggle="tooltip"
                  id="jan"
                  src={Images.jan}
                />
              </a>
              <a href="#">
                <img
                  class="feb"
                  title="February"
                  data-toggle="tooltip"
                  id="feb"
                  src={Images.feb}
                />
              </a>
              <a href="#">
                <img
                  class="mar"
                  title="March"
                  data-toggle="tooltip"
                  id="mar"
                  src={Images.march}
                />
              </a>
              <a href="#">
                <img
                  class="apr"
                  title="April"
                  data-toggle="tooltip"
                  id="apr"
                  src={Images.april}
                />
              </a>
              <a href="#">
                <img
                  class="may"
                  title="May"
                  data-toggle="tooltip"
                  id="may"
                  src={Images.may}
                />
              </a>
              <a href="#">
                <img
                  class="june"
                  title="June"
                  data-toggle="tooltip"
                  id="june"
                  src={Images.june}
                />
              </a>
              <a href="#">
                <img
                  class="july"
                  title="July"
                  data-toggle="tooltip"
                  id="july"
                  src={Images.july}
                />
              </a>
              <a href="#">
                <img
                  class="aug"
                  title="August"
                  data-toggle="tooltip"
                  id="aug"
                  src={Images.august}
                />
              </a>
              <a href="#">
                <img
                  class="sept"
                  title="September"
                  data-toggle="tooltip"
                  id="sept"
                  src={Images.sept}
                />
              </a>
              <a href="#">
                <img
                  class="oct"
                  title="October"
                  data-toggle="tooltip"
                  id="oct"
                  src={Images.oct}
                />
              </a>
              <a href="#">
                <img
                  class="nov"
                  title="November"
                  data-toggle="tooltip"
                  id="nov"
                  src={Images.nov}
                />
              </a>
              <a href="#">
                <img
                  class="dec"
                  title="December"
                  data-toggle="tooltip"
                  id="dec"
                  src={Images.dec}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };