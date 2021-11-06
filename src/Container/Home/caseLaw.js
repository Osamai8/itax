import React, { Component } from "react";
import Footer from "../../Common/footer";
import RestApi from "../../services/api";
import Common from "../../Common/common";
import Newsletter from "../../Components/home/subscribeNewsletter";
import { Link } from "react-router-dom";
import ModalRoot from "../../Components/modal/modalRoot";
import CaseLawModal from "../../Components/modal/caseLawModal";

export default class CaseLaw extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      data: [],
      columns:['all','under_law','under_section','case_name','case_number','citation'],
      previewContent: "",
      previewHeading: "",
      currentPage: 1,
      totalPages: 1,
      selectedColumn: 'all',
      search: "",
      paginateSeries:1,
    };
  }

  componentDidMount() {
    this.fetchData();
  }
  componentDidUpdate(prevProps, prevState) {
    // console.log("update",this.state.currentPage)
    if (prevState.currentPage != this.state.currentPage) {
      this.fetchData();
    }
  }
  fetchData() {
    let { currentPage, selectedColumn, search } = this.state;
    RestApi.caseLaw(currentPage, selectedColumn, search).then((res) => {
      console.log(" case law: ", res);
      //   let grouped = Common.groupBy(['Service_category_id'])(res.data.data);
      if (res.data.status && res.data.data.data) {
        this.setState({
          data: res.data.data.data,
          currenPage: res.data.data.currenPage,
          totalPages:res.data.data.last_page
        });
      }
    });
  }
  handleClick(previewContent, previewHeading) {
    this.setState({
      previewContent,
      previewHeading,
      isOpen: true,
    });
  }
  changePage(currentPage) {
    console.log(currentPage);
    if (currentPage != this.state.currentPage && !isNaN(currentPage)) {
      this.setState({ currentPage });
    }
  }
  handlePagination(paginateSeries){
    this.setState({
      currentPage:paginateSeries,
      paginateSeries
    })
  }
  pageNumbers() {
    let { totalPages,currentPage,paginateSeries } = this.state;
    let renderData = [];
        if(totalPages > 10){
          renderData.push(
            <>
              <li
                onClick={() => this.handlePagination(1)}
                className={
                  this.state.currentPage == 1 ? "page-item active" : "page-item"
                }
              >
                <a className="page-link">{"<<"}</a>
              </li>
            </>
          );
        }
    let series = totalPages > 9 ? paginateSeries + 9 : totalPages
       for (let i = paginateSeries; i <= series; i++) {
         if(i > totalPages) {
           break;
         }
      renderData.push(
        <>
          <li
            onClick={() => this.changePage(i)}
            className={
              this.state.currentPage == i ? "page-item active" : "page-item"
            }
          >
            <a className="page-link">{i}</a>
          </li>
        </>
      );
    }
    if(totalPages > 10){
      renderData.push(
        <>
          <li
            onClick={() => this.handlePagination(totalPages - 10)}
            className={
              this.state.currentPage == totalPages ? "page-item active" : "page-item"
            }
          >
            <a className="page-link">{">>"}</a>
          </li>
        </>
      );
    }
  // else {
  //   for (let i = currentPage ; i <= totalPages; i++) {
  //     renderData.push(
  //       <>
  //         <li
  //           onClick={() => this.changePage(i)}
  //           className={
  //             this.state.currentPage == i ? "page-item active" : "page-item"
  //           }
  //         >
  //           <a className="page-link">{i}</a>
  //         </li>
  //       </>
  //     );
  //   }
  // }
    return renderData;
  }
  handleColumnChange(e) {
    this.setState({
      selectedColumn: e.target.value,
    });
  }
  handleSearch(e) {
    this.setState({
      search: e.target.value,
    });
  }
  handleSubmit() {
    console.log("handleSubmit")
    this.fetchData();
  }
  render() {
    console.log("state", this.state);
    let { data,columns,selectedColumn } = this.state;
    console.log(data);
    return (
      <div>
        <div className="breadcrumbpane">
          <div className="container">
            <h1 className="pull-left">Case law</h1>
          </div>
        </div>
        <section>
          <div className="container">
            <div className="row">
              <div class="col-md-12">
                <div class="col col-md-5"></div>
                <div class="col col-md-7">
                    
                    <div class="search_help case-search">
                    <select className="form-control case-law-select" onChange={(e) => this.handleColumnChange(e)}>
                      {/* <option value="">All</option> */}
                      {columns.map((each)=> {
                        return <option selected={selectedColumn == each && 'selected'} value={`${each}`}>{`${each.toUpperCase()}`}</option>
                      })}
                    </select>
                      <input
                        onChange={(e) => this.handleSearch(e)}
                        type="text"
                        value={this.state.search}
                        class="form-control inputpane"
                        placeholder="Search.."
                      />
                      <button onClick={() => this.handleSubmit()}>
                        search
                      </button>
                    </div> 
                  {/* <button class="but_feild button">search</button> */}
                </div>
                <div class="current-opening">
                  <table class="table form-border text-center">
                    <tbody>
                      <tr class="job-summary">
                        <td
                          width="6%"
                          class="cal-right-wht txt-center cal-header"
                        >
                          No.
                        </td>
                        <td width="11%" class="cal-right-wht txt-center">
                          Law
                        </td>
                        <td width="9%" class="cal-right-wht txt-center">
                          Section
                        </td>
                        <td width="18%" class="cal-right-wht txt-center">
                          Case Name
                        </td>
                        <td width="10%" class="cal-right-wht txt-center">
                          Case Number
                        </td>
                        <td width="8%" class="cal-right-wht txt-center">
                          Order Date
                        </td>
                        <td width="16%" class="cal-right-wht txt-center">
                          Citation
                        </td>
                        <td width="8%">Judgement</td>
                      </tr>
                      {data.length > 0 &&
                        data.map((each, key) => {
                          return (
                            <tr>
                              <td>{++key}</td>
                              <th class="cal-border case-text">
                                {each.under_law}
                              </th>
                              <th class="cal-border case-text">
                                {each.under_section}
                              </th>
                              <th class="cal-border case-text">
                                {each.case_name}
                              </th>
                              <th class="cal-border case-text">
                                {each.case_number}
                              </th>
                              <th class="cal-border txt-center case-text">
                                {each.date_of_order}
                              </th>
                              <th class="cal-border case-text">
                                {each.citation != null ? each.citation : "NA"}
                              </th>
                              <td>
                                {each.judgement != null && (
                                  <a
                                    target="_blank"
                                    href="http://staging.itaxdoctor.com/uploads/2015/151020014301_upload.txt"
                                    download=""
                                  >
                                    <img
                                      src="https://itaxdoctor.idossapp.com/assets/front_end/images/pdf-icon.png"
                                      style={{ width: "22%" }}
                                    />
                                  </a>
                                )}
                                {each.gist != null && each.gist.length > 0 && (
                                  <a
                                    onClick={() =>
                                      this.handleClick(
                                        each.gist,
                                        each.case_name
                                      )
                                    }
                                    className="case-law-view"
                                  >
                                    {" "}
                                    View
                                  </a>
                                )}
                              </td>
                            </tr>
                          );
                        })}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="col-md-12">
                <nav className="blog-pagination">
                  {data.length > 0 && (
                    <ul className="pagination">
                    <li className="page-item">
                      <a
                        onClick={() =>
                          // this.state.currentPage != 1 &&
                          this.handlePagination(this.state.paginateSeries > 10 ? this.state.paginateSeries - 10 : 1 )
                        }
                        className={
                          this.state.paginateSeries != 1
                            ? "page-link preview"
                            : "page-link preview disabled-pagi"
                        }
                        aria-label="Previous"
                      >
                        <i className="fa fa-angle-double-left"></i> Prev.
                      </a>
                    </li>
                    {this.pageNumbers()}
                    <li className="page-item">
                      <a
                        onClick={() =>
                         
                          this.handlePagination( this.state.paginateSeries + 10 < this.state.totalPages ? this.state.paginateSeries + 10 : this.state.paginateSeries  )
                        }
                        disabled
                        className={
                          this.state.paginateSeries + 10 < this.state.totalPages
                            ? "page-link next"
                            : "page-link next disabled-pagi"
                        }
                        aria-label="Next"
                      >
                        Next <i className="fa fa-angle-double-right"></i>
                      </a>
                    </li>
                  </ul>
                  )}
                </nav>
              </div>
            </div>
          </div>
        </section>
        <Newsletter />
        <Footer />
        <ModalRoot
          title={this.state.previewHeading}
          close={() => this.setState({ isOpen: false })}
          isOpen={this.state.isOpen}
          width={"80%"}
          body={
            <CaseLawModal
              title={this.state.previewHeading}
              content={this.state.previewContent}
            />
          }
        />
        )
      </div>
    );
  }
}
