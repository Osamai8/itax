import React, { Component } from "react";
import testimonialsImage from "../../images/clients/testimonial-img.png";
import RestApi from "../../services/api";
export default class Testimonials extends Component {
  constructor(props) {
    super();
    this.state = {
      data: {},
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    RestApi.testimonials().then((response) => {
      console.log(response);
      if (response.data.data) {
        this.setState({
          data: response.data.data,
        });
      }
    });
  };

  render() {
    return (
      <section class="clienttestimonialspane" id="clients">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="section-title text-center">
                <h2>
                  Client <span>Testimonials</span>
                </h2>
                <p>
                  We provide a variety of services to our clients which make us
                  a one stop financial solution under one roof for our clients.
                  The range of services which are provided by us are as under:{" "}
                </p>
              </div>
            </div>
          </div>

          {this.state.data.length > 0 &&
            this.state.data.map((each, item) => {
             return (<div key={item} class="col-md-4">
                <div class="testimonials-v4">
                  <div class="testimonials-v4-in">{each.short_description}</div>
                  <img src={each.image} />
                  <span class="testimonials-author">
                    {each.name}
                    <br />
                    <em>
                      {each.date}
                      <br />
                    </em>
                  </span>
                </div>
              </div>);
            })}
        </div>
      </section>
    );
  }
}
