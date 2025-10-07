import React from 'react'
import Card from 'react-bootstrap/Card'
import {ImPointRight} from 'react-icons/im'

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{textAlign: 'justify'}}>
            Hi Everyone, I am <span className="purple">Rehan Majid </span>
            from <span className="purple"> Bihar Sharif [Nalanda], Bihar, India.</span>
            <br />I am a Computer Science Engineering student with expertise in Machine Learning, Deep Learning, and Data Science.
            <br />
            <br />
            Apart from coding and machine learning, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Lawn Tennis (2022)
            </li>
            <li className="about-activity">
              <ImPointRight /> Participating in Hackathons and Coding Contests
            </li>
            <li className="about-activity">
              <ImPointRight /> Working on Computer Vision and NLP Projects
            </li>
          </ul>

          <p style={{marginBlockEnd: 0, color: 'rgb(155 126 172)'}}>
            "The world rewards you for value provided, not time spent."{' '}
          </p>
          <footer className="blockquote-footer">James clear</footer>
        </blockquote>
      </Card.Body>
    </Card>
  )
}

export default AboutCard
