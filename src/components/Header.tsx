'use client'

import Link from 'next/link'
import { useState } from 'react'

const navigation = [
  { name: 'Home', href: '/' },
  {
    name: 'Services',
    href: '/services',
    children: [
      { name: 'Hair Renewal', href: '/services/hair-renewal' },
      { name: 'Wigs & Cranial Prosthesis', href: '/services/wigs' },
      { name: 'Hair Pieces', href: '/services/hair-pieces' },
      { name: 'Scalp Cleanse', href: '/services/scalp-cleanse' },
    ],
  },
  { name: 'Alma TED', href: '/alma-ted' },
  { name: 'About', href: '/about' },
  { name: 'FAQs', href: '/faqs' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-primary text-white sticky top-0 z-50 shadow-lg">
      <nav className="navbar max-w-7xl mx-auto px-4">
        <div className="navbar-start">
          <div className="dropdown">
            <label
              tabIndex={0}
              className="btn btn-ghost lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>
            {mobileMenuOpen && (
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-primary rounded-box w-52"
              >
                {navigation.map((item) => (
                  <li key={item.name}>
                    {item.children ? (
                      <details>
                        <summary>{item.name}</summary>
                        <ul className="bg-primary">
                          {item.children.map((child) => (
                            <li key={child.name}>
                              <Link href={child.href} onClick={() => setMobileMenuOpen(false)}>
                                {child.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </details>
                    ) : (
                      <Link href={item.href} onClick={() => setMobileMenuOpen(false)}>
                        {item.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <Link href="/" className="text-xl font-bold tracking-wide">
            RENEW
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navigation.map((item) => (
              <li key={item.name}>
                {item.children ? (
                  <details>
                    <summary className="hover:bg-primary-focus">{item.name}</summary>
                    <ul className="bg-primary z-50 w-48">
                      {item.children.map((child) => (
                        <li key={child.name}>
                          <Link href={child.href} className="hover:bg-primary-focus">
                            {child.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </details>
                ) : (
                  <Link href={item.href} className="hover:bg-primary-focus">
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end">
          <Link href="/contact" className="btn btn-accent text-white">
            Book Consultation
          </Link>
        </div>
      </nav>
    </header>
  )
}
