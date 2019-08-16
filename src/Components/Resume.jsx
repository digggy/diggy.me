import React, { Component } from 'react';
import { Container, Row, Col } from 'shards-react';

class Resume extends Component {
  render() {
    const { data } = this.props;
    if (data) {
      var skillmessage = data.skillmessage;

      var education = data.education.map(education => (
        <div key={education.school} className="card items">
          <h3>{education.school}</h3>
          <p >
            {education.degree}
            <span>&bull;</span>
            <em >{education.graduated}</em>
          </p>
          <p>{education.description}</p>
        </div>
      ));

      var work = data.work.map(work => (
        <div key={work.company}><h3>{work.company}</h3>
          <p >
            {work.title}
            <span>&bull;</span>
            <em >{work.years}</em>
          </p>
          <p>{work.description}</p>
        </div>
      ));

      var skills = data.skills.map(skills => {
        var className = 'bar-expand ' + skills.name.toLowerCase();
        return <li key={skills.name}><span style={{ width: skills.level }} className={className}></span><em>{skills.name}</em></li>
      });
    }

    return (
      <Container id="resume">
        <Row>
          <Col lg="3">
            <h1><span>Education</span></h1>
          </Col>
          <Col lg="9">
            {education}

          </Col>

        </Row>
        <Row>

          <h1><span>Work</span></h1>
          <div>
            {work}
          </div>
        </Row>
        <Row>
          <h1><span>Skills</span></h1>
          <div >
            {skillmessage}
            <div>
              <ul >
                {skills}
              </ul>
            </div>
          </div>
        </Row>
      </Container>
    );
  }
}

export default Resume;
