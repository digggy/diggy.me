import React, { Component } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  CardFooter,
  Button,
  Container
} from "shards-react";
// import { CarouselProvider, Slider, Slide } from "pure-react-carousel";

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
                      style={{ textAlign: "center" }}
                    >
                      {" "}
                      {projects.tag}{" "}
                    </CardHeader>
                    <img
                      alt={projects.title}
                      src={projectImage}
                      className={"img img-container"}
                    />

                    <CardBody>
                      <CardTitle style={{ height: "3rem" }}>
                        {" "}
                        <span className="dark">
                          <b>{projects.title} </b>
                        </span>
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
      <section id="my-portfolio">
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
      </section>
    );
  }
}

export default Portfolio;
