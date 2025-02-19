import React from 'react'
import "../Resume/Resume.css"
const Resume = () => {

  const skills = [
    { name: "Python", percentage: 80 },
    { name: "Java", percentage: 90 },
    { name: "Data Structures & Algorithms", percentage: 60 },
    { name: "React & Node.js", percentage: 80 },
    { name: "HTML, CSS, JavaScript", percentage: 90 },
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
            <h3>Jaywantrao Sawant Polytechnic Pune</h3>
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
            <p>In this project, I developed a dynamic and responsive restaurant
              website using React JS. The site features a clean, modern design
              tailored to enhance user experience and streamline navigation.

            </p>
          </div>
          <div className='Education'>
            <h2>2024</h2>
            <h3>Online Book Store Application using React JS </h3>
            <p>React Implemented functionalities such as book browsing, searching, pur
              chasing, and user authentication. Designed a user-friendly interface with a secure checkout process and real-time
              inventory management.
            </p>
          </div>
          <div className='Education'>
            <h2>2023</h2>
            <h3>Tourisim Website using HTML, CSS, JavaScript </h3>
            <p>Creating a tourism website using HTML, CSS, and JavaScript
              involves designing an engaging and user-friendly platform to
              showcase travel destinations, experiences, and services. The website
              should be visually appealing, informative, and interactive to attract
              visitors.
            </p>
          </div>
          <div className='Education'>
            <h2>2023</h2>
            <h3>Instagram Clone using HTML, CSS</h3>
            <p>Instagram Clone Using HTML and CSS The Instagram Clone project is a simplified recreation of the popular
              social media platform’s user interface, developed using only HTML and CSS. This project aims to mimic the core
              design elements of Instagram
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
