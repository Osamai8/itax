import React, { Component } from "react";
import Newsletter from "../../Components/home/subscribeNewsletter";
import RestApi from "../../services/api";

export default class videos extends Component {
    constructor(props) {
        super(props)
        this.state = {
            featured: [],
            others: []
        }
    }
    componentDidMount(){
        this.fetchData()
    }
    fetchData(){
        RestApi.videos().then((res)=> {
            console.log("videos",res)
            this.setState({
                featured: res.data.data.featured,
                others: res.data.data.others
            })
        })
    }
  render() {
    return (
      <div>
        <div class="breadcrumbpane">
          <div class="container">
            <h1 class="pull-left">Videos</h1>
          </div>
        </div>
        <section>
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <div class="section-title text-center">
                  <h2>Featured Videos</h2>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="show-videos">

               {this.state.featured.map((each,key)=> {
                  let videoUrl =  each.video_link.slice(
                    each.video_link.lastIndexOf("=") + 1,
                    each.video_link.length
                  );
                   return ( <div class="col-md-3" key={key}>
                    <div class="videos">
                      <iframe
                        width="100%"
                        height="226"
                        src={`https://www.youtube.com/embed/${videoUrl}`}
                        frameborder="0"
                        allowfullscreen=""
                      ></iframe>
                      <div class="videosdesc">
                        <h5>{each.video_heading}</h5>
                        <p>
                          {each.description}
                        </p>
                      </div>
                    </div>
                  </div>)
               })}
                
                {/* <div class="col-md-3">
                  <div class="videos">
                    <iframe
                      width="100%"
                      height="226"
                      src="https://www.youtube.com/embed/zI6CqKgkC5s"
                      frameborder="0"
                      allowfullscreen=""
                    ></iframe>
                    <div class="videosdesc">
                      <h5>Video 4</h5>
                      <p>
                        Lorem ipsum, or lipsum as it is sometimes known, is
                        dummy text used in laying out print, graphic or web
                        designs.
                      </p>
                    </div>
                  </div>
                </div> */}
              
              </div>
            </div>
            <hr />
          </div>
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <div class="section-title text-center">
                  <h2>Other Videos</h2>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="show-videos">
                {/* <div class="col-md-3">
                  <div class="videos">
                    <iframe
                      width="100%"
                      height="226"
                      src="https://www.youtube.com/embed/QGSpVRuOUOE"
                      frameborder="0"
                      allowfullscreen
                    ></iframe>
                    <div class="videosdesc">
                      <h5>Video 1</h5>
                      <p>
                        Lorem ipsum, or lipsum as it is sometimes known, is
                        dummy text used in laying out print, graphic or web
                        designs.
                      </p>
                    </div>
                  </div>
                </div> */}
                {this.state.featured.map((each,key)=> {
                  let videoUrl =  each.video_link.slice(
                    each.video_link.lastIndexOf("=") + 1,
                    each.video_link.length
                  );
                   return ( <div class="col-md-3" key={key}>
                    <div class="videos">
                      <iframe
                        width="100%"
                        height="226"
                        src={`https://www.youtube.com/embed/${videoUrl}`}
                        frameborder="0"
                        allowfullscreen=""
                      ></iframe>
                      <div class="videosdesc">
                        <h5>{each.video_heading}</h5>
                        <p>
                          {each.description}
                        </p>
                      </div>
                    </div>
                  </div>)
               })}
                {/* <div class="col-md-3">
                  <div class="videos">
                    <iframe
                      width="100%"
                      height="226"
                      src="https://www.youtube.com/embed/okBk7gjAw0U"
                      frameborder="0"
                      allowfullscreen
                    ></iframe>
                    <div class="videosdesc">
                      <h5>Video 2</h5>
                      <p>
                        Lorem ipsum, or lipsum as it is sometimes known, is
                        dummy text used in laying out print, graphic or web
                        designs.
                      </p>
                    </div>
                  </div>
                </div> */}
               
        
             
              </div>
            </div>
          </div>
        </section>

        {/* <!---------------------------Newsletter Section----------------------------> */}
       <Newsletter/>
      </div>
    );
  }
}
