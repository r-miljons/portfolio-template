import React from 'react'
import ContactForm from '../components/ContactForm/ContactForm'
import emailIcon from "../assets/email.svg"

export default function Contact() {
  return (
    <div className='contact-container'>
        <div className="contact-flex">
            <div className="contact-text">
                <h1>Got a placeholder to solve?</h1>
                <p>Well this placeholder is right for this place, send this placeholder a message and this placeholder will make your place hold.</p>
                <div className="contact-info"><img className="email-icon" src={emailIcon} alt="email icon"/><p>place@holder.com</p></div>
            </div>
            <ContactForm />
        </div>
    </div>
  )
}
