import React, { ChangeEvent, useState } from 'react'


function grades() {
    const [grade, setGrade] = useState('');
    function handleGradeSet(event: ChangeEvent<HTMLSelectElement>){
        setGrade(event.target.value)
    }

  return (
    <div>
        <select className='border border-gray-500 px-4 py-2 rounded-sm' onChange={handleGradeSet}>
          <option>Choose Grade</option>
          <option value='one'>Grade 1</option>
          <option value='two'>Grade 2</option>
          <option value='three'>Grade 3</option>
          <option value='four'>Grade 4</option>
          <option>Grade 5</option>
          <option>Grade 6</option>
          <option>Grade 7</option>
          <option>Grade 8</option>
          <option>Grade 9</option>
        </select>
    </div>
  )
}

export default grades