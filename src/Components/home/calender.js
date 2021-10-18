import Images from "../../images/index";
import { Link } from "react-router-dom";
export default function Calender(props) {
  return (
    <div className="col-xl-3 col-md-6 col-lg-3">
      <div className="single_department other-act">
        <div className="department_content">
          <h3>Calendar</h3>
          <div className="circle">
            <h2>
              <i
                onClick={() => props.changeYear(props.year - 1)}
                className="fa fa-angle-left"
              />{" "}
              {props.year}{" "}
              <i style={{cursor:"pointer"}}
                onClick={() => props.changeYear(props.year + 1)}
                className="fa fa-angle-right"
              />
            </h2>
            <Link to="calendar/1">
              <img
                className="jan"
                title="January"
                data-toggle="tooltip"
                id="jan"
                src={Images.jan}
              />
            </Link>
            <Link to="calendar/2/">
              <img
                className="feb"
                title="February"
                data-toggle="tooltip"
                id="feb"
                src={Images.feb}
              />
            </Link>
            <Link to="calendar/3">
              <img
                className="mar"
                title="March"
                data-toggle="tooltip"
                id="mar"
                src={Images.march}
              />
            </Link>
            <Link to="calendar/4">
              <img
                className="apr"
                title="April"
                data-toggle="tooltip"
                id="apr"
                src={Images.april}
              />
            </Link>
            <Link to="calendar/5">
              <img
                className="may"
                title="May"
                data-toggle="tooltip"
                id="may"
                src={Images.may}
              />
            </Link>
            <Link to="calendar/6">
              <img
                className="june"
                title="June"
                data-toggle="tooltip"
                id="june"
                src={Images.june}
              />
            </Link>
            <Link to="calendar/7">
              <img
                className="july"
                title="July"
                data-toggle="tooltip"
                id="july"
                src={Images.july}
              />
            </Link>
            <Link to="calendar/8">
              <img
                className="aug"
                title="August"
                data-toggle="tooltip"
                id="aug"
                src={Images.august}
              />
            </Link>
            <Link to="calendar/9">
              <img
                className="sept"
                title="September"
                data-toggle="tooltip"
                id="sept"
                src={Images.sept}
              />
            </Link>
            <Link to="calendar/10">
              <img
                className="oct"
                title="October"
                data-toggle="tooltip"
                id="oct"
                src={Images.oct}
              />
            </Link>
            <Link to="calendar/11">
              <img
                className="nov"
                title="November"
                data-toggle="tooltip"
                id="nov"
                src={Images.nov}
              />
            </Link>
            <Link to="calendar/12">
              <img
                className="dec"
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
