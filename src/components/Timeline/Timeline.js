import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaGraduationCap, FaCode, FaCalendarAlt, FaUniversity } from "react-icons/fa";

function Timeline() {
  return (
    <Container fluid className="timeline-section">
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Experience</strong>
        </h1>
        <p style={{ color: "white", textAlign: "center", marginBottom: "3rem" }}>
          A timeline of my professional journey in software research and development.
        </p>
        
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-marker">
              <FaUniversity className="timeline-icon" />
            </div>
            <div className="timeline-content">
              <div className="timeline-header">
                <h3>B.A in Computer Science</h3>
                <h4>Cornell University, College of Arts and Sciences</h4>
                <p className="timeline-location">Ithaca, NY</p>
                <p className="timeline-date">
                  <FaCalendarAlt className="me-2" />
                  Expected Graduation: May 2028
                </p>
              </div>
              <div className="timeline-description">
                <div className="coursework-section">
                  <h5>Relevant Coursework:</h5>
                  <div className="tech-tags">
                    <span className="tech-tag">Object-Oriented Programming & Data Structures</span>
                    <span className="tech-tag">Computational Genetics and Genomics</span>
                    <span className="tech-tag">Data Structures & Functional Programming</span>
                    <span className="tech-tag">Mathematical Foundations of Computing</span>
                    <span className="tech-tag">Linear Algebra</span>
                    <span className="tech-tag">Statistics</span>
                  </div>
                </div>
                <div className="organizations-section">
                  <h5>Student Organizations:</h5>
                  <div className="tech-tags">
                    <span className="tech-tag">Computational Biology Club (Member)</span>
                    <span className="tech-tag">Club Track and Field (Member)</span>
                    <span className="tech-tag">Coffee Club (Member)</span>
                    <span className="tech-tag">Hindu Student Council</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-marker">
              <FaCode className="timeline-icon" />
            </div>
            <div className="timeline-content">
              <div className="timeline-header">
                <h3>Software Development Assistant (AI Research)</h3>
                <h4>University of California, San Francisco</h4>
                <p className="timeline-location">San Francisco, CA</p>
                <p className="timeline-date">
                  <FaCalendarAlt className="me-2" />
                  June 2024 - August 2024
                </p>
              </div>
              <div className="timeline-description">
                <p>
                  Developed an AI-powered voice assistant for patient pre-consultations using NLP models from spaCy and TensorFlow, reducing average consultation time by 30%. Implemented RESTful APIs with Flask for seamless integration with existing healthcare systems, improving data collection efficiency by 25%. Analyzed patient interaction data to identify usage patterns and drive iterative improvements.
                </p>
                <div className="technologies">
                  <h5>Main Technologies:</h5>
                  <div className="tech-tags">
                    <span className="tech-tag">Python</span>
                    <span className="tech-tag">spaCy</span>
                    <span className="tech-tag">TensorFlow</span>
                    <span className="tech-tag">Flask</span>
                    <span className="tech-tag">NLP</span>
                    <span className="tech-tag">RESTful APIs</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-marker">
              <FaGraduationCap className="timeline-icon" />
            </div>
            <div className="timeline-content">
              <div className="timeline-header">
                <h3>Software Researcher</h3>
                <h4>Montclair State University</h4>
                <p className="timeline-location">Montclair, NJ</p>
                <p className="timeline-date">
                  <FaCalendarAlt className="me-2" />
                  June 2023 - August 2023
                </p>
              </div>
              <div className="timeline-description">
                <p>
                  Led research on cognitive development in children, focusing on spatial awareness in neurodivergent populations. Designed custom software tools for data visualization and trend analysis, streamlining the research methodology and increasing data analysis efficiency by 40%. Collaborated with educators and therapists to translate findings into actionable classroom strategies.
                </p>
                <div className="technologies">
                  <h5>Main Technologies:</h5>
                  <div className="tech-tags">
                    <span className="tech-tag">Python</span>
                    <span className="tech-tag">Data Visualization</span>
                    <span className="tech-tag">Data Analysis</span>
                    <span className="tech-tag">Research Methodology</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Container>
  );
}

export default Timeline;
