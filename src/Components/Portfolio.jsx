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
          <Card style={{ maxWidth: "350px", margin: "0.5rem" }}>
            <div key={projects.title} className="columns portfolio-item">
              <div className="item-wrap">
                <a href={projects.url} title={projects.title}>
                  <div className="portfolio-item-meta">
                  <CardHeader className ="browser-mockup" style={{'text-align':'right'}}> 🏆 Featured </CardHeader>
                    <img
                      alt={projects.title}
                      src={projectImage}
                      style={{ maxWidth: "350px", height: "250px"}}
                      className={"img"}
                    />
                    <CardBody>
                    <CardTitle style={{'height':'3rem'}}>
                      {" "}
                      {projects.title}{" "}
                    </CardTitle>
                      <p>{projects.category}</p>
                      <Button>Read more &rarr;</Button>
                      </CardBody>
                      <CardFooter>                    
                    </CardFooter>
                  </div>
                </a>
              </div>
            </div>
          </Card>
        );
      });
    }

    return (
	<React.Fragment>
		<h1 className="text-center mt-5 mb-5">Check Out Some of My Works</h1>
			<Container id="portfolio">
        		<div className="row">
            		<div className="flex-row">{projects}</div>
          		</div>
      		</Container>
      </React.Fragment>
    );
  }
}

export default Portfolio;
