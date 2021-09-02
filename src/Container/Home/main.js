import React, { useState } from "react";
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
import Index from "./index";
function Main() {
  let { url } = useRouteMatch();
  const [activeForm, setActiveForm] = useState("customer");
  return (
    <>
      <Switch>
        <Route exact path={"/"} component={Index} />
        <Route exact path={`${url}about`} component={About} />
        <Route exact path={`/partner_with_us`} component={PartnerWithUs} />
        <Route exact path={`${url}blog`} component={Blog} />
        <Route exact path={`${url}career_with_us`} component={Career} />
        <Route exact path={`${url}contact-us`} component={Contact} />
        <Route exact path={`${url}services`} component={Service} />
        <Route
          exact
          path={`${url}user_login`}
          component={() => (
            <Login activeForm={activeForm} setActiveForm={setActiveForm} />
          )}
        />
        <Route exact path={`${url}register`}>
          {activeForm == 'customer' ? <PartnerRegister/> : <CustomerRegister/>}
        </Route>
      </Switch>
    </>
  );
}

export default Main;
