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
import Newsletter from "./newsletter";
import Header from "../../Common/header";
import Footer from "../../Common/footer";
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';
import Videos from './videos';
import DownloadForm from './downloadForm';

class Main extends Component {
  constructor(props){
    console.log("props",props)
    super(props)
    this.state = {
      activeForm: 'customer',
    }
  }
  setActiveForm (changeForm){
    this.setState({
      activeForm: changeForm
    })
  }
  componentDidMount() {
  }
  componentDidUpdate(){
    
  }
  render() {
    return (
      <>
      <Header socialIcons={this.state.socialIcons} />
      <Switch>
        <Route exact path={"/"} component={() => <Index/>} />
        <Route exact path={`/about`} component={About} />
        <Route exact path={`/partner_with_us`} component={PartnerWithUs} />
        <Route exact path={`/blog`} component={Blog} />
        <Route exact path={`/career`} component={Career} />
        <Route exact path={`/contact`} component={Contact} />
        <Route exact path={`/services`} component={Service} />
        <Route exact path={`/videos`} component={Videos} />
        <Route exact path={`/newsletters`} component={Newsletter} />
        <Route exact path={`/newsletters`} component={Newsletter} />
        <Route exact path={`/download_form`} component={DownloadForm} />
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
          path={`/login`}
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
