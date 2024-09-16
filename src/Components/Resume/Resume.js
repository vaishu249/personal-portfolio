import React from 'react'
import "../Resume/Resume.css"
const Resume = () => {

  const skills = [
    { name: "Data Structures & Algorithms", percentage: 60 },
    { name: "React & Node.js", percentage: 60 },
    { name: "HTML, CSS, JavaScript", percentage: 90 },
    { name: "Python", percentage: 80 },
  ];
  
  return (
    <section id='resume'>
      <div className='section resume-wrapper'>
      <h3 className='section-heading'><i className='ri-shining-fill'>Resume</i></h3>
      <h1 className='section-title'>Education and <br />Practical Experience</h1>
      <div className='education-wrapper'>
        <h1>Education</h1>

        <div className='Education'>
          <h2>Jan.2022-May.2025</h2>
          <h3>Kestone School of Engineering Pune</h3>
          <p>BE - CGPA : 9.18/10</p>
        </div>
        <div className='Education'>
          <h2>Jan.2019-May.2022</h2>
          <h3>Jaywantrao Sawant Polytechnic Hadapsar Pune</h3>
          <p>Diploma (Computer) : 86.78%</p>
        </div>
        <div className='Education'>
          <h2>Jan.2018-May.2019</h2>
          <h3>Sadhana Girls School Hadapsar Pune</h3>
          <p>10th Class : 82.83%</p>
        </div>
      </div>

      <div className='education-wrapper'>
        <h1>Projects</h1>

        <div className='Education'>
          <h2>2024</h2>
          <h3>Restaurant Website Design using React Js</h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s, when an Lorem Ipsum is simply dummy text of 
            the printing and typesetting industry. Lorem Ipsum has 
            been the industry's standard dummy text ever since the 1500s, 
            when an
          </p>
        </div>
        <div className='Education'>
          <h2>2024</h2>
          <h3>Restaurant Website Design using React Js</h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s, when an Lorem Ipsum is simply dummy text of 
            the printing and typesetting industry. Lorem Ipsum has 
            been the industry's standard dummy text ever since the 1500s, 
            when an
          </p>
        </div>
      </div>

      <div className="skills-container">
      <h1>My Skills</h1>
      {skills.map((skill, index) => (
        <div key={index} className="skill">
          <span className="skill-name">{skill.name}</span>
          <div className="skill-bar">
            <div
              className="skill-percentage"
              style={{ width: `${skill.percentage}%` }}
            >
              {skill.percentage}%
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
    </section>
  )
}

export default Resume
