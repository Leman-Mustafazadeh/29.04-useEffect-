import React from 'react'

const Logout = ({setisLogged,isLogged}) => {
  return (
      <button  onClick={()=>setisLogged(false)} className='btn btn-danger p-2'>Log out</button>
  )
}

export default Logout
