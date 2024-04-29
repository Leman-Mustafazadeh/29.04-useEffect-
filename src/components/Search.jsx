import React from 'react'


const Search = ({setSearchProduct}) => {
   
 
  return (
    <div className='container'>
      <input type="text" placeholder='search...'  onChange={(e)=>{setSearchProduct(e.target.value);}}/>
    </div>
  )
}

export default Search
