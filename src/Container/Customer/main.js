import React from "react";
import { Switch, Route, useRouteMatch, BrowserRouter } from "react-router-dom";
import Header from "../../Common/header";
import Footer from "../../Common/footer";
import CustomerIndex from "./index";
import ManageServices from "./manageServices";
import Profile from "./profile";
import ViewService from "./viewService";
import SideBar from "../../Common/customerSideBar";
import UserHeader from "../../Common/userHeader";

function Main() {
  let { url } = useRouteMatch();
  console.log(`${url}`);
  return (
    <>
      <UserHeader />
      <SideBar />
      <BrowserRouter>
      <Switch>
        <Route exact path={`${url}/dashboard`} component={CustomerIndex} />
        <Route
          exact
          path={`${url}/manage-services`}
          component={ManageServices}
        />
        <Route exact path={`${url}/my-profile`} component={Profile} />
        <Route exact path={`${url}/view`} component={ViewService} />
      </Switch>
      </BrowserRouter>
     
    </>
  );
}

export default Main;
