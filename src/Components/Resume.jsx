import React, { Component } from "react";
import { Container, Row, Col, Badge } from "shards-react";

class Resume extends Component {
  render() {
    const { data } = this.props;
    if (data) {
      var skillmessage = data.skillmessage;

      var education = data.education.map(education => (
        <div key={education.school} className="card items flex-col">
          <Container>
            <Row>
              <Col lg="1">ok</Col>
              <Col lg="11">
                <h3>{education.school}</h3>
                <p>
                  {education.degree}
                  <span>&bull;</span>
                  <em>{education.graduated}</em>
                </p>
                <p>{education.description}</p>
              </Col>
            </Row>
          </Container>
        </div>
      ));

      var work = data.work.map(work => (
        <div key={work.company} className="card items flex-col">
          <h3>{work.company}</h3>
          <p>
            {work.title}
            <span>&bull;</span>
            <em>{work.years}</em>
          </p>
          <p>{work.description}</p>
        </div>
      ));

      var skills = data.skills.map(skills => {
        var className = "bar-expand " + skills.name.toLowerCase();
        return (
          <React.Fragment>
            <Badge key={skills.name}>
              <span style={{ width: skills.level }} className={className} />
              <em>{skills.name}</em>
            </Badge>
          </React.Fragment>
        );
      });
    }

    return (
      //style={{ "max-width": "60%" }}
      <Container id="resume" style={{ "max-width": "1250px" }}>
        <Row>
          <Col lg="3" className="items-heading">
            <h1>Education</h1>
          </Col>
          <Col lg="9">{education}</Col>
        </Row>
        <Row>
          <Col lg="3" className="items-heading">
            <h1>
              <span>Work</span>
            </h1>
          </Col>
          <Col lg="9">
            <div>{work}</div>
          </Col>
        </Row>
        <Row className="card items">
          <h1>
            <span>Skills</span>
          </h1>
          <div>
            {skillmessage}
            <div>
              <ul>{skills}</ul>
            </div>
          </div>
        </Row>
      </Container>
    );
  }
}

export default Resume;
