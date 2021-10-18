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
        <div className="sliderdata">
          <div id="myCarousel" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
            {/* <li
                data-target="#myCarousel"
                data-slide-to="0"
               
              ></li> */}
               {this.props.bannerData && this.props.bannerData.map((banner, i) => {
                return  <li key={i} className={banner.sequence_no == 1 && 'active'}  data-target="#myCarousel" data-slide-to={i}></li>
               })}
            </ol>

            <div className="carousel-inner">
              {this.props.bannerData && this.props.bannerData.map((banner, i) => {
                return (
                  <>
                    {" "}
                    <div className={i == 0 ? "item active" : "item"} key={i}>
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
