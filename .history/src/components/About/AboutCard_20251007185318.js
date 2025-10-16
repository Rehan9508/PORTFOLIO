import React from 'react'
import Card from 'react-bootstrap/Card'
import {ImPointRight} from 'react-icons/im'

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{textAlign: 'justify', color: '#4169E1'}}>
            I am Final year <span className="purple">B.Tech Computer Science and Engineering Student</span>. I have experience in extracting, cleaning, and analyzing complex datasets to deliver insights that drive business strategies. Skilled in <span className="purple">SQL, Python, Excel, and Tableau</span>. Proficient in using tools like <span className="purple">NumPy, Pandas, and Matplotlib/Seaborn</span> for data manipulation and visualization. Proven ability to collaborate with cross-functional teams, build automated reports, and present findings in clear, actionable formats to support data-driven decision-making.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  )
}

export default AboutCard
