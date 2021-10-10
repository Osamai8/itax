import React, { Component } from "react";
import RestApi from "../../services/api";

export default class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      placeholder: {},
    };
  }
  componentDidMount() {
    this.fetchData();
    this.placeHolderAPI();
  }
  placeHolderAPI() {
    RestApi.placeholder("calendar").then((res) => {
      console.log("placeHolder: calendar: ", res);
      this.setState({ placeholder: res.data.data });
    });
  }
  fetchData() {
    let month = this.props.match.params.month;
    let year = this.props.match.params.year;
    if (month && year) {
      RestApi.calendar(month, year).then((res) => {
        console.log("calender: ", res);
        if (res.data.status) {
          this.setState({
            data: res.data.data,
          });
        }
      });
    }
  }
  render() {
    let { month, year } = this.props.match.params;
    let date = new Date(year, month - 1);
    month = date.toLocaleString("en-us", {
      month: "long",
    });
    return (
      <>
        <div class="breadcrumbpane">
          <div class="container">
            <h1 class="pull-left">CALENDAR</h1>
          </div>
        </div>
        <section>
          <div class="container">
            <div class="row">
              <div class="col-md-12 section-title">
                <h2>
                  Schedule for the month -{" "}
                  {month?.toLocaleString("en-us", {
                    month: "short",
                  })}{" "}
                  {year}
                </h2>
              </div>
            </div>
            <div class="row">
              <div class="col-md-8">
                {this.state.data.length > 0 ? (
                  <table class="table form-border text-center">
                    <tbody>
                      <tr class="job-summary">
                        <td width="8%" class="cal-right-wht">
                          Sr. No.
                        </td>
                        <td width="12%" class="cal-right-wht">
                          Due Date
                        </td>
                        <td width="20%" class="cal-right-wht">
                          Law
                        </td>
                        <td width="40%">Description</td>
                      </tr>
                      {this.state.data.map((each, key) => {
                        return (
                          <tr key={key} class="passed_date">
                            <td class="cal-right">{++key}</td>
                            <td class="cal-header">{each.schedule_date}</td>
                            <td class="cal-header cal-border">
                              {each.display_name}
                            </td>
                            <td class="cal-header">{each.description}</td>
                          </tr>
                        );
                      })}
                      {/* <tr class="passed_date">
                      <td class="cal-right">2</td>
                      <td class="cal-header">15.01.2021</td>
                      <td class="cal-header cal-border">xxxxxx</td>
                      <td class="cal-header">xxxxxx</td>
                    </tr> */}
                    </tbody>
                  </table>
                ) : (
                  <h4>No Data Available</h4>
                )}
              </div>
              {this.state.placeholder?.image && (
                <div class="col-md-4">
                  <div class="blog_right_sidebar text-justify">
                    <aside class="single_sidebar_widget">
                      <img
                        src={this.state.placeholder.image}
                        style={{ width: "100%" }}
                      />
                      {this.state.placeholder?.header && (
                        <h4 class="place_title">
                          {this.state.placeholder.header}
                        </h4>
                      )}
                      <div
                        dangerouslySetInnerHTML={{
                          __html: this.state.placeholder.description,
                        }}
                      />
                    </aside>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </>
    );
  }
}
