import React from "react";
import slider1 from "../../images/slider/slider1.jpg";
import slider2 from "../../images/slider/slider2.jpg";
import slider3 from "../../images/slider/slider3.jpg";

function slider() {
  return (
    <>
      <div class="sliderdata">
        <div
          id="myCarousel"
          class="carousel slide"
          data-ride="carousel"
          data-interval="10000"
        >
          {/* <!-- Indicators --> */}
          <ol class="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
          </ol>

          {/* <!-- Wrapper for slides --> */}
          <div class="carousel-inner">
            <div class="item active">
              <img src={slider1} alt="" />
            </div>
            <div class="item">
              <img src={slider2} alt="" />
            </div>
            <div class="item">
              <img src={slider3} alt="" />
            </div>

            {/* <!-- Left and right controls --> */}
            {/* <!-- <a class="left carousel-control" href="#myCarousel" data-slide="prev">
<span class="glyphicon glyphicon-chevron-left"></span>
<span class="sr-only">Previous</span>
</a>
<a class="right carousel-control" href="#myCarousel" data-slide="next">
<span class="glyphicon glyphicon-chevron-right"></span>
<span class="sr-only">Next</span>
</a> --> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default slider;
