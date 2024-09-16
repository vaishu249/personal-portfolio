import React from 'react'
import "../Portfolio/Portfolio.css"
import portfolioImg from "../../assets/images/portfolio1.png";
const Portfolio = () => {
    return (
        <>
            <section id='portfolio'>
            <div className='portfolio-wrapper section'>
                <h3 className='section-heading'><i className='ri-shining-fill'>Portfolio</i></h3>
                <h1 className='section-title'>Check out my <br />Featured Projects</h1>
                <div className='portfolio-card'>
                    <div className='card'>
                        <img src={portfolioImg} />
                        <div className='card-tag'>
                            <span>Ilustration</span>
                            <span>Branding</span>
                        </div>
                    </div>
                    <div className='card'>
                        <img src={portfolioImg} />
                        <div className='card-tag'>
                            <span>Ilustration</span>
                            <span>Branding</span>
                        </div>
                    </div>
                    <div className='card'>
                        <img src={portfolioImg} />
                        <div className='card-tag'>
                            <span>Ilustration</span>
                            <span>Branding</span>
                        </div>
                    </div>
                    <div className='card'>
                        <img src={portfolioImg} />
                        <div className='card-tag'>
                            <span>Ilustration</span>
                            <span>Branding</span>
                        </div>
                    </div>
                </div>
            </div>
            </section>
        </>
    )
}

export default Portfolio
