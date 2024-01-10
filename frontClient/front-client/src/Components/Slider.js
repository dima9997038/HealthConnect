import React from 'react';
import {Carousel, Col, Row} from 'react-bootstrap';
import clinicImg1 from '../asserts/clinic1.jpg'
import clinicImg2 from '../asserts/clinic2.jpg'
import clinicImg3 from '../asserts/clinic3.jpg'
import clinicImg4 from '../asserts/clinic4.jpg'
import styled from "styled-components";
import LeftMenu from "./LeftMenu";

const Styles = styled.div`
  a, .navbar-brand, .navbar-nav {
    color: darkblue;

    &:hover {
      color: green;
    }
  }
`
const Slider = () => {

    return (
        <>
            <Styles>
                    <Row>
                        <Col sm={2}>
                            <LeftMenu/>
                        </Col>
                        <Col sm={10}>
                            <Carousel>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={clinicImg1}
                                        height="600"
                                        alt="clinic"
                                    />
                                    <Carousel.Caption>
                                        <h3>Clinic image</h3>
                                        <p>Very good!!!</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={clinicImg2}
                                        height="600"
                                        alt="clinic"
                                    />
                                    <Carousel.Caption>
                                        <h3>Clinic image2</h3>
                                        <p>Pretty good!!!</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={clinicImg3}
                                        height="600"
                                        alt="clinic"
                                    />
                                    <Carousel.Caption>
                                        <h3>Clinic image</h3>
                                        <p>Very good!!!</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={clinicImg4}
                                        height="600"
                                        alt="clinic"
                                    />
                                    <Carousel.Caption>
                                        <h3>Clinic image</h3>
                                        <p>Very good!!!</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </Col>
                    </Row>
            </Styles>
        </>
    );
};

export default Slider;