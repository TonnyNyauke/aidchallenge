'use client'
import Link from 'next/link'
import React from 'react'

function CurrentlyReading() {
  return (
    <div className='border border-gray-300 rounded w-1/3 text-center flex justify-center items-center'>
      <Link href='/homepage/currentread'>
      Currently Reading
      </Link>
    </div>
  )
}

export default CurrentlyReading