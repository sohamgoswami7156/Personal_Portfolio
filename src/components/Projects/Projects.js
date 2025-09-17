import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Timeline from "../Timeline/Timeline";
import resumeTailor from "../../Assets/Projects/resume-tailor.jpg";
import scrapbook from "../../Assets/Projects/scrapbook.jpg";
import ecolens from "../../Assets/Projects/ecolens.svg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={resumeTailor}
              isBlog={false}
              title="AI-Powered Resume Tailor"
              description="A modern web application that uses artificial intelligence to tailor your resume to specific job descriptions, increasing your chances of passing ATS (Applicant Tracking Systems) and landing interviews. Features smart resume analysis with Google AI Studio, side-by-side comparison, structured data extraction, and PDF export. Built with Next.js 15, React 19, TypeScript, and TailwindCSS with glassmorphism design and dark mode support."
              ghLink="https://github.com/sohamgoswami7156/ai-resume-tailor"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={scrapbook}
              isBlog={false}
              title="Scrapbook"
              description="A memory-sharing platform designed to help Alzheimer's patients and their families preserve and access cherished memories. Built during research at UCSF, the platform allows family members to input memories that are tagged with emotions and easily searchable. Features an AI chatbot trained on user memories for natural conversation and memory retrieval. Built with Next.js, React, Node.js, MongoDB, and Tailwind CSS. Won Best Human-Computer Interaction Award at Cal Hacks 10.0."
              ghLink="https://devpost.com/software/scrapbook-5h0f4v"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={ecolens}
              isBlog={false}
              title="🌱 EcoLens - Environmental Impact Scanner"
              description={`A simple web app that analyzes the environmental impact of everyday items from photos using Google Cloud Vision API.\n\nFeatures:\n📸 Photo Upload: Drag & drop or click to upload images\n🔍 Object Recognition: Uses Google Cloud Vision API to identify items\n📊 Impact Analysis: Shows environmental impact score, carbon footprint, and recyclability\n💡 Sustainability Tips: Provides actionable advice for eco-friendly choices\n📱 Responsive Design: Works on desktop and mobile devices`}
              ghLink="https://github.com/sohamgoswami7156/ecolens"
            />
          </Col>
        </Row>
      </Container>
      <Timeline />
    </Container>
  );
}

export default Projects;
