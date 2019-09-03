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
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      subject: "",
      email: "",
      message: ""
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }
  handleFormSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    if (this.props.data) {
      var name = this.props.data.name;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone = this.props.data.phone;
      // var email = this.props.data.email;
      var message = this.props.data.contactmessage;
    }

    return (
      <section id="contact">
        <div className="contact-header">
          <h1>
            <span className="titles">
              Get In Touch
              <hr className="center" />
            </span>
          </h1>
          <p>{message}</p>
        </div>
        <div>
          <Container>
            <Row>
              <Col lg="7" sm="12" className="p-5">
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
                        onChange={e => this.setState({ name: e.target.value })}
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
                          onChange={e =>
                            this.setState({ email: e.target.value })
                          }
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
                          onChange={e =>
                            this.setState({ subject: e.target.value })
                          }
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
                          onChange={e =>
                            this.setState({ message: e.target.value })
                          }
                        />
                      </FormGroup>
                    </div>

                    <div>
                      <Button
                        className="submit"
                        onClick={e => this.handleFormSubmit(e)}
                      >
                        {" "}
                        Submit
                      </Button>
                    </div>
                  </fieldset>
                </Form>
                {/* <div id="message-warning"> Error the message couldnt be processed.</div>
                <div id="message-success">
                  <i className="fa fa-check" />
                  Your message was sent, thank you!
                  <br />
                </div> */}
              </Col>

              <Col lg="5" sm="12" className="card items p-5">
                <div className="widget widget_contact">
                  <h4 className="titles">
                    <b>Address and Phone</b>
                  </h4>
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
                  <h4 className="titles">
                    <b>Latest Blog Posts</b>
                  </h4>
                  <ul id="twitter">
                    <li>
                      <span>
                        Do play they miss give so up. Words to up style of since
                        world. We leaf to snug on no need. Way own uncommonly
                        travelling now acceptance bed compliment solicitude.
                        Dissimilar admiration so terminated no in contrasted it.
                        Advantages entreaties mr he apartments do. Limits far
                        yet turned highly repair parish talked six. Draw fond
                        rank form nor the day eat.
                        <a href="#">http://t.co/CGIrdxIlI3</a>
                      </span>
                    </li>
                    <li>
                      <span>
                        Do play they miss give so up. Words to up style of since
                        world. We leaf to snug on no need. Way own
                        <a href="#">http://t.co/CGIrdxIlI3</a>
                      </span>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    );
  }
}

export default Contact;
