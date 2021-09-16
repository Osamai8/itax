import React, { Component } from "react";
import Footer from "../../Common/footer";
import Header from "../../Common/header";
import RestApi from "../../services/api";
export default class Pages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }
  componentDidMount() {
    this.fetchData();
  }
  fetchData = () => {
    if (this.props.page) {
      RestApi.pages(this.props.page).then((response) => {
        // console.log(response);
        if (response.data.status) {
          this.setState({
            data: response.data.data,
          });
        }
      });
    }
  };
  render() {
    return (
      <div>
        <Header />
        <div id="home-page">
          <div class="breadcrumbpane">
            <div class="container">
              <h1 class="pull-left">{this.props.title}</h1>
            </div>
          </div>
          <div class="container carrer_para">
            {this.state.data.content && (
              <div
                dangerouslySetInnerHTML={{ __html: this.state.data.content }}
              />
            )}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
