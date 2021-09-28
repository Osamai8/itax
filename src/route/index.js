import React ,{Component, useEffect}from "react";
import HomePages from "../Container/Home/main";
import MainCustomer from "../Container/Customer/main";
import { BrowserRouter, Route, Switch,HashRouter } from "react-router-dom";
import RestApi from "../services/api";
import { connect } from "react-redux"; 
// import PartnerIndex from "../Container/Partner/index";
// import { loadProgressBar } from 'axios-progress-bar'
class Index extends Component{
  constructor(props){
    super(props)
  }
  componentDidMount(){
    this.contactData()
  }
  contactData(){
    RestApi.contact().then((res) => {
      console.log("contact", res);
      this.props.dispatch({
        type: "CONTACT",
        payload: {
          socialIcons: res.data.data.social_media_link,
          contactDetails: res.data.data.contact_details,
        },
      });
    });
  }
  render(){
    return (
      <div>
        <HashRouter>
          <Switch>
            <Route path="/customer">
              <MainCustomer />
            </Route>
            <Route path="/">
              <HomePages />
            </Route>
            {/* <Route exact path={"/partner/dashboard"} component={PartnerIndex} /> */}
          </Switch> 
        </HashRouter>
      </div>
    );
  }

}

export default connect()(Index);
