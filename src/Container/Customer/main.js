import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "../../Common/header";
import Footer from "../../Common/footer";
import CustomerIndex from './index'
import ManageServices from "./manageServices";
import Profile from "./profile";
import ViewService from "./viewService";

function main() {
  return (
    <>
     <Switch>
     <Route exact path={"/customer/dashboard"} component={CustomerIndex} />
      <Route
        exact
        path={"/customer/manage-services"}
        component={ManageServices}
      />
      <Route exact path={"/customer/my-profile"} component={Profile} />
      <Route exact path={"/customer/view"} component={ViewService} />
     </Switch>
    </>
  );
}

export default main;
