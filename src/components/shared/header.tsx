import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <header className='w-full bg-brand-primary-500 border-b-5 border-[#A78F6B] flex items-center justify-center p-4'>
        <Image src="/images/Logo.svg" alt='Logo' width={104} height={79} className='lg:w-[104px] lg:h-[79px] w-16 h-12'/>
    </header>
  )
}

export default Header