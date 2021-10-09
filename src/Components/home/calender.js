import Images from "../../images/index";
import { Link } from "react-router-dom";
export default function Calender(props) {
  return (
    <div class="col-xl-3 col-md-6 col-lg-3">
      <div class="single_department other-act">
        <div class="department_content">
          <h3>Calendar</h3>
          <div class="circle">
            <h2>
              <i
                onClick={() => props.changeYear(props.year - 1)}
                class="fa fa-angle-left"
              />{" "}
              {props.year}{" "}
              <i style={{cursor:"pointer"}}
                onClick={() => props.changeYear(props.year + 1)}
                class="fa fa-angle-right"
              />
            </h2>
            <Link to="calendar/1">
              <img
                class="jan"
                title="January"
                data-toggle="tooltip"
                id="jan"
                src={Images.jan}
              />
            </Link>
            <Link to="calendar/2/">
              <img
                class="feb"
                title="February"
                data-toggle="tooltip"
                id="feb"
                src={Images.feb}
              />
            </Link>
            <Link to="calendar/3">
              <img
                class="mar"
                title="March"
                data-toggle="tooltip"
                id="mar"
                src={Images.march}
              />
            </Link>
            <Link to="calendar/4">
              <img
                class="apr"
                title="April"
                data-toggle="tooltip"
                id="apr"
                src={Images.april}
              />
            </Link>
            <Link to="calendar/5">
              <img
                class="may"
                title="May"
                data-toggle="tooltip"
                id="may"
                src={Images.may}
              />
            </Link>
            <Link to="calendar/6">
              <img
                class="june"
                title="June"
                data-toggle="tooltip"
                id="june"
                src={Images.june}
              />
            </Link>
            <Link to="calendar/7">
              <img
                class="july"
                title="July"
                data-toggle="tooltip"
                id="july"
                src={Images.july}
              />
            </Link>
            <Link to="calendar/8">
              <img
                class="aug"
                title="August"
                data-toggle="tooltip"
                id="aug"
                src={Images.august}
              />
            </Link>
            <Link to="calendar/9">
              <img
                class="sept"
                title="September"
                data-toggle="tooltip"
                id="sept"
                src={Images.sept}
              />
            </Link>
            <Link to="calendar/10">
              <img
                class="oct"
                title="October"
                data-toggle="tooltip"
                id="oct"
                src={Images.oct}
              />
            </Link>
            <Link to="calendar/11">
              <img
                class="nov"
                title="November"
                data-toggle="tooltip"
                id="nov"
                src={Images.nov}
              />
            </Link>
            <Link to="calendar/12">
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
