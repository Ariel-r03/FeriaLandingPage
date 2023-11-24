import React from 'react'
import {LogoBomberos,LogoUNI} from '../assets'

function NavBarPage() {
  return (
    <nav className='flex flex-row w-full justify-around items-center'>
      <div className='w-[150px] h-[150px] mt-[3rem] hover:cursor-pointer'>
        <img src={LogoUNI} alt="LogoUNI" />
      </div>

      <div className='text-[25px] font-black'>
        "Sistema de gestión organizacional para la  estación de bomberos Israel Lewites"
      </div>

      <div className='w-[150px] h-[150px] hover:cursor-pointer'>
        <img src={LogoBomberos} alt="" />
      </div>
    </nav>
  )
}

export default NavBarPage
