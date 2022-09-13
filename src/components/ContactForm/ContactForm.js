import React from 'react'
import sendIcon from "../../assets/send.svg"
import "./ContactForm.css";

export default function ContactForm({email}) {
  return (
    <form action={`https://formsubmit.co/${email}`} method="POST">
        <div className="form-section">
            <label htmlFor="name">Name</label><br/>
            <input type="text" id='name' name="name"></input>
        </div>
        <div className="form-section">
            <label htmlFor="email">Email</label><br/>
            <input type="email" id='email' name="email"></input>
        </div>
        <div className="form-section">
            <label htmlFor="message">Message</label><br/>
            <textarea id='message' rows="6" name="message"></textarea>
            <input type="hidden" name="_next" value={`${window.location.origin.toString()}/thankyou/`}></input>
        </div>
        <button className="submit-button" type='submit'>Send<img src={sendIcon}/></button>
    </form>
  )
}
