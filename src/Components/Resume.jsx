import React, { Component } from "react";
import { Container, Row, Col, Badge } from "shards-react";
import InstaStory from "./Mini-Components/InstaStory";
class Resume extends Component {
  render() {
    const { data } = this.props;
    if (data) {
      var skillmessage = data.skillmessage;

      var education = data.education.map(education => (
        <div key={education.school} className="card items flex-col">
          <Container>
            <Row>
              <Col lg="2">
                <InstaStory src={education.logo} />
              </Col>
              <Col lg="10">
                <h3 className="dark">{education.school}</h3>
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
          <Container>
            <Row>
              <Col lg="2">
                <InstaStory src={work.logo} />
              </Col>
              <Col>
                <h3 className="dark">{work.company}</h3>
                <p>
                  {work.title}
                  <span>&bull;</span>
                  <em>{work.years}</em>
                </p>
                <p>
                  {work.description.map(contribution => (
                    <li>{contribution}</li>
                  ))}
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      ));

      var skills = data.skills.map(skills => {
        var className = "bar-expand " + skills.name.toLowerCase();
        return (
          <Badge key={skills.name} style={{"margin" : "3px"}}>
            <span style={{ width: skills.level }} className={className} />
            <span className="skill">{skills.name}</span>
          </Badge>
        );
      });
    }

    return (
      //style={{ "max-width": "60%" }}
      <Container id="resume" style={{ maxWidth: "1250px" }}>
        <Row>
          <Col lg="3" className="items-heading">
            <h1>
              <span className="titles">
                Education
                <hr />
              </span>
            </h1>
          </Col>
          <Col lg="9">{education}</Col>
        </Row>
        <Row>
          <Col lg="3" className="items-heading">
            <h1>
              <span className="titles">
                {" "}
                Work
                <hr />
              </span>
            </h1>
          </Col>
          <Col lg="9">
            <div>{work}</div>
          </Col>
        </Row>
        <div id="skills" className="card items flex-row">
          <Col lg="4">
            <h1 className="titles">Skills</h1>
          </Col>
          <Col lg="8">
            {skillmessage}
            <div>
              <ul>{skills}</ul>
            </div>
          </Col>
        </div>
      </Container>
    );
  }
}

export default Resume;
