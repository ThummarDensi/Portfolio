import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import birthday from "../../Assets/Projects/birthday.png";
import stopwatch from "../../Assets/Projects/stopwatch.png";
import foodies from "../../Assets/Projects/foodies.png";
import portfolio from "../../Assets/Projects/portfolio.png";
import ttt from "../../Assets/Projects/game.png";
import bookhaven from "../../Assets/Projects/bookhaven.png";
import admission from "../../Assets/Projects/admission.png";

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
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Portfolio"
              description="A personal portfolio website built with React.js, Node.js, Express.js, and CSS3, utilizing React Router v6 for seamless navigation across multiple pages. Designed and developed entirely by me, it showcases my skills and projects with a responsive, user-friendly interface."
              ghLink="https://github.com/ThummarDensi/Portfolio"
              demoLink="https://densi-portfolio.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bookhaven}
              isBlog={false}
              title="Bookhaven"
              description="A user-friendly web platform for browsing and purchasing books, built with HTML, CSS, and JavaScript. It includes pages for Home, About, Contact, Shop, Cart, Order, Checkout, and Search, deployed on Vercel with MySQL integration for data management, and developed collaboratively using Git, GitHub, and Figma."
              ghLink="https://github.com/ThummarDensi/BookHaven"
              demoLink="https://book-haven-blue.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={foodies}
              isBlog={false}
              title="Foodies"
              description="A dynamic food delivery web app built with HTML, CSS, and JavaScript, offering an intuitive ordering experience with pages for Home, About, Dish, Cart, Login, Register, and Order. Deployed on Vercel for scalability, it ensures fast performance with development managed via Git and GitHub."
              ghLink="https://github.com/ThummarDensi/Foodies"
              demoLink="https://foodies-wine.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={birthday}
              isBlog={false}
              title="Birthday Card"
              description="A customizable digital birthday card created with HTML, CSS, and JavaScript, featuring interactive designs and animations. Deployed on Netlify, it allows users to personalize greetings, making it a fun and engaging way to celebrate birthdays."
              ghLink="https://github.com/ThummarDensi/Birthday_Card"
              demoLink="https://brother-birthday-card.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ttt}
              isBlog={false}
              title="Tic-Tac-Toe"
              description="A classic Tic-Tac-Toe game implemented with HTML, CSS, and JavaScript, offering a simple yet engaging two-player experience. Deployed on Netlify, it includes a responsive design and basic game logic for an enjoyable playtime."
              ghLink="https://github.com/ThummarDensi/Tic-Tac-Toe"
              demoLink="https://ultimate-t3-game.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={stopwatch}
              isBlog={false}
              title="Stop Watch"
              description="A functional stopwatch application built with HTML, CSS, and JavaScript, providing start, stop, and reset features with a clean, responsive interface. Deployed on Netlify, it’s a practical tool for timing activities with precision."
              ghLink="https://github.com/ThummarDensi/StopWatch"
              demoLink="https://easy-to-use-timer.netlify.app/"      
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={admission}
              isBlog={false}
              title="Admission Portal"
              description="Admission Portal is a user-friendly web and mobile app built with Dart and Flutter, designed to streamline university applications. It features intuitive pages for Home, About, Contact, Application, Dashboard, and Profile, enabling students to manage deadlines, track progress, and store application materials seamlessly. Powered by Firebase for data management and deployed on Vercel for scalability, it uses Git, GitHub, and Figma for collaborative development and UI/UX design."
              ghLink="https://github.com/ThummarDensi/Admission-Portal"
              demoLink="https://admissionsphere.netlify.app"      
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;