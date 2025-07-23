import Hero from '@/components/about/hero'
import DevelopmentProperties from '@/components/development/development-properties'
import Header from '@/components/shared/header'
import React from 'react'

const DevelopmentPage = () => {
  return (
    <main className="min-h-screen container w-full mx-auto font-didot"> 
      <Header/>
      <Hero title="Development"/>
      <DevelopmentProperties/>
    </main>
  )
}

export default DevelopmentPage
