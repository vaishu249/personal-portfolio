import React from 'react'
import "../Header/Header.css"
const Header = () => {
  return (
    <>
        <div className='header-wrapper section' >
            <h3 className='section-heading'><i className='ri-shining-fill'> Let's Meet !</i></h3>
            <h1 className='section-title'>I , m Vaishnavi Gundgire <br/>Full Stack Developer<br/> React and Node.js Specialist .</h1>

            <div className='header-btns'>
                <button>
                    <span>My Works </span> 
                    <i className='ri-layout-grid-line'></i>
                </button>
                <button>
                    <span>Download CV </span> 
                    <i className='ri-download-line'></i>
                </button>
            </div>
        </div>
    </>
  )
}

export default Header
