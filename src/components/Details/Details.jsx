import React from 'react'
import './Details.scss'
export default function Details() {
    return (
        <div className="details-container">
            <div className="details">
                    <p>Associate Profile</p>
                    <p></p>
            </div>
            <div className="details">
                    <p>Verify Associate</p>
                    <p></p>
            </div>
            <div className="details">
                    <p>Associate Payments</p>
                    <p>1</p>
            </div>
            <div className="details selected-detail">
                    <p>Tickets</p>
                    <p>1</p>
            </div>
        </div>
    )
}
