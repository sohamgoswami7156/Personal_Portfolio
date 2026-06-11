import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={12} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming because it lets me turn ideas into something real that people can actually use. Along the way, I’ve built everything from AI-powered voice assistants in healthcare to award-winning platforms that help Alzheimer’s patients connect with family.
              <br />
              <br />
              I’m fluent in <b className="purple">Python, Java, MERN stack, OCaml, and Git</b>. My main interests are building impactful web technologies, exploring AI/ML applications, and designing products that make life easier.
              <br />
              <br />
              Whenever I can, I dive into projects that blend creativity and tech—whether that’s optimizing backend systems, crafting smooth user experiences, or experimenting with cloud platforms.
            </p>
          </Col>
        </Row>
        {/* Removed 'days I code' and all other skill/tool icons except the ones listed above */}
        <Row>
          <Col md={12} className="home-about-social">
            <p style={{ fontSize: "2em", fontWeight: "bold" }}>
              I'd love to<span className="purple"> talk or connect </span>with you!
            </p>
            <p style={{ marginBottom: "10px" }}>
              Email me at: <a href="mailto:sbg226@cornell.edu" className="purple">sbg226@cornell.edu</a>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons" style={{ marginRight: "16px" }}>
                <a
                  href="https://github.com/sohamgoswami7156"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/soham-goswami-5085a1325"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
