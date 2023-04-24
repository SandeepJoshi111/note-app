import React from 'react'
import Note from '../Note/Note'
import './notelist.css'
import AddNote from '../AddNote/AddNote'

const NotesList = ({notes, handleAddNote, handleDeleteNote}) => {
  return (
    <div className='notes-lists'>
      {notes.map((note)=> (
      <Note id={note.id}
      text={note.text}
      date = {note.date}
      handleDeleteNote={handleDeleteNote}
      />))}

    <AddNote 
    handleAddNote={handleAddNote}
    />
    </div>
  )
}

export default NotesList
