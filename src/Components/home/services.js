import React, { useEffect, useState } from "react";
import serviceImage from '../../images/service/s1.jpg'
import moneyBagIcon from '../../images/service/money-bag-icon.png'
import RestApi from "../../services/api";

export default function Services() {

 const [data,setDate] = useState([])

  useEffect(()=> {
     RestApi.service().then((res)=> {
       console.log("service",res)
       if(res.data.status){
         setDate(res.data.data.grid_list)
       }
     })
  },[])
  console.log(data)
  return (
    <section>
      <div class="our_department_area">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="section-title text-center">
                <h2>
                  Explore Our <span>Services</span>
                </h2>
                <p>
                  We provide a variety of services to our clients which make us
                  a one stop financial solution under one roof for our clients.
                  The range of services which are provided by us are as under:{" "}
                </p>
              </div>
            </div>
          </div>
          <div class="row">
            {data.length > 0 && data.map((each)=> {
              return <div class="col-xl-3 col-md-6 col-lg-3">
              <div class="single_department">
                <div class="department_thumb">
                  <img src={each.image} alt="" />
                </div>
                <div class="department_content">
                  <div class="iconimagetitle">
                    {/* <!-- <i class="fa fa-usd" aria-hidden="true"></i> -->  */}
                    <img src={moneyBagIcon} />
                    <h3>
                      <a href="#">
                        {" "}
                        &nbsp;&nbsp;{each.category_name}
                      </a>
                    </h3>
                    <p>
                    {each.description.length > 74 ? each.description.slice(0, 75) + '...' : each.description }
                    </p>
                    <a href="#" class="readmore">
                      Read More...
                    </a>
                  </div>
                </div>
              </div>
            </div>
            }) }
<div class="col-xl-3 col-md-6 col-lg-3">
              <div class="single_department">
                <div class="department_thumb">
                  <img src={serviceImage} alt="" />
                </div>
                <div class="department_content">
                  <div class="iconimagetitle">
                    <img src={moneyBagIcon} />
                    <h3>
                      <a href="#">
                        {" "}
                        &nbsp;&nbsp;Corporate Advisory
                      </a>
                    </h3>
                    <p>
                      Under corporate advisory we provide the following services
                      to our esteemed...
                    </p>
                    <a href="#" class="readmore">
                      Read More...
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* <div class="col-xl-3 col-md-6 col-lg-3">
              <div class="single_department">
                <div class="department_thumb">
                  <img src={serviceImage} alt="" />
                </div>
                <div class="department_content">
                  <div class="iconimagetitle">
                    <img src={moneyBagIcon} />
                    <h3>
                      <a href="#">
                        {" "}
                        &nbsp;&nbsp;Corporate Advisory
                      </a>
                    </h3>
                    <p>
                      Under corporate advisory we provide the following services
                      to our esteemed...
                    </p>
                    <a href="#" class="readmore">
                      Read More...
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-md-6 col-lg-3">
              <div class="single_department">
                <div class="department_thumb">
                  <img src={serviceImage} alt="" />
                </div>
                <div class="department_content">
                  <div class="iconimagetitle">
                    <img src={moneyBagIcon} />
                    <h3>
                      <a href="#">
                        {" "}
                        &nbsp;&nbsp;Financial Funding and Debt Mgmt.
                      </a>
                    </h3>
                    <p>
                      Every concern requires funds whether it is owned capital
                      or borrowed capital...
                    </p>
                    <a href="#" class="readmore">
                      Read More...
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-md-6 col-lg-3">
              <div class="single_department">
                <div class="department_thumb">
                  <img src={serviceImage} alt="" />
                </div>
                <div class="department_content">
                  <div class="iconimagetitle">
                    <img src={moneyBagIcon} />
                    <h3>
                      <a href="#">
                        {" "}
                        &nbsp;&nbsp;Outsourcing Services
                      </a>
                    </h3>
                    <p>
                      Outsourcing of services is the need of the hour for
                      benefits such as cost...
                    </p>
                    <a href="#" class="readmore">
                      Read More...
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-md-6 col-lg-3">
              <div class="single_department">
                <div class="department_thumb">
                  <img src={serviceImage} alt="" />
                </div>
                <div class="department_content">
                  <div class="iconimagetitle">
                    <img src={moneyBagIcon} />
                    <h3>
                      <a href="#">
                        {" "}
                        &nbsp;&nbsp;Foreign Company Setup in India
                      </a>
                    </h3>
                    <p>
                      Due to globalisation of Business and India becoming very
                      fast a most...{" "}
                    </p>
                    <a href="#" class="readmore">
                      Read More...
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-md-6 col-lg-3">
              <div class="single_department">
                <div class="department_thumb">
                  <img src={serviceImage} alt="" />
                </div>
                <div class="department_content">
                  <div class="iconimagetitle">
                    <img src={moneyBagIcon} />
                    <h3>
                      <a href="#">
                        {" "}
                        &nbsp;&nbsp;Income tax Advisory
                      </a>
                    </h3>
                    <p>
                      Income tax advisory covers the following services to all
                      assessee’s...
                    </p>
                    <a href="#" class="readmore">
                      Read More...
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-md-6 col-lg-3">
              <div class="single_department">
                <div class="department_thumb">
                  <img src={serviceImage} alt="" />
                </div>
                <div class="department_content">
                  <div class="iconimagetitle">
                    <img src={moneyBagIcon} />
                    <h3>
                      <a href="#">
                        {" "}
                        &nbsp;&nbsp;International Taxation
                      </a>
                    </h3>
                    <p>
                      We have a special wing which is looking after the
                      international taxation of...{" "}
                    </p>
                    <a href="#" class="readmore">
                      Read More...
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-md-6 col-lg-3">
              <div class="single_department">
                <div class="department_thumb">
                  <img src={serviceImage} alt="" />
                </div>
                <div class="department_content">
                  <div class="iconimagetitle">
                    <img src={moneyBagIcon} />
                    <h3>
                      <a href="#">
                        {" "}
                        &nbsp;&nbsp;FEMA and FERA Advisory
                      </a>
                    </h3>
                    <p>
                      The provisions of FEMA and FERA are very strict and
                      penalty provisions are...
                    </p>
                    <a href="#" class="readmore">
                      Read More...
                    </a>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
          <a href="#" class="viewall-services">
            View All Services...
          </a>
        </div>
      </div>
    </section>
  );
}

