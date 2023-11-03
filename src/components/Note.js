import React from 'react'
import {MdDeleteForever} from 'react-icons/md'
import './Note.css'

export default function Note() {
  return (
    <div className='note'>
      <span>This is a Note</span>

      <div className="note-footer">
            <small>03/11/2023</small>
            <MdDeleteForever className='delete-icon'/>
      </div>
    </div>
  )
}
