import React, { useState } from 'react'
import '../Note/note.css'
import './addnote.css'

const AddNote = ({handleAddNote}) => {

    const [noteText,setNoteText] = useState('');

    const characterLimit = 500;

    const handleChange = (event) =>{
        if(characterLimit - event.target.value.length >=0)
        {
            setNoteText(event.target.value);
        }
        else{
            alert("Too many character");
        }
        
    };


    const handleSaveClick =()=> {
        if(noteText.trim().length>0) //trim removes white space from ahead and back of a text
        {
            handleAddNote(noteText);
            setNoteText('');
        } 
        
    }
  return (
    <div className='note new-note'>
        <textarea 
        cols="10"
        rows="8" 
        value={noteText}
        placeholder='Type to add a note'
        onChange={handleChange}
        ></textarea>

        <div className='note-footer'>
            <small>{characterLimit-noteText.length} Remaining</small>
            <button className='btn' onClick={handleSaveClick}>Save</button>
        </div>
    </div>
  )
}

export default AddNote

