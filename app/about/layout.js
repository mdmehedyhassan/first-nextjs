import Link from 'next/link'
import React from 'react'

export const metadata = {
  title: "About",
  description: "about description",
};

export default function AboutLayout({ children }) {
  return (
    <div>
        <nav>
          <ul className="flex gap-6">
            <li><Link href='/about/mission'>Mission</Link></li>
            <li><Link href='/about/vision'>Vision</Link></li>
            <li><Link href='/about/testing'>Testing</Link></li>
          </ul>
        </nav>
        <div style={{borderBottom: '1px solid black', marginBottom: 10}}></div>
        { children }
    </div>
  )
}
