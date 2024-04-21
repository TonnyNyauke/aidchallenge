'use client'

import React from 'react'
import Sidebar from './Sidebar'
import CurrentlyReading from './CurrentlyReading'
import AddedBooks from './AddedBooks'
import BrowseBooks from './BrowseBooks'

function homepage() {
  return (
    <div className='flex mt-6'>
      <div className='w-1/4 border-r-2 border-black items-center text-center'>
        <Sidebar/>
      </div>
      <div className='w-3/4 flex flex-row justify-between m-4 p-4' >
      <BrowseBooks />
      <AddedBooks />
      <CurrentlyReading />
    </div>
    </div>
  )
}

export default homepage

