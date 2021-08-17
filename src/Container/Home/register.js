import React, { Component } from "react";
import Footer from "../../Common/footer";
import Header from "../../Common/header";
import NewsLetter from "../../Components/home/newsletter";
import RestApi from "../../services/api";

export default class register extends Component {
  constructor(props) {
    super(props)
    this.state = {  
          first_name: '',
          middleName:'',
          last_name:'',
          phone:'',
          login_type:'default',
          is_customer: 'yes',
          is_service_provider: 'no',
          email:'',
          password:'',
          address:'',  
          error: {}
    }
}
  onSubmitHandle(e){ 
    e.preventDefault()
    let  {first_name,last_name,email,password,address,phone,
      login_type,is_customer,is_service_provider,middleName} = this.state
      
    RestApi.register({first_name,last_name,email,password,address,phone,
      login_type,is_customer,is_service_provider,middleName})
    .then((res) => {
      console.log("resss",res)
      
    })
  }
  validate(name,value){
    let errors = {}
    switch (name){
      case 'email':
        break;
      case 'phone':
       
        break;
      default:
        // console.log("default",name)
    }
    this.setState({
      error: errors
    })
     
  }
  handleInputChange(e) {  
    const target = e.target; 
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.validate(name,value)

    this.setState({
      [name]: value
    });
  }
  checkPassword(e){
    let { password } = this.state
    if(password !== e.target.value){
      this.setState({
        error: { password : 'Incorrect Password'}
      })
    }
    else{
      this.setState({
        error: {}
      })
    }
  }


  render() {
    let {error} = this.state
    console.log("aaaaaa",this.state)
    return (
      <div>
        <Header />
        <div class="breadcrumbpane">
          <div class="container">
            <h1 class="pull-left"> Partner Register</h1>
          </div>
        </div>

        {/* <!---partner_reg----> */}
        <div class="container">
          <div class="login_register_box clearfix">
            <div class="sign-in-panel">
              <h4>Create your Account</h4>
              <div class="login-content">
                <div class="partner_reg">
                  <form
                    id="sky-form"
                    method="POST"
                    class="sky-form" 
                    onSubmit={(e) => this.onSubmitHandle(e)}
                  >
                    <fieldset>
                      <section>
                        <div class="row">
                          <div class="col-md-6">
                            <label class="input">
                              <i
                                class="icon-append fa fa-envelope-o"
                                style={{top:'6px'}}
                              ></i>
                              <input
                                type="email"
                                required
                                onChange={(e) => this.handleInputChange(e)}
                                placeholder="Email"
                                name="email"
                                value={this.state.email}
                                autocomplete="off"
                              />
                               {error.email && <span  class="alert-danger">{error.email}</span>}
                            </label>
                          
                          </div>
                          <div class="col-md-6">
                            <label class="input">
                              <i
                                class="icon-append fa fa-mobile"
                                style={{top:'6px'}}
                              ></i>
                              <input
                              required
                           onChange={(e) => this.handleInputChange(e)}
                                type="text"
                                placeholder="Mobile"
                                name="phone"
                                autocomplete="off"
                              />
                              <span  class="alert-danger">{this.state.error.phone}</span>
                            </label>
                          </div>
                        </div>
                      </section>
                      <section>
                        <div class="row">
                          <div class="col-md-6">
                            <label class="input">
                              <i
                                class="icon-append fa fa-user-o"
                                style={{top:'6px'}}
                              ></i>
                              <input
                              required
                              onChange={(e) => this.handleInputChange(e)}
                                type="textl"
                                placeholder="First Name"
                                name="first_name"
                                autocomplete="off"
                              />
                            </label>
                          </div>
                          <div class="col-md-6">
                            <label class="input">
                              <i
                                class="icon-append fa fa-map-marker"
                                style={{top:'6px'}}
                              ></i>
                              <input
                             onChange={(e) => this.handleInputChange(e)}
                                type="textl"
                                placeholder="Address"
                                name="address"
                                autocomplete="off"
                              />
                            </label>
                          </div>
                        </div>
                      </section>
                      <section>
                        <div class="row">
                          <div class="col-md-6">
                            <label class="input">
                              <i
                                class="icon-append fa fa-user-o"
                                style={{top:'6px'}}
                              ></i>
                              <input
                              onChange={(e) => this.handleInputChange(e)}
                                type="textl"
                                placeholder="Middle Name"
                                name="middleName"
                                autocomplete="off"
                              />
                            </label>
                          </div>
                          <div class="col-md-6">
                            <label class="input">
                              <i
                                class="icon-append fa fa-lock"
                                style={{top:'6px'}}
                              ></i>
                              <input
                              required
                                onChange={(e) => this.handleInputChange(e)}
                                type="password"
                                name="password"
                                placeholder="Password"
                              />
                            </label>
                          </div>
                        </div>
                      </section>
                      <section>
                        <div class="row">
                          <div class="col-md-6">
                            <label class="input">
                              <i
                                class="icon-append fa fa-user-o"
                                style={{top:'6px'}}
                              ></i>
                              <input
                              required
                                type="text"
                                onChange={(e) => this.handleInputChange(e)}
                                placeholder="Last Name"
                                name="last_name"
                                autocomplete="off"
                              />
                            </label>
                          </div>
                          <div class="col-md-6">
                            <label class="input">
                              <i
                                class="icon-append fa fa-lock"
                                style={{top:'6px'}}
                              ></i>
                              <input
                              onChange={(e)=> this.checkPassword(e)}
                                type="password"
                                name="checkPassword"
                                placeholder="Confirm Password"
                              />
                               {error.password && <span class="alert-danger">{error.password}</span> }
                            </label>
                           
                          </div>
                        </div>
                      </section>

                      <div class="area_expertise clearfix">
                        <h4>Area of expertise</h4>
                        <div class="expertise_left">
                          <div class="chkbox-group">
                            <input type="checkbox" name="agree"  />
                            <a href="#">Business Startup Services</a>
                          </div>
                          <div class="chkbox-group">
                            <input type="checkbox" name="agree" />
                            <a href="#">Corporate Advisory</a>
                          </div>
                          <div class="chkbox-group">
                            <input type="checkbox" name="agree" />
                            <a href="#">Income tax Advisory </a>
                          </div>
                          <div class="chkbox-group">
                            <input type="checkbox" name="agree" />
                            <a href="#">Financial Funding and Debt Mgmt.</a>
                          </div>
                        </div>
                        <div class="expertise_right">
                          <div class="chkbox-group">
                            <input type="checkbox" name="agree" />
                            <a href="#">Outsourcing Services</a>
                          </div>
                          <div class="chkbox-group">
                            <input type="checkbox" name="agree" />
                            <a href="#">International Taxation</a>
                          </div>
                          <div class="chkbox-group">
                            <input type="checkbox" name="agree" />
                            <a href="#">FEMA and FERA Advisory</a>
                          </div>
                          <div class="chkbox-group">
                            <input type="checkbox" name="agree" />
                            <a href="#">Foreign Company Setup in India</a>
                          </div>
                        </div>
                      </div>

                      <div class="chkbox-group">
                        <input type="checkbox" name="agree" />
                        <span>I have read and agree to all the </span>
                        <a href="#">Term & Condition</a>
                      </div>
                    </fieldset>
                    <div class="sign-btn">
                    <button type="submit" name="sign_in" class="button col">
                      Create Account
                    </button>
                  </div>
                  </form>
                 
                  <div class="login-footer clearfix">
                    <p class="pull-left part_log">Already have an account?</p>
                    <a href="#" class="btn btn-login pull-right part_login">
                      Log in
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="Register_benefits">
              <h4>Member / Registered User Benefits...</h4>
              <h5>
                New User? <span>"Register to Become a Member"</span>
              </h5>
              <p>
                <strong>Registered User Benefits...</strong>
              </p>
              <img src="image/user.png" />
              <ul>
                <li>
                  <i class="fa fa-circle"></i>File Free ITR online
                </li>
                <li>
                  <i class="fa fa-circle"></i>Get an Expert Assistances
                </li>
                <li>
                  <i class="fa fa-circle"></i>Auto Extract of TDS Data
                </li>
                <li>
                  <i class="fa fa-circle"></i>Processing Status of ITR Return
                </li>
                <li>
                  <i class="fa fa-circle"></i>Enjoy more service after upgrading
                  your packages
                </li>
              </ul>
            </div>
          </div>
        </div>
        <NewsLetter />
        <Footer />
      </div>
    );
  }
}
