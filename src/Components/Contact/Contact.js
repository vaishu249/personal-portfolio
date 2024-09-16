import React from 'react'
import "../Contact/Contact.css"
const Contact = () => {
  return (
    <div className='contact-wrapper section'>
      <h3 className='section-heading'><i className='ri-shining-fill'> Contact</i></h3>
      <h1 className='section-title'>Let's Make <br />Awesome Together </h1>

      <form>
        <div className='input-wrapper'>
            <div className='input-container'>
                <input type='text' placeholder='Enter Name *'></input>
            </div>
            <div className='input-container'>
                <input type='text' placeholder='Enter Company Name *'></input>
            </div>
        </div>
        <div className='input-wrapper'>
            <div className='input-container'>
                <input type='email' placeholder='Enter Email *'></input>
            </div>
            <div className='input-container'>
                <input type='text' placeholder='Enter Phone Number *'></input>
            </div>
        </div>
        <textarea placeholder='Message'></textarea>
        <button>Submit</button>
      </form>

      <div className='contact-detail'>
        <div className='contact-card'>
            <h3>Location <span>Hadapsar</span></h3>
        </div>
        <div className='contact-card'>
            <h3>Phone <span><a href="tel:+918421488751">: +91 84214 88751</a>
            </span></h3>
        </div>
        <div className='contact-card'>
            <h3>Email <span><a href="vaishnavigundgire15@gmail.com">vaishnavigundgire15@gmail.com</a>
            </span></h3>
        </div>
      </div>
    </div>
  )
}

export default Contact
