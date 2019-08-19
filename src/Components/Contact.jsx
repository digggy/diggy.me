import React, { Component } from "react";
import {
  Form,
  FormInput,
  FormGroup,
  FormTextarea,
  Button,
  Container,
  Row,
  Col
} from "shards-react";
class Contact extends Component {
  render() {
    if (this.props.data) {
      var name = this.props.data.name;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone = this.props.data.phone;
      var email = this.props.data.email;
      var message = this.props.data.contactmessage;
    }

    return (
      <section>
        <div className="contact-header">
          <h1>
            <span>Get In Touch.</span>
          </h1>
          <p>{message}</p>
        </div>
        <div>
          <Container>
            <Row>
              <Col>
                <Form
                  action=""
                  method="post"
                  id="contactForm"
                  name="contactForm"
                >
                  <fieldset>
                    <div>
                      <FormGroup>
                        <label htmlFor="contactName">
                          Name <span className="required">*</span>
                        </label>
                      </FormGroup>
                      <FormInput
                        type="text"
                        defaultValue=""
                        size="35"
                        id="contactName"
                        name="contactName"
                        onChange={this.handleChange}
                      />
                    </div>

                    <div>
                      <FormGroup>
                        <label htmlFor="contactEmail">
                          Email <span className="required">*</span>
                        </label>
                        <FormInput
                          type="text"
                          defaultValue=""
                          size="35"
                          id="contactEmail"
                          name="contactEmail"
                          onChange={this.handleChange}
                        />
                      </FormGroup>
                    </div>

                    <div>
                      <FormGroup>
                        <label htmlFor="contactSubject">Subject</label>
                        <FormInput
                          type="text"
                          defaultValue=""
                          size="35"
                          id="contactSubject"
                          name="contactSubject"
                          onChange={this.handleChange}
                        />
                      </FormGroup>
                    </div>

                    <div>
                      <FormGroup>
                        <label htmlFor="contactMessage">
                          Message <span className="required">*</span>
                        </label>
                        <FormTextarea
                          cols="50"
                          rows="15"
                          id="contactMessage"
                          name="contactMessage"
                        />
                      </FormGroup>
                    </div>

                    <div>
                      <Button className="submit">Submit</Button>
                      <span id="image-loader">
                        <img alt="" src="images/loader.gif" />
                      </span>
                    </div>
                  </fieldset>
                </Form>

                <div id="message-warning"> Error boy</div>
                <div id="message-success">
                  <i className="fa fa-check" />
                  Your message was sent, thank you!
                  <br />
                </div>
              </Col>

              <Col>
                <aside className="four columns footer-widgets">
                  <div className="widget widget_contact">
                    <h4>Address and Phone</h4>
                    <p className="address">
                      {name}
                      <br />
                      {street} <br />
                      {city}, {state} {zip}
                      <br />
                      <span>{phone}</span>
                    </p>
                  </div>

                  <div className="widget widget_tweets">
                    <h4 className="widget-title">Latest Tweets</h4>
                    <ul id="twitter">
                      <li>
                        <span>
                          This is Photoshop's version of Lorem Ipsum. Proin
                          gravida nibh vel velit auctor aliquet. Aenean
                          sollicitudin, lorem quis bibendum auctor, nisi elit
                          consequat ipsum
                          <a href="#">http://t.co/CGIrdxIlI3</a>
                        </span>
                        <b>
                          <a href="#">2 Days Ago</a>
                        </b>
                      </li>
                      <li>
                        <span>
                          Sed ut perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque laudantium, totam
                          rem aperiam, eaque ipsa quae ab illo inventore
                          veritatis et quasi
                          <a href="#">http://t.co/CGIrdxIlI3</a>
                        </span>
                        <b>
                          <a href="#">3 Days Ago</a>
                        </b>
                      </li>
                    </ul>
                  </div>
                </aside>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    );
  }
}

export default Contact;
