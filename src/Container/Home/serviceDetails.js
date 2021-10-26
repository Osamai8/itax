import React, { Component } from "react";
import { set } from "react-hook-form";
import Footer from "../../Common/footer";
import Newsletter from "../../Components/home/subscribeNewsletter";
import RestApi from "../../services/api";
import ApplySerive from '../../Components/home/applyService'

export default class ServiceDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      category: {},
      services: [],
      relatedServices: [],
      applyForm:false,
      activeService:{}
    };
  }
  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    let id = this.props.match.params.id;
    if (id) {
      RestApi.services(id).then((res) => {
        console.log("sevices", res);
        if (res.data.status) {
          this.setState({
            title: res.data.data.category[0].category_name,
            category: res.data.data.category[0],
            services: res.data.data.services,
            relatedServices: res.data.data.related_services,
          });
        }
      });
    }
  }
  handelApply(service){
    if(!this.state.applyForm){
      this.setState({
        activeService:service,
        applyForm:true,
      })
    }
    else {
      this.setState({ 
        activeService:{},
        applyForm:false,
      })
    }
   
  }

  render() {
    let { title, category, services, relatedServices,applyForm,activeService } = this.state;
    return (
      <>
        <div class="breadcrumbpane">
          <div class="container">
            <h1 class="pull-left"> {title}</h1>
          </div>
        </div>
        <section id="about">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <div class="section-title text-center">
                  {/* <p>Business Startup Services</p>  */}
                </div>
                {/* <!-- /.section-title --> */}
              </div>
            </div>

            <div class="about-info">
              <div class="row">
                {!applyForm ?
                  (<div class="col-md-8">
                  <p class="p-10 mb-0">{category.description}</p>
                  <div class="panel-group" id="accordion">
                    {services.length > 0 &&
                      services.map((each) => {
                        return (
                          <div class="panel panel-default">
                            <a
                              class="accordion-toggle"
                              data-toggle="collapse"
                              data-parent="#accordion"
                              href={`#collapse${each.id}`}
                            >
                              <div class="panel-heading panel-heading-active">
                                <h4 class="panel-title">
                                  <i class="fa fa-gg" aria-hidden="true"></i>{" "}
                                 {each.service_name}
                                </h4>
                              </div>
                            </a>
                            <div
                              id={`collapse${each.id}`}
                              class="panel-collapse collapse in"
                            >
                              <div class="panel-body">
                                <div class="col-md-1">
                                  <i
                                    class="fa fa-briefcase fa-3x"
                                    aria-hidden="true"
                                  ></i>
                                </div>
                                <div class="col-md-11">
                                  <p>
                                  {each.description}
                                  </p>
                                  <a onClick={()=>this.handelApply(each)} class="readmore">
                                    Apply Now
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    {/* <div class="panel panel-default">
                      <a
                        data-toggle="collapse"
                        data-parent="#accordion"
                        href="#collapse2"
                      >
                        <div class="panel-heading">
                          <h4 class="panel-title">
                            <i class="fa fa-gg" aria-hidden="true"></i>{" "}
                            Statutory Registrations
                          </h4>
                        </div>
                      </a>
                      <div id="collapse2" class="panel-collapse collapse">
                        <div class="panel-body">
                          <div class="col-md-1">
                            <i
                              class="fa fa-briefcase fa-3x"
                              aria-hidden="true"
                            ></i>
                          </div>
                          <div class="col-md-11">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed do eiusmod tempor incididunt
                              ut labore et dolore magna aliqua. Ut enim ad minim
                              veniam, quis nostrud exercitation ullamco laboris
                              nisi ut aliquip ex ea commodo consequat.
                            </p>
                            <a href="#" class="readmore">
                              Apply Now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="panel panel-default">
                      <a
                        data-toggle="collapse"
                        data-parent="#accordion"
                        href="#collapse3"
                      >
                        <div class="panel-heading">
                          <h4 class="panel-title">
                            <i class="fa fa-gg" aria-hidden="true"></i> Project
                            Evaluation & Viability Studies
                          </h4>
                        </div>
                      </a>
                      <div id="collapse3" class="panel-collapse collapse">
                        <div class="panel-body">
                          <div class="col-md-1">
                            <i
                              class="fa fa-briefcase fa-3x"
                              aria-hidden="true"
                            ></i>
                          </div>
                          <div class="col-md-11">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed do eiusmod tempor incididunt
                              ut labore et dolore magna aliqua. Ut enim ad minim
                              veniam, quis nostrud exercitation ullamco laboris
                              nisi ut aliquip ex ea commodo consequat.
                            </p>
                            <a href="#" class="readmore">
                              Apply Now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div> */}
                  </div>
                </div>)
                : <ApplySerive service={activeService}/>
                }

                <div class="col-md-4">
                  <div class="servicebox">
                    <h3>Our Related Services</h3>
                    <div class="relatedservicesbox">
                      <a href="">
                        <h4>Corporate Advisory</h4>
                        <ul>
                          <li>
                            <i class="fa fa-cog"></i>Formation of a Company
                          </li>
                          <li>
                            <i class="fa fa-cog"></i>ROC Compliances
                          </li>
                          <li>
                            <i class="fa fa-cog"></i>Management Consultancy
                          </li>
                          <li>
                            <i class="fa fa-cog"></i>MIS & Related Reports
                          </li>
                          <li>
                            <i class="fa fa-cog"></i>Mergers & Acquisitions
                          </li>
                          <li>
                            <i class="fa fa-cog"></i>Project Evaluation &
                            Viability Studies
                          </li>
                          <li>
                            <i class="fa fa-cog"></i>Corporate Law Advisory
                          </li>
                          <li>
                            <i class="fa fa-cog"></i>IFRS Advisory
                          </li>
                          {/* <!-- <li><i class="fa fa-cog"></i>CSR Advisory</li>
                        <li><i class="fa fa-cog"></i>Inventory Management</li>
                        <li><i class="fa fa-cog"></i>XBRL Filing</li>
                        <li><i class="fa fa-cog"></i>Certifications for various compliance</li>
                        <li><i class="fa fa-cog"></i>Restatement as per IAS/ US GAPP</li>
                        <li><i class="fa fa-cog"></i>Management and Operational Audit</li>
                        <li><i class="fa fa-cog"></i>Import / Export Consultancy</li>
                        <li><i class="fa fa-cog"></i>Bulk Income tax return filing</li>
                        <li><i class="fa fa-cog"></i>Closure of a Company</li> --> */}
                        </ul>
                      </a>
                    </div>
                    <div class="relatedservicesbox">
                      <a href="">
                        <h4>Financial Funding and Debt Mgmt.</h4>
                        <ul>
                          <li>
                            <i class="fa fa-cog"></i>Project Finance
                          </li>
                          <li>
                            <i class="fa fa-cog"></i>Restructuring of Finance
                          </li>
                          <li>
                            <i class="fa fa-cog"></i>Debt Syndication /
                            Resolution
                          </li>
                          <li>
                            <i class="fa fa-cog"></i>Buyouts & JV Collaboration
                          </li>
                          <li>
                            <i class="fa fa-cog"></i>PE/VC Funding
                          </li>
                          <li>
                            <i class="fa fa-cog"></i>Distressed Assets
                            Recapitalization
                          </li>
                          <li>
                            <i class="fa fa-cog"></i>Working Capital Limits
                          </li>
                          <li>
                            <i class="fa fa-cog"></i>ECB and Foreign Currency
                            Funding
                          </li>
                          <li>
                            <i class="fa fa-cog"></i>LC/Bill Discounting &
                            Buyers' Credit
                          </li>
                          <li>
                            <i class="fa fa-cog"></i>Packing Credit
                          </li>
                          <li>
                            <i class="fa fa-cog"></i>Mortgage Loans
                          </li>
                        </ul>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
     <Newsletter/>
     <Footer/>
      </>
    );
  }
}
