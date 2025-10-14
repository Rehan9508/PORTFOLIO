import React from 'react'
import Typewriter from 'typewriter-effect'

function Type() {
  return (
    <div className="text-rainbow">
      <Typewriter
        options={{
          strings: [
            'Data Scientist Eng',
            'Machine Learning Engineer',
            'Data Analyst',
            'Python Developer',
            'AI Enthusiast',
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
        }}
      />
    </div>
  )
}

export default Type
