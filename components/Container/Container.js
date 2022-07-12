import React from 'react'
import Link from 'next/link'

export default function Container({children}) {
  return (
   <>
      <nav className='navbar navbar-light bg-primary'>
          <div className='container-fluid justify-content-center'>
              <Link href="/">
                  <a className='navbar-brand mx-4'>Acceuil</a>
              </Link>
              <Link href="/blog">
                  <a className='navbar-brand mx-4'>Blog</a>
              </Link>
              <Link href="/utilisateurs">
                  <a className='navbar-brand mx-4'>Liste</a>
              </Link>
          </div>
      </nav>
      {children}
   </>
  )
}
