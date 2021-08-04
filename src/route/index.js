import React from "react";
import Home from "../components/home";
import Header from "../Common/header";
import Footer from "../Common/footer";
import About from "../components/about/index";
import Service from "../components/service/index";
import PartnerWithUs from "../components/partnerWithUs";
import Blog from "../components/blog";
import Career from "../components/careerWithUs";
import Contact from "../components/contactUs";

import { BrowserRouter, Route } from "react-router-dom";
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

    </BrowserRouter>
    </div>
  );
}

export default index;
