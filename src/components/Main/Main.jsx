import React from 'react'
import './Main.scss'
import { IoPaperPlaneOutline } from 'react-icons/io5'
import { BsSortDown } from 'react-icons/bs'
import Ticket from '../Ticket/Ticket'

const ticketData = [
  { id: 1, statusIs: 'open' },
  { id: 2, statusIs: 'closed' },
  { id: 3, statusIs: 'open' },
  { id: 4, statusIs: 'closed' },
  { id: 5, statusIs: 'open' },
]
export default function Main() {
  return (
    <div className='main'>
      <div className="two-btns">
        <button>
          <IoPaperPlaneOutline />
          <p>
            Send RFQ
          </p>
        </button>
        <button>
          <IoPaperPlaneOutline />
          <p>Send Email</p>
        </button>
      </div>
      <div className="ticket-option">
        <div>Selling Tickets</div>
        <div className='selected-ticket'>Buying Tickets</div>
      </div>
      <div className="sorting-container">
        <div className='sorting'>
          <BsSortDown />
          <p>Sort By</p>
          <select  id="">
          <option value="Date Added">Date Added</option>
          <option value="Date Added">Name</option>
          <option value="Date Added">Status</option>
          </select>
        </div>

      </div>
      <div className="ticket-container">
        {
          ticketData.map(({ id, statusIs }) => {
            return <Ticket key={id} statusIs={statusIs} />
          })
        }

      </div>
    </div>
  )
}
