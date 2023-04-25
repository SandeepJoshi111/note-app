import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import './search.css'

const SearchBar = ({handleSearchNote}) => {
  return (
    <div className='search-container'>
        <AiOutlineSearch 
        className='search-icon' 
        size='1.3rem'/>

        <input onChange={(event)=>
          handleSearchNote(event.target.value)} 
          type="text" 
          placeholder='Type to search' />
    </div>
  )
}

export default SearchBar