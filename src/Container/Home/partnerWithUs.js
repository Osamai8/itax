import React, { Component } from "react";
import Footer from "../../Common/footer";
import NewsLetter from '../../Components/home/subscribeNewsletter'
import RestApi from "../../services/api";

export default class partnerWithUs extends Component {
  constructor(props){
    super(props)
    this.state = {
      content: ''
    }
  }

  componentDidMount(){
    this.fetchData()
  }
  fetchData(){
    RestApi.parterWithUs().then((res)=> {
      console.log("parter: ",res)
      if(res.data.status){
        this.setState({
          content : res.data.data.content
        })
      }
     
    })
    
  }
  render() {
    const styles = {
      top: {
        // top: "6px",
      },
      display: {
        display: "none",
        color: "red",
      },
    };
    return (
      <div>
        <div className="breadcrumbpane">
          <div className="container">
            <h1 className="pull-left">PARTNER WITH US</h1>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 partnerContent">
            <div
                      dangerouslySetInnerHTML={{
                        __html: this.state.content,
                      }}
                    /> 
            </div>

            <div className="col-md-4 partner_form">
              <h3>Register for working with us</h3>
              <form
                id="sky-form"
                method="POST"
                className="sky-form"
                action="https://itaxdoctor.idossapp.com/index.php/Itax/user_login"
                novalidate="novalidate"
              >
                <fieldset>
                  <section>
                    <div className="row">
                      <div className="col col-12">
                        <label className="input">
                          <i
                            className="icon-append fa fa-envelope-o"
                            // style={styles.top}
                          ></i>
                          <input
                            type="email"
                            placeholder="Email"
                            name="email"
                            autocomplete="off"
                          />
                        </label>
                      </div>
                    </div>
                  </section>
                  <section>
                    <div className="row">
                      <div className="col col-12">
                        <label className="input">
                          <i
                            className="icon-append fa fa-user-o"
                            // style={styles.top}
                          ></i>
                          <input
                            type="textl"
                            placeholder="First Name"
                            name="name"
                            autocomplete="off"
                          />
                        </label>
                      </div>
                    </div>
                  </section>
                  <section>
                    <div className="row">
                      <div className="col col-12">
                        <label className="input">
                          <i
                            className="icon-append fa fa-user-o"
                            // style={styles.top}
                          ></i>
                          <input
                            type="textl"
                            placeholder="Middle Name"
                            name="name"
                            autocomplete="off"
                          />
                        </label>
                      </div>
                    </div>
                  </section>
                  <section>
                    <div className="row">
                      <div className="col col-12">
                        <label className="input">
                          <i
                            className="icon-append fa fa-user-o"
                            // style={styles.top}
                          ></i>
                          <input
                            type="textl"
                            placeholder="Last Name"
                            name="name"
                            autocomplete="off"
                          />
                        </label>
                      </div>
                    </div>
                  </section>
                  <section>
                    <div className="row">
                      <div className="col col-12">
                        <label className="input">
                          <i
                            className="icon-append fa fa-mobile"
                            // style={styles.top}
                          ></i>
                          <input
                            type="textl"
                            placeholder="Mobile"
                            name="name"
                            autocomplete="off"
                          />
                        </label>
                      </div>
                    </div>
                  </section>
                  <section>
                    <div className="row">
                      <div className="col col-12">
                        <label className="input">
                          <i
                            className="icon-append fa fa-lock"
                            // style={styles.top}
                          ></i>
                          <input
                            type="password"
                            name="password"
                            placeholder="Password"
                          />
                        </label>
                      </div>
                    </div>
                  </section>
                  <section>
                    <div className="row">
                      <div className="col col-12">
                        <label className="input">
                          <i
                            className="icon-append fa fa-lock"
                            // style={styles.top}
                          ></i>
                          <input
                            type="password"
                            name="password"
                            placeholder="Confirm Password"
                          />
                        </label>
                      </div>
                    </div>
                  </section>
                </fieldset>
              </form>
              <div className="area_expertise expt">
                <h4>Area of expertise</h4>
                <div className="chkbox-group">
                  <input type="checkbox" name="agree" />
                  <a href="#">Business Startup Services</a>
                </div>
                <div className="chkbox-group">
                  <input type="checkbox" name="agree" />
                  <a href="#">Corporate Advisory</a>
                </div>
                <div className="chkbox-group">
                  <input type="checkbox" name="agree" />
                  <a href="#">Income tax Advisory </a>
                </div>
                <div className="chkbox-group">
                  <input type="checkbox" name="agree" />
                  <a href="#">Financial Funding and Debt Mgmt.</a>
                </div>
                <div className="chkbox-group">
                  <input type="checkbox" name="agree" />
                  <a href="#">Outsourcing Services</a>
                </div>
                <div className="chkbox-group">
                  <input type="checkbox" name="agree" />
                  <a href="#">International Taxation</a>
                </div>
                <div className="chkbox-group">
                  <input type="checkbox" name="agree" />
                  <a href="#">FEMA and FERA Advisory</a>
                </div>
                <div className="chkbox-group">
                  <input type="checkbox" name="agree" />
                  <a href="#">Foreign Company Setup in India</a>
                </div>
              </div>
              <div className="chkbox-group">
                <input type="checkbox" name="agree" />
                <span>I have read and agree to all the </span>
                <a href="#">Term & Condition</a>
              </div>
              <div className="sign-btn">
                <button type="submit" name="sign_in" className="button col">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>

       <NewsLetter/>
       <Footer/>
      </div>
    );
  }
}
