import React, { Component } from "react";
import RestApi from "../../services/api";

export default class eventDetails extends Component {
    constructor(props){
        super(props) 
        this.state = {
          data: {}
        }
    }
    componentDidMount(){
        this.fetchData()
    }
    fetchData() {
        let id = this.props.match.params.id
        if(id) {
            RestApi.eventDetails(id).then((res)=> {
                console.log("event Details",res)
                if(res.data.status){
                  this.setState({
                    data:res.data.data
                  })
                }
            })
        }
       
    }
  render() {
    return (
      <>
        <section class="blog_area single-post-area section-padding">
          <div class="breadcrumbpane">
            <div class="container">
              <h1 class="pull-left">Event</h1>
            </div>
          </div>
          <div class="container">
            <div class="row">
              <div class="col-lg-8">
                <div class="blog_left_sidebar">
                  <article class="blog_item post">
                    <div class="blog_item_img entry-content p-0">
                     {this.state.data.event_image && <img
                        class="card-img rounded-0"
                        src={this.state.data.event_image}
                        alt="event"
                      />}
                      {this.state.data?.date && <div class="entry-date">{this.state.data.date}</div>}
                    </div>
                    <div class="blog_details p-20">
                      <a class="d-inline-block" href="#">
                       {this.state.data?.heading && <h2>{this.state.data.heading}</h2>}
                      </a>
                     {this.state.data?.description && <div
                      dangerouslySetInnerHTML={{
                        __html: this.state.data?.description
                      }}
                    />}
                    </div>
                  </article>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="blog_right_sidebar">
                  <aside class="single_sidebar_widget search_widget">
                    <form action="#">
                      <div class="form-group">
                        <div class="input-group">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Search Keyword"
                            onfocus="this.placeholder = ''"
                            onblur="this.placeholder = 'Search Keyword'"
                          />
                          <div class="input-group-append">
                            <button class="btn" type="button">
                              <i class="fa fa-search"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                      <button
                        class="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn"
                        type="submit"
                      >
                        Search
                      </button>
                    </form>
                  </aside>
                  <aside class="single_sidebar_widget post_category_widget">
                    <h4 class="widget_title">Related Events</h4>
                    <ul class="list cat-list">
                      <li>
                        <a href="#" class="d-flex">
                          <p>Formation of Business Entity</p>
                        </a>
                      </li>
                      <li>
                        <a href="#" class="d-flex">
                          <p>Statutory Registrations</p>
                        </a>
                      </li>
                      <li>
                        <a href="#" class="d-flex">
                          <p>Project Evaluation & Viability Studies</p>
                        </a>
                      </li>
                      <li>
                        <a href="#" class="d-flex">
                          <p>Techno Economic Viability</p>
                        </a>
                      </li>
                      <li>
                        <a href="#" class="d-flex">
                          <p>Accounting and Book Keeping</p>
                        </a>
                      </li>
                      <li>
                        <a href="#" class="d-flex">
                          <p>Providing a virtual office</p>
                        </a>
                      </li>
                      <li>
                        <a href="#" class="d-flex">
                          <p>Statutory Returns filing</p>
                        </a>
                      </li>
                      <li>
                        <a href="#" class="d-flex">
                          <p>Start up Counseling</p>
                        </a>
                      </li>
                    </ul>
                  </aside>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
