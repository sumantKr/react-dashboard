import React from 'react'
import Details from '../Details/Details'
import Profile from '../Profile/Profile'
import './Sidebar.scss'
export default function Sidebar() {
  return (
    <div className='sidebar'>
    <Profile/>
    <Details/>
    </div>
  )
}
