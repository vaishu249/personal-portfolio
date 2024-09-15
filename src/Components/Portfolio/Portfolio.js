import React from 'react'
import "../Portfolio/Portfolio.css"
import portfolioImg from "../../assets/images/portfolio1.png";
import sampleImg from "../../assets/images/profile.png"
const Portfolio = () => {
    return (
        <>
            <div className='portfolio-wrapper section'>
                <h3 className='section-heading'><i className='ri-shining-fill'>Portfolio</i></h3>
                <h1>Check out my <br />Featured Projects</h1>
                <div className='portfolio-card'>
                    <div className='card'>
                        <img src={portfolioImg} alt='Portfolio-img'/>
                        <div className='card-tag'>
                            <span>Ilustration</span>
                            <span>Branding</span>
                        </div>
                    </div>
                    <div className='card'>
                        <img src={portfolioImg} alt='Portfolio-img'/>
                        <div className='card-tag'>
                            <span>Ilustration</span>
                            <span>Branding</span>
                        </div>
                    </div>
                    <div className='card'>
                        <img src={portfolioImg} alt='Portfolio-img'/>
                        <div className='card-tag'>
                            <span>Ilustration</span>
                            <span>Branding</span>
                        </div>
                    </div>
                    <div className='card'>
                        <img src={portfolioImg} alt='Portfolio-img'/>
                        <div className='card-tag'>
                            <span>Ilustration</span>
                            <span>Branding</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Portfolio
