import React from 'react'

function Contact() {
  return (
    <div className='contact'>
        <h1>Contact Pete</h1>
    <div className='leftSide'>

    </div>
    <div className='rightSide'></div>
    <form className='contactForm' method='POST'>
        <label htmlfor="name">First and Last Name</label>
        <input name="name" placeholder='First and Last Name' type='text' />
        <label htmlfor="email">Email</label>
        <input name="email" placeholder='Email Address' type='email' />
        <label htmlfor="message">Message</label>
        <textarea rows="6" name="message" placeholder='Message'>Enter Your Message</textarea>
        <button type="submit">Submit</button>

    </form>
    </div>
  )
}

export default Contact