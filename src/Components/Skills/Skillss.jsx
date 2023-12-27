import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Skills.css";
import { SiWebhint, SiJava, SiReact, SiHiveBlockchain, SiJsonwebtokens } from "react-icons/si";
import { Container, Row, Col } from "react-bootstrap";

const Skillss = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="skills-section">
    <Container className="skills">
        <Col>
            <Row className="headings">
                <h2 className="skill-h">Skills</h2>
                <p className="skill-p">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum ipsum nihil aspernatur pariatur eaque repellendus?</p>
            </Row>
        </Col>

     <Carousel responsive={responsive} infinite={true} className="skill-slider">
                <div className="item">
                    <SiHiveBlockchain className="img" />
                    <h5>Blockchain Development</h5>
                </div>

                <div className="item">
                    <SiJava className="img" />
                    <h5>Java Development</h5>
                </div>

                <div className="item">
                    <SiReact className="img" />
                    <h5>React Development</h5>
                </div>

                <div className="item">
                    <SiJsonwebtokens className="img" />
                    <h5>Frontend Development</h5>
                </div>

                <div className="item">
                    <SiWebhint className="img" />
                    <h5>Backend Development</h5>
                </div>
            </Carousel>

            </Container>
    </div>
  );
};

export default Skillss;
