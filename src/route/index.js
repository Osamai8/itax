import React from "react";
import Home from "../Container/Home";
import HomePages from "../Container/Home/main";
import MainCustomer from "../Container/Customer/main";
import { HashRouter, Route, Switch } from "react-router-dom";

import PartnerIndex from "../Container/Partner/index";

function index() {
  return (
    <div>
      <HashRouter>
        <Switch>
          <Route exact path="/customer">
            <MainCustomer />
          </Route>
          <Route path="/">
            <HomePages />
          </Route>
          {/* customer routes */}

          {/* partner routes */}
          <Route exact path={"/partner/dashboard"} component={PartnerIndex} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default index;
