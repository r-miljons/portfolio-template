import React from 'react'
import ContactForm from '../components/ContactForm/ContactForm'
import emailIcon from "../assets/email.svg"
import { useQuery, gql } from '@apollo/client'
import { PortableText } from '@portabletext/react';
import SmallSpinner from '../components/Spinner/SmallSpinner'

const CONTACT_PAGE = gql`
query {
	allContact {
  	title,
    descriptionRaw,
    email
  }
}
`

export default function Contact() {
  const { data, loading, error } = useQuery(CONTACT_PAGE);

  if (loading) return <SmallSpinner/>
  if (error) return <p style={{textAlign: 'center'}}>Couldn't connect to server.</p>

  const contactData = data.allContact[0];

  return (
    <div className='contact-container' id="contact">
        <div className="contact-flex">
            <div className="contact-text">
                <p className='section-name white'>Contact</p>
                <h2>{contactData.title}</h2>
                <PortableText value={contactData.descriptionRaw}/>
                <div className="contact-info"><img className="email-icon" src={emailIcon} alt="email icon"/><p>{contactData.email}</p></div>
            </div>
            <ContactForm />
        </div>
    </div>
  )
}
