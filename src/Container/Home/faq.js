import React, { Component } from "react";
import Common from "../../Common/common";
import RestApi from "../../services/api";

export default class faq extends Component {
    constructor(props){
        super(props)
        this.state = {
            services: [],
            activeService:''
        }
    }
    componentDidMount(){
        this.fetchData()
    }

    fetchData(){
        RestApi.faq().then((res)=>{
            console.log(res)
            if(res.data.status){
               let grouped =  Common.groupBy('service_name')(res.data.data)
                console.log("grouped",grouped)
                this.setState({
                    services: grouped,
                    activeService: res.data.data[0].service_id
                })
            }
        })
    }
  render() {
    return (
      <div>
        <div class="breadcrumbpane">
          <div class="container">
            <h1 class="pull-left">Frequently Asked Questions</h1>
          </div>
        </div>
        <div class="container clearfix">
          <div class="row">
            <div class="col-md-4 services_list services_heading">
              <h3>Our services list</h3>
              <ul class="nav nav-pills flex-column" role="tablist">
                
              { 
                Object.entries(this.state.services).map((each)=> {
                  return  <li class="nav-item">
                    <a
                      href="#Corporate"
                      aria-controls="Corporate"
                      data-toggle="pill"
                    >
                      <strong>{each[0]}</strong>
                    </a>
                  </li>
                })
              }
                
              </ul>
            </div>

            <div class="col-md-8">
              <div class="search_help">
                <input
                  type="text"
                  class="form-control inputpane"
                  placeholder="Search.."
                />
                <button class="but_feild button">search</button>
              </div>
              <div class="tab-content tab_con">
                <div role="tabpanel" class="tab-pane active" id="business">
                  <div class="panel-group" id="accordion">
                    <div class="panel panel-default services_details clearfix">
                      <a
                        class="accordion-toggle"
                        data-toggle="collapse"
                        data-parent="#accordion"
                        href="#collapse1"
                        aria-expanded="false"
                      >
                        <h4 class="panel-title">
                          <i class="fa fa-asterisk" aria-hidden="true"></i>
                          Formation of Business Entity
                          <i class="arrow fa fa-angle-down"></i>
                        </h4>
                      </a>
                      <div
                        id="collapse1"
                        class="panel-collapse collapse in"
                        aria-expanded="false"
                      >
                        <div class="panel-body">
                          <div class="col-md-12">
                            <h5>The item support period</h5>
                            <p>
                              The item includes support for 6 months from the
                              purchase date. If you’re about to purchase the
                              item, you’ll have the option to purchase extended
                              item support, increasing the item support period
                              up to a maximum of 12 months from the date of
                              purchase.
                            </p>
                            <h5>What else is included?</h5>
                            <p>
                              Answering questions about how to use the item
                              Answering technical questions about the item (and
                              included third party assets) Help with defects in
                              the item or included third-party assets Item
                              updates to ensure ongoing compatibility and to
                              resolve security vulnerabilities Updates to ensure
                              the item works as described and is protected
                              against major security concerns Included version
                              updates for all items
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="panel panel-default services_details clearfix">
                      <a
                        class="accordion-toggle collapsed"
                        data-toggle="collapse"
                        data-parent="#accordion"
                        href="#collapse2"
                        aria-expanded="false"
                      >
                        <h4 class="panel-title">
                          <i class="fa fa-asterisk" aria-hidden="true"></i>
                          Statutory Registrations
                          <i class="arrow fa fa-angle-down"></i>
                        </h4>
                      </a>
                      <div
                        id="collapse2"
                        class="panel-collapse collapse"
                        aria-expanded="false"
                      >
                        <div class="panel-body">
                          <div class="col-md-12">
                            <h5>The item support period</h5>
                            <p>
                              The item includes support for 6 months from the
                              purchase date. If you’re about to purchase the
                              item, you’ll have the option to purchase extended
                              item support, increasing the item support period
                              up to a maximum of 12 months from the date of
                              purchase.
                            </p>
                            <h5>What else is included?</h5>
                            <p>
                              Answering questions about how to use the item
                              Answering technical questions about the item (and
                              included third party assets) Help with defects in
                              the item or included third-party assets Item
                              updates to ensure ongoing compatibility and to
                              resolve security vulnerabilities Updates to ensure
                              the item works as described and is protected
                              against major security concerns Included version
                              updates for all items
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="panel panel-default services_details clearfix">
                      <a
                        class="accordion-toggle collapsed"
                        data-toggle="collapse"
                        data-parent="#accordion"
                        href="#collapse3"
                        aria-expanded="false"
                      >
                        <h4 class="panel-title">
                          <i class="fa fa-asterisk" aria-hidden="true"></i>
                          Project Evaluation & Viability Studies
                          <i class="arrow fa fa-angle-down"></i>
                        </h4>
                      </a>
                      <div
                        id="collapse3"
                        class="panel-collapse collapse"
                        aria-expanded="false"
                      >
                        <div class="panel-body">
                          <div class="col-md-12">
                            <h5>The item support period</h5>
                            <p>
                              The item includes support for 6 months from the
                              purchase date. If you’re about to purchase the
                              item, you’ll have the option to purchase extended
                              item support, increasing the item support period
                              up to a maximum of 12 months from the date of
                              purchase.
                            </p>
                            <h5>What else is included?</h5>
                            <p>
                              Answering questions about how to use the item
                              Answering technical questions about the item (and
                              included third party assets) Help with defects in
                              the item or included third-party assets Item
                              updates to ensure ongoing compatibility and to
                              resolve security vulnerabilities Updates to ensure
                              the item works as described and is protected
                              against major security concerns Included version
                              updates for all items
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <!---------------corporate---------------> */}

                <div role="tabpanel" class="tab-pane" id="Corporate">
                  <div class="panel-group" id="accordion1">
                    <div class="panel panel-default services_details clearfix">
                      <a
                        class="accordion-toggle collapsed"
                        data-toggle="collapse"
                        data-parent="#accordion1"
                        href="#collapse11"
                        aria-expanded="false"
                      >
                        <h4 class="panel-title">
                          <i class="fa fa-asterisk" aria-hidden="true"></i>
                          Formation of a Company
                          <i class="arrow fa fa-angle-down"></i>
                        </h4>
                      </a>
                      <div
                        id="collapse11"
                        class="panel-collapse collapse"
                        aria-expanded="false"
                      >
                        <div class="panel-body">
                          <div class="col-md-12">
                            <h5>The item support period</h5>
                            <p>
                              The item includes support for 6 months from the
                              purchase date. If you’re about to purchase the
                              item, you’ll have the option to purchase extended
                              item support, increasing the item support period
                              up to a maximum of 12 months from the date of
                              purchase.
                            </p>
                            <h5>What else is included?</h5>
                            <p>
                              Answering questions about how to use the item
                              Answering technical questions about the item (and
                              included third party assets) Help with defects in
                              the item or included third-party assets Item
                              updates to ensure ongoing compatibility and to
                              resolve security vulnerabilities Updates to ensure
                              the item works as described and is protected
                              against major security concerns Included version
                              updates for all items
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="panel panel-default services_details">
                      <a
                        class="accordion-toggle collapsed"
                        data-toggle="collapse"
                        data-parent="#accordion1"
                        href="#collapse12"
                        aria-expanded="false"
                      >
                        <h4 class="panel-title">
                          <i class="fa fa-asterisk" aria-hidden="true"></i>
                          ROC Compliances<i class="arrow fa fa-angle-down"></i>
                        </h4>
                      </a>
                      <div
                        id="collapse12"
                        class="panel-collapse collapse"
                        aria-expanded="false"
                      >
                        <div class="panel-body">
                          <div class="col-md-12">
                            <h5>The item support period</h5>
                            <p>
                              The item includes support for 6 months from the
                              purchase date. If you’re about to purchase the
                              item, you’ll have the option to purchase extended
                              item support, increasing the item support period
                              up to a maximum of 12 months from the date of
                              purchase.
                            </p>
                            <h5>What else is included?</h5>
                            <p>
                              Answering questions about how to use the item
                              Answering technical questions about the item (and
                              included third party assets) Help with defects in
                              the item or included third-party assets Item
                              updates to ensure ongoing compatibility and to
                              resolve security vulnerabilities Updates to ensure
                              the item works as described and is protected
                              against major security concerns Included version
                              updates for all items
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="panel panel-default services_details clearfix">
                      <a
                        class="accordion-toggle collapsed"
                        data-toggle="collapse"
                        data-parent="#accordion1"
                        href="#collapse13"
                        aria-expanded="false"
                      >
                        <h4 class="panel-title">
                          <i class="fa fa-asterisk" aria-hidden="true"></i>
                          Management Consultancy
                          <i class="arrow fa fa-angle-down"></i>
                        </h4>
                      </a>
                      <div
                        id="collapse13"
                        class="panel-collapse collapse"
                        aria-expanded="false"
                      >
                        <div class="panel-body">
                          <div class="col-md-12">
                            <h5>The item support period</h5>
                            <p>
                              The item includes support for 6 months from the
                              purchase date. If you’re about to purchase the
                              item, you’ll have the option to purchase extended
                              item support, increasing the item support period
                              up to a maximum of 12 months from the date of
                              purchase.
                            </p>
                            <h5>What else is included?</h5>
                            <p>
                              Answering questions about how to use the item
                              Answering technical questions about the item (and
                              included third party assets) Help with defects in
                              the item or included third-party assets Item
                              updates to ensure ongoing compatibility and to
                              resolve security vulnerabilities Updates to ensure
                              the item works as described and is protected
                              against major security concerns Included version
                              updates for all items
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="panel panel-default services_details clearfix">
                      <a
                        class="accordion-toggle collapsed"
                        data-toggle="collapse"
                        data-parent="#accordion1"
                        href="#collapse14"
                        aria-expanded="false"
                      >
                        <h4 class="panel-title">
                          <i class="fa fa-asterisk" aria-hidden="true"></i>
                          MIS & Related Reports
                          <i class="arrow fa fa-angle-down"></i>
                        </h4>
                      </a>
                      <div
                        id="collapse14"
                        class="panel-collapse collapse"
                        aria-expanded="false"
                      >
                        <div class="panel-body">
                          <div class="col-md-12">
                            <h5>The item support period</h5>
                            <p>
                              The item includes support for 6 months from the
                              purchase date. If you’re about to purchase the
                              item, you’ll have the option to purchase extended
                              item support, increasing the item support period
                              up to a maximum of 12 months from the date of
                              purchase.
                            </p>
                            <h5>What else is included?</h5>
                            <p>
                              Answering questions about how to use the item
                              Answering technical questions about the item (and
                              included third party assets) Help with defects in
                              the item or included third-party assets Item
                              updates to ensure ongoing compatibility and to
                              resolve security vulnerabilities Updates to ensure
                              the item works as described and is protected
                              against major security concerns Included version
                              updates for all items
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                  </div>
                </div>

                {/* <!----financial-----> */}

                <div role="tabpanel" class="tab-pane" id="Financial">
                  <div class="panel-group" id="accordion2">
                    <div class="panel panel-default services_details clearfix">
                      <a
                        class="accordion-toggle collapsed"
                        data-toggle="collapse"
                        data-parent="#accordion2"
                        href="#collapse28"
                        aria-expanded="false"
                      >
                        <h4 class="panel-title">
                          <i class="fa fa-asterisk" aria-hidden="true"></i>
                          Project Finance<i class="arrow fa fa-angle-down"></i>
                        </h4>
                      </a>
                      <div
                        id="collapse28"
                        class="panel-collapse collapse"
                        aria-expanded="false"
                      >
                        <div class="panel-body">
                          <div class="col-md-12">
                            <h5>The item support period</h5>
                            <p>
                              The item includes support for 6 months from the
                              purchase date. If you’re about to purchase the
                              item, you’ll have the option to purchase extended
                              item support, increasing the item support period
                              up to a maximum of 12 months from the date of
                              purchase.
                            </p>
                            <h5>What else is included?</h5>
                            <p>
                              Answering questions about how to use the item
                              Answering technical questions about the item (and
                              included third party assets) Help with defects in
                              the item or included third-party assets Item
                              updates to ensure ongoing compatibility and to
                              resolve security vulnerabilities Updates to ensure
                              the item works as described and is protected
                              against major security concerns Included version
                              updates for all items
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="panel panel-default services_details clearfix">
                      <a
                        class="accordion-toggle collapsed"
                        data-toggle="collapse"
                        data-parent="#accordion2"
                        href="#collapse29"
                        aria-expanded="false"
                      >
                        <h4 class="panel-title">
                          <i class="fa fa-asterisk" aria-hidden="true"></i>
                          Restructuring of Finance
                          <i class="arrow fa fa-angle-down"></i>
                        </h4>
                      </a>
                      <div
                        id="collapse29"
                        class="panel-collapse collapse"
                        aria-expanded="false"
                      >
                        <div class="panel-body">
                          <div class="col-md-12">
                            <h5>The item support period</h5>
                            <p>
                              The item includes support for 6 months from the
                              purchase date. If you’re about to purchase the
                              item, you’ll have the option to purchase extended
                              item support, increasing the item support period
                              up to a maximum of 12 months from the date of
                              purchase.
                            </p>
                            <h5>What else is included?</h5>
                            <p>
                              Answering questions about how to use the item
                              Answering technical questions about the item (and
                              included third party assets) Help with defects in
                              the item or included third-party assets Item
                              updates to ensure ongoing compatibility and to
                              resolve security vulnerabilities Updates to ensure
                              the item works as described and is protected
                              against major security concerns Included version
                              updates for all items
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="panel panel-default services_details clearfix">
                      <a
                        class="accordion-toggle collapsed"
                        data-toggle="collapse"
                        data-parent="#accordion2"
                        href="#collapse30"
                        aria-expanded="false"
                      >
                        <h4 class="panel-title">
                          <i class="fa fa-asterisk" aria-hidden="true"></i>
                          Debt Syndication / Resolution
                          <i class="arrow fa fa-angle-down"></i>
                        </h4>
                      </a>
                      <div
                        id="collapse30"
                        class="panel-collapse collapse"
                        aria-expanded="false"
                      >
                        <div class="panel-body">
                          <div class="col-md-12">
                            <h5>The item support period</h5>
                            <p>
                              The item includes support for 6 months from the
                              purchase date. If you’re about to purchase the
                              item, you’ll have the option to purchase extended
                              item support, increasing the item support period
                              up to a maximum of 12 months from the date of
                              purchase.
                            </p>
                            <h5>What else is included?</h5>
                            <p>
                              Answering questions about how to use the item
                              Answering technical questions about the item (and
                              included third party assets) Help with defects in
                              the item or included third-party assets Item
                              updates to ensure ongoing compatibility and to
                              resolve security vulnerabilities Updates to ensure
                              the item works as described and is protected
                              against major security concerns Included version
                              updates for all items
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="panel panel-default services_details clearfix">
                      <a
                        class="accordion-toggle collapsed"
                        data-toggle="collapse"
                        data-parent="#accordion2"
                        href="#collapse31"
                        aria-expanded="false"
                      >
                        <h4 class="panel-title">
                          <i class="fa fa-asterisk" aria-hidden="true"></i>
                          Buyouts & JV Collaboration
                          <i class="arrow fa fa-angle-down"></i>
                        </h4>
                      </a>
                      <div
                        id="collapse31"
                        class="panel-collapse collapse"
                        aria-expanded="false"
                      >
                        <div class="panel-body">
                          <div class="col-md-12">
                            <h5>The item support period</h5>
                            <p>
                              The item includes support for 6 months from the
                              purchase date. If you’re about to purchase the
                              item, you’ll have the option to purchase extended
                              item support, increasing the item support period
                              up to a maximum of 12 months from the date of
                              purchase.
                            </p>
                            <h5>What else is included?</h5>
                            <p>
                              Answering questions about how to use the item
                              Answering technical questions about the item (and
                              included third party assets) Help with defects in
                              the item or included third-party assets Item
                              updates to ensure ongoing compatibility and to
                              resolve security vulnerabilities Updates to ensure
                              the item works as described and is protected
                              against major security concerns Included version
                              updates for all items
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="panel panel-default services_details clearfix">
                      <a
                        class="accordion-toggle collapsed"
                        data-toggle="collapse"
                        data-parent="#accordion2"
                        href="#collapse32"
                        aria-expanded="false"
                      >
                        <h4 class="panel-title">
                          <i class="fa fa-asterisk" aria-hidden="true"></i>
                          PE/VC Funding<i class="arrow fa fa-angle-down"></i>
                        </h4>
                      </a>
                      <div
                        id="collapse32"
                        class="panel-collapse collapse"
                        aria-expanded="false"
                      >
                        <div class="panel-body">
                          <div class="col-md-12">
                            <h5>The item support period</h5>
                            <p>
                              The item includes support for 6 months from the
                              purchase date. If you’re about to purchase the
                              item, you’ll have the option to purchase extended
                              item support, increasing the item support period
                              up to a maximum of 12 months from the date of
                              purchase.
                            </p>
                            <h5>What else is included?</h5>
                            <p>
                              Answering questions about how to use the item
                              Answering technical questions about the item (and
                              included third party assets) Help with defects in
                              the item or included third-party assets Item
                              updates to ensure ongoing compatibility and to
                              resolve security vulnerabilities Updates to ensure
                              the item works as described and is protected
                              against major security concerns Included version
                              updates for all items
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="panel panel-default services_details clearfix">
                      <a
                        class="accordion-toggle collapsed"
                        data-toggle="collapse"
                        data-parent="#accordion2"
                        href="#collapse33"
                        aria-expanded="false"
                      >
                        <h4 class="panel-title">
                          <i class="fa fa-asterisk" aria-hidden="true"></i>
                          Distressed Assets Recapitalization
                          <i class="arrow fa fa-angle-down"></i>
                        </h4>
                      </a>
                      <div
                        id="collapse33"
                        class="panel-collapse collapse"
                        aria-expanded="false"
                      >
                        <div class="panel-body">
                          <div class="col-md-12">
                            <h5>The item support period</h5>
                            <p>
                              The item includes support for 6 months from the
                              purchase date. If you’re about to purchase the
                              item, you’ll have the option to purchase extended
                              item support, increasing the item support period
                              up to a maximum of 12 months from the date of
                              purchase.
                            </p>
                            <h5>What else is included?</h5>
                            <p>
                              Answering questions about how to use the item
                              Answering technical questions about the item (and
                              included third party assets) Help with defects in
                              the item or included third-party assets Item
                              updates to ensure ongoing compatibility and to
                              resolve security vulnerabilities Updates to ensure
                              the item works as described and is protected
                              against major security concerns Included version
                              updates for all items
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <!----------) Outsourcing Services--------> */}

                <div role="tabpanel" class="tab-pane" id="outsourcing">
                  <div class="panel-group" id="accordion3">
                    <div class="panel panel-default services_details clearfix">
                      <a
                        class="accordion-toggle collapsed"
                        data-toggle="collapse"
                        data-parent="#accordion3"
                        href="#collapse45"
                        aria-expanded="false"
                      >
                        <h4 class="panel-title">
                          <i class="fa fa-asterisk" aria-hidden="true"></i>
                          Accounting / Booking Keeping
                          <i class="arrow fa fa-angle-down"></i>
                        </h4>
                      </a>
                      <div
                        id="collapse45"
                        class="panel-collapse collapse"
                        aria-expanded="false"
                      >
                        <div class="panel-body">
                          <div class="col-md-12">
                            <h5>The item support period</h5>
                            <p>
                              The item includes support for 6 months from the
                              purchase date. If you’re about to purchase the
                              item, you’ll have the option to purchase extended
                              item support, increasing the item support period
                              up to a maximum of 12 months from the date of
                              purchase.
                            </p>
                            <h5>What else is included?</h5>
                            <p>
                              Answering questions about how to use the item
                              Answering technical questions about the item (and
                              included third party assets) Help with defects in
                              the item or included third-party assets Item
                              updates to ensure ongoing compatibility and to
                              resolve security vulnerabilities Updates to ensure
                              the item works as described and is protected
                              against major security concerns Included version
                              updates for all items
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="panel panel-default services_details clearfix">
                      <a
                        class="accordion-toggle collapsed"
                        data-toggle="collapse"
                        data-parent="#accordion3"
                        href="#collapse46"
                        aria-expanded="false"
                      >
                        <h4 class="panel-title">
                          <i class="fa fa-asterisk" aria-hidden="true"></i>
                          Bank Reconciliation
                          <i class="arrow fa fa-angle-down"></i>
                        </h4>
                      </a>
                      <div
                        id="collapse46"
                        class="panel-collapse collapse"
                        aria-expanded="false"
                      >
                        <div class="panel-body">
                          <div class="col-md-12">
                            <h5>The item support period</h5>
                            <p>
                              The item includes support for 6 months from the
                              purchase date. If you’re about to purchase the
                              item, you’ll have the option to purchase extended
                              item support, increasing the item support period
                              up to a maximum of 12 months from the date of
                              purchase.
                            </p>
                            <h5>What else is included?</h5>
                            <p>
                              Answering questions about how to use the item
                              Answering technical questions about the item (and
                              included third party assets) Help with defects in
                              the item or included third-party assets Item
                              updates to ensure ongoing compatibility and to
                              resolve security vulnerabilities Updates to ensure
                              the item works as described and is protected
                              against major security concerns Included version
                              updates for all items
                            </p>
                          </div>
                        </div>
                        2
                      </div>
                    </div>
                  </div>
                </div>

                {/* <!---------------) Foreign Company Setup in India---------> */}

                <div role="tabpanel" class="tab-pane" id="foreign">
                  <div class="panel-group" id="accordion4">
                    <div class="panel panel-default services_details clearfix">
                      <a
                        class="accordion-toggle collapsed"
                        data-toggle="collapse"
                        data-parent="#accordion4"
                        href="#collapse55"
                        aria-expanded="false"
                      >
                        <h4 class="panel-title">
                          <i class="fa fa-asterisk" aria-hidden="true"></i>
                          Formation of a company in India by Non Residents
                          <i class="arrow fa fa-angle-down"></i>
                        </h4>
                      </a>
                      <div
                        id="collapse55"
                        class="panel-collapse collapse"
                        aria-expanded="false"
                      >
                        <div class="panel-body">
                          <div class="col-md-12">
                            <h5>The item support period</h5>
                            <p>
                              The item includes support for 6 months from the
                              purchase date. If you’re about to purchase the
                              item, you’ll have the option to purchase extended
                              item support, increasing the item support period
                              up to a maximum of 12 months from the date of
                              purchase.
                            </p>
                            <h5>What else is included?</h5>
                            <p>
                              Answering questions about how to use the item
                              Answering technical questions about the item (and
                              included third party assets) Help with defects in
                              the item or included third-party assets Item
                              updates to ensure ongoing compatibility and to
                              resolve security vulnerabilities Updates to ensure
                              the item works as described and is protected
                              against major security concerns Included version
                              updates for all items
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="panel panel-default services_details clearfix">
                      <a
                        class="accordion-toggle collapsed"
                        data-toggle="collapse"
                        data-parent="#accordion4"
                        href="#collapse56"
                        aria-expanded="false"
                      >
                        <h4 class="panel-title">
                          <i class="fa fa-asterisk" aria-hidden="true"></i>
                          Liasion Office / Project Office in India
                          <i class="arrow fa fa-angle-down"></i>
                        </h4>
                      </a>
                      <div
                        id="collapse56"
                        class="panel-collapse collapse"
                        aria-expanded="false"
                      >
                        <div class="panel-body">
                          <div class="col-md-12">
                            <h5>The item support period</h5>
                            <p>
                              The item includes support for 6 months from the
                              purchase date. If you’re about to purchase the
                              item, you’ll have the option to purchase extended
                              item support, increasing the item support period
                              up to a maximum of 12 months from the date of
                              purchase.
                            </p>
                            <h5>What else is included?</h5>
                            <p>
                              Answering questions about how to use the item
                              Answering technical questions about the item (and
                              included third party assets) Help with defects in
                              the item or included third-party assets Item
                              updates to ensure ongoing compatibility and to
                              resolve security vulnerabilities Updates to ensure
                              the item works as described and is protected
                              against major security concerns Included version
                              updates for all items
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
