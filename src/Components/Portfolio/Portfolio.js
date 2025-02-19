import React from 'react'
import "../Portfolio/Portfolio.css"
import portfolioImg from "../../assets/images/portfolio1.png";
import BookStore from "../../assets/images/BookStore.png";
import instagram from "../../assets/images/InstagramClone.png";
import tourism from "../../assets/images/tourism.png";
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
                                <span> React, HTML, CSS, JavaScript Developed a responsive restaurant website with
                                    interactive features using React. Implemented dynamic menu options, online reservations, and customer feedback
                                    sections. Ensured a seamless user experience with smooth animations and optimized loading times.</span>
                            </div>
                        </div>
                        <div className='card'>
                            <img src={BookStore} />
                            <div className='card-tag'>
                                <span>React Implemented functionalities such as book browsing, searching, pur
                                    chasing, and user authentication. Designed a user-friendly interface with a secure checkout process and real-time
                                    inventory management.</span>
                            </div>
                        </div>
                        <div className='card'>
                            <img src={instagram} />
                            <div className='card-tag'>
                                <span> Instagram Clone Using HTML and CSS The Instagram Clone project is a simplified recreation of the popular
                                    social media platform’s user interface, developed using only HTML and CSS. This project aims to mimic the core
                                    design elements of Instagram</span>
                            </div>
                        </div>
                        <div className='card'>
                            <img src={tourism} />
                            <div className='card-tag'>
                                <span>Creating a tourism website using HTML, CSS, and JavaScript
                                     involves designing an engaging and user-friendly platform to
                                      showcase travel destinations, experiences, and services. The website
                                      should be visually appealing, informative, and interactive to attract
                                      visitors.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Portfolio
