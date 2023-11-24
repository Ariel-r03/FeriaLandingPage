import React from 'react'

function NavRender({props}) {
  return (
    <div className='flex flex-col p-10'>
       <h2 className='font-black text-white text-[30px] mb-5 self-center'>{props.titulo}</h2>
       <img className='rounded-lg' src={props.imagen} alt="" /> 
    </div>
  )
}

export default NavRender
