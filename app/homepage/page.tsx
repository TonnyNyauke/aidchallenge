

import React from 'react'
import AddedBooks from './AddedBooks'
import Link from 'next/link'
import Profile from './profile'

function homepage() {
  return (
    <div className='flex mt-6 flex-col sm:flex-row'>
      <div className='w-full sm:w-1/4 sm:border-r-2 border-black items-center text-center'>
        <Profile />
      </div>
      <div className='sm:w-3/4 flex flex-col items-center sm:flex-row sm:justify-between m-4 sm:p-4' >
        <Link href='/homepage/browsebooks'
        className='border border-gray-300 rounded m-2 sm:w-1/3 text-center flex justify-center items-center
        h-36 w-40'
        >Browse books</Link>
        <Link href='/homepage/readinglist'
        className='border border-gray-300 rounded m-2 sm:w-1/3 text-center flex justify-center items-center
        h-36 w-40'
        >Currently Reading</Link>
        <AddedBooks />
    </div>
    </div>
  )
}

export default homepage

