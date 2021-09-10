import React from "react";
import HomePages from "../Container/Home/main";
import MainCustomer from "../Container/Customer/main";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PartnerIndex from "../Container/Partner/index";
// import { loadProgressBar } from 'axios-progress-bar'
function index() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/customer">
            <MainCustomer />
          </Route>
          <Route path="/">
            <HomePages />
          </Route>
          {/* <Route exact path={"/partner/dashboard"} component={PartnerIndex} /> */}
        </Switch> 
      </BrowserRouter>
    </div>
  );
}

export default index;
