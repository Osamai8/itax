import React, { Component } from "react";
import RestApi from "../../services/api";

export default class blogDetails extends Component {
    constructor(props){
        super(props)
        this.state= {
            data:{}
        }
    }
    componentDidMount(){
        this.fetchData()
    }
    fetchData(){
        let id = this.props.match.params.id
        RestApi.blogDetails(id).then((res)=> {
            console.log("details",res)
            if(res.data.status){
                this.setState({
                    data: res.data.data
                })
            }
        })
    }
  render() {
    return (
      <div>
        <div class="breadcrumbpane">
          <div class="container">
            <h1 class="pull-left">Blog</h1>
          </div>
        </div>
        {/* <!-- start: blog sections --> */}
        <section class="blog_area single-post-area section-padding">
          <div class="container">
            <div class="row">
              <div class="col-lg-8">
                <div class="blog_left_sidebar">
                  <article class="blog_item">
                    <div class="blog_item_img">
                      {this.state.data.blog_image && <img
                        class="card-img rounded-0"
                        src={this.state.data.blog_image}
                        alt="blog"
                      />}
                      <a href="#" class="blog_item_date">
                        {this.state.data.published_date && <p>{this.state.data.published_date}</p>}
                      </a>
                    </div>
                    <div class="blog-author">
                      <div class="media align-items-center">
                        <div class="media-body text-right">
                          <a href="#">
                            {this.state.data.user_name && <h4>{this.state.data.user_name}</h4>}
                          </a>
                        </div>
                        {this.state.data.user_image && <img src={this.state.data.user_image} alt="author" />}
                      </div>
                    </div>

                    <div class="blog_details">
                      <a class="d-inline-block" href="#">
                        <h2>{this.state.data.heading}</h2>
                      </a>
                      {this.state.data.published_date && 
                       <div
                       dangerouslySetInnerHTML={{
                         __html: this.state.data.description
                       }}
                     /> }
                    </div>
                  </article>

                  {/* <!-- <nav class="blog-pagination">
<ul class="pagination">
<li class="page-item">
<a href="#" class="page-link preview" aria-label="Previous">
<i class="fa fa-angle-double-left"></i> Prev.
</a>
</li>
<li class="page-item active">
<a href="#" class="page-link">1</a>
</li>
<li class="page-item">
<a href="#" class="page-link">2</a> 
</li>
<li class="page-item">
<a href="#" class="page-link next" aria-label="Next">
Next <i class="fa fa-angle-double-right"></i>
</a>
</li>
</ul>
</nav> --> */}
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
                    <h4 class="widget_title">Related Blogs</h4>
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
      </div>
    );
  }
}
