"use client"

import React, { ChangeEvent, useState } from 'react'

interface GradeProps {
  onSelect: (grade: number | null ) => void
}

function Grades({onSelect}: GradeProps) {
    const [grade, setGrade] = useState<number | string | null>(null);
    function handleGradeSet(event: ChangeEvent<HTMLSelectElement>){
        const value = event.target.value;
        if (value === "Choose Your Year"){
          setGrade(null);
          onSelect(null);
        }else {
          //const formYear = parseInt(value.replace("Form ", ""), 10)
          setGrade(value as unknown as number);
          onSelect(value as unknown as number)
        }
    }

  return (
    <div>
        <select className='border border-gray-500 px-4 py-2 rounded-sm' onChange={handleGradeSet}>
          <option value="Choose Your Year">All Forms</option>
          <option value='Form 1'>Form 1</option>
          <option value='Form 2'>Form 2</option>
          <option value='Form 3'>Form 3</option>
          <option value='Form 4'>Form 4</option>
        </select>
    </div>
  )
}

export default Grades