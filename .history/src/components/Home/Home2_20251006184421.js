import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import myImg from '../../Assets/avatar.svg'
import Tilt from 'react-parallax-tilt'
import {AiFillGithub, AiOutlineTwitter, AiFillInstagram} from 'react-icons/ai'
import {FaLinkedinIn} from 'react-icons/fa'

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{fontSize: '2.6em'}}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              As a passionate Data Scientist Engineer, I specialize in transforming complex data into actionable insights and intelligent solutions. My expertise spans across the entire data science pipeline, from data collection to model deployment.
              <br />
              <br />I am proficient in programming languages like
              <i>
                <b className="purple"> Python, Java, C, and JavaScript </b>
              </i>
              with deep expertise in statistical analysis and machine learning algorithms.
              <br />
              <br />
              My core competencies include designing and implementing &nbsp;
              <i>
                <b className="purple">
                  Machine Learning Models, Deep Learning Architectures, and End-to-End Data Science Solutions{' '}
                </b>{' '}
                with specialization in <b className="purple">Computer Vision, Natural Language Processing, and Predictive Analytics.</b>
              </i>
              <br />
              <br />
              I leverage cutting-edge technologies including <b className="purple">TensorFlow, PyTorch</b> and
              <i>
                <b className="purple">
                  {' '}
                  Advanced ML Frameworks and Libraries
                </b>
              </i>
              &nbsp; such as
              <i>
                <b className="purple"> Scikit-learn, Keras, OpenCV, Pandas, NumPy, and Flask</b>
              </i>
              to build scalable, production-ready data science applications.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Rehan9508"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/rehan-mallick-7a83092a6/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}
export default Home2
