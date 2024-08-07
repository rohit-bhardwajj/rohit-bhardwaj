import React from 'react'
import styles from './ContactStyles.module.css';
const Contact = () => {
  return (
   <section id='contact' className={styles.container}>
        <h1 className='sectionTitle'>Contact</h1>
        <form action="https://formspree.io/f/xnqeedvz" method='post'>
          <div className='formGroup'>
            <label htmlFor="name" hidden>Name</label>
            <input type="name" name='name' placeholder='Name' id="name" required/>
          </div>
          <div className='formGroup'>
            <label htmlFor="email" hidden>Email</label>
            <input type="email" name='email' placeholder='Email' id="email" required/>
          </div>

          <div className='formGroup'>
            <label htmlFor="subject" hidden>Subject</label>
            <input type="text" name='subject' placeholder='Subject' id="subject" required/>
          </div>
         
          <div className='formGroup'>
            <label htmlFor="message" hidden>Message</label>
            <textarea name='message' placeholder='Message' id="message" required/>
          </div>

          <input className='hover btn' type="submit" value="submit"/>

        </form>
   </section>
  )
}

export default Contact