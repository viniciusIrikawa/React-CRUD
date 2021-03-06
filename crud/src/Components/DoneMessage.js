import React, { useEffect, useState } from 'react'
import './DoneMessage.css'

export const DoneMessage = () => {
    return (
        <div className="toast show " role="alert" aria-live="assertive" aria-atomic="true" >
            <div className="toast-header success">
                <strong className="me-auto"> Done! </strong>
                <button type="button" className="btn-close ms-2 mb-1" data-bs-dismiss="toast" aria-label="Close">
                    <span aria-hidden="true"></span>
                </button>
            </div>
        </div>
    )
}
