'use client'
import { collection, doc, getDoc } from "firebase/firestore";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";
import db from "./dbconnect";

interface StudentLogin {
  admissionNumber: number | string,
  password: string
}

export default function Home() {
  const router = useRouter();
  const [login, setLogin] = useState<StudentLogin>({
    admissionNumber : '',
    password : ''
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // const {admissionNumber, password} = login

    // const student = collection(db, "Students");
    // const studentRef = doc(student, admissionNumber);
    // const snapshot = await getDoc(studentRef)

    // if (!snapshot.exists){
    //   alert("Student details is not in our database, please consult the library Administration for assistance")
    // }


    router.push('/homepage');
  }
  
  function handleLoginInput(event: ChangeEvent<HTMLInputElement>) {
    const {name, value} = event.target;

    setLogin({...login, [name]: value})
  }

  return (
    <main className="h-screen flex justify-center items-center p-6 bg-gray-300">
      <div className="justify-center items-center border rounded-md shadow-md sm:w-3/6">
        <form className="px-8 pt-6 pb-8 mb-4 bg-gray-200 rounded" onSubmit={handleSubmit}>
          <input type="text" placeholder="Admission number..."
          name = 'admissionNumber' value={login.admissionNumber} onChange={handleLoginInput}
          className="w-full p-4 my-2 text-sm leading-tight border rounded shadow appearance-none
          focus:outline-blue-500 focus:shadow-outline"/>
          <input type="password" placeholder="Password..." 
          name="password" value={login.password} onChange={handleLoginInput}
          className="w-full p-4 my-2 text-sm leading-tight border rounded shadow appearance-none
          focus:outline-blue-500 focus:shadow-outline"/>
          
            <button type="submit"
            className="w-full my-2 px-4 py-2 font-bold text-white bg-blue-500 rounded-md 
            hover:bg-blue-700 focus:outline-none focus:shadow-outline"
            >Login</button>
            <p className="flex justify-center">Forgot password?<Link href='/resetpassword' className="text underline">Reset</Link></p>
            <p className="flex justify-center">Don&apos;t have password?<Link href='#' className="text underline">Get password</Link></p>
        </form>
      </div>
    </main>
  );
}
