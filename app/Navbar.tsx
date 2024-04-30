import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  return (
    <>
    <header className="text-black body-font bg-white bg-opacity-95 shadow-inner shadow-black sticky top-0 z-40">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <Image src={"https://th.bing.com/th/id/OIP.T9-phhhEgtOAjmtIAPBsMQHaJl?w=125&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"} width={40} height={30} alt='Sorry' style={{width:"auto", height:"auto"}}/>
      <span className="ml-3 text-xl">RecipeX</span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <Link href={'/'} className="mr-5 hover:text-gray-900 font-semibold">Home</Link>
      <Link href={'./Recipe'} className="mr-5 hover:text-gray-900 font-semibold">Recipes</Link>
      <Link href={'./about'} className="mr-5 hover:text-gray-900 font-semibold">About</Link>
      <Link href={'./help'} className="mr-5 hover:text-gray-900 font-semibold">Help</Link>
    </nav>
    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
  </div>
</header>
    </>
  )
}
