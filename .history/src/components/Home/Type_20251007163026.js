import React from 'react'
import Typewriter from 'typewriter-effect'

function Type() {
  return (
    <div className="text-rainbow">
      <Typewriter
        options={{
          strings: [
            'Developer',
            'Software Engineer',
            'Data Scientist Engineer',
            'Open Source Contributor',
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
