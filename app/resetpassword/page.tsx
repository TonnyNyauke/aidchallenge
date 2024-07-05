'use client'

import { collection, doc, getDoc, query, where } from 'firebase/firestore';
import React, { ChangeEvent, FormEvent, useState } from 'react'
import db from '../dbconnect';

interface Student {
    admissionNumber: string
}


function Page() {
    const [category, setCategory] = useState<Student>({
        admissionNumber: ''
    });


    function handleAdmissionNumberInput(event: ChangeEvent<HTMLInputElement>) {
        const {name, value} = event.target
        setCategory({...category, [name]: value})

    }

    async function submitAdmissionNumber(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const {admissionNumber} = category

        console.log(admissionNumber)

        const admNum = collection(db, "Students");
        const admNumRef = doc(admNum, admissionNumber);
        const snapshot = await getDoc(admNumRef);

        if (!snapshot.exists){
            alert("Student ID does not exist")
        }
        const studentData = snapshot.data() as Student;

        if (studentData.admissionNumber === admissionNumber){
            alert("Password reset")
        }
    }

  return (
    <div>
        <form className='flex flex-col justify-center items-center m-6 gap-3 p-2' onSubmit={submitAdmissionNumber}>
            <input type='text' placeholder='Enter your admission number...'
            className='border border-gray-300 rounded-sm w-96 px-3 py-2' name='admissionNumber'
            value={category.admissionNumber} onChange={handleAdmissionNumberInput}
            />
            <button className="w-96 my-2 px-4 py-2 font-bold text-white bg-blue-500 rounded-md 
             hover:bg-blue-700 focus:outline-none focus:shadow-outline">Get Password</button>
        </form>

    </div>
  )
}

export default Page


