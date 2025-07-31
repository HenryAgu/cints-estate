import localFont from 'next/font/local';
import React from 'react'

const HelveticaNeue = localFont({
  src: "../../app/fonts/HelveticaNeueThin.otf",
});


const Location = () => {
  return (
    <section className='mt-10'>
      <p className={`${HelveticaNeue.className} text-[#121212] font-semibold text-lg lg:text-[23px] leading-[140%]`}>Location</p>
      <div className="w-full h-[350px] lg:h-[816px] rounded-[20px] bg-black mt-5"/>
    </section>
  )
}

export default Location