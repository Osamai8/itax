import React from "react";
import Home from "../Container/Home";
import Header from "../Common/header";
import Footer from "../Common/footer";
import About from "../Container/Home/about";
import Service from "../Container/Home/service";
import PartnerWithUs from "../Container/Home/partnerWithUs"
import Blog from "../Container/Home/blog";
import Career from "../Container/Home/careerWithUs";
import Contact from "../Container/Home/contactUs"
import Login from "../Container/Home/login";

import { BrowserRouter, Route } from "react-router-dom";
import Register from "../Container/Home/register";
import CustomerIndex from '../Container/Customer/index'
import ManageServices from "../Container/Customer/manageServices";

import PartnerIndex from '../Container/Partner/index'
import Profile from "../Container/Customer/profile";

function index() {
  return (
    <div>
    <BrowserRouter>
      <Route exact path={"/"} component={Home}/> 
      <Route exact path={"/about"} component={About}/> 
      <Route exact path={"/services"} component={Service}/> 
      <Route exact path={"/partner_with_us"} component={PartnerWithUs}/> 
      <Route exact path={"/blog"} component={Blog}/> 
      <Route exact path={"/career_with_us"} component={Career}/> 
      <Route exact path={"/contact-us"} component={Contact}/> 
      <Route exact path={"/user_login"} component={Login}/> 

      {/* customer routes */}
      <Route exact path={"/customer_register"} component={Register}/> 
      <Route exact path={"/customer/dashboard"} component={CustomerIndex}/> 
      <Route exact path={"/customer/manage-services"} component={ManageServices}/> 
      <Route exact path={"/customer/my-profile"} component={Profile}/> 

      {/* partner routes */}
      <Route exact path={"/partner/dashboard"} component={PartnerIndex}/> 

    </BrowserRouter>
    </div>
  );
}

export default index;
