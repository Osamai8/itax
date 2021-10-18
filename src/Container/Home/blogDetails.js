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
       if(id){
        RestApi.blogDetails(id).then((res)=> {
          console.log("details",res)
          if(res.data.status){
              this.setState({
                  data: res.data.data
              })
          }
      })
      .catch((e)=> {
        console.log("Error API: ",e)
        this.setState({
          data:{}
        })
      })
       }
    }
  render() {
    return (
      <div>
        <div className="breadcrumbpane">
          <div className="container">
            <h1 className="pull-left">Blog</h1>
          </div>
        </div>
        {/* <!-- start: blog sections --> */}
        <section className="blog_area single-post-area section-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="blog_left_sidebar">
                  <article className="blog_item">
                    <div className="blog_item_img">
                      {this.state.data?.blog_image && <img
                        className="card-img rounded-0"
                        src={this.state.data.blog_image}
                        alt="blog"
                      />}
                      <a href="#" className="blog_item_date">
                        {this.state.data?.published_date && <p>{this.state.data.published_date}</p>}
                      </a>
                    </div>
                    <div className="blog-author">
                      <div className="media align-items-center">
                        <div className="media-body text-right">
                          <a href="#">
                            {this.state.data?.user_name && <h4>{this.state.data.user_name}</h4>}
                          </a>
                        </div>
                        {this.state.data?.user_image && <img src={this.state.data.user_image} alt="author" />}
                      </div>
                    </div>

                    <div className="blog_details">
                      <a className="d-inline-block" href="#">
                        <h2>{this.state.data?.heading}</h2>
                      </a>
                      {this.state.data?.description && 
                       <div
                       dangerouslySetInnerHTML={{
                         __html: this.state.data.description
                       }}
                     /> }
                    </div>
                  </article>

                  {/* <!-- <nav className="blog-pagination">
<ul className="pagination">
<li className="page-item">
<a href="#" className="page-link preview" aria-label="Previous">
<i className="fa fa-angle-double-left"></i> Prev.
</a>
</li>
<li className="page-item active">
<a href="#" className="page-link">1</a>
</li>
<li className="page-item">
<a href="#" className="page-link">2</a> 
</li>
<li className="page-item">
<a href="#" className="page-link next" aria-label="Next">
Next <i className="fa fa-angle-double-right"></i>
</a>
</li>
</ul>
</nav> --> */}
                </div>
              </div>
              <div className="col-lg-4">
                <div className="blog_right_sidebar">
                  <aside className="single_sidebar_widget search_widget">
                    <form action="#">
                      <div className="form-group">
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Search Keyword"
                            onfocus="this.placeholder = ''"
                            onblur="this.placeholder = 'Search Keyword'"
                          />
                          <div className="input-group-append">
                            <button className="btn" type="button">
                              <i className="fa fa-search"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                      <button
                        className="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn"
                        type="submit"
                      >
                        Search
                      </button>
                    </form>
                  </aside>
                  <aside className="single_sidebar_widget post_category_widget">
                    <h4 className="widget_title">Related Blogs</h4>
                    <ul className="list cat-list">
                      <li>
                        <a href="#" className="d-flex">
                          <p>Formation of Business Entity</p>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="d-flex">
                          <p>Statutory Registrations</p>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="d-flex">
                          <p>Project Evaluation & Viability Studies</p>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="d-flex">
                          <p>Techno Economic Viability</p>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="d-flex">
                          <p>Accounting and Book Keeping</p>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="d-flex">
                          <p>Providing a virtual office</p>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="d-flex">
                          <p>Statutory Returns filing</p>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="d-flex">
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
