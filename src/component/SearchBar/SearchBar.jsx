import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import './search.css'

const SearchBar = () => {
  return (
    <div className='search-container'>
        <AiOutlineSearch 
        className='search-icon' 
        size='1.3rem'/>

        <input type="text" placeholder='Type to search' />
    </div>
  )
}

export default SearchBar