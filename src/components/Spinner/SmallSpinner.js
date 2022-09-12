import React from 'react'
import "./Spinner.css"

export default function SmallSpinner() {
  return (
    <div className="small-spinner-container">
        <div className="lds-ellipsis small"><div></div><div></div><div></div><div></div></div>
    </div>
  )
}
