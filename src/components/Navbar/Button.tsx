import React from 'react'

function Button(props) {
  return (
    <div className='allButons' >
        <button>{props.name}</button>
    </div>
  )
}

export default Button