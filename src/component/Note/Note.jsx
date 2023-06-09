import React from 'react'
import {MdDeleteForever} from 'react-icons/md'
import './note.css'

const Note = ({id, text, date ,handleDeleteNote}) => {
  return (

    <div className='note'>

        <span>{text}</span>
        <div className='note-footer'>
            <small>{date}</small>
            <MdDeleteForever 
            className="delete-icon" 
            size='1.3rem' 
            onClick={()=>handleDeleteNote(id)}/>
        </div>

    </div>
  
  )
}

export default Note
