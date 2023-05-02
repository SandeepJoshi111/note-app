import React, { useEffect, useState } from 'react'
import {nanoid} from 'nanoid';
import NotesList from './component/NoteList/NoteList';
import SearchBar from './component/SearchBar/SearchBar';
import Header from './component/Header/Header';


//To retrieve from local storage
const savedNotes = ()=>{
  let saved = localStorage.getItem('data');
  console.log(saved)

  if(saved)
  {
    return JSON.parse(localStorage.getItem('data'));
  }
  else{
    return [];
  }
}
const App = () => {
  const [notes,setNotes] = useState(savedNotes());

// To save data in local storage
useEffect(() =>{
  localStorage.setItem('data',JSON.stringify(notes))
},[notes]);

const[searchText,setSearchText]=  useState('');



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
      <Header/>
      <SearchBar handleSearchNote = {setSearchText}/>
      <NotesList 
      notes={notes.filter((note)=> 
        note.text.toLowerCase().includes(searchText.toLowerCase()))
      } 
      handleAddNote={addNote} 
      handleDeleteNote={deleteNote}/>
  
     </div>
    
  )
}

export default App

