import Header from '@/components/shared/header'
import Navbar from '@/components/shared/navbar'
import ShortletProperties from '@/components/shortlet/shortletProperties'
import React from 'react'

const ShortletPage = () => {
  return (
    <main className="min-h-screen container w-full mx-auto font-didot">
      <Header />
      <Navbar />
      <ShortletProperties/>
    </main>
  )
}

export default ShortletPage
