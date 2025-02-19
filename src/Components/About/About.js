import React from 'react'
import "../About/About.css"
const About = () => {
  return (
    <section id='about'>
      <div className='section about-wrapper'>
        <h3 className='section-heading'><i className='ri-shining-fill'>About Me</i></h3>
        <h1 className='section-title'>Turning Complex <br />Problems Into Small Designs .</h1>
        <p className='aboutme'>
          I'm a dedicated and passionate full stack developer with a strong focus
          on creating efficient, scalable,
          and user-friendly web applications.
          With expertise in both front-end and back-end
          technologies, I enjoy solving complex problems
          and continuously learning new skills to stay
          up-to-date with the latest industry trends.
        </p>
        <div className='service-wraper'>
          <div className='service-card'>
            <h2>
              <i class="ri-java-fill"></i>
              <span>Java</span>
              <p>
                As a skilled Java developer, I have a strong foundation in 
                both object-oriented programming and software development,
                 enabling me to build scalable, efficient, and high-performance applications.
                  My expertise spans Core Java, Spring Boot, Hibernate, and RESTful APIs, 
                  allowing me to develop robust backend systems. 
              </p>
            </h2>
          </div>
          <div className='service-card'>
            <h2>
              <i className="fa-brands fa-python"></i>
              <span> Python</span>
              <p>
                I have extensive experience leveraging the versatility and power
                of Python to build a wide range of applications. My skills include
                writing clean, efficient code for automation, data analysis,
                web development, and software development. I am well-versed in
                Python libraries such as NumPy, Pandas, Matplotlib, and frameworks.
              </p>
            </h2>
          </div>
          <div className='service-card'>
            <h2>
              <i className="fa fa-code"></i>
              <span> Web Development</span>
              <p>
                As a skilled web developer, I have a strong foundation in
                both front-end and back-end development, enabling me to
                create dynamic, responsive, and user-friendly websites.
                My expertise spans HTML, CSS, JavaScript, and frameworks
                like React and Angular for crafting engaging user interfaces.
              </p>
            </h2>
          </div>
          <div className='service-card'>
            <h2>
              <i className="fa fa-database"></i>
              <span> Data Structure and Algorithm</span>
              <p>
                With a strong command of Data Structures and Algorithms,
                I excel at designing efficient, scalable solutions to complex
                problems. My expertise includes working with various data structures
                such as arrays, linked lists, stacks, queues, trees, graphs, and
                hashmaps, allowing me to implement optimal solutions for different
                scenarios.
              </p>
            </h2>
          </div>
          

        </div>

        <button>Download CV <i className='ri-download-line'></i></button>
      </div>
    </section>
  )
}

export default About
