import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Type from "./Type";
import OverworldSearch from "../OverworldSearch";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Player One
              </h1>

              <h1 className="heading-name">
                SOHAM
                <strong className="main-name"> GOSWAMI</strong>
              </h1>

              <div className="hero-type">
                <Type />
              </div>
              <p className="hero-note">
                I’m a CS undergrad interested in software engineering and product management. I’ve been learning by building student-focused tools, leading product at Code Arena, contributing product feedback through OpenAI’s ChatGPT Research Lab, and helping turn Cornell’s GenAI usage study into useful insights.
              </p>
              <OverworldSearch />
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
