import React from 'react'
import "../About/About.css"
const About = () => {
  return (
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
            <i className='ri-code-box-fill'> </i>
            <span> Web Development</span>
            <p>
              I'm a dedicated and passionate full stack developer with a strong focus
              on creating efficient, scalable,
              and user-friendly web applications.
            </p>
          </h2>
        </div>
        <div className='service-card'>
          <h2>
            <i className='ri-code-box-fill'> </i>
            <span> Web Development</span>
            <p>
              I'm a dedicated and passionate full stack developer with a strong focus
              on creating efficient, scalable,
              and user-friendly web applications.
            </p>
          </h2>
        </div>
        <div className='service-card'>
          <h2>
            <i className='ri-code-box-fill'> </i>
            <span> Web Development</span>
            <p>
              I'm a dedicated and passionate full stack developer with a strong focus
              on creating efficient, scalable,
              and user-friendly web applications.
            </p>
          </h2>
        </div>
        <div className='service-card'>
          <h2>
            <i className='ri-code-box-fill'> </i>
            <span> Web Development</span>
            <p>
              I'm a dedicated and passionate full stack developer with a strong focus
              on creating efficient, scalable,
              and user-friendly web applications.
            </p>
          </h2>
        </div>
      </div>
      
      <button>Download CV <i className='ri-download-line'></i></button>
    </div>
  )
}

export default About
