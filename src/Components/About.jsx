import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'shards-react';

class About extends Component {
   render() {

      if (this.props.data) {
         var name = this.props.data.name;
         var profilepic = "images/" + this.props.data.image;
         var bio = this.props.data.bio;
         var street = this.props.data.address.street;
         var city = this.props.data.address.city;
         var state = this.props.data.address.state;
         var zip = this.props.data.address.zip;
         var phone = this.props.data.phone;
         var email = this.props.data.email;
         var resumeDownload = this.props.data.resumedownload;
      }

      return (
         <Container>
            <Row>
               <div className="card">
                  <Col sm="12" md="4" lg="3">
                     <img src={profilepic} alt="Digdarshan Kunwar Profile Pic" className="profile-pic" />
                  </Col>
                  <Col sm="12" md="4" lg="9">
                     <div>
                        <h2>About Me</h2>

                        <p>{bio}</p>
                        <Row>
                           <Col>
                              <h2>Contact Details</h2>
                              <p>
                                 <span>{name}</span><br />
                                 <span>{street}<br />
                                    {city} {state}, {zip}
                                 </span><br />
                                 <span>{phone}</span><br />
                                 <span>{email}</span>
                              </p>
                           </Col>
                           <Col className="align-self-center" >
                              <a href={resumeDownload} ><Button>Download Resume</Button></a>
                           </Col>
                        </Row>
                     </div>
                  </Col>
               </div>
            </Row>
         </Container>
      );
   }
}

export default About;
