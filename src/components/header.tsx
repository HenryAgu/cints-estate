import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <header className='w-full bg-[#354737] border-b-5 border-[#A78F6B] flex items-center justify-center p-4'>
        <Image src="/images/Logo.svg" alt='Logo' width={104} height={79} className='w-[104px] h-[79px]'/>
    </header>
  )
}

export default Header