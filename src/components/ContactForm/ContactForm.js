import React from 'react'
import sendIcon from "../../assets/send.svg"
import "./ContactForm.css";

export default function ContactForm() {
  return (
    <form>
        <div className="form-section">
            <label htmlFor="name">Name</label><br/>
            <input type="text" id='name'></input>
        </div>
        <div className="form-section">
            <label htmlFor="email">Email</label><br/>
            <input type="email" id='email'></input>
        </div>
        <div className="form-section">
            <label htmlFor="message">Message</label><br/>
            <textarea id='message' rows="6"></textarea>
        </div>
        <button className="submit-button">Send<img src={sendIcon}/></button>
    </form>
  )
}
