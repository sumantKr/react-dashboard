import React from 'react'
import './Ticket.scss'
import { AiFillCaretDown } from 'react-icons/ai'
export default function Ticket({statusIs}) {
    return (
        <div className='ticket'>
            <div className="sub-and-details">
                <p>12 Jul 2021</p>
                <div>
                    <span>Subject:</span>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <div>
                    <span>Details:</span>
                    <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                </div>
            </div>
            <div className="ticket-details">
                <div>
                    <span>Ticket ID:</span>
                    <p>123466</p>
                </div>
                <div>
                    <span>used ID:</span>
                    <p>765434</p>
                </div>
                <div>
                    <span>User Name:</span>
                    <p>Dummy User</p>
                </div>
                <div>
                    <span>Attachments:</span>
                    <p></p>
                </div>

            </div>
            <div className="buttons">
                <button className='deal'>
                    <div>
                        View Deal
                    </div>
                    <AiFillCaretDown />
                </button>
                <div className='open-close'>
                    <button className={`${statusIs}`}>{statusIs}</button>
                    <p></p>
                </div>
            </div>
        </div>
    )
}
