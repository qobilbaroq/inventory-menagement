import Image from 'next/image'
import React from 'react'

export const Navbar = () => {
  return (
    <div className='flex flex-col gap-5 px-6 py-4 w-72 h-screen '>
      <Image
        className="dark:invert -ml-4"
        src="/personal_logo_main.svg"
        alt=" logomark"
        width={130}
        height={130}
        />
      <div className='flex flex-col gap-3'>
        <span className='font-semibold text-lg'>Home</span>
        <span className='font-semibold text-lg'>Product</span>
        <span className='font-semibold text-lg'>Categories</span>
      </div>
    </div>
  )
}
