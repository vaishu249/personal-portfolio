import React from 'react'
import "../Resume/Resume.css"
const Resume = () => {
  return (
    <div className='section resume-wrapper'>
      <h3 className='section-heading'><i className='ri-shining-fill'>Resume</i></h3>
      <h1 className='section-title'>Education and <br />Practical Experience</h1>
      <div className='education-wrapper'>
        <h1>Education</h1>
        <div className='Education'>
          <h2>Jan.2022-May.2025</h2>
          <h3>Kestone School of Engineering Pune</h3>
          <p>Bachelor of Engineering In Computer Science - CGPA : 9.18/10</p>
        </div>
        <div className='Education'>
          <h2>Jan.2019-May.2022</h2>
          <h3>Jaywantrao Sawant Polytechnic Hadapsar Pune</h3>
          <p>Diploma in Computer - Percentage : 86.78%</p>
        </div>
        <div className='Education'>
          <h2>Jan.2018-May.2019</h2>
          <h3>Sadhana Girls School Hadapsar Pune</h3>
          <p>10th Class : 82.83%</p>
        </div>
      </div>
    </div>
  )
}

export default Resume
