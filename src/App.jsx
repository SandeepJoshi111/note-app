import React, { useState } from 'react'
import {nanoid} from 'nanoid';
import AddNote from './component/AddNote/AddNote';
import NotesList from './component/NoteList/NoteList';
import SearchBar from './component/SearchBar/SearchBar';


const App = () => {
  const [notes,setNotes] = useState([
    {
    id: nanoid(),
    text:"This is 1 note",
    date:"24/04/2023"
    },

    {
      id: nanoid(),
      text:"This is 2 note",
      date:"25/04/2023"
    },
    {
      id: nanoid(),
      text:"This is 3 note",
      date:"26/04/2023"
    },
    {
      id: nanoid(),
      text:"This is 4 note",
      date:"27/04/2023"
    }
]);

const addNote = (text) =>{
  const date = new Date();
  const newNote = {
      id: nanoid(),
      text:text,
      date:date.toLocaleDateString()
  }
  const newNotes = [...notes,newNote];
  setNotes(newNotes)

};


const deleteNote =(id)=>{
  const newNotes = notes.filter((note)=> note.id !=id);
  setNotes(newNotes);
};
  return (
    <div className='container'>
      <SearchBar/>
      <NotesList notes={notes} 
      handleAddNote={addNote} 
      handleDeleteNote={deleteNote}/>
  
    </div>
  )
}

export default App

