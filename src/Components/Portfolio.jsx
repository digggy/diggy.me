import React, { Component } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardImg,
  CardBody,
  CardFooter,
  Button,
  Container
} from "shards-react";

class Portfolio extends Component {
  render() {
    const { data } = this.props;
    if (data) {
      var projects = data.projects.map((projects, index) => {
        var projectImage = "images/portfolio/" + projects.image;
        return (
          <Card key={index} style={{ maxWidth: "350px", margin: "0.5rem" }}>
            <div key={projects.title} className="columns portfolio-item">
              <div className="item-wrap">
                <a href={projects.url} title={projects.title}>
                  <div className="portfolio-item-meta">
                    <CardHeader
                      className="browser-mockup"
                      style={{ textAlign: "right" }}
                    >
                      {" "}
                      🏆 Featured{" "}
                    </CardHeader>
                    <img
                      alt={projects.title}
                      src={projectImage}
                      style={{ width: "350px", height: "230px" }}
                      className={"img"}
                    />
                    <CardBody>
                      <CardTitle style={{ height: "3rem" }}>
                        {" "}
                        {projects.title}{" "}
                      </CardTitle>
                      <p>
                        {projects.category.description}
                        <br />
                        {projects.category.info}
                      </p>
                      <Button>Check Out 🔍</Button>
                    </CardBody>
                  </div>
                </a>
              </div>
            </div>
            <CardFooter />
          </Card>
        );
      });
    }

    return (
      <React.Fragment>
        <h1 className="text-center">
          <span className="titles">
            Check Out Some of My Works
            <hr className="center" />
          </span>
        </h1>
        <Container id="portfolio" style={{ maxWidth: "1240px" }}>
          <div className="row">
            <div className="flex-row">{projects}</div>
          </div>
        </Container>
      </React.Fragment>
    );
  }
}

export default Portfolio;
