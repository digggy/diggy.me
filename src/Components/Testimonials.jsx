import React, { Component } from "react";
import { Container, Row, Col } from "shards-react";
import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

function Review(props) {
  const { testimonials, index } = props;
  return (
    <li key={testimonials.user}>
      <Container>
        <Row>
          <Col lg="2" className="pt-4">
            <img
              src={"images/testimonials/" + testimonials.image}
              className="testimonials-image"
            />
          </Col>
          <Col lg="10" className="p-5">
            <span class="display-4 quotemark">❝</span>
            <h4 className="dark">{testimonials.message}</h4>
            {testimonials.text}

            <div className="user-info">
              <br />
              {testimonials.user}
              <div>
                {testimonials.designation} : {testimonials.company}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </li>
  );
}

class Testimonials extends Component {
  render() {
    if (this.props.data) {
      var testimonials = this.props.data.testimonials.map(function(
        testimonials,
        index
      ) {
        return (
          <Slide index={index}>
            <Review testimonials={testimonials} index={index} />{" "}
          </Slide>
        );
      });
    }

    return (
      <section id="testimonials">
        <Container>
          <div class="contact-header">
            <h1>
              <span class="titles">
                Testimonials
                <hr className="center" />
              </span>
            </h1>
          </div>

          <CarouselProvider
            isPlaying={true}
            interval={6000}
            naturalSlideWidth={10}
            naturalSlideHeight={2.2}
            totalSlides={2}
          >
            <Slider>{testimonials}</Slider>
          </CarouselProvider>
        </Container>
      </section>
    );
  }
}

export default Testimonials;
