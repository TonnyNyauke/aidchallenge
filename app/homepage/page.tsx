

import React from 'react'
import AddedBooks from './AddedBooks'
import Link from 'next/link'
import Profile from './profile'

function homepage() {
  return (
    <div className='flex mt-6 '>
      <div className='w-1/4 border-r-2 border-black items-center text-center'>
        <Profile />
      </div>
      <div className='w-3/4 flex flex-row justify-between m-4 p-4' >
      <Link href='/homepage/browsebooks'
      className='border border-gray-300 rounded m-2 w-1/3 text-center flex justify-center items-center'
      >Browse books</Link>
      <Link href='/homepage/readinglist'
      className='border border-gray-300 rounded m-2 w-1/3 text-center flex justify-center items-center'
      >Currently Reading</Link>
      <AddedBooks />
    </div>
    </div>
  )
}

export default homepage

