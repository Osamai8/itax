import React, { Component } from "react";
import { connect } from "react-redux";
import Common from "../../Common/common";
import Footer from "../../Common/footer";
import Newsletter from "../../Components/home/subscribeNewsletter";
import RestApi from "../../services/api";
class Faq extends Component {
  constructor(props) {
    super(props);
    this.state = {
      services: [],
      activeService: "",
      allService:[],
      search:'',
      categories:[],
      allCategories:[]
    };
  }
  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    RestApi.faq().then((res) => { 
      console.log(res);
      if (res.data.status) {
        let grouped = Common.groupBy(["category_id",'service_name'])(res.data.data);
        console.log("res", res.data.data);
        let categoryIDs =[];
        res.data.data.map((c)=> {
          if(!categoryIDs.includes(c.category_id)){
            categoryIDs.push(c.category_id)
          }
        })
        let category = this.props.categories.filter((i)=> categoryIDs.includes(i.id))
        console.log("categories",categoryIDs)
        console.log("categories",category)
        this.setState({
          services: grouped,
          allService: grouped,
          activeService: category[0]?.id,
          categories:category,
          allCategories: category
        });
      }
    });
  }
  handleActiveServie(serviceId){
    this.setState({
      activeService:serviceId,
    })
  }
  handleSearch(e) {
    let filteredService = [];
    let filteredCategory = []
    if(e.target.value.length > 0) {
       filteredCategory = this.state.categories.filter((entry )=> {
        let category = entry.category_name.toLowerCase()
        let keyword = e.target.value.toLowerCase()
        return category.match(keyword)
      });
      for(const category in this.state.services){
        let ar1 = {}
       for(const services in this.state.allService[category]){
       let data = this.state.allService[category][services].filter((entry)=> {
          let service = entry.service_name.toLowerCase()
          let keyword = e.target.value.toLowerCase()
          return service.match(keyword)
        });
  
         ar1 = {[services]:data}
       }
       
       filteredService[category] =  ar1
      }
    } else {
      filteredCategory = this.state.allCategories
      filteredService = this.state.allService
    }
    console.log("-----",filteredService);
    this.setState({
      search:e.target.value,
      services: filteredService,
      categories: filteredCategory
    })
  }
  render() {
    console.log("state",this.state)
    let { services,activeService,categories } = this.state;
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
                {categories.map((each, key) => {
                  
                    return (
                      <li key={key} onClick={()=>this.handleActiveServie(each.id)}  
                      class={`nav-item ${each.id == activeService && 'active'}`}>
                        <a
                          href={`#${each.id}`}
                          aria-controls={each.id}
                          data-toggle="pill"
                        >
                          <strong>{each.category_name}</strong>
                        </a>
                      </li>
                    );                  
                })}
              </ul>
            </div>

            <div class="col-md-8">
              <div class="search_help">
                <input
                onChange={(e)=>this.handleSearch(e)}
                  type="text"
                  class="form-control inputpane"
                  placeholder="Search.."
                />
                <button class="but_feild button">search</button>
              </div>
              <div class="tab-content tab_con">
                {/* <!----financial-----> */}
                {/* <ReactFilter
                 value={this.state.search}
                 data={this.props.categories}
                 renderResults={results => (
                   <div>
                     {results.map((el) => {
                       console.log(el)
                       return(
                        <div>
                          <span>{el.name}</span>
                          <span>{el.email}</span>
                        </div>
                      )
                     })}
                   </div>
                 )} /> */}
                {Object.entries(services).map((each, key) => {
                  // console.log(each)
                 return <div key={key} role="tabpanel" class={`tab-pane ${activeService == each[0] && 'active'}`}  id={each[0]}>
                    <div class="panel-group" id={`accordion${each[0]}`}>
                      {Object.entries(each[1]).length > 0 &&
                        Object.entries(each[1]).map((item,iKey) => { 
                          // console.log("item",item)
                          return (
                            <div class="panel panel-default services_details clearfix">
                              <a
                                class="accordion-toggle collapsed"
                                data-toggle="collapse"
                                data-parent={`#accordion${each[0]}`}
                                href={`#collapse${each[0]}${iKey}`}
                                aria-expanded="false"
                              >
                                <h4 class="panel-title">
                                  <i
                                    class="fa fa-asterisk"
                                    aria-hidden="true"
                                  ></i>
                                  {" "}{item[0]}
                                  <i class="arrow fa fa-angle-down"></i>
                                </h4>
                              </a>
                              <div
                                id={`collapse${each[0]}${iKey}`}
                                class="panel-collapse collapse"
                                aria-expanded="false"
                              >
                                <div class="panel-body">
                                  <div class="col-md-12">
                                   { item[1].map((i)=> {
                                     return   (<> <h5>{i.question}</h5>
                                      <p>{i.answer}</p>
                                      </>)
                                   })
                                   
                                   }
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                    </div>
                  </div>;
                })}
              </div>
            </div>
          </div>
        </div>
        <Newsletter />
        <Footer />
      </div>
    );
  }
}
Faq.defaultProps = {
  categories: [],
  activeMenu: "home",
};
export default connect((state,props)=> {
  return {
    categories: state?.categories
  }
})(Faq)
