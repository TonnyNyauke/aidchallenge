import React from 'react'

function categories() {
  return (
    <div>
        <select className='border border-gray-500 px-4 py-2 rounded-sm'>
          <option>All books</option>
          <option>Science</option>
          <option>English</option>
          <option>Kiswahili</option>
          <option>Chemistry</option>
          <option>Physics</option>
          <option>Geography</option>
          <option>History</option>
          <option>Biology</option>
          <option>CRE</option>
        </select>
    </div>
  )
}

export default categories