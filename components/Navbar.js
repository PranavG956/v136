import React from 'react'
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-green-800 text-white p-3">
        <div className="text-lg font-bold">
            SLinks
        </div>
        <ul className="flex gap-4">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li>
                <Link href="/github">
                    <div className="text-green-800 bg-white rounded-xl font-bold px-2 cursor-pointer hover:bg-black hover:text-white transition duration-400">GitHub</div>
                </Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar
