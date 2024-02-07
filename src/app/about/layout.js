import Link from 'next/link'
import React from 'react'
import './about.css'

export default function layout({ children }) {
  return (
    <div>
      <ul className='about-menu'>
        <li>
          <h4>About Navbar</h4>
        </li>
        <li>
          <Link href='/about'>Main About</Link>
        </li>
        <li>
          <Link href='/about/aboutcollege'>College About</Link>
        </li>
        <li>
          <Link href='/about/aboutstudent'>Student About</Link>
        </li>
      </ul>
      {children}
    </div>
  )
}
