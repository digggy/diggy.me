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
      var projects = data.projects.map(function(projects) {
        var projectImage = "images/portfolio/" + projects.image;
        return (
          <Card style={{ maxWidth: "400px", margin: "0.5rem" }}>
            <div key={projects.title} className="columns portfolio-item">
              <div className="item-wrap">
                <a href={projects.url} title={projects.title}>
                  <div className="portfolio-item-meta">
                    <CardHeader>
                      {" "}
                      <h5>{projects.title}</h5>{" "}
                    </CardHeader>
                    <img
                      alt={projects.title}
                      src={projectImage}
                      style={{ maxWidth: "400px" }}
                      className={"img"}
                    />
                    <CardFooter>
                      <p>{projects.category}</p>
                    </CardFooter>
                  </div>
                </a>
              </div>
            </div>
          </Card>
        );
      });
    }

    <Card style={{ maxWidth: "300px" }}>
      <CardHeader>Card header</CardHeader>
      <CardImg src="https://place-hold.it/300x200" />
      <CardBody>
        <CardTitle>Lorem Ipsum</CardTitle>
        <p>Lorem ipsum dolor sit amet.</p>
        <Button>Read more &rarr;</Button>
      </CardBody>
      <CardFooter>Card footer</CardFooter>
    </Card>;

    return (
      <Container id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>

            <div className="flex-row">{projects}</div>
          </div>
        </div>
      </Container>
    );
  }
}

export default Portfolio;
