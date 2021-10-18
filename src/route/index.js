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
      let categoryOne = []
      let categoryTwo = []
      
      res.data.data.category_list.map((each,i)=> {
        if (i <= 9) {
          categoryOne.push(each);
        } else {
          categoryTwo.push(each);
        }
      })
      this.props.dispatch({
        type: "CONTACT",
        payload: {
          socialIcons: res.data.data.social_media_link,
          contactDetails: res.data.data.contact_details,
          categoryOne: categoryOne,
          categorytwo: categoryTwo,
        },
      });
    });
  }
  render(){
    return (
      <div>
        <HashRouter>
          <Switch>
          
            {/* <Route path="/customer">
              <MainCustomer />
            </Route> */}
            <Route path="/">
            {
              this.props.isLogged &&  <MainCustomer />
            }
              <HomePages />
            </Route>
            
          </Switch> 
        </HashRouter>
      </div>
    );
  }

}

export default connect((state)=> {
  return {
    isLogged: state.isLogged
  }
})(Index);

