import React, { Component } from 'react'
import { BrowserRouter, Route, Switch, useRouteMatch } from "react-router-dom";
import About from "./about";
import Service from "./service";
import PartnerWithUs from "./partnerWithUs";
import Blog from "./blog";
import Career from "./careerWithUs";
import Contact from "./contactUs";
import Login from "./login";
import CustomerRegister from "./partnerRegister";
import PartnerRegister from "./customerRegister";
import Pages from "./pages";
import Index from "./index";
import Header from "../../Common/header";
import Footer from "../../Common/footer";
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';
import RestApi from '../../services/api';
class Main extends Component {
  constructor(props){
    console.log("props",props)
    super(props)
    this.state = {
      activeForm: 'customer',
      bannerData:[],
      socialIcons: []
    }
  }
  setActiveForm (changeForm){
    this.setState({
      activeForm: changeForm
    })
  }
  componentDidMount() {
    this.fetchbanner();
  }
  componentDidUpdate(){
    
  }

  fetchbanner = () => { 
    console.log("index")
    RestApi.homePage().then((res) => {
      console.log("response",res.data)
      this.setState({
        bannerData: res.data.data.banners,
        socialIcons: res.data.data.social_media_link
      });
     
    });
  };

  render() {
    return (
      <>
      <Header socialIcons={this.state.socialIcons} />
      <Switch>
        <Route exact path={"/"} component={() => <Index bannerData={this.state.bannerData}/>} />
        <Route exact path={`/about`} component={About} />
        <Route exact path={`/partner_with_us`} component={PartnerWithUs} />
        <Route exact path={`/blog`} component={Blog} />
        <Route exact path={`/career_with_us`} component={Career} />
        <Route exact path={`/contact-us`} component={Contact} />
        <Route exact path={`/services`} component={Service} />
        <Route
          exact
          path={`/privacy_policy`}
          component={() => (
            <Pages title="PRIVACY POLICY" page="privacy-policy" />
          )}
        />
        <Route
          exact
          path={`/term_condition`}
          component={() => (
            <Pages title="TERMS AND CONDITION" page="terms-and-conditions" />
          )}
        />
        <Route
          exact
          path={`/user_login`}
          component={() => (
            <Login activeForm={this.state.activeForm} setActiveForm={(changeForm) =>this.setActiveForm(changeForm)} />
          )}
        />
        <Route exact path={`/register`}>
          {this.state.activeForm == "customer" ? (
            <PartnerRegister />
          ) : (
            <CustomerRegister />
          )}
        </Route>
      </Switch> 
      <Footer />
    </>
    )
  }
}
export default withRouter(Main)
