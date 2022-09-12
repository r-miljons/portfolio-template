import React, { useRef } from 'react'
import "./Spinner.css"
import { CSSTransition } from 'react-transition-group';


export default function Spinner({loading}) {
    const nodeRef = useRef(null);

  return (
    <CSSTransition
        in={loading}
        nodeRef={nodeRef}
        unmountOnExit
        timeout={500}
        classNames="loading"
    >
        <div className="loading-screen"
          ref={nodeRef}
        >
            <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
        </div>
    </CSSTransition>
  )
}
