import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useQuery, gql } from '@apollo/client';
import { PortableText } from '@portabletext/react';

const FORM_MESSAGE = gql`
query {
	allContact {
    messageSentTitle,
    messageSentRaw
  }
}
`

export default function Thankyou() {
  const { data, loading, error } = useQuery(FORM_MESSAGE);

  const navigate = useNavigate();

  if (loading) return <p style={{textAlign: 'center'}}>Loading...</p>
  if (error) return <p style={{textAlign: 'center'}}>Error</p>

    const message = data.allContact[0]

  return (
    <div className='thankyou-container'>
        <div className='thankyou-message'>
            <h1>{message.messageSentTitle}</h1>
            <PortableText value={message.messageSentRaw}/>
            <button className='main-button' onClick={() => navigate("/")}>Close</button>
        </div>
    </div>
  )
}
