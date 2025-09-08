import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I'm <span className="purple">Soham Goswami</span> from <span className="purple">New York, NY</span>.<br />
            I'm currently a student at Cornell University, majoring in Computer Science and Psychology.<br /><br />
            I love building things that make life easier, whether it's web apps, AI tools, or creative side projects. My journey has taken me from developing voice assistants for healthcare to designing platforms that help people connect and thrive.<br /><br />
            I'm passionate about learning new technologies, collaborating with others, and solving real-world problems. When I'm not coding, you'll find me playing basketball, running, catching Pokémon, or battling in Clash Royale.<br /><br />
            If you want to chat about tech, research, or just life, feel free to reach out!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Basketball
            </li>
            <li className="about-activity">
              <ImPointRight /> Running
            </li>
            <li className="about-activity">
              <ImPointRight /> Pokemon
            </li>
            <li className="about-activity">
              <ImPointRight /> Clash Royale 
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
