import React, { Component } from "react";
import RestApi from "../../services/api";
export default class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentDidMount() {  
  }
  
  render() {
    const length = this.props.bannerData && this.props.bannerData.length;
 
    return (
      <>
        <div class="sliderdata">
          <div id="myCarousel" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
            {/* <li
                data-target="#myCarousel"
                data-slide-to="0"
               
              ></li> */}
               {this.props.bannerData && this.props.bannerData.map((banner, i) => {
                return  <li class={banner.sequence_no == 1 && 'active'}  data-target="#myCarousel" data-slide-to={i}></li>
               })}
            </ol>

            <div class="carousel-inner">
              {this.props.bannerData && this.props.bannerData.map((banner, i) => {
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
