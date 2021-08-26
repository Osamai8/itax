import React, { Component } from "react";
import RestApi from "../../services/api";
export default class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bannerData: [],
    };
  }
  componentDidMount() {
    this.fetchbanner();
  }
  fetchbanner = () => {
    RestApi.homePage().then((res) => {
      this.setState({
        bannerData: res.data.data.banners,
      });
    });
  };
  startTimer() {
    this.timerId = setInterval(() => {
      //your function
    }, 1000);
  }
  render() {
    const length = this.state.bannerData.length;

    console.log(this.state);
    return (
      <>
        <div class="sliderdata">
          <div id="myCarousel" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
              <li
                data-target="#myCarousel"
                data-slide-to="0"
                class="active"
              ></li>
              <li data-target="#myCarousel" data-slide-to="1"></li>
              <li data-target="#myCarousel" data-slide-to="2"></li>
            </ol>

            <div class="carousel-inner">
              {this.state.bannerData.map((banner, i) => {
                return (
                  <>
                    {" "}
                    <div class={i == 0 ? "item active" : "item"}>
                      <img
                        src={banner.image}
                        alt={banner.banner_heading}
                        style={{ width: "100%" }}
                      />
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </>
    );
  }
}
