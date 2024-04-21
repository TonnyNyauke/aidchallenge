'use client'
import Link from 'next/link'
import React from 'react'

function BrowseBooks() {
  return (
    <div className='border border-gray-300 rounded w-1/3 text-center flex justify-center items-center'>
      <Link href='/homepage/browsebooks'>Browse books</Link>
    </div>
  )
}

export default BrowseBooks